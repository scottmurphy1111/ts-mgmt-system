import { Prisma } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad } from './$types';
import { userSchema } from './user.schema';

import { client } from '$lib/server/prisma';

export const load: PageServerLoad = async (event) => {
	const getUsers = async () => {
		const users = await client.user.findMany();

		return users;
	};

	const form = await superValidate(event, userSchema);
	return {
		form,
		users: await getUsers()
	};
};

export const actions: Actions = {
	create: async (event) => {
		const form = await superValidate(event, userSchema);

		if (!form.valid) {
			return message(form, 'Sales Rep Data is Invalid, Try Again!');
		}

		try {
			await client.user.create({
				data: {
					id: form.data.id.toString(),
					name: form.data.name.toString(),
					email: form.data.email.toString(),
					email_verified: form.data.emailVerified,
					role: form.data.role
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
