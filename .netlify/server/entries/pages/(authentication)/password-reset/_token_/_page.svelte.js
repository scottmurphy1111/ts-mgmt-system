import {
	c as create_ssr_component,
	s as subscribe,
	a as add_attribute,
	e as escape
} from '../../../../../chunks/ssr.js';
import { s as superForm } from '../../../../../chunks/index3.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $errors, $$unsubscribe_errors;
	let $message, $$unsubscribe_message;
	let { data } = $$props;
	let { form } = $$props;
	const {
		form: resetForm,
		errors,
		enhance,
		message,
		delayed,
		constraints
	} = superForm(data.form, {
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null
	});
	$$unsubscribe_errors = subscribe(errors, (value) => ($errors = value));
	$$unsubscribe_message = subscribe(message, (value) => ($message = value));
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
	$$unsubscribe_errors();
	$$unsubscribe_message();
	return `<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl"><h3 class="h3" data-svelte-h="svelte-1cokdrx">Change Password</h3> <form class="flex flex-col gap-4" method="post"><label class="label" for="password">New Password
			<input class="${['input', $errors.password ? 'input-error' : ''].join(' ').trim()}"${add_attribute(
				'aria-invalid',
				$errors.password ? 'true' : void 0,
				0
			)} name="password" id="password" type="password"></label> <label class="label" for="passwordConfirm">Confirm Password
			<input class="${['input', $errors.passwordConfirm ? 'input-error' : '']
				.join(' ')
				.trim()}"${add_attribute(
				'aria-invalid',
				$errors.passwordConfirm ? 'true' : void 0,
				0
			)} name="passwordConfirm" id="passwordConfirm" type="password"></label> ${
				$errors.passwordConfirm
					? `<p class="text-error-500">${escape($errors.passwordConfirm)}</p>`
					: ``
			} <button class="btn btn-primary mt-2" type="submit" data-svelte-h="svelte-1kuqq1x">Update Password</button></form> ${
				$message ? `<div class="text-error-500">${escape($message)}</div>` : ``
			}</div>`;
});
export { Page as default };
