import { type RequestHandler, json } from '@sveltejs/kit';

import { client } from '$lib/server/prisma';

export const GET: RequestHandler = async () => {
	const programs = await client.program.findMany();

	return json(programs);
};

export const DELETE: RequestHandler = async ({ url }) => {
	const paramIds = url.searchParams.get('ids');

	const ids = paramIds?.split(',').map((id) => id);
	const deletedPrograms = await client.program.deleteMany({
		where: {
			id: {
				in: ids
			}
		}
	});

	return json(deletedPrograms);
};
