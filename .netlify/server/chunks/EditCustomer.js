import { c as create_ssr_component, h as getContext, s as subscribe, a as add_attribute, e as escape, b as each } from "./ssr.js";
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
  let $errors, $$unsubscribe_errors;
  let customerFormStore = getContext("customerFormStore");
  $$unsubscribe_customerFormStore = subscribe(customerFormStore, (value) => $customerFormStore = value);
  let { resetForm } = $$props;
  let { errors } = $$props;
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let phoneInput;
  if ($$props.resetForm === void 0 && $$bindings.resetForm && resetForm !== void 0)
    $$bindings.resetForm(resetForm);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$unsubscribe_customerFormStore();
  $$unsubscribe_errors();
  return `<div class="flex gap-4 w-full"><label class="font-light" for="firstName">First Name:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.firstName ?? "", 0)} name="firstName"> ${$errors.firstName ? `<p class="text-error-500">${escape($errors.firstName)}</p>` : ``}</label> <label class="font-light" for="lastName">Last Name:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.lastName ?? "", 0)} name="lastName"> ${$errors.lastName ? `<p class="text-error-500">${escape($errors.lastName)}</p>` : ``}</label> <label class="font-light" for="companyName">Company Name:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.companyName ?? "", 0)} name="companyName"> ${$errors.companyName ? `<p class="text-error-500">${escape($errors.companyName)}</p>` : ``}</label></div> <div class="flex gap-4 w-full"><label class="font-light" for="address">Address:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.address ?? "", 0)} name="address"> ${$errors.address ? `<p class="text-error-500">${escape($errors.address)}</p>` : ``}</label></div> <div class="flex gap-4 w-full"><label class="font-light" for="city">City:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.city ?? "", 0)} name="city"> ${$errors.city ? `<p class="text-error-500">${escape($errors.city)}</p>` : ``}</label> <label class="font-light" for="state">State:
		<select class="select" name="state"><option value="" selected disabled hidden data-svelte-h="svelte-18dlix6">Select State</option>${each(states, (state) => {
    return `<option${add_attribute("value", state.abbreviation, 0)}>${escape(state.name)}</option>`;
  })}</select> ${$errors.state ? `<p class="text-error-500">${escape($errors.state)}</p>` : ``}</label> <label class="font-light" for="zip">Zip:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="text" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.zip ?? "", 0)} name="zip"> ${$errors.zip ? `<p class="text-error-500">${escape($errors.zip)}</p>` : ``}</label></div> <div class="flex gap-4 w-full"><label class="font-light" for="email">Email:
		<input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="email" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.email ?? "", 0)} name="email"> ${$errors.email ? `<p class="text-error-500">${escape($errors.email)}</p>` : ``}</label> <label class="font-light" for="phone">Phone: <small data-svelte-h="svelte-fjt7zo">XXX-XXX-XXXX</small> <input ${$customerFormStore?.status !== "editing" ? "disabled" : ""} type="tel" class="input font-semibold"${add_attribute("value", $customerFormStore?.data?.phone ?? "", 0)} name="phone" maxlength="12"${add_attribute("this", phoneInput, 0)}> ${$errors.phone ? `<p class="text-error-500">${escape($errors.phone)}</p>` : ``}</label></div> `;
});
export {
  EditCustomer as E
};
