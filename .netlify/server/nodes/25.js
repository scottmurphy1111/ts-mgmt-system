import * as server from '../entries/pages/(authentication)/password-reset/_page.server.ts.js';

export const index = 25;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import('../entries/pages/(authentication)/password-reset/_page.svelte.js')
	).default);
export { server };
export const server_id = 'src/routes/(authentication)/password-reset/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/25.f1525797.js',
	'_app/immutable/chunks/scheduler.e738ec2c.js',
	'_app/immutable/chunks/index.90039f23.js',
	'_app/immutable/chunks/index.da815903.js',
	'_app/immutable/chunks/navigation.1ecd5e00.js',
	'_app/immutable/chunks/singletons.d4806386.js',
	'_app/immutable/chunks/paths.78b93b07.js',
	'_app/immutable/chunks/stores.cb731360.js',
	'_app/immutable/chunks/parse.7d180a0f.js',
	'_app/immutable/chunks/forms.495c9139.js',
	'_app/immutable/chunks/index.4b134ea6.js'
];
export const stylesheets = [];
export const fonts = [];
