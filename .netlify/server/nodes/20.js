import * as server from '../entries/pages/(app)/trucks/_page.server.ts.js';

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/trucks/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/trucks/+page.server.ts";
export const imports = ["_app/immutable/nodes/20.16024521.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js","_app/immutable/chunks/each.3bdf1519.js","_app/immutable/chunks/search.adcac568.js","_app/immutable/chunks/singletons.d4806386.js","_app/immutable/chunks/paths.78b93b07.js","_app/immutable/chunks/navigation.1ecd5e00.js"];
export const stylesheets = ["_app/immutable/assets/20.e83aafe2.css"];
export const fonts = [];
