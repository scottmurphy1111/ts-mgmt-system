import * as server from '../entries/pages/(app)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default);
export { server };
export const server_id = 'src/routes/(app)/+layout.server.ts';
export const imports = [
	'_app/immutable/nodes/2.f271d4d1.js',
	'_app/immutable/chunks/scheduler.33a0ffd3.js',
	'_app/immutable/chunks/index.d420ef29.js',
	'_app/immutable/chunks/ts-logo-dark.8272674e.js',
	'_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.0714b5e7.js',
	'_app/immutable/chunks/paths.8c540dc7.js',
	'_app/immutable/chunks/each.5a8acc12.js',
	'_app/immutable/chunks/stores.72850bdb.js',
	'_app/immutable/chunks/producers.f5f29540.js',
	'_app/immutable/chunks/stores.d96e6017.js',
	'_app/immutable/chunks/singletons.34b04365.js'
];
export const stylesheets = [
	'_app/immutable/assets/2.b9e5b74b.css',
	'_app/immutable/assets/ts-logo-dark.16bb9f51.css',
	'_app/immutable/assets/ProgressBar.4f1e9ba5.css'
];
export const fonts = [];
