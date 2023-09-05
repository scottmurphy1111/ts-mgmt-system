import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl"><h3 class="h3" data-svelte-h="svelte-60vc3n">Email verification</h3> <p data-svelte-h="svelte-16vxyql">Your email verification link was sent to your inbox. If you didn&#39;t receive it, please click
		below</p> <form method="post" data-svelte-h="svelte-1huwriv"><input class="btn btn-primary cursor-pointer" type="submit" value="Resend"></form></div>`;
});
export {
  Page as default
};
