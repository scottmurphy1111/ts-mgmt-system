import * as server from '../entries/pages/(authentication)/_page.server.ts.js';

export const index = 22;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/(authentication)/_page.svelte.js')).default);
export { server };
export const server_id = 'src/routes/(authentication)/+page.server.ts';
export const imports = [
	'_app/immutable/nodes/22.3d1abde8.js',
	'_app/immutable/chunks/scheduler.e738ec2c.js',
	'_app/immutable/chunks/index.90039f23.js',
	'_app/immutable/chunks/paths.78b93b07.js',
	'_app/immutable/chunks/producers.16921ae3.js'
];
export const stylesheets = [];
export const fonts = [];
