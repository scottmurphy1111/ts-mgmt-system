

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f5f617f4.js","_app/immutable/chunks/3.bd72eabb.js","_app/immutable/chunks/scheduler.33a0ffd3.js","_app/immutable/chunks/index.d420ef29.js"];
export const stylesheets = [];
export const fonts = [];
