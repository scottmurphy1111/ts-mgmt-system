// import { client } from '$lib/server/prisma';
// import type { PageLoad } from './$types';

// export const load: PageLoad = async () => {
// 	const searchedCustomers = await client.customer.findMany({
// 		where: {
// 			lastName: {
// 				contains: 'Murphy'
// 			}
// 		}
// 	});
// 	return {
// 		searchedCustomers: searchedCustomers
// 	};
// };
