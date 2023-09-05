import * as server from '../entries/pages/(app)/admin/_layout.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/admin/+layout.server.ts";
export const imports = ["_app/immutable/nodes/4.2a5ce3cc.js","_app/immutable/chunks/4.5a75bd5c.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js"];
export const stylesheets = [];
export const fonts = [];
