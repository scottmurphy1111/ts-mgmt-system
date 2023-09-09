import { json, type RequestHandler } from '@sveltejs/kit';

export const PATCH: RequestHandler = async (req) => {
	const id = req.url.searchParams.get('userId');
	const reqBody = await req.request.json();
	if (id === null) return json({ error: 'No user id provided' }, { status: 400 });
	console.log('req', reqBody);
	console.log('id', id);

	const data = await prisma.user.update({
		where: {
			id: id?.toString()
		},
		data: {
			...reqBody
		}
	});

	return json(data);
};

export const DELETE: RequestHandler = async (req) => {
	const paramIds = req.url.searchParams.get('ids');

	const ids = paramIds?.split(',').map((id) => id);
	const deletedUsers = await prisma.user.deleteMany({
		where: {
			id: {
				in: ids
			}
		}
	});

	return json(deletedUsers);
};
