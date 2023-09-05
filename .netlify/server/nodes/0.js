

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2a5ce3cc.js","_app/immutable/chunks/4.5a75bd5c.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js"];
export const stylesheets = [];
export const fonts = [];
