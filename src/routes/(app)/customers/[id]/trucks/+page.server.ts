import { client } from '$lib/server/prisma';
import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms/server';
import { truckInfoSchema } from '../../customer.schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const getCustomerTrucks = async () => {
		const trucks = await client.truck.findMany({
			where: {
				currentCustomerId: event.params.id
			}
		});

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
	}
};
