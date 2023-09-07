import { redirect, type Actions, fail } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { sendEmailVerificationLink } from '$lib/server/email';
import { generateEmailVerificationToken } from '$lib/server/token';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	if (session.user.emailVerified) {
		throw redirect(302, '/');
	}
	return {};
};

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) throw redirect(302, '/login');
		if (session.user.emailVerified) {
			throw redirect(302, '/');
		}
		try {
			const token = await generateEmailVerificationToken(session.user.userId);
			await sendEmailVerificationLink(session.user.email, token);
			return {
				success: true
			};
		} catch {
			return fail(500, {
				message: 'An unknown error occurred'
			});
		}
	}
};
