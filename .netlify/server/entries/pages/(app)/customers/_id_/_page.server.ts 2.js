import { c as client } from '../../../../../chunks/prisma.js';
const load = async ({ params }) => {
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
	return {
		customerData: await getCustomerWithTrucks()
	};
};
const actions = {
	update: async ({ params, request }) => {
		const data = Object.fromEntries(await request.formData());
		const result = await client.customer.update({
			where: {
				id: params.id
			},
			data
		});
		return {
			...result
		};
	}
};
export { actions, load };
