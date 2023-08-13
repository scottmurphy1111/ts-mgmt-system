import { client } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log('👇', params.id);
	const id = +params.id;
	// const session = await locals.auth.validate();
	// if (session) throw redirect(302, '/');

	const result = await client.customer.findUnique({
		where: {
			id
		}
	});

	console.log('result', result);
	return {
		customerData: result
	};
};
