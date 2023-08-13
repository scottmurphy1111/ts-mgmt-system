import { client } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	// gets initial customer data
	const getCustomers = async () => {
		return await client.customer.findMany();
	};

	return {
		customers: getCustomers()
	};
};

// export const actions: Actions = {
// 	search: async (query) => {
// 		const customers = await client.customer.findMany({
// 			where: {
// 				lastName: {
// 					contains: query
// 				}
// 			}
// 		});

// 		return { customers };
// 	}
// };
