import { prisma } from '@lucia-auth/adapter-prisma';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';

import { dev } from '$app/environment';
import { client } from '$lib/server/prisma';

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(client),
	getUserAttributes: (userData) => ({
		userId: userData.id,
		email: userData.email,
		emailVerified: userData.email_verified,
		name: userData.name,
		role: userData.role
	})
});

export type Auth = typeof auth;
