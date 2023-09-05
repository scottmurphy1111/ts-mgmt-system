import * as universal from '../entries/pages/(app)/customers/_page.ts.js';
import * as server from '../entries/pages/(app)/customers/_page.server.ts.js';

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/customers/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/customers/+page.ts";
export { server };
export const server_id = "src/routes/(app)/customers/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.77fe24f7.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js","_app/immutable/chunks/each.3bdf1519.js","_app/immutable/chunks/search.adcac568.js","_app/immutable/chunks/singletons.d4806386.js","_app/immutable/chunks/paths.78b93b07.js","_app/immutable/chunks/navigation.1ecd5e00.js","_app/immutable/chunks/Dialog.fd99092c.js","_app/immutable/chunks/form.fd91f2fe.js","_app/immutable/chunks/stores.c1c69f85.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.865debac.js","_app/immutable/chunks/index.da815903.js","_app/immutable/chunks/stores.cb731360.js","_app/immutable/chunks/parse.7d180a0f.js","_app/immutable/chunks/forms.495c9139.js","_app/immutable/chunks/index.4b134ea6.js","_app/immutable/chunks/EditCustomer.f7eb9703.js"];
export const stylesheets = ["_app/immutable/assets/20.e83aafe2.css","_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
export const fonts = [];
