import * as server from '../entries/pages/(app)/admin/programs/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/admin/programs/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/admin/programs/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.befd83e5.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js"];
export const stylesheets = [];
export const fonts = [];
