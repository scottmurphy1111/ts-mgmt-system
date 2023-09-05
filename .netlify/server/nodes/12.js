import * as server from '../entries/pages/(app)/admin/users/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/admin/users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/admin/users/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.2dc87cbd.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js"];
export const stylesheets = [];
export const fonts = [];
