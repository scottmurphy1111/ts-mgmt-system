import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import type { Actions } from './$types';
import { validatePasswordResetToken } from '$lib/server/token';
import { message, superValidate } from 'sveltekit-superforms/server';
import { Prisma } from '@prisma/client';
import { LuciaError } from 'lucia';

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
				path: ['password']
			});
			ctx.addIssue({
				code: 'custom',
				message: 'Passwords do not match',
				path: ['passwordConfirm']
			});
		}
	});

export const load = async (event) => {
	const form = await superValidate(event, passwordResetSchema);
	return { form };
};

export const actions: Actions = {
	default: async ({ request, params, locals }) => {
		const form = await superValidate(request, passwordResetSchema);

		try {
			if (!form.valid) {
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
			}
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
