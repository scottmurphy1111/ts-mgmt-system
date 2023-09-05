import * as server from '../entries/pages/(authentication)/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authentication)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(authentication)/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.33662114.js","_app/immutable/chunks/scheduler.33a0ffd3.js","_app/immutable/chunks/index.d420ef29.js","_app/immutable/chunks/forms.fbdacf27.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/singletons.34b04365.js","_app/immutable/chunks/paths.8c540dc7.js","_app/immutable/chunks/navigation.a5e0928e.js","_app/immutable/chunks/producers.f5f29540.js"];
export const stylesheets = [];
export const fonts = [];
