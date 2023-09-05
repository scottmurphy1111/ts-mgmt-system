import '../../../chunks/index.js';
const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	return {
		id: session?.user.userId,
		name: session?.user.name,
		email: session?.user.email,
		role: session?.user.role
	};
};
export { load };
