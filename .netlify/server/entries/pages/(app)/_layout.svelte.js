import {
	c as create_ssr_component,
	s as subscribe,
	b as each,
	a as add_attribute,
	v as validate_component,
	p as missing_component,
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
import { C as Customers, P as Programs, S as SalesReps } from '../../../chunks/salesReps.js';
import { P as Producers } from '../../../chunks/producers.js';
import { p as page } from '../../../chunks/stores.js';
import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
const Trucks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="113" height="79" viewBox="0 0 113 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M109.411 36.1534L99.1094 25.8516C96.9962 23.7384 94.1258 22.5585 91.132 22.5585H84.5283V5.63522C84.5283 2.51824 82.01 0 78.8931 0H5.63522C2.51824 0 0 2.51824 0 5.63522V64.805C0 72.5887 6.3044 78.8931 14.088 78.8931C18.7195 78.8931 22.7874 76.6214 25.3585 73.1874C27.9295 76.639 31.9975 78.8931 36.6289 78.8931C44.4126 78.8931 50.717 72.5887 50.717 64.805C50.717 63.8365 50.6113 62.9031 50.4352 61.9874H79.1748C78.9811 62.9031 78.8931 63.8365 78.8931 64.805C78.8931 72.5887 85.1975 78.8931 92.9811 78.8931C100.765 78.8931 107.069 72.5887 107.069 64.805C107.069 63.8365 106.963 62.9031 106.787 61.9874H109.887C111.436 61.9874 112.704 60.7195 112.704 59.1698V44.1132C112.704 41.1195 111.524 38.2667 109.411 36.1534ZM14.088 70.4402C10.9887 70.4402 8.45283 67.9044 8.45283 64.805C8.45283 61.7056 10.9887 59.1698 14.088 59.1698C17.1874 59.1698 19.7233 61.7056 19.7233 64.805C19.7233 67.9044 17.1874 70.4402 14.088 70.4402ZM36.6289 70.4402C33.5295 70.4402 30.9937 67.9044 30.9937 64.805C30.9937 61.7056 33.5295 59.1698 36.6289 59.1698C39.7283 59.1698 42.2641 61.7056 42.2641 64.805C42.2641 67.9044 39.7283 70.4402 36.6289 70.4402ZM84.5283 30.9937H91.132C91.8893 30.9937 92.5937 31.2931 93.122 31.8214L100.747 39.4465H84.5283V30.9937ZM92.9811 70.4402C89.8817 70.4402 87.3459 67.9044 87.3459 64.805C87.3459 61.7056 89.8817 59.1698 92.9811 59.1698C96.0805 59.1698 98.6163 61.7056 98.6163 64.805C98.6163 67.9044 96.0805 70.4402 92.9811 70.4402Z" fill="currentColor"></path></svg>`;
});
const Reports = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.553 7.87498H8.01015L12.3676 12.1962C12.5341 12.3613 12.8082 12.3747 12.9794 12.2148C14.0465 11.2178 14.7805 9.87383 14.9959 8.36307C15.0328 8.1044 14.8164 7.87498 14.553 7.87498ZM14.1166 6.10309C13.8894 2.83657 11.2572 0.226304 7.96327 0.000988764C7.7118 -0.016238 7.50004 0.194038 7.50004 0.443962V6.56247H13.6701C13.9222 6.56247 14.1339 6.35246 14.1166 6.10309ZM6.17651 7.87498V1.38651C6.17651 1.12538 5.94517 0.910725 5.6846 0.947366C2.39867 1.40784 -0.112991 4.25463 0.00392054 7.66635C0.124141 11.1702 3.16632 14.0435 6.70123 13.9995C8.09093 13.9823 9.37503 13.5382 10.4308 12.7955C10.6486 12.6424 10.663 12.3244 10.4741 12.1371L6.17651 7.87498Z" fill="currentColor"></path></svg>`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8212 9.06955L12.5651 8.34423C12.6919 7.66018 12.6919 6.95844 12.5651 6.27439L13.8212 5.54907C13.9657 5.46651 14.0305 5.2955 13.9833 5.13628C13.6561 4.08662 13.0988 3.13721 12.3705 2.34702C12.2585 2.22613 12.0757 2.19665 11.9342 2.2792L10.6781 3.00453C10.1503 2.55046 9.54294 2.19959 8.88543 1.96961V0.521909C8.88543 0.356794 8.77044 0.212318 8.60827 0.176936C7.52618 -0.0648389 6.41755 -0.053045 5.38853 0.176936C5.22636 0.212318 5.11137 0.356794 5.11137 0.521909V1.97256C4.45681 2.20549 3.84942 2.55636 3.31869 3.00748L2.06559 2.28215C1.92112 2.19959 1.74126 2.22613 1.62922 2.34997C0.900941 3.13721 0.343678 4.08662 0.0163971 5.13923C-0.0337271 5.29845 0.034088 5.46946 0.178563 5.55202L1.43462 6.27734C1.30783 6.96139 1.30783 7.66313 1.43462 8.34718L0.178563 9.0725C0.034088 9.15506 -0.0307786 9.32607 0.0163971 9.48529C0.343678 10.5349 0.900941 11.4844 1.62922 12.2746C1.74126 12.3954 1.92406 12.4249 2.06559 12.3424L3.32164 11.617C3.84942 12.0711 4.45681 12.422 5.11432 12.652V14.1026C5.11432 14.2677 5.22931 14.4122 5.39148 14.4476C6.47357 14.6894 7.5822 14.6776 8.61122 14.4476C8.77338 14.4122 8.88837 14.2677 8.88837 14.1026V12.652C9.54294 12.419 10.1503 12.0682 10.681 11.617L11.9371 12.3424C12.0816 12.4249 12.2614 12.3984 12.3735 12.2746C13.1018 11.4873 13.659 10.5379 13.9863 9.48529C14.0305 9.32312 13.9657 9.15211 13.8212 9.06955ZM6.9984 9.66809C5.69812 9.66809 4.63961 8.60959 4.63961 7.30931C4.63961 6.00903 5.69812 4.95053 6.9984 4.95053C8.29868 4.95053 9.35718 6.00903 9.35718 7.30931C9.35718 8.60959 8.29868 9.66809 6.9984 9.66809Z" fill="currentColor"></path></svg>`;
});
const Aside_svelte_svelte_type_style_lang = '';
const css = {
	code: "a.svelte-1jxavhn:before{content:'';display:block;width:5px;height:24px;margin-left:-1rem;margin-right:calc(1rem - 5px)}.active.svelte-1jxavhn{color:rgba(var(--color-primary-500) / 1);font-weight:600}.active.svelte-1jxavhn:before{background-color:rgba(var(--color-primary-500) / 1)}",
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
	return `<div class="shadow-md w-64 h-full p-4 bg-white dark:bg-surface-900 z-10"><ul class="m-0 p-0 flex flex-col gap-2 list-none h-full">${each(
		items,
		(item) => {
			return `<li><a class="${[
				'inline-flex h-8 w-full gap-2 items-center svelte-1jxavhn',
				$page.url.pathname.startsWith(item.link) ? 'active' : ''
			]
				.join(' ')
				.trim()}"${add_attribute('href', item.link, 0)}>${validate_component(
				item.icon || missing_component,
				'svelte:component'
			).$$render($$result, {}, {}, {})} <span class="text-style-md title">${escape(
				item.title
			)}</span></a> </li>`;
		}
	)} ${
		$page.data.role === 'ADMIN'
			? `<li class="mt-auto"><a class="${[
					'inline-flex h-8 w-full gap-2 items-center svelte-1jxavhn',
					$page.url.pathname.startsWith('/admin') ? 'active' : ''
			  ]
					.join(' ')
					.trim()}" href="/admin">${validate_component(
					Settings || missing_component,
					'svelte:component'
			  ).$$render(
					$$result,
					{},
					{},
					{}
			  )} <span class="text-style-md title" data-svelte-h="svelte-obqz9h">Admin</span></a></li>`
			: ``
	}</ul> </div>`;
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
								{},
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
				return `<div class="p-8">${slots.default ? slots.default({}) : ``}</div>`;
			}
		}
	)}`;
});
export { Layout as default };
