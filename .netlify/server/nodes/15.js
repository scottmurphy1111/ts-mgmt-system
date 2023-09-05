import * as server from '../entries/pages/(app)/customers/_id_/personal-info/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () =>
	(component_cache ??= (
		await import('../entries/pages/(app)/customers/_id_/personal-info/_page.svelte.js')
	).default);
export { server };
export const server_id = 'src/routes/(app)/customers/[id]/personal-info/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/15.f3abb454.js',
	'_app/immutable/chunks/scheduler.e738ec2c.js',
	'_app/immutable/chunks/index.90039f23.js',
	'_app/immutable/chunks/paths.78b93b07.js',
	'_app/immutable/chunks/form.fd91f2fe.js',
	'_app/immutable/chunks/singletons.d4806386.js',
	'_app/immutable/chunks/stores.c1c69f85.js',
	'_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.865debac.js',
	'_app/immutable/chunks/index.da815903.js',
	'_app/immutable/chunks/navigation.1ecd5e00.js',
	'_app/immutable/chunks/stores.cb731360.js',
	'_app/immutable/chunks/parse.7d180a0f.js',
	'_app/immutable/chunks/forms.495c9139.js',
	'_app/immutable/chunks/index.4b134ea6.js',
	'_app/immutable/chunks/EditCustomer.f7eb9703.js',
	'_app/immutable/chunks/each.3bdf1519.js'
];
export const stylesheets = ['_app/immutable/assets/ProgressBar.4f1e9ba5.css'];
export const fonts = [];
