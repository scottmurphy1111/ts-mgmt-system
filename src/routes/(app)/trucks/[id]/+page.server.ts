import { client } from '$lib/server/prisma';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const getTrucksWithCustomers = async () => {
		return await client.truck.findUnique({
			where: {
				id: params.id
			},
			include: {
				customers: true
			}
		});
	};

	return {
		truckData: await getTrucksWithCustomers()
	};
};

export const actions: Actions = {
	update: async ({ params, request }) => {
		const data = Object.fromEntries(await request.formData());

		const result = await client.truck.update({
			where: {
				id: params.id
			},
			data
		});

		return {
			data: result
		};
	}
};
