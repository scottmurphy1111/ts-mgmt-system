import { client } from '$lib/server/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (req) => {
	const searchTerm = req.url.searchParams.get('search');
	const searchedTrucks = await client.truck.findMany({
		where: {
			vin: {
				contains: searchTerm?.toString() || ''
			}
		},
		include: {
			customers: true
		}
	});

	return json(searchedTrucks);
};
