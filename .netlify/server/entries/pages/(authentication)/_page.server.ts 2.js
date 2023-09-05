import { r as redirect, f as fail } from '../../../chunks/index.js';
import { a as auth } from '../../../chunks/lucia.js';
const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
};
const actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
		throw redirect(302, '/login');
	}
};
export { actions, load };
