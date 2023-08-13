import { client } from '$lib/server/prisma';
import { json } from '@sveltejs/kit';

export const GET = async (req) => {
	const customerId = Number(req.url.searchParams.get('id'));
	const customerResult = await client.customer.findUnique({
		where: {
			id: customerId
		}
	});

	console.log('customerResult', customerResult);
	return json(customerResult);
};
