import { client } from '$lib/server/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (req) => {
	const truckId = req.url.searchParams.get('truckId');
	const reqBody = await req.request.json();
	console.log('reqBody', reqBody);
	if (truckId === null) return json({ error: 'No truck id provided' }, { status: 400 });
	const truckResult = await client.truck.update({
		where: {
			id: truckId
		},
		data: {
			...reqBody
		}
	});
	return json(truckResult);
};
