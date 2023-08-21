import { client } from '$lib/server/prisma';
import { json } from '@sveltejs/kit';

export const GET = async (req) => {
	const searchTerm = req.url.searchParams.get('search');
	const searchedCustomers = await client.customer.findMany({
		where: {
			lastName: {
				contains: searchTerm?.toString() || ''
			}
		},
		include: {
			trucks: true
		}
	});

	return json(searchedCustomers);
};

export const DELETE = async ({ url }) => {
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
