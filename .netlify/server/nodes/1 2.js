export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.ae797cb8.js',
	'_app/immutable/chunks/scheduler.33a0ffd3.js',
	'_app/immutable/chunks/index.d420ef29.js',
	'_app/immutable/chunks/stores.d96e6017.js',
	'_app/immutable/chunks/singletons.34b04365.js',
	'_app/immutable/chunks/paths.8c540dc7.js'
];
export const stylesheets = [];
export const fonts = [];
