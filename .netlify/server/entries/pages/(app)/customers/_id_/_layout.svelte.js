import { c as create_ssr_component, k as compute_rest_props, h as getContext, l as spread, e as escape, m as escape_attribute_value, o as escape_object, f as compute_slots, s as subscribe, d as setContext, v as validate_component } from "../../../../../chunks/ssr.js";
import { c as createFormStore } from "../../../../../chunks/form.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup } from "../../../../../chunks/TabGroup.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/form2.js";
import "../../../../../chunks/index.js";
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const TabAnchor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesActive;
  let classesBase;
  let classesInterface;
  let $$restProps = compute_rest_props($$props, ["selected", "controls", "active", "hover", "flex", "padding", "rounded", "spacing"]);
  let $$slots = compute_slots(slots);
  let { selected = false } = $$props;
  let { controls = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  return `<a${spread(
    [
      {
        class: "tab-anchor " + escape(classesBase, true)
      },
      {
        href: escape_attribute_value($$props.href)
      },
      escape_object(prunedRestProps()),
      {
        "aria-controls": escape_attribute_value(controls)
      },
      { "data-testid": "tab-anchor" }
    ],
    {}
  )}> <div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></a>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { customer } = data;
  const customerFormStore = createFormStore({ data: customer, status: "idle" });
  setContext("customerFormStore", customerFormStore);
  let tab = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex flex-col justify-between mb-4"><a class="text-primary-500 hover:text-primary-700" href="/customers" data-svelte-h="svelte-11v3h19">&lt; Back</a> <h3 class="h3">${escape($page.data.customer.firstName)} ${escape($page.data.customer.lastName)} - Cust Id# ${escape($page.data.customer.id)}</h3></div> ${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TabAnchor, "TabAnchor").$$render(
          $$result,
          {
            href: `/customers/${$page.data.customer.id}/personal-info`,
            selected: $page.url.pathname === `/customers/${$page.data.customer.id}/personal-info`,
            name: "Personal Info",
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
        )} ${validate_component(TabAnchor, "TabAnchor").$$render(
          $$result,
          {
            href: `/customers/${$page.data.customer.id}/trucks`,
            selected: $page.url.pathname === `/customers/${$page.data.customer.id}/trucks`,
            name: "Trucks Info",
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
        )}`;
      }
    })}  ${slots.default ? slots.default({}) : ``}          `;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Layout as default
};
