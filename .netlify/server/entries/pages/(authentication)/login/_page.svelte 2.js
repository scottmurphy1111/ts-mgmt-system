import {
	c as create_ssr_component,
	s as subscribe,
	v as validate_component,
	a as add_attribute,
	e as escape
} from '../../../../chunks/ssr.js';
import { s as superForm, P as ProgressBar } from '../../../../chunks/index3.js';
import { t as toastStore } from '../../../../chunks/stores2.js';
import '../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $delayed, $$unsubscribe_delayed;
	let $errors, $$unsubscribe_errors;
	let $form, $$unsubscribe_form;
	let { data } = $$props;
	const { form, errors, enhance, delayed } = superForm(data.form, {
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null,
		onSubmit: (data2) => {},
		onUpdate: (event) => {
			toastStore.trigger({
				message: event.form.message ? event.form.message : 'Logged in successfully!'
			});
		},
		onError: (errors2) => {
			toastStore.trigger({ message: errors2.result.error.message });
		}
	});
	$$unsubscribe_form = subscribe(form, (value) => ($form = value));
	$$unsubscribe_errors = subscribe(errors, (value) => ($errors = value));
	$$unsubscribe_delayed = subscribe(delayed, (value) => ($delayed = value));
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$unsubscribe_delayed();
	$$unsubscribe_errors();
	$$unsubscribe_form();
	return `<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl">${
		$delayed
			? `<h2 data-svelte-h="svelte-1wwrl7o">Logging In...</h2> ${validate_component(
					ProgressBar,
					'ProgressBar'
			  ).$$render($$result, {}, {}, {})}`
			: `<h3 class="h3" data-svelte-h="svelte-u2k9x1">Login</h3> <form class="flex flex-col gap-2" method="post"><label for="email" class="label"><span data-svelte-h="svelte-1bg9cgq">Email</span> <input class="${[
					'input',
					$errors.email ? 'input-error' : ''
			  ]
					.join(' ')
					.trim()}"${add_attribute(
					'aria-invalid',
					$errors.email ? 'true' : void 0,
					0
			  )} name="email" autocomplete="email"${add_attribute('value', $form.email, 0)}></label> ${
					$errors.email ? `<p class="text-error-500">${escape($errors.email)}</p>` : ``
			  } <label for="password" class="label mb-2"><span data-svelte-h="svelte-1kvjhoz">Password</span> <input class="${[
					'input',
					$errors.password ? 'input-error' : ''
			  ]
					.join(' ')
					.trim()}"${add_attribute(
					'aria-invalid',
					$errors.password ? 'true' : void 0,
					0
			  )} type="password" name="password" autocomplete="current-password"></label> ${
					$errors.password ? `<p class="text-error-500">${escape($errors.password)}</p>` : ``
			  } <div class="flex flex-auto mb-4"><button type="submit" class="${[
					'btn variant-filled-primary',
					($delayed ? 'opacity-50' : '') + ' ' + ($delayed ? 'cursor-not-allowed' : '')
			  ]
					.join(' ')
					.trim()}" data-svelte-h="svelte-gmpkz9">Submit</button></div></form>  <a class="anchor" href="/signup" data-svelte-h="svelte-11iozpx">Create an account</a>`
	}</div>`;
});
export { Page as default };
