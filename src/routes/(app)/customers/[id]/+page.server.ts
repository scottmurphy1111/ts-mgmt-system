import { client } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// const session = await locals.auth.validate();
	// if (session) throw redirect(302, '/');

	type CustomerWithTrucks = Prisma.CustomerGetPayload<{
		include: { trucks: true };
	}>;

	const getCustomerWithTrucks = async () => {
		return await client.customer.findUnique({
			where: {
				id: params.id
			},
			include: {
				trucks: true
			}
		});
	};

	console.log('result', getCustomerWithTrucks());
	return {
		customerData: await getCustomerWithTrucks()
	};
};

export const actions: Actions = {
	update: async ({ params, request }) => {
		const data = Object.fromEntries(await request.formData());

		const result = await client.customer.update({
			where: {
				id: params.id
			},
			data
		});

		console.log('result', result);
		return {
			...result
		};
	}
};
