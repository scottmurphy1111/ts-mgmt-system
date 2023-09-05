import * as universal from '../entries/pages/(app)/customers/_page.ts.js';
import * as server from '../entries/pages/(app)/customers/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/customers/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/customers/+page.ts";
export { server };
export const server_id = "src/routes/(app)/customers/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.d56d7c28.js","_app/immutable/chunks/scheduler.33a0ffd3.js","_app/immutable/chunks/index.d420ef29.js","_app/immutable/chunks/each.5a8acc12.js","_app/immutable/chunks/search.a904929f.js","_app/immutable/chunks/paths.8c540dc7.js","_app/immutable/chunks/forms.fbdacf27.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/singletons.34b04365.js","_app/immutable/chunks/navigation.a5e0928e.js","_app/immutable/chunks/form.d50c176e.js"];
export const stylesheets = ["_app/immutable/assets/13.e83aafe2.css"];
export const fonts = [];
