import { fail, redirect } from '@sveltejs/kit';

import { auth } from '$lib/server/lucia';

// export const signout = async ({ locals }) => {
// 	const session = await locals.auth.validate();
// 	if (!session) return fail(401);
// 	await auth.invalidateSession(session.sessionId);
// 	locals.auth.setSession(null);
// 	throw redirect(302, '/login');
// };
