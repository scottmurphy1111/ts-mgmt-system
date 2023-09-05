import * as server from '../entries/pages/(app)/admin/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/admin/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.f5f617f4.js","_app/immutable/chunks/3.bd72eabb.js","_app/immutable/chunks/scheduler.33a0ffd3.js","_app/immutable/chunks/index.d420ef29.js"];
export const stylesheets = [];
export const fonts = [];
