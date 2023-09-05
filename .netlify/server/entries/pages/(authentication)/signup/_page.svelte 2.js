import { c as create_ssr_component, s as subscribe, v as validate_component, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { s as superForm, P as ProgressBar } from "../../../../chunks/index3.js";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $delayed, $$unsubscribe_delayed;
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $message, $$unsubscribe_message;
  let { data } = $$props;
  const { form, errors, enhance, message, delayed, constraints } = superForm(data.form, {
    clearOnSubmit: "errors-and-message",
    taintedMessage: null
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_delayed();
  $$unsubscribe_errors();
  $$unsubscribe_form();
  $$unsubscribe_message();
  return `<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl">${$delayed ? `<h2 data-svelte-h="svelte-gemf4q">Creating User...</h2> ${validate_component(ProgressBar, "ProgressBar").$$render($$result, {}, {}, {})}` : `<h3 class="h3" data-svelte-h="svelte-bybqb4">Create a New User</h3> <form class="flex flex-col gap-2" method="post"><label for="name" class="label"><span data-svelte-h="svelte-15ueaex">Name</span> <input class="${["input", $errors.name ? "input-error" : ""].join(" ").trim()}"${add_attribute("aria-invalid", $errors.name ? "true" : void 0, 0)} name="name"${add_attribute("value", $form.name, 0)}></label> ${$errors.name ? `<p class="text-error-500">${escape($errors.name)}</p>` : ``} <label class="label" for="email"><span data-svelte-h="svelte-1s7u0iy">Email</span> <input class="${["input", $errors.email ? "input-error" : ""].join(" ").trim()}"${add_attribute("aria-invalid", $errors.name ? "true" : void 0, 0)} name="email"${add_attribute("value", $form.email, 0)}></label> ${$errors.email ? `<p class="text-error-500">${escape($errors.email)}</p>` : ``} <label class="label" for="password"><span data-svelte-h="svelte-1pvl1h1">Password</span> <input class="${["input", $errors.password ? "input-error" : ""].join(" ").trim()}"${add_attribute("aria-invalid", $errors.password ? "true" : void 0, 0)} type="password" name="password"></label> ${$errors.email ? `<p class="text-error-500">${escape($errors.password)}</p>` : ``} <label class="label mb-2" for="passwordConfirm"><span data-svelte-h="svelte-1764kyx">Confirm Password</span> <input class="${["input", $errors.passwordConfirm ? "input-error" : ""].join(" ").trim()}"${add_attribute("aria-invalid", $errors.passwordConfirm ? "true" : void 0, 0)} type="password" name="passwordConfirm"></label> ${$errors.passwordConfirm ? `<p class="text-error-500">${escape($errors.passwordConfirm)}</p>` : ``} <div class="flex flex-auto mb-4"><button type="submit" class="${[
    "btn variant-filled-primary",
    ($delayed ? "opacity-50" : "") + " " + ($delayed ? "cursor-not-allowed" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-gmpkz9">Submit</button></div></form> ${$message ? `<div class="text-error-500">${escape($message)}</div>` : ``} <a class="anchor" href="/login" data-svelte-h="svelte-1unj3qx">Login</a>`}</div>`;
});
export {
  Page as default
};
