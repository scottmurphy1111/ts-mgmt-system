import { r as redirect } from '../../../../chunks/index.js';
const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session?.user.role !== 'ADMIN') {
		throw redirect(302, '/');
	}
	return {};
};
export { load };
