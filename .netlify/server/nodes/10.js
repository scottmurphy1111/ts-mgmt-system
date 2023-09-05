export const index = 10;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(app)/admin/roles/_page.svelte.js'))
		.default);
export const imports = [
	'_app/immutable/nodes/10.efe9bfb8.js',
	'_app/immutable/chunks/scheduler.e738ec2c.js',
	'_app/immutable/chunks/index.90039f23.js'
];
export const stylesheets = [];
export const fonts = [];
