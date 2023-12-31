import { Prisma } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { PageServerLoad, Actions } from './$types';

import { auth } from '$lib/server/lucia';

const loginSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(100, { message: 'Email must be less than 100 characters' })
		.email({ message: 'Email must be a valid email address' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(6, { message: 'Password must be at least 6 characters' })
		.max(32, { message: 'Password must be less than 32 characters' })
		.trim()
});

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth.validate();
	if (session) {
		if (!session.user.emailVerified) throw redirect(302, '/email-verification');
		throw redirect(302, '/');
	}

	const form = await superValidate(event, loginSchema);

	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, loginSchema);

		if (!form.valid) {
			return message(form, 'Form is Invalid, Try Again!');
		}

		try {
			const user = await auth.useKey(
				'email',
				form.data.email.toString().toLowerCase(),
				form.data.password.toString()
			);

			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});

			event.locals.auth.setSession(session);
		} catch (e) {
			if (
				e instanceof LuciaError &&
				(e.message === 'AUTH_INVALID_KEY_ID' || e.message === 'AUTH_INVALID_PASSWORD')
			) {
				return message(form, 'Credentials Invalid, Try Again!');
			}

			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return message(form, 'Internal Server Error');
			}
		}

		return { form };
	}
};
