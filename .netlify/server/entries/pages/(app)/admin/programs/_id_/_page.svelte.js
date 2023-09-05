import { c as create_ssr_component, e as escape } from "../../../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { program } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><p>${escape(program?.name)}</p> <p>${escape(program?.description)}</p></div>`;
});
export {
  Page as default
};
