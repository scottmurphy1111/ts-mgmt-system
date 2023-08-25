import { auth } from '$lib/server/lucia';
import { type RequestHandler, json } from '@sveltejs/kit';

export const POST: RequestHandler = async (req) => {
	const session = await req.locals.auth.validate();

	await auth.invalidateSession(session?.sessionId as string);
	req.locals.auth.setSession(null);

	return json({ success: true });
};
