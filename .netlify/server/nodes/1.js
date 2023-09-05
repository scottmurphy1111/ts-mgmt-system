

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bd176f71.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js","_app/immutable/chunks/stores.cb731360.js","_app/immutable/chunks/singletons.d4806386.js","_app/immutable/chunks/paths.78b93b07.js"];
export const stylesheets = [];
export const fonts = [];
