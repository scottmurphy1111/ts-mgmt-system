import * as server from '../entries/pages/(app)/trucks/_id_/_page.server.ts.js';

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/trucks/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/trucks/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/21.5cdf5a7b.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js","_app/immutable/chunks/forms.495c9139.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/singletons.d4806386.js","_app/immutable/chunks/paths.78b93b07.js","_app/immutable/chunks/navigation.1ecd5e00.js"];
export const stylesheets = [];
export const fonts = [];
