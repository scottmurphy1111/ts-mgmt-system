// import { db } from '$lib/server/prisma';
// import { usersTable } from '$lib/server/schema';

import { redirect, type Actions, fail } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
	if (!session.user.emailVerified) {
		throw redirect(302, '/email-verification');
	}

	// 	return {
	// 		userId: session.user.userId,
	// 		name: session.user.name,
	// 		email: session.user.email,
	// 		role: session.user.role
	// 	};
};

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, '/login');
	}
};
