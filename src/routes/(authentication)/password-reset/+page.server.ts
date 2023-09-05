import { auth } from '$lib/server/lucia';
import { fail } from '@sveltejs/kit';
import { generatePasswordResetToken } from '$lib/server/token';
import { sendPasswordResetLink } from '$lib/server/email';
import { z } from 'zod';

import type { PageServerLoad, Actions } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { client } from '$lib/server/prisma';
import { Prisma } from '@prisma/client';

const passwordResetSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(100, { message: 'Email must be less than 100 characters' })
		.email({ message: 'Email must be a valid email address' })
});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, passwordResetSchema);

	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, passwordResetSchema);

		try {
			const storedUser = await client.user.findUnique({
				where: {
					email: form.data.email.toLowerCase()
				}
			});
			if (!storedUser) {
				return fail(400, {
					message: 'User does not exist'
				});
			}
			const user = auth.transformDatabaseUser(storedUser);
			const token = await generatePasswordResetToken(user.userId);
			const sendReset = await sendPasswordResetLink(form.data.email, token);

			console.log('sendReset', sendReset);

			return { sendReset, form };
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return message(form, 'Internal Server Error');
			}

			if (!form.valid) {
				return message(form, 'Form Invalid');
			}
			return { form };
		}
	}
};
