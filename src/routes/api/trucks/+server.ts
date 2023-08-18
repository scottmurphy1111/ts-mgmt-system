import { client } from '$lib/server/prisma';
import { json } from '@sveltejs/kit';

export const GET = async (req) => {
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

	console.log('searchedTrucks', searchedTrucks);
	return json(searchedTrucks);
};
