

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/producers/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.6825cdd1.js","_app/immutable/chunks/scheduler.33a0ffd3.js","_app/immutable/chunks/index.d420ef29.js"];
export const stylesheets = [];
export const fonts = [];
