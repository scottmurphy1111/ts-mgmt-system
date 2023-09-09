import { z } from 'zod';

export const userSchema = z.object({
	id: z.string().trim(),
	name: z.string().trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(100, { message: 'Email must be less than 100 characters' })
		.email({ message: 'Email must be a valid email address' }),
	emailVerified: z.boolean().default(false),
	role: z.enum(['ADMIN', 'EDITOR', 'VIEWER', 'SALES_REP']).default('VIEWER')
});
