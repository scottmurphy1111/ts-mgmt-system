import { c as client } from '../../../../../chunks/prisma.js';
import { s as superValidate } from '../../../../../chunks/superValidate.js';
import { c as customerPersonalInfoSchema } from '../../../../../chunks/customer.schema.js';
const load = async (event) => {
	const getCustomerWithTrucks = async () => {
		const customer = await client.customer.findUnique({
			where: {
				id: event.params.id
			},
			include: {
				trucks: true
			}
		});
		return customer;
	};
	const form = await superValidate(event, customerPersonalInfoSchema);
	return {
		form,
		customer: await getCustomerWithTrucks()
	};
};
export { load };
