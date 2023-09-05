import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad } from './$types';
import { programSchema } from './programs.schema';

import { client } from '$lib/server/prisma';

export const load: PageServerLoad = async (event) => {
	const getPrograms = async () => {
		const programs = await client.program.findMany();

		return programs;
	};

	const form = await superValidate(event, programSchema);
	return {
		form,
		programs: await getPrograms()
	};
};

export const actions: Actions = {
	create: async (event) => {
		const form = await superValidate(event, programSchema);

		if (!form.valid) {
			return message(form, 'Program Data is Invalid, Try Again!');
		}

		try {
			await client.program.create({
				data: {
					name: form.data.name.toString(),
					description: form.data.description.toString()
				}
			});
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return message(form, 'Internal Server Error');
			}
		}
		return {
			form
		};
	}
};
