import {
	c as create_ssr_component,
	s as subscribe,
	e as escape,
	a as add_attribute
} from '../../../../chunks/ssr.js';
import { s as superForm } from '../../../../chunks/index3.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $resetForm, $$unsubscribe_resetForm;
	let $delayed, $$unsubscribe_delayed;
	let $message, $$unsubscribe_message;
	let $errors, $$unsubscribe_errors;
	let { data } = $$props;
	let { form } = $$props;
	const {
		form: resetForm,
		errors,
		enhance,
		delayed,
		message
	} = superForm(data.form, {
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null
	});
	$$unsubscribe_resetForm = subscribe(resetForm, (value) => ($resetForm = value));
	$$unsubscribe_errors = subscribe(errors, (value) => ($errors = value));
	$$unsubscribe_delayed = subscribe(delayed, (value) => ($delayed = value));
	$$unsubscribe_message = subscribe(message, (value) => ($message = value));
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
	{
		console.log('🥶', form);
	}
	{
		console.log('message', $message);
	}
	{
		console.log('😍', $delayed);
	}
	{
		console.log('🙆‍♀️', $resetForm);
	}
	$$unsubscribe_resetForm();
	$$unsubscribe_delayed();
	$$unsubscribe_message();
	$$unsubscribe_errors();
	return `<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl"><h3 class="h3" data-svelte-h="svelte-1omc14">Password Reset</h3> ${
		form?.sendReset?.accepted
			? `<p class="text-secondary-500">${escape(
					`Password Reset email successfully sent to: ${form.sendReset.accepted[0]}`
			  )}</p>`
			: `<form class="flex flex-col gap-4" method="post"><label for="email" class="label"><span data-svelte-h="svelte-1bg9cgq">Email</span> <input class="${[
					'input',
					$errors.email ? 'input-error' : ''
			  ]
					.join(' ')
					.trim()}"${add_attribute(
					'aria-invalid',
					$errors.email ? 'true' : void 0,
					0
			  )} name="email" autocomplete="email"${add_attribute(
					'value',
					$resetForm.email,
					0
			  )}></label> <button class="btn btn-primary" type="submit" data-svelte-h="svelte-1i7p7j6">Send Reset Email</button> ${
					$errors.email ? `<p class="text-error-500">${escape($errors.email)}</p>` : ``
			  }</form>`
	}</div>`;
});
export { Page as default };
