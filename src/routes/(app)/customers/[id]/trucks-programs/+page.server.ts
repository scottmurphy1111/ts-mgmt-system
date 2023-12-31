import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms/server';

import { truckInfoSchema } from '../../customer.schema';

import type { PageServerLoad } from './$types';

import { client } from '$lib/server/prisma';
import { convertToIso } from '$lib/utils/formatters';
// import type { TrucksWithProgramsEnrolled } from '$lib/types/truck.types';
// export const prerender = true;
export const prerender = false;
export const load: PageServerLoad = async (event) => {
	// const getPrograms = async (trucks: TrucksWithProgramsEnrolled[]) => {
	// 	// return trucks.map(async (truck) => {
	// 	// 	const res = await event.fetch(`/api/trucks/${truck.id}/programs`);
	// 	// 	const data = await res.json();
	// 	// 	console.log('data', data);
	// 	// 	return data;
	// 	// });
	// };
	const getCustomerTrucks = async () => {
		const trucks = await client.truck.findMany({
			where: {
				currentCustomerId: event.params.id
			},
			include: {
				programsEnrolled: {
					include: {
						program: true
					}
				}
			}
		});

		// console.log('trucks', trucks);

		return trucks;
	};

	const form = await superValidate(event, truckInfoSchema);

	return {
		form,
		trucks: await getCustomerTrucks()
	};
};

export const actions: Actions = {
	// updatePersonalInfo: async (event) => {
	// 	const form = await superValidate(event, customerPersonalInfoSchema);

	// 	if (!form.valid) {
	// 		return message(form, 'Customer Data is Invalid, Try Again!');
	// 	}

	// 	try {
	// 		await client.customer.update({
	// 			where: {
	// 				id: event.params.id
	// 			},
	// 			data: {
	// 				...form.data
	// 			}
	// 		});
	// 	} catch (e) {
	// 		if (e instanceof Prisma.PrismaClientKnownRequestError) {
	// 			return message(form, 'Internal Server Error');
	// 		}
	// 	}

	// 	return {
	// 		form
	// 	};
	// }
	updateTruckInfo: async (event) => {
		// console.log('updateTruckInfo', event);
		const form = await superValidate(event, truckInfoSchema);

		if (!form.valid) {
			return message(form, 'Truck Data is Invalid, Try Again!');
		}

		try {
			await client.truck.update({
				where: {
					id: form.data.id
				},
				data: {
					...form.data
				}
			});
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return message(form, 'Internal Server Error');
			}
		}

		return {
			form
		};
	},
	updateProgram: async ({ request }) => {
		console.log('updateProgram');
		const formData = await request.formData();
		const id = formData.get('id')?.toString();
		const startDate = formData.get('startDate')?.toString();
		const endDate = formData.get('endDate')?.toString();
		const price = formData.get('price')?.toString();

		console.log('startDate', startDate);
		console.log('endDate', endDate);
		console.log('price', price);

		try {
			await client.truckProgramsEnrolled.update({
				where: {
					id: id
				},
				data: {
					startDate: convertToIso(startDate),
					endDate: convertToIso(endDate),
					price: price
				}
			});
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				console.error(e);
			}
		}
	},

	removeProgram: async ({ request }) => {
		// const form = await superValidate(event, truckInfoSchema);
		const formData = await request.formData();
		const id = formData.get('id')?.toString();
		const truckId = formData.get('truckId')?.toString();

		const truck = await client.truck.findUnique({
			where: {
				id: truckId
			},
			select: {
				programsEnrolled: true
			}
		});
		console.log('formData', formData);

		// if (!form.valid) {
		// 	return message(form, 'Truck Data is Invalid, Try Again!');
		// }

		console.log('removeProgram', id, truck);

		try {
			await client.truck.update({
				where: {
					id: truckId
				},
				data: {
					programsEnrolled: {
						set: truck?.programsEnrolled.filter((program) => program.id !== id)
					}
				}
			});
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				console.error(e);
				// return message(form, 'Internal Server Error');
			}
		}

		// return {
		// 	form
		// };
	}
};
