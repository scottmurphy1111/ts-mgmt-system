import { c as client } from '../../../../chunks/prisma.js';
import { j as json } from '../../../../chunks/index.js';
const POST = async (req) => {
	const truckId = req.url.searchParams.get('truckId');
	const reqBody = await req.request.json();
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
export { POST };
