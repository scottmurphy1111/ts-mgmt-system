import { json, type RequestHandler } from '@sveltejs/kit';

import { client } from '$lib/server/prisma';

export const POST: RequestHandler = async (request) => {
	const body = await request.request.json();
	// const { body } = request;
	const newTruckProgram = await client.truckProgramsEnrolled.create({
		data: {
			...body
		}
	});
	return json(newTruckProgram);
};
