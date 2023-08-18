import { client } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
import type { PageServerData, PageServerLoad } from './$types';
import type { Prisma } from '@prisma/client';
import type { CustomerWithTrucks } from '$lib/types/customer.types';

export const load: PageServerLoad = async () => {
	// gets initial customer data
	const getCustomers = async () => {
		const customers = await client.customer.findMany({
			include: {
				trucks: true
			}
		});

		return customers;
	};

	return {
		customers: await getCustomers()
	};
};

export const actions: Actions = {
	// search: async (query) => {
	// 	const customers = await client.customer.findMany({
	// 		where: {
	// 			lastName: {
	// 				contains: query
	// 			}
	// 		}
	// 	});

	// 	return { customers };
	// }
	create: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		console.log('data', data);
		if (!data.firstName) throw new Error('No data was sent');

		const customer = await client.customer.create({
			data: {
				firstName: data.firstName.toString(),
				lastName: data.lastName.toString(),
				address: data.address.toString(),
				city: data.city.toString(),
				state: data.state.toString(),
				zip: data.zip.toString(),
				email: data.email.toString(),
				phone: data.phone.toString()
			}
		});

		return {
			data: customer
		};
	}
	// delete: async ({ request }) => {
	// 	console.log('request', request);
	// 	// const customer = await client.customer.deleteMany({
	// 	//   where: {
	// 	//     in:
	// 	//   }
	// 	// });

	// 	return {
	// 		// data: customer
	// 	};
	// }
};
