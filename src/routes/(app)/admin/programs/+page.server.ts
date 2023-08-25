import { client } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const getPrograms = async () => {
		const programs = await client.program.findMany();

		return programs;
	};

	return {
		programs: await getPrograms()
	};
};
