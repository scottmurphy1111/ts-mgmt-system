import { client } from '$lib/server/prisma';
import { json } from '@sveltejs/kit';

export const GET = async (req) => {
	const customerId = req.url.searchParams.get('id');
	if (customerId === null) return json({ error: 'No customer id provided' }, { status: 400 });
	const customerResult = await client.customer.findUnique({
		where: {
			id: customerId
		}
	});

	return json(customerResult);
};
