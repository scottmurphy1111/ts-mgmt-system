import { z } from 'zod';

export const programSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(1, { message: 'Name is required' })
		.max(100, { message: 'Name must be less than 100 characters' })
		.trim(),
	description: z
		.string({ required_error: 'Description is required' })
		.min(1, { message: 'Description is required' })
		.max(100, { message: 'Description must be less than 100 characters' })
		.trim()
});
