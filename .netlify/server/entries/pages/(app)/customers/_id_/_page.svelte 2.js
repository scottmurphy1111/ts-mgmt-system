import {
	c as create_ssr_component,
	h as setContext,
	e as escape,
	a as add_attribute,
	j as compute_slots,
	k as compute_rest_props,
	g as getContext,
	l as spread,
	p as escape_attribute_value,
	q as escape_object,
	s as subscribe,
	v as validate_component
} from '../../../../../chunks/ssr.js';
import { E as EditCustomer, c as createFormStore } from '../../../../../chunks/form.js';
import '../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js';
import { p as page } from '../../../../../chunks/stores.js';
const cBase$1 = 'space-y-4';
const cList = 'flex overflow-x-auto hide-scrollbar';
const cPanel = '';
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let classesBase;
	let classesList;
	let classesPanel;
	let $$slots = compute_slots(slots);
	let { justify = 'justify-start' } = $$props;
	let { border = 'border-b border-surface-400-500-token' } = $$props;
	let { active = 'border-b-2 border-surface-900-50-token' } = $$props;
	let { hover = 'hover:variant-soft' } = $$props;
	let { flex = 'flex-none' } = $$props;
	let { padding = 'px-4 py-2' } = $$props;
	let { rounded = 'rounded-tl-container-token rounded-tr-container-token' } = $$props;
	let { spacing = 'space-y-1' } = $$props;
	let { regionList = '' } = $$props;
	let { regionPanel = '' } = $$props;
	let { labelledby = '' } = $$props;
	let { panel = '' } = $$props;
	setContext('active', active);
	setContext('hover', hover);
	setContext('flex', flex);
	setContext('padding', padding);
	setContext('rounded', rounded);
	setContext('spacing', spacing);
	if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
		$$bindings.justify(justify);
	if ($$props.border === void 0 && $$bindings.border && border !== void 0)
		$$bindings.border(border);
	if ($$props.active === void 0 && $$bindings.active && active !== void 0)
		$$bindings.active(active);
	if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
	if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0) $$bindings.flex(flex);
	if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
		$$bindings.padding(padding);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
		$$bindings.rounded(rounded);
	if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
		$$bindings.spacing(spacing);
	if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
		$$bindings.regionList(regionList);
	if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
		$$bindings.regionPanel(regionPanel);
	if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
		$$bindings.labelledby(labelledby);
	if ($$props.panel === void 0 && $$bindings.panel && panel !== void 0) $$bindings.panel(panel);
	classesBase = `${cBase$1} ${$$props.class ?? ''}`;
	classesList = `${cList} ${justify} ${border} ${regionList}`;
	classesPanel = `${cPanel} ${regionPanel}`;
	return `  <div class="${
		'tab-group ' + escape(classesBase, true)
	}" data-testid="tab-group"> <div class="${
		'tab-list ' + escape(classesList, true)
	}" role="tablist"${add_attribute('aria-labelledby', labelledby, 0)}>${
		slots.default ? slots.default({}) : ``
	}</div>  ${
		$$slots.panel
			? `<div class="${'tab-panel ' + escape(classesPanel, true)}" role="tabpanel"${add_attribute(
					'aria-labelledby',
					panel,
					0
			  )} tabindex="0">${slots.panel ? slots.panel({}) : ``}</div>`
			: ``
	}</div>`;
});
const cBase = 'text-center cursor-pointer transition-colors duration-100';
const cInterface = '';
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let selected;
	let classesActive;
	let classesBase;
	let classesInterface;
	let classesTab;
	let $$restProps = compute_rest_props($$props, [
		'group',
		'name',
		'value',
		'title',
		'controls',
		'regionTab',
		'active',
		'hover',
		'flex',
		'padding',
		'rounded',
		'spacing'
	]);
	let $$slots = compute_slots(slots);
	let { group } = $$props;
	let { name } = $$props;
	let { value } = $$props;
	let { title = '' } = $$props;
	let { controls = '' } = $$props;
	let { regionTab = '' } = $$props;
	let { active = getContext('active') } = $$props;
	let { hover = getContext('hover') } = $$props;
	let { flex = getContext('flex') } = $$props;
	let { padding = getContext('padding') } = $$props;
	let { rounded = getContext('rounded') } = $$props;
	let { spacing = getContext('spacing') } = $$props;
	let elemInput;
	function prunedRestProps() {
		delete $$restProps.class;
		return $$restProps;
	}
	if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
		$$bindings.controls(controls);
	if ($$props.regionTab === void 0 && $$bindings.regionTab && regionTab !== void 0)
		$$bindings.regionTab(regionTab);
	if ($$props.active === void 0 && $$bindings.active && active !== void 0)
		$$bindings.active(active);
	if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
	if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0) $$bindings.flex(flex);
	if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
		$$bindings.padding(padding);
	if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
		$$bindings.rounded(rounded);
	if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
		$$bindings.spacing(spacing);
	selected = value === group;
	classesActive = selected ? active : hover;
	classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ''}`;
	classesInterface = `${cInterface} ${spacing}`;
	classesTab = `${regionTab}`;
	return `<label${add_attribute('class', classesBase, 0)}${add_attribute(
		'title',
		title,
		0
	)}> <div class="${'tab ' + escape(classesTab, true)}" data-testid="tab" role="tab"${add_attribute(
		'aria-controls',
		controls,
		0
	)}${add_attribute('aria-selected', selected, 0)}${add_attribute(
		'tabindex',
		selected ? 0 : -1,
		0
	)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
		[
			{ type: 'radio' },
			{ name: escape_attribute_value(name) },
			{ value: escape_attribute_value(value) },
			escape_object(prunedRestProps()),
			{ tabindex: '-1' }
		],
		{}
	)}${add_attribute('this', elemInput, 0)}${
		value === group ? add_attribute('checked', true, 1) : ''
	}></div>  <div class="${'tab-interface ' + escape(classesInterface, true)}">${
		$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``
	} <div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const DisplayCustomer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $customerFormStore, $$unsubscribe_customerFormStore;
	let customerFormStore = getContext('customerFormStore');
	$$unsubscribe_customerFormStore = subscribe(
		customerFormStore,
		(value) => ($customerFormStore = value)
	);
	$$unsubscribe_customerFormStore();
	return `<div class="flex gap-4 w-full"><label class="font-light" for="firstName">First Name:

		<p class="text-md font-semibold">${escape(
			$customerFormStore?.data?.firstName
		)}</p></label> <label class="font-light" for="lastName">Last Name:

		<p class="text-md font-semibold">${escape(
			$customerFormStore?.data?.lastName
		)}</p></label></div> <div class="flex gap-4 w-full"><label class="font-light" for="address">Address:

		<p class="text-md font-semibold">${escape(
			$customerFormStore?.data?.address
		)}</p></label></div> <div class="flex gap-4 w-full"><label class="font-light" for="city">City:

		<p class="text-md font-semibold">${escape(
			$customerFormStore?.data?.city
		)}</p></label> <label class="font-light" for="state">State:

		<p class="text-md font-semibold">${escape(
			$customerFormStore?.data?.state
		)}</p></label> <label class="font-light" for="zip">Zip:

		<p class="text-md font-semibold">${escape(
			$customerFormStore?.data?.zip
		)}</p></label></div> <div class="flex gap-4 w-full"><label class="font-light" for="email">Email:

		<p class="text-md font-semibold">${escape(
			$customerFormStore?.data?.email
		)}</p></label> <label class="font-light" for="phone">Phone:

		<p class="text-md font-semibold">${escape($customerFormStore?.data?.phone)}</p></label></div>   `;
});
const PersonalInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $customerFormStore, $$unsubscribe_customerFormStore;
	let $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => value);
	let { data } = $$props;
	let editCustomerForm;
	const { customerData } = data;
	const customerFormStore = createFormStore({ data: customerData, status: 'idle' });
	$$unsubscribe_customerFormStore = subscribe(
		customerFormStore,
		(value) => ($customerFormStore = value)
	);
	setContext('customerFormStore', customerFormStore);
	const resetForm = async () => {
		customerFormStore.set?.({ data: customerData, status: 'idle' });
	};
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$unsubscribe_customerFormStore();
	$$unsubscribe_page();
	return `<section class="p-4 w-full"><form class="flex flex-col gap-4 mb-4" method="post" action="?/update"${add_attribute(
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
					{ resetForm },
					{},
					{}
			  )}`
			: ``
	}</form> ${
		$customerFormStore?.status !== 'editing'
			? `<div class="flex justify-end gap-2"><button class="btn btn-primary" type="button" data-svelte-h="svelte-1583lpd">Edit</button></div>`
			: ``
	}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	let { data } = $$props;
	const { customerData } = data;
	const customerFormStore = createFormStore({ data: customerData, status: 'idle' });
	setContext('customerFormStore', customerFormStore);
	let tab = 0;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	let $$settled;
	let $$rendered;
	do {
		$$settled = true;
		$$rendered = `<div class="flex justify-between mb-4"><h3 class="h3">${escape(
			$page.data.customerData.firstName
		)} ${escape($page.data.customerData.lastName)} - Cust Id# ${escape(
			$page.data.customerData.id
		)}</h3></div> ${validate_component(TabGroup, 'TabGroup').$$render(
			$$result,
			{},
			{},
			{
				panel: () => {
					return `${
						tab === 0
							? `${validate_component(PersonalInfo, 'PersonalInfo').$$render(
									$$result,
									{ data },
									{},
									{}
							  )}`
							: `${
									tab === 1
										? `<h2 data-svelte-h="svelte-14eh9ve">Trucks</h2>`
										: `${
												tab === 2
													? `<h2 data-svelte-h="svelte-1lp3ihg">Lender</h2>`
													: `<h2 data-svelte-h="svelte-r6zq5o">Other</h2>`
										  }`
							  }`
					} `;
				},
				default: () => {
					return `${validate_component(Tab, 'Tab').$$render(
						$$result,
						{
							name: 'Personal Info',
							value: 0,
							group: tab
						},
						{
							group: ($$value) => {
								tab = $$value;
								$$settled = false;
							}
						},
						{
							default: () => {
								return `Personal Info`;
							}
						}
					)} ${validate_component(Tab, 'Tab').$$render(
						$$result,
						{
							name: 'Trucks Info',
							value: 1,
							group: tab
						},
						{
							group: ($$value) => {
								tab = $$value;
								$$settled = false;
							}
						},
						{
							default: () => {
								return `Trucks`;
							}
						}
					)} ${validate_component(Tab, 'Tab').$$render(
						$$result,
						{ name: 'Lender', value: 2, group: tab },
						{
							group: ($$value) => {
								tab = $$value;
								$$settled = false;
							}
						},
						{
							default: () => {
								return `Lender`;
							}
						}
					)} `;
				}
			}
		)}`;
	} while (!$$settled);
	$$unsubscribe_page();
	return $$rendered;
});
export { Page as default };
