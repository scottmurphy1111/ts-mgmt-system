import { a as auth, L as LuciaError } from '../../../../chunks/lucia.js';
import { r as redirect } from '../../../../chunks/index.js';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { s as superValidate, m as message } from '../../../../chunks/superValidate.js';
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
const load = async (event) => {
	const session = await event.locals.auth.validate();
	if (session) throw redirect(302, '/');
	const form = await superValidate(event, loginSchema);
	return { form };
};
const actions = {
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
			if (e instanceof LuciaError) {
				return message(form, 'Credentials Invalid, Try Again!');
			}
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return message(form, 'Internal Server Error');
			}
		}
		return { form };
	}
};
export { actions, load };
