import * as server from '../entries/pages/(authentication)/_layout.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authentication)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(authentication)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/4.ef0511e9.js","_app/immutable/chunks/scheduler.33a0ffd3.js","_app/immutable/chunks/index.d420ef29.js","_app/immutable/chunks/ts-logo-dark.8272674e.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.0714b5e7.js","_app/immutable/chunks/paths.8c540dc7.js","_app/immutable/chunks/each.5a8acc12.js","_app/immutable/chunks/stores.72850bdb.js"];
export const stylesheets = ["_app/immutable/assets/ts-logo-dark.16bb9f51.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
