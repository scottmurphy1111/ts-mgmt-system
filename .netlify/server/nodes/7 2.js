import * as server from '../entries/pages/(app)/customers/_id_/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(app)/customers/_id_/_page.svelte.js'))
		.default);
export { server };
export const server_id = 'src/routes/(app)/customers/[id]/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/7.1e358cd2.js',
	'_app/immutable/chunks/scheduler.33a0ffd3.js',
	'_app/immutable/chunks/index.d420ef29.js',
	'_app/immutable/chunks/form.d50c176e.js',
	'_app/immutable/chunks/each.5a8acc12.js',
	'_app/immutable/chunks/paths.8c540dc7.js',
	'_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.0714b5e7.js',
	'_app/immutable/chunks/forms.fbdacf27.js',
	'_app/immutable/chunks/parse.7d180a0f.js',
	'_app/immutable/chunks/singletons.34b04365.js',
	'_app/immutable/chunks/navigation.a5e0928e.js',
	'_app/immutable/chunks/stores.d96e6017.js'
];
export const stylesheets = ['_app/immutable/assets/ProgressBar.4f1e9ba5.css'];
export const fonts = [];
