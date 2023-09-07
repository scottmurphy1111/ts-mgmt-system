import { type RequestHandler, json } from '@sveltejs/kit';

import { auth } from '$lib/server/lucia';

export const POST: RequestHandler = async (req) => {
	const session = await req.locals.auth.validate();

	await auth.invalidateSession(session?.sessionId as string);
	req.locals.auth.setSession(null);

	return json({ success: true });
};
