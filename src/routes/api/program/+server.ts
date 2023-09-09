import { json, type RequestHandler } from '@sveltejs/kit';

import { client } from '$lib/server/prisma';

export const GET: RequestHandler = async (req) => {
	const programId = req.url.searchParams.get('programId');

	if (programId === null) return json({ error: 'No program id provided' }, { status: 400 });
	const programResult = await client.program.findUnique({
		where: {
			id: programId
		}
	});
	return json(programResult);
};
