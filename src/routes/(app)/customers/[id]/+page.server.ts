import { client } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const getCustomerWithTrucks = async () => {
		return await client.customer.findUnique({
			where: {
				id: params.id
			},
			include: {
				trucks: true
			}
		});
	};

	return {
		customerData: await getCustomerWithTrucks()
	};
};

export const actions: Actions = {
	update: async ({ params, request }) => {
		const data = Object.fromEntries(await request.formData());

		const result = await client.customer.update({
			where: {
				id: params.id
			},
			data
		});

		return {
			...result
		};
	}
};
