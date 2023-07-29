import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (({ url }) => {
	return {
		app: {
			pathname: url.pathname
		}
	};
}) satisfies LayoutServerLoad;
