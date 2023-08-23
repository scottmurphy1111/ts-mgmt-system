import { client } from '$lib/server/prisma';
import { message, superValidate } from 'sveltekit-superforms/server';
import { customerPersonalInfoSchema, truckInfoSchema } from '../customer.schema';
import type { Actions, PageServerLoad } from './$types';
import { Prisma } from '@prisma/client';

export const load: PageServerLoad = async (event) => {
	const getCustomerWithTrucks = async () => {
		const customer = await client.customer.findUnique({
			where: {
				id: event.params.id
			},
			include: {
				trucks: true
			}
		});

		return customer;
	};

	const form = await superValidate(event, customerPersonalInfoSchema);

	return {
		form,
		customer: await getCustomerWithTrucks()
	};
};

export const actions: Actions = {
	updatePersonalInfo: async (event) => {
		const form = await superValidate(event, customerPersonalInfoSchema);

		if (!form.valid) {
			return message(form, 'Customer Data is Invalid, Try Again!');
		}

		try {
			await client.customer.update({
				where: {
					id: event.params.id
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
	// updateTruckInfo: async (event) => {
	// 	const form = await superValidate(event, truckInfoSchema);

	// 	if (!form.valid) {
	// 		return message(form, 'Truck Data is Invalid, Try Again!');
	// 	}

	// 	try {
	// 		await client.truck.update({
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
};
