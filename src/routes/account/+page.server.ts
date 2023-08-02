import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/auth');
	}

	const { data: profile } = await supabase
		.from('profiles')
		.select('id, username, website, avatar_url')
		.eq('id', session.user.id)
		.single();

	return { session, profile };
};

export const actions = {
	update: async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData();
		const fullName = formData.get('fullName') as string;
		const username = formData.get('username') as string;
		const website = formData.get('website') as string;
		const avatarUrl = formData.get('avatar') as File;

		const session = await getSession();

		const { error } = await supabase.from('profiles').upsert({
			id: session.user.id,
			full_name: fullName,
			username,
			website,
			avatar_url: avatarUrl
		});

		if (error) {
			return fail(500, {
				fullName,
				username,
				website,
				avatarUrl
			});
		}

		return {
			fullName,
			username,
			website,
			avatarUrl
		};
	},
	signOut: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();

		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/auth');
		}
	}
};
