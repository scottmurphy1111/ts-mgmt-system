import { client } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const getProgram = async () => {
		const program = await client.program.findUnique({
			where: {
				id: event.params.id
			}
		});

		return program;
	};

	return {
		program: await getProgram()
	};
};
