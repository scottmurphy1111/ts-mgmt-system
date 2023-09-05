import {
	c as create_ssr_component,
	s as subscribe,
	d as each,
	a as add_attribute,
	v as validate_component,
	m as missing_component,
	e as escape
} from '../../../chunks/ssr.js';
import {
	s as storePopup,
	T as Toast,
	A as AppShell,
	a as AppBar,
	L as LightSwitch,
	U as UserSettings,
	l as logo,
	b as logoDark
} from '../../../chunks/ts-logo-dark.js';
import '../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js';
import { P as Producers } from '../../../chunks/producers.js';
import { p as page } from '../../../chunks/stores.js';
import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
const Customers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7C8.93375 7 10.5 5.43375 10.5 3.5C10.5 1.56625 8.93375 0 7 0C5.06625 0 3.5 1.56625 3.5 3.5C3.5 5.43375 5.06625 7 7 7ZM7 8.75C4.66375 8.75 0 9.9225 0 12.25V14H14V12.25C14 9.9225 9.33625 8.75 7 8.75Z" fill="currentColor"></path></svg>`;
});
const Trucks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="113" height="79" viewBox="0 0 113 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M109.411 36.1534L99.1094 25.8516C96.9962 23.7384 94.1258 22.5585 91.132 22.5585H84.5283V5.63522C84.5283 2.51824 82.01 0 78.8931 0H5.63522C2.51824 0 0 2.51824 0 5.63522V64.805C0 72.5887 6.3044 78.8931 14.088 78.8931C18.7195 78.8931 22.7874 76.6214 25.3585 73.1874C27.9295 76.639 31.9975 78.8931 36.6289 78.8931C44.4126 78.8931 50.717 72.5887 50.717 64.805C50.717 63.8365 50.6113 62.9031 50.4352 61.9874H79.1748C78.9811 62.9031 78.8931 63.8365 78.8931 64.805C78.8931 72.5887 85.1975 78.8931 92.9811 78.8931C100.765 78.8931 107.069 72.5887 107.069 64.805C107.069 63.8365 106.963 62.9031 106.787 61.9874H109.887C111.436 61.9874 112.704 60.7195 112.704 59.1698V44.1132C112.704 41.1195 111.524 38.2667 109.411 36.1534ZM14.088 70.4402C10.9887 70.4402 8.45283 67.9044 8.45283 64.805C8.45283 61.7056 10.9887 59.1698 14.088 59.1698C17.1874 59.1698 19.7233 61.7056 19.7233 64.805C19.7233 67.9044 17.1874 70.4402 14.088 70.4402ZM36.6289 70.4402C33.5295 70.4402 30.9937 67.9044 30.9937 64.805C30.9937 61.7056 33.5295 59.1698 36.6289 59.1698C39.7283 59.1698 42.2641 61.7056 42.2641 64.805C42.2641 67.9044 39.7283 70.4402 36.6289 70.4402ZM84.5283 30.9937H91.132C91.8893 30.9937 92.5937 31.2931 93.122 31.8214L100.747 39.4465H84.5283V30.9937ZM92.9811 70.4402C89.8817 70.4402 87.3459 67.9044 87.3459 64.805C87.3459 61.7056 89.8817 59.1698 92.9811 59.1698C96.0805 59.1698 98.6163 61.7056 98.6163 64.805C98.6163 67.9044 96.0805 70.4402 92.9811 70.4402Z" fill="currentColor"></path></svg>`;
});
const Programs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.52889 0.487005L4.74357 4.10687L0.749139 4.68922C0.0328215 4.79311 -0.254252 5.67621 0.265215 6.182L3.15509 8.99806L2.47158 12.9761C2.34855 13.6951 3.10588 14.2337 3.74018 13.8975L7.31356 12.0192L10.8869 13.8975C11.5212 14.231 12.2786 13.6951 12.1555 12.9761L11.472 8.99806L14.3619 6.182C14.8814 5.67621 14.5943 4.79311 13.878 4.68922L9.88356 4.10687L8.09823 0.487005C7.77835 -0.158228 6.85151 -0.16643 6.52889 0.487005Z" fill="currentColor"></path></svg>`;
});
const SalesReps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.28571 5C5.66741 5 6.78571 3.8817 6.78571 2.5C6.78571 1.1183 5.66741 0 4.28571 0C2.90402 0 1.78571 1.1183 1.78571 2.5C1.78571 3.8817 2.90402 5 4.28571 5ZM6 5.71429H5.81473C5.35045 5.9375 4.83482 6.07143 4.28571 6.07143C3.73661 6.07143 3.22321 5.9375 2.7567 5.71429H2.57143C1.15179 5.71429 0 6.86607 0 8.28572V8.92857C0 9.52009 0.479911 10 1.07143 10H7.5C8.09152 10 8.57143 9.52009 8.57143 8.92857V8.28572C8.57143 6.86607 7.41964 5.71429 6 5.71429ZM10.7143 5C11.8973 5 12.8571 4.04018 12.8571 2.85714C12.8571 1.67411 11.8973 0.714286 10.7143 0.714286C9.53125 0.714286 8.57143 1.67411 8.57143 2.85714C8.57143 4.04018 9.53125 5 10.7143 5ZM11.7857 5.71429H11.7009C11.3906 5.82143 11.0625 5.89286 10.7143 5.89286C10.3661 5.89286 10.0379 5.82143 9.72768 5.71429H9.64286C9.1875 5.71429 8.76786 5.84598 8.39955 6.05804C8.9442 6.64509 9.28571 7.42411 9.28571 8.28572V9.14286C9.28571 9.19197 9.27455 9.23884 9.27232 9.28571H13.2143C13.8058 9.28571 14.2857 8.8058 14.2857 8.21429C14.2857 6.83259 13.1674 5.71429 11.7857 5.71429Z" fill="currentColor"></path></svg>`;
});
const Reports = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.553 7.87498H8.01015L12.3676 12.1962C12.5341 12.3613 12.8082 12.3747 12.9794 12.2148C14.0465 11.2178 14.7805 9.87383 14.9959 8.36307C15.0328 8.1044 14.8164 7.87498 14.553 7.87498ZM14.1166 6.10309C13.8894 2.83657 11.2572 0.226304 7.96327 0.000988764C7.7118 -0.016238 7.50004 0.194038 7.50004 0.443962V6.56247H13.6701C13.9222 6.56247 14.1339 6.35246 14.1166 6.10309ZM6.17651 7.87498V1.38651C6.17651 1.12538 5.94517 0.910725 5.6846 0.947366C2.39867 1.40784 -0.112991 4.25463 0.00392054 7.66635C0.124141 11.1702 3.16632 14.0435 6.70123 13.9995C8.09093 13.9823 9.37503 13.5382 10.4308 12.7955C10.6486 12.6424 10.663 12.3244 10.4741 12.1371L6.17651 7.87498Z" fill="currentColor"></path></svg>`;
});
const Aside_svelte_svelte_type_style_lang = '';
const css = {
	code: "a.svelte-1wvtq2i:before{content:'';display:block;width:5px;height:24px;margin-left:-1rem;margin-right:calc(1rem - 5px)}.active.svelte-1wvtq2i{color:rgba(var(--color-primary-500) / 1);font-weight:600}.active.svelte-1wvtq2i:before{background-color:rgba(var(--color-primary-500) / 1)}",
	map: null
};
const Aside = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $page, $$unsubscribe_page;
	$$unsubscribe_page = subscribe(page, (value) => ($page = value));
	let items = [
		{
			icon: Customers,
			title: 'Customers',
			link: '/customers'
		},
		{
			icon: Trucks,
			title: 'Trucks',
			link: '/trucks'
		},
		{
			icon: Producers,
			title: 'Producers',
			link: '/producers'
		},
		{
			icon: Programs,
			title: 'Programs',
			link: '/programs'
		},
		{
			icon: SalesReps,
			title: 'Sales Reps',
			link: '/sales-reps'
		},
		{
			icon: Reports,
			title: 'Reports',
			link: '/reports'
		}
	];
	$$result.css.add(css);
	$$unsubscribe_page();
	return `<div class="shadow-md w-64 h-full p-4 bg-white dark:bg-surface-900 z-10"><ul class="m-0 p-0 flex flex-col gap-2 list-none">${each(
		items,
		(item) => {
			return `<li><a class="${[
				'inline-flex h-8 w-full gap-2 items-center svelte-1wvtq2i',
				$page.url.pathname.includes(item.link) ? 'active' : ''
			]
				.join(' ')
				.trim()}"${add_attribute('href', item.link, 0)}>${validate_component(
				item.icon || missing_component,
				'svelte:component'
			).$$render($$result, {}, {}, {})} <span class="text-style-md title">${escape(
				item.title
			)}</span></a> </li>`;
		}
	)}</ul> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	storePopup.set({
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	});
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	return `${validate_component(Toast, 'Toast').$$render($$result, {}, {}, {})} ${validate_component(
		AppShell,
		'AppShell'
	).$$render(
		$$result,
		{},
		{},
		{
			sidebarLeft: () => {
				return `${validate_component(Aside, 'Aside').$$render($$result, {}, {}, {})} `;
			},
			header: () => {
				return `${validate_component(AppBar, 'AppBar').$$render(
					$$result,
					{
						shadow: 'shadow',
						background: 'bg-white dark:bg-surface-900'
					},
					{},
					{
						trail: () => {
							return `${validate_component(LightSwitch, 'LightSwitch').$$render(
								$$result,
								{},
								{},
								{}
							)} ${validate_component(UserSettings, 'UserSettings').$$render(
								$$result,
								{ userData: data },
								{},
								{}
							)} `;
						},
						lead: () => {
							return `<a class="w-48" href="/" data-svelte-h="svelte-1s8flk5"><img class="block dark:hidden"${add_attribute(
								'src',
								logo,
								0
							)} alt="ts-logo"> <img class="hidden dark:block"${add_attribute(
								'src',
								logoDark,
								0
							)} alt="ts-logo-dark"></a> `;
						}
					}
				)} `;
			},
			default: () => {
				return `<div class="p-4">${slots.default ? slots.default({}) : ``}</div>`;
			}
		}
	)}`;
});
export { Layout as default };
