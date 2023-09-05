import * as server from '../entries/pages/(app)/admin/users/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(app)/admin/users/_page.svelte.js'))
		.default);
export { server };
export const server_id = 'src/routes/(app)/admin/users/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/5.e3f6cfdc.js',
	'_app/immutable/chunks/scheduler.33a0ffd3.js',
	'_app/immutable/chunks/index.d420ef29.js'
];
export const stylesheets = [];
export const fonts = [];
