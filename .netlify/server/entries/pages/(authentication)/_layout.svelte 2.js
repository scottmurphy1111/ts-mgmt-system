import {
	c as create_ssr_component,
	v as validate_component,
	a as add_attribute,
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
import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
import '../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js';
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
			header: () => {
				return `${validate_component(AppBar, 'AppBar').$$render(
					$$result,
					{ shadow: 'shadow' },
					{},
					{
						trail: () => {
							return `${validate_component(LightSwitch, 'LightSwitch').$$render(
								$$result,
								{ 'ring-surface-100-900-token': true },
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
							return `<span></span>`;
						}
					}
				)} `;
			},
			default: () => {
				return `<div class="h-full w-full flex flex-col justify-start items-center p-12"><div class="flex gap-4 justify-center items-center mb-8" data-svelte-h="svelte-f6n2rt"><img${add_attribute(
					'src',
					logo,
					0
				)} alt="ts-logo" class="w-full block dark:hidden"> <img${add_attribute(
					'src',
					logoDark,
					0
				)} alt="ts-logo" class="w-full hidden dark:block"></div> ${
					data.name
						? `<h3 class="h3">Welcome ${escape(
								`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`
						  )}</h3>`
						: ``
				} ${slots.default ? slots.default({}) : ``}</div>`;
			}
		}
	)}&gt;`;
});
export { Layout as default };
