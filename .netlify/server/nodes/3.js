

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e27ee1d2.js","_app/immutable/chunks/scheduler.e738ec2c.js","_app/immutable/chunks/index.90039f23.js"];
export const stylesheets = [];
export const fonts = [];
