import { client } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

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
	create: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

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
};
