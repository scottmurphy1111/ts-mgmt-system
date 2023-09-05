import * as server from '../entries/pages/(app)/customers/_id_/_page.server.ts.js';

export const index = 14;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(app)/customers/_id_/_page.svelte.js'))
		.default);
export { server };
export const server_id = 'src/routes/(app)/customers/[id]/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/14.f7a0a5a9.js',
	'_app/immutable/chunks/scheduler.e738ec2c.js',
	'_app/immutable/chunks/index.90039f23.js',
	'_app/immutable/chunks/form.fd91f2fe.js',
	'_app/immutable/chunks/singletons.d4806386.js',
	'_app/immutable/chunks/paths.78b93b07.js',
	'_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.865debac.js',
	'_app/immutable/chunks/TabGroup.c4285485.js',
	'_app/immutable/chunks/stores.cb731360.js',
	'_app/immutable/chunks/index.4b134ea6.js',
	'_app/immutable/chunks/navigation.1ecd5e00.js'
];
export const stylesheets = ['_app/immutable/assets/ProgressBar.4f1e9ba5.css'];
export const fonts = [];
