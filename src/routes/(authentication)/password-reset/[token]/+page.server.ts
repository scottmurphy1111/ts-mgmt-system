import { Prisma } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

import { auth } from '$lib/server/lucia';
import { validatePasswordResetToken } from '$lib/server/token';

const passwordResetSchema = z
	.object({
		password: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim(),
		passwordConfirm: z
			.string({ required_error: 'Password is required' })
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(32, { message: 'Password must be less than 32 characters' })
			.trim()
	})
	.superRefine(({ password, passwordConfirm }, ctx) => {
		if (password !== passwordConfirm) {
			ctx.addIssue({
				code: 'custom',
				message: 'Passwords do not match',
				path: ['passwordConfirm']
			});
		}
	});

export const load: PageServerLoad = async (event) => {
	const form = await superValidate(event, passwordResetSchema);
	return { form };
};

export const actions: Actions = {
	default: async ({ request, params, locals }) => {
		const form = await superValidate(request, passwordResetSchema);

		if (!form.valid) {
			return message(form, 'Form Invalid');
		}

		try {
			const { token } = params;
			const userId = await validatePasswordResetToken(token);
			let user = await auth.getUser(userId);
			await auth.invalidateAllUserSessions(user.userId);
			await auth.updateKeyPassword('email', user.email, form.data.password);
			if (!user.emailVerified) {
				user = await auth.updateUserAttributes(user.userId, {
					email_verified: true
				});
			}
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (e) {
			if (e instanceof LuciaError) {
				return message(form, 'Credentials Invalid, Try Again!');
			}
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return message(form, 'Internal Server Error');
			}
			if (!form.valid) {
				return message(form, 'Form Invalid');
			}

			return { form };
		}
		throw redirect(302, '/');
	}
};
