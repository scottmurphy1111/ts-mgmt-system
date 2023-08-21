import { client } from '$lib/server/prisma';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const getTrucks = async () => {
		const trucks = await client.truck.findMany({
			include: {
				customers: true
			}
		});

		return trucks;
	};

	return {
		trucks: await getTrucks()
	};
};
