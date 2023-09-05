import { a as auth } from '../../../../chunks/lucia.js';
import { f as fail } from '../../../../chunks/index.js';
import { a as generatePasswordResetToken } from '../../../../chunks/token.js';
import { a as sendPasswordResetLink } from '../../../../chunks/email.js';
import { z } from 'zod';
import { s as superValidate, m as message } from '../../../../chunks/superValidate.js';
import { c as client } from '../../../../chunks/prisma.js';
import { Prisma } from '@prisma/client';
const passwordResetSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(100, { message: 'Email must be less than 100 characters' })
		.email({ message: 'Email must be a valid email address' })
});
const load = async (event) => {
	const form = await superValidate(event, passwordResetSchema);
	return { form };
};
const actions = {
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
export { actions, load };
