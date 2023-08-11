// See https://kit.svelte.dev/docs/types#app
import type { PrismaClient, Role } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}

	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = {
			email: string;
			name: string;
			role: Role;
		};
		type DatabaseSessionAttributes = object;
	}

	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
}

export {};
