import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals: { getSession } }) => {
	return {
		app: {
			pathname: url.pathname
		}
		// session: await getSession()
	};
};
