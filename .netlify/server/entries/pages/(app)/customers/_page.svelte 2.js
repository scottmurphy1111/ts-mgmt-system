import {
	c as create_ssr_component,
	a as add_attribute,
	s as subscribe,
	h as setContext,
	v as validate_component,
	d as each,
	m as missing_component,
	e as escape
} from '../../../../chunks/ssr.js';
import { c as createSearchStore } from '../../../../chunks/search.js';
import { w as writable } from '../../../../chunks/index2.js';
import { E as EditCustomer, c as createFormStore } from '../../../../chunks/form.js';
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z" fill="currentColor"></path></svg>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M107.61 77.9428L151.817 33.7354C157.242 28.3105 157.242 19.515 151.817 14.0857L141.992 4.26082C136.567 -1.16405 127.772 -1.16405 122.342 4.26082L78.135 48.4682L33.9276 4.26082C28.5027 -1.16405 19.7072 -1.16405 14.2779 4.26082L4.45305 14.0857C-0.971819 19.5105 -0.971819 28.3061 4.45305 33.7354L48.6605 77.9428L4.45305 122.15C-0.971819 127.575 -0.971819 136.371 4.45305 141.8L14.2779 151.625C19.7028 157.05 28.5027 157.05 33.9276 151.625L78.135 107.417L122.342 151.625C127.767 157.05 136.567 157.05 141.992 151.625L151.817 141.8C157.242 136.375 157.242 127.579 151.817 122.15L107.61 77.9428Z" fill="currentColor"></path></svg>`;
});
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { dialog } = $$props;
	if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
		$$bindings.dialog(dialog);
	return `<dialog class="rounded-md shadow-md"${add_attribute('this', dialog, 0)}>${
		slots.default ? slots.default({}) : ``
	}</dialog>`;
});
const _page_svelte_svelte_type_style_lang = '';
const css = {
	code: 'tr.svelte-1hdxu1t{cursor:pointer}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $searchStore, $$unsubscribe_searchStore;
	let $selectedCustomers, $$unsubscribe_selectedCustomers;
	let dialog;
	let createNewCustomerForm;
	let { data } = $$props;
	const { customers } = data;
	const searchStore = createSearchStore(customers);
	$$unsubscribe_searchStore = subscribe(searchStore, (value) => ($searchStore = value));
	const customerFormStore = createFormStore({ data: {}, status: 'idle' });
	setContext('customerFormStore', customerFormStore);
	const resetForm = () => {
		createNewCustomerForm.reset();
		dialog?.close();
	};
	const selectedCustomers = writable([]);
	$$unsubscribe_selectedCustomers = subscribe(
		selectedCustomers,
		(value) => ($selectedCustomers = value)
	);
	const processTruckData = (customer) => {
		const trucks = customer.trucks
			.map((truck) => `<div>${truck.year} ${truck.make} ${truck.model}</div>`)
			.join('');
		return trucks;
	};
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);
	let $$settled;
	let $$rendered;
	do {
		$$settled = true;
		$$rendered = ` <div class="flex justify-between items-center mb-4"><form><div class="flex w-1/3 gap-2"><input class="input min-w-[300px] pr-8" type="text" name="search" placeholder="Search by Last Name"${add_attribute(
			'value',
			$searchStore.search,
			0
		)}> <div class="flex ml-auto align-middle justify-end gap-3 bg-transparent z-10">${
			$searchStore.search.length > 0
				? `<button type="button">${validate_component(
						Close || missing_component,
						'svelte:component'
				  ).$$render($$result, {}, {}, {})}</button>`
				: ``
		} <button type="submit">${validate_component(
			Search || missing_component,
			'svelte:component'
		).$$render($$result, {}, {}, {})}</button></div></div></form> <div class="flex gap-2">${
			$selectedCustomers.length > 0
				? `<button class="btn variant-filled-error" type="button" data-svelte-h="svelte-k1vnjp">Delete Selected</button>`
				: ``
		} <button class="btn btn-primary" data-svelte-h="svelte-1iy1fpc">Add New</button></div></div> ${validate_component(
			Dialog,
			'Dialog'
		).$$render(
			$$result,
			{ dialog },
			{
				dialog: ($$value) => {
					dialog = $$value;
					$$settled = false;
				}
			},
			{
				default: () => {
					return `<form class="flex flex-col gap-4 mb-4 p-8" method="post" action="?/create"${add_attribute(
						'this',
						createNewCustomerForm,
						0
					)}>${validate_component(EditCustomer, 'EditCustomer').$$render(
						$$result,
						{ resetForm },
						{},
						{}
					)}</form>`;
				}
			}
		)} <div class="table-container w-full"><table class="table bg-transparent"><thead data-svelte-h="svelte-y9c6ps"><tr class="svelte-1hdxu1t"><th></th> <th>ID</th> <th>First Name</th> <th>Last Name</th> <th>Email</th> <th>Phone</th> <th>Address</th> <th>City</th> <th>State</th> <th>Zip</th> <th>Trucks</th></tr></thead> <tbody>${
			$searchStore.filtered.length === 0
				? `<p class="p-4" data-svelte-h="svelte-1nc2q1t">No results found</p>`
				: `${each($searchStore.filtered, (customer) => {
						return `<tr class="svelte-1hdxu1t"><td><input class="checkbox" type="checkbox"></td> <td>${escape(
							customer.id
						)}</td> <td>${escape(customer.firstName)}</td> <td>${escape(
							customer.lastName
						)}</td> <td>${escape(customer.email)}</td> <td>${escape(
							customer.phone
						)}</td> <td>${escape(customer.address)}</td> <td>${escape(
							customer.city
						)}</td> <td>${escape(customer.state)}</td> <td>${escape(
							customer.zip
						)}</td> <td><!-- HTML_TAG_START -->${processTruckData(
							customer
						)}<!-- HTML_TAG_END --></td> </tr>`;
				  })}`
		}</tbody></table> </div>`;
	} while (!$$settled);
	$$unsubscribe_searchStore();
	$$unsubscribe_selectedCustomers();
	return $$rendered;
});
export { Page as default };
