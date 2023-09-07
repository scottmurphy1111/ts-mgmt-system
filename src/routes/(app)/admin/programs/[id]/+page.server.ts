import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms/server';

import { programSchema } from '../programs.schema';

import type { PageServerLoad } from './$types';

import { client } from '$lib/server/prisma';

export const load: PageServerLoad = async (event) => {
	const getProgram = async () => {
		const program = await client.program.findUnique({
			where: {
				id: event.params.id
			}
		});

		return program;
	};

	const form = await superValidate(event, programSchema);
	return {
		form,
		program: await getProgram()
	};
};

export const actions: Actions = {
	updateProgram: async (event) => {
		const form = await superValidate(event, programSchema);

		if (!form.valid) {
			return message(form, 'Program Data is Invalid, Try Again!');
		}

		try {
			await client.program.update({
				where: {
					id: event.params.id
				},
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
