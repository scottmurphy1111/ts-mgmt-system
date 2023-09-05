import { json, type RequestHandler } from '@sveltejs/kit';

import { client } from '$lib/server/prisma';

export const GET: RequestHandler = async (req) => {
	const searchTerm = req.url.searchParams.get('search');
	const searchedCustomers = await client.customer.findMany({
		where: {
			OR: [
				{
					companyName: {
						contains: searchTerm?.toString()
					}
				},
				{
					lastName: {
						contains: searchTerm?.toString()
					}
				}
			]
			// companyName: {
			// 	contains: searchTerm?.toString()
			// }
		},
		include: {
			trucks: true
		}
	});

	return json(searchedCustomers);
};

export const DELETE: RequestHandler = async ({ url }) => {
	const paramIds = url.searchParams.get('ids');

	const ids = paramIds?.split(',').map((id) => id);
	const deletedCustomers = await client.customer.deleteMany({
		where: {
			id: {
				in: ids
			}
		}
	});

	return json(deletedCustomers);
};
