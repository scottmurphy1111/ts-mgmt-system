import { c as create_ssr_component, s as subscribe, d as setContext, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { c as createFormStore } from "../../../../../chunks/form.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup } from "../../../../../chunks/TabGroup.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/form2.js";
import "../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { customer } = data;
  const customerFormStore = createFormStore({ data: customer, status: "idle" });
  setContext("customerFormStore", customerFormStore);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="flex justify-between mb-4"><h3 class="h3">${escape($page.data.customer.firstName)} ${escape($page.data.customer.lastName)} - Cust Id# ${escape($page.data.customer.id)}</h3></div> ${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
    default: () => {
      return ` `;
    }
  })}`;
});
export {
  Page as default
};
