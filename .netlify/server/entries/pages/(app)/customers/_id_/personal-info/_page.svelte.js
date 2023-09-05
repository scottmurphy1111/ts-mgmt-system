import {
	c as create_ssr_component,
	h as getContext,
	s as subscribe,
	e as escape,
	d as setContext,
	a as add_attribute,
	v as validate_component
} from '../../../../../../chunks/ssr.js';
import { c as createFormStore } from '../../../../../../chunks/form.js';
import { t as toastStore } from '../../../../../../chunks/stores2.js';
import '../../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js';
import { s as superForm } from '../../../../../../chunks/index3.js';
import { E as EditCustomer } from '../../../../../../chunks/EditCustomer.js';
const DisplayCustomer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $customerFormStore, $$unsubscribe_customerFormStore;
	let customerFormStore = getContext('customerFormStore');
	$$unsubscribe_customerFormStore = subscribe(
		customerFormStore,
		(value) => ($customerFormStore = value)
	);
	$$unsubscribe_customerFormStore();
	return `<div class="flex flex-col gap-2"><div class="flex gap-4 w-auto"><p class="text-md font-semibold">${escape(
		$customerFormStore?.data?.firstName
	)} ${escape($customerFormStore?.data?.lastName)} ${escape(
		$customerFormStore?.data?.companyName
	)}</p></div> <div class="flex gap-4 w-full"><p class="text-md font-semibold">${escape(
		$customerFormStore?.data?.address
	)}</p></div> <div class="flex gap-4 w-full"><p class="text-md font-semibold">${escape(
		$customerFormStore?.data?.city
	)}, ${escape($customerFormStore?.data?.state)} ${escape(
		$customerFormStore?.data?.zip
	)}</p></div> <div class="flex gap-4 w-full"><p class="text-md font-semibold">${escape(
		$customerFormStore?.data?.email
	)}</p></div> <div class="flex gap-4 w-full"><p class="text-md font-semibold">${escape(
		$customerFormStore?.data?.phone
	)}</p></div></div>   `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $customerFormStore, $$unsubscribe_customerFormStore;
	let { data } = $$props;
	let editCustomerForm;
	const { customer } = data;
	const customerFormStore = createFormStore({ data: customer, status: 'idle' });
	$$unsubscribe_customerFormStore = subscribe(
		customerFormStore,
		(value) => ($customerFormStore = value)
	);
	setContext('customerFormStore', customerFormStore);
	const resetForm = async () => {
		customerFormStore.set?.({ data: customer, status: 'idle' });
	};
	const { form, errors, enhance, delayed } = superForm(data.form, {
		invalidateAll: true,
		resetForm: true,
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null,
		onSubmit: (data2) => {},
		onUpdate: (event) => {},
		onError: (errors2) => {},
		onUpdated: (event) => {
			if (!Object.keys(event.form.errors).length) {
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'Customer Updated Successfully!'
				});
				customerFormStore.updateFormData(event.form.data);
				customerFormStore.updateStatus?.('idle');
			}
		}
	});
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$unsubscribe_customerFormStore();
	return `<section class="flex p-4 w-full items-start"><form id="editCustomerForm" class="flex flex-col gap-4 mb-4" method="post" action="?/updatePersonalInfo"${add_attribute(
		'this',
		editCustomerForm,
		0
	)}>${
		$customerFormStore?.status !== 'editing'
			? `${validate_component(DisplayCustomer, 'DisplayCustomer').$$render($$result, {}, {}, {})}`
			: ``
	} ${
		$customerFormStore?.status === 'editing'
			? `${validate_component(EditCustomer, 'EditCustomer').$$render(
					$$result,
					{ errors, resetForm },
					{},
					{}
			  )}`
			: ``
	}</form> ${
		$customerFormStore?.status !== 'editing'
			? `<div class="flex justify-end gap-2 flex-auto"><button class="btn btn-primary" type="button" data-svelte-h="svelte-1583lpd">Edit</button></div>`
			: ``
	} ${
		$customerFormStore?.status === 'editing'
			? `<div class="flex justify-end gap-2 flex-auto"><div class="" data-svelte-h="svelte-c8rhw6"><button form="editCustomerForm" class="btn btn-primary" type="submit">Save</button></div> <div class=""><button class="btn variant-filled-error text-white" type="button" data-svelte-h="svelte-1no0owq">Cancel</button></div></div>`
			: ``
	}</section>`;
});
export { Page as default };
