import { c as create_ssr_component, g as getContext, s as subscribe, a as add_attribute, d as each, e as escape } from "./ssr.js";
import { w as writable } from "./index2.js";
const states = [
  {
    abbreviation: "AL",
    name: "Alabama"
  },
  {
    abbreviation: "AK",
    name: "Alaska"
  },
  {
    abbreviation: "AZ",
    name: "Arizona"
  },
  {
    abbreviation: "AR",
    name: "Arkansas"
  },
  {
    abbreviation: "CA",
    name: "California"
  },
  {
    abbreviation: "CO",
    name: "Colorado"
  },
  {
    abbreviation: "CT",
    name: "Connecticut"
  },
  {
    abbreviation: "DE",
    name: "Delaware"
  },
  {
    abbreviation: "DC",
    name: "District Of Columbia"
  },
  {
    abbreviation: "FL",
    name: "Florida"
  },
  {
    abbreviation: "GA",
    name: "Georgia"
  },
  {
    abbreviation: "HI",
    name: "Hawaii"
  },
  {
    abbreviation: "ID",
    name: "Idaho"
  },
  {
    abbreviation: "IL",
    name: "Illinois"
  },
  {
    abbreviation: "IN",
    name: "Indiana"
  },
  {
    abbreviation: "IA",
    name: "Iowa"
  },
  {
    abbreviation: "KS",
    name: "Kansas"
  },
  {
    abbreviation: "KY",
    name: "Kentucky"
  },
  {
    abbreviation: "LA",
    name: "Louisiana"
  },
  {
    abbreviation: "ME",
    name: "Maine"
  },
  {
    abbreviation: "MD",
    name: "Maryland"
  },
  {
    abbreviation: "MA",
    name: "Massachusetts"
  },
  {
    abbreviation: "MI",
    name: "Michigan"
  },
  {
    abbreviation: "MN",
    name: "Minnesota"
  },
  {
    abbreviation: "MS",
    name: "Mississippi"
  },
  {
    abbreviation: "MO",
    name: "Missouri"
  },
  {
    abbreviation: "MT",
    name: "Montana"
  },
  {
    abbreviation: "NE",
    name: "Nebraska"
  },
  {
    abbreviation: "NV",
    name: "Nevada"
  },
  {
    abbreviation: "NH",
    name: "New Hampshire"
  },
  {
    abbreviation: "NJ",
    name: "New Jersey"
  },
  {
    abbreviation: "NM",
    name: "New Mexico"
  },
  {
    abbreviation: "NY",
    name: "New York"
  },
  {
    abbreviation: "NC",
    name: "North Carolina"
  },
  {
    abbreviation: "ND",
    name: "North Dakota"
  },
  {
    abbreviation: "OH",
    name: "Ohio"
  },
  {
    abbreviation: "OK",
    name: "Oklahoma"
  },
  {
    abbreviation: "OR",
    name: "Oregon"
  },
  {
    abbreviation: "PA",
    name: "Pennsylvania"
  },
  {
    abbreviation: "RI",
    name: "Rhode Island"
  },
  {
    abbreviation: "SC",
    name: "South Carolina"
  },
  {
    abbreviation: "SD",
    name: "South Dakota"
  },
  {
    abbreviation: "TN",
    name: "Tennessee"
  },
  {
    abbreviation: "TX",
    name: "Texas"
  },
  {
    abbreviation: "UT",
    name: "Utah"
  },
  {
    abbreviation: "VT",
    name: "Vermont"
  },
  {
    abbreviation: "VA",
    name: "Virginia"
  },
  {
    abbreviation: "WA",
    name: "Washington"
  },
  {
    abbreviation: "WV",
    name: "West Virginia"
  },
  {
    abbreviation: "WI",
    name: "Wisconsin"
  },
  {
    abbreviation: "WY",
    name: "Wyoming"
  }
];
const EditCustomer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $customerFormStore, $$unsubscribe_customerFormStore;
  let customerFormStore = getContext("customerFormStore");
  $$unsubscribe_customerFormStore = subscribe(customerFormStore, (value) => $customerFormStore = value);
  let { resetForm } = $$props;
  if ($$props.resetForm === void 0 && $$bindings.resetForm && resetForm !== void 0)
    $$bindings.resetForm(resetForm);
  $$unsubscribe_customerFormStore();
  return `<div class="flex gap-4 w-full"><label class="font-light" for="firstName">First Name:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.firstName ?? "", 0)} name="firstName"></label> <label class="font-light" for="lastName">Last Name:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.lastName ?? "", 0)} name="lastName"></label></div> <div class="flex gap-4 w-full"><label class="font-light" for="address">Address:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.address ?? "", 0)} name="address"></label></div> <div class="flex gap-4 w-full"><label class="font-light" for="city">City:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.city ?? "", 0)} name="city"></label> <label class="font-light" for="state">State:
		<select class="select" name="state"><option value="" selected disabled hidden data-svelte-h="svelte-18dlix6">Select State</option>${each(states, (state) => {
    return `<option${add_attribute("value", state.abbreviation, 0)}>${escape(state.name)}</option>`;
  })}</select> </label> <label class="font-light" for="zip">Zip:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.zip ?? "", 0)} name="zip"></label></div> <div class="flex gap-4 w-full"><label class="font-light" for="email">Email:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.email ?? "", 0)} name="email"></label> <label class="font-light" for="phone">Phone:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.phone ?? "", 0)} name="phone"></label></div> ${$customerFormStore?.status === "editing" ? `<div class="flex justify-end gap-2"><div class="" data-svelte-h="svelte-ub5f6p"><button class="btn btn-primary" type="submit">Save</button></div> <div class=""><button class="btn variant-filled-error text-white" type="button" data-svelte-h="svelte-tee3ei">Cancel</button></div></div>` : ``}`;
});
const createFormStore = ({
  data = {},
  status = "idle"
}) => {
  const { subscribe: subscribe2, set, update } = writable({
    data,
    status
  });
  return {
    subscribe: subscribe2,
    set,
    updateFormData: (newVals) => {
      update((prev) => {
        return {
          ...prev,
          data: {
            ...prev.data,
            ...newVals
          }
        };
      });
    },
    updateStatus: (status2) => {
      update((prev) => {
        return {
          ...prev,
          status: status2
        };
      });
    },
    resetFormData: () => {
      update((prev) => {
        return {
          ...prev,
          status: "idle"
        };
      });
    }
  };
};
export {
  EditCustomer as E,
  createFormStore as c
};
