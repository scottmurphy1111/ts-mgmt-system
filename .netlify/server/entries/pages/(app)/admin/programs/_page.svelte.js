import { c as create_ssr_component, s as subscribe, v as validate_component, a as add_attribute, b as each, e as escape } from "../../../../../chunks/ssr.js";
import { w as writable } from "../../../../../chunks/index2.js";
import { D as Dialog } from "../../../../../chunks/Dialog.js";
import { t as toastStore } from "../../../../../chunks/stores2.js";
import "../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { s as superForm } from "../../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let programs;
  let $selectedPrograms, $$unsubscribe_selectedPrograms;
  let dialog;
  let createNewProgramForm;
  let { data } = $$props;
  const selectedPrograms = writable([]);
  $$unsubscribe_selectedPrograms = subscribe(selectedPrograms, (value) => $selectedPrograms = value);
  const resetProgramList = async () => {
  };
  superForm(data.form, {
    // invalidateAll: true,
    resetForm: true,
    clearOnSubmit: "errors-and-message",
    taintedMessage: null,
    onSubmit: (data2) => {
    },
    onUpdate: (event) => {
    },
    onError: (errors2) => {
    },
    onUpdated: (event) => {
      if (!Object.keys(event.form.errors).length) {
        dialog.close();
        toastStore.trigger({
          message: event.form.message ? event.form.message : "Program Created Successfully!"
        });
        resetProgramList();
      }
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ programs } = data);
    $$rendered = `<div class="flex justify-between gap-2 mb-4"><h2 class="h2" data-svelte-h="svelte-7py7lk">Programs</h2> ${$selectedPrograms.length > 0 ? `<button class="btn variant-filled-error ml-auto" type="button" data-svelte-h="svelte-1e1mlwg">Delete Selected</button>` : ``} <button class="btn btn-primary" data-svelte-h="svelte-b0nwvo">Add New</button></div> ${validate_component(Dialog, "Dialog").$$render(
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
          return `<div class="p-8 w-96"><h3 class="h3 mb-8" data-svelte-h="svelte-sxu4cf">Add New Program</h3> <form class="flex flex-col gap-4 mb-4" method="post" action="?/create"${add_attribute("this", createNewProgramForm, 0)}><div class="flex flex-col gap-4" data-svelte-h="svelte-1y8owlj"><div class="flex flex-col gap-2"><label for="name">Name</label> <input class="input" type="text" name="name" id="name" required placeholder="Enter Name"></div> <div class="flex flex-col gap-2"><label for="description">Description</label> <textarea class="input" name="description" id="description" required placeholder="Enter Description"></textarea></div></div> <div class="flex justify-end gap-2"><div class="" data-svelte-h="svelte-134d65p"><button class="btn btn-primary" type="submit">Save</button></div> <div class=""><button class="btn variant-filled-error text-white" type="button" data-svelte-h="svelte-15h6t1i">Cancel</button></div></div></form></div>`;
        }
      }
    )} <div class="table-container w-full"><table class="table bg-transparent"><thead><tr><th><input class="checkbox" type="checkbox" ${$selectedPrograms.length === programs.length && $selectedPrograms.length > 0 ? "checked" : ""}></th> <th data-svelte-h="svelte-1e8uupr">Id</th> <th data-svelte-h="svelte-13ju7y1">Name</th> <th data-svelte-h="svelte-18juats">Description</th></tr></thead> <tbody>${each(programs, (program) => {
      return `<tr><td><input class="checkbox" type="checkbox" ${$selectedPrograms.includes(program.id) ? "checked" : ""}></td> <td>${escape(program.id)}</td> <td>${escape(program.name)}</td> <td>${escape(program.description)}</td> </tr>`;
    })}</tbody></table></div>`;
  } while (!$$settled);
  $$unsubscribe_selectedPrograms();
  return $$rendered;
});
export {
  Page as default
};
