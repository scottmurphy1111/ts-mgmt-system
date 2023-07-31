import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { usersTable } from '$lib/server/schema';
import { fail } from '@sveltejs/kit';

import bcrypt from 'bcrypt';
import { createAuthJWT } from '$lib/server/jwt';

export const load = (({ cookies }) => {
	const authToken = cookies.get('auth_token');

	if (authToken) {
		throw redirect(301, '/');
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		const { id, firstName, lastName, email, password, confirmPassword } =
			Object.fromEntries(formData);

		if (confirmPassword === '' || password !== confirmPassword) {
			return fail(422, {
				error: 'Passwords do not match'
			});
		}

		const hash = bcrypt.hashSync(password?.toString(), 10);

		// const newUser = db.insert(usersTable).values({
		//   first_name: firstName.toString(),
		//   last_name: lastName.toString(),
		//   email: email.toString(),
		//   password: hash
		// });

		// const token = await createAuthJWT({
		//   firstName: firstName.toString(),
		//   lastName: lastName.toString(),
		//   email: email.toString(),
		//   id: parseInt(newUser.columns.id)
		// });

		// cookies.set('auth_token', token, {
		//   path: '/',
		// });
	}
};
