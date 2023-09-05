import { c as client } from '../../../../chunks/prisma.js';
import { j as json } from '../../../../chunks/index.js';
const GET = async (req) => {
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
export { GET };
