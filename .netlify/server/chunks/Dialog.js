import { c as create_ssr_component, a as add_attribute } from './ssr.js';
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { dialog } = $$props;
	if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
		$$bindings.dialog(dialog);
	return `<dialog class="rounded-md shadow-md"${add_attribute('this', dialog, 0)}>${
		slots.default ? slots.default({}) : ``
	}</dialog>`;
});
export { Dialog as D };
