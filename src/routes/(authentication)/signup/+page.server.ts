import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import { ZodError, z } from 'zod';
import type { Actions } from '@sveltejs/kit';
import { LuciaError } from 'lucia';
import { Prisma } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';

const signupSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is required' })
			.min(1, { message: 'Name is required' })
			.max(100, { message: 'Name must be less than 100 characters' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.min(1, { message: 'Email is required' })
			.max(100, { message: 'Email must be less than 100 characters' })
			.email({ message: 'Email must be a valid email address' }),
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
export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth.validate();
	if (session) throw redirect(302, '/');

	const form = await superValidate(event, signupSchema);
	return { form };
};

export const actions: Actions = {
      default: async (event) => {
		const form = await superValidate(event, signupSchema);

		console.log('form', form);

		try {
			if (form.valid) {
				const user = await auth.createUser({
					key: {
						providerId: 'email',
						providerUserId: form.data.email.toString().toLowerCase(),
						password: form.data.password.toString()
					},
					attributes: {
						email: form.data.email.toString().toLowerCase(),
						name: form.data.name.toString(),
						role: 'VIEWER'
					}
				});
				const session = await auth.createSession({
					userId: user.userId,
					attributes: {}
				});

				event.locals.auth.setSession(session);
				throw redirect(302, '/launch');
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
	}
};
