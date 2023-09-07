import { z } from 'zod';

export const salesRepSchema = z.object({
	firstName: z.string().trim(),
	lastName: z.string().trim(),
	address: z
		.string({ required_error: 'Address is required' })
		.min(1, { message: 'Address is required' })
		.max(100, { message: 'Address must be less than 100 characters' })
		.trim(),
	city: z
		.string({ required_error: 'City is required' })
		.min(1, { message: 'City is required' })
		.max(100, { message: 'City must be less than 100 characters' })
		.trim(),
	state: z.string({ required_error: 'State is required' }),
	zip: z.string({ required_error: 'Zip is required' }),
	country: z.string({ required_error: 'Country is required' }),
	email: z
		.string({ required_error: 'Email is required' })
		.min(1, { message: 'Email is required' })
		.max(100, { message: 'Email must be less than 100 characters' })
		.email({ message: 'Email must be a valid email address' }),
	phone: z
		.string({ required_error: 'Phone is required' })
		.min(10, { message: 'Phone must be at least 10 characters' })
		.max(14, { message: 'Phone must be less than 14 characters' })
		.regex(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, { message: 'Phone must match pattern XXX-XXX-XXXX' }),
	company: z.string().trim(),
	notes: z.string().trim()
});
