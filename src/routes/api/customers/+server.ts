import { client } from '$lib/server/prisma';
import { json } from '@sveltejs/kit';

export const GET = async (req) => {
	const searchTerm = req.url.searchParams.get('search');
	const searchedCustomers = await client.customer.findMany({
		where: {
			lastName: {
				contains: searchTerm?.toString() || ''
			}
		}
	});

	console.log('searchedCustomers', searchedCustomers);
	return json(searchedCustomers);
};
