import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (!session) throw redirect(302, '/login');
	return {
		id: session.user.userId,
		name: session.user.name,
		email: session.user.email,
		role: session.user.role
	};
};
