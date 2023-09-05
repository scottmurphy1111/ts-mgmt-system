import {
	c as create_ssr_component,
	e as escape,
	a as add_attribute
} from '../../../../../chunks/ssr.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let truckData;
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	truckData = data.truckData;
	return `<div class="flex justify-between mb-4"><h3 class="h3">${escape(truckData?.year)} ${escape(
		truckData?.make
	)} ${escape(truckData?.model)} - VIN # ${escape(
		truckData?.vin
	)}</h3> <button class="btn btn-primary" type="button" data-svelte-h="svelte-1583lpd">Edit</button></div> <div class="card p-4"><section class="p-4 w-full"><form class="flex flex-col gap-4 mb-4" method="post" action="?/update"><h4 class="text-lg font-semibold mb-4" data-svelte-h="svelte-4hzb35">Personal Info</h4> <div class="flex gap-4 w-full"><label for="vin">VIN #:
					<input ${'disabled'} type="text" class="input"${add_attribute(
						'value',
						truckData?.vin,
						0
					)} name="vin"></label></div> <div class="flex gap-4 w-full"><label for="year">Year:
					<input ${'disabled'} type="text" class="input"${add_attribute(
						'value',
						truckData?.year,
						0
					)} name="year"></label> <label for="make">Make:
					<input ${'disabled'} type="text" class="input"${add_attribute(
						'value',
						truckData?.make,
						0
					)} name="make"></label> <label for="model">Model:
					<input ${'disabled'} type="text" class="input"${add_attribute(
						'value',
						truckData?.model,
						0
					)} name="model"></label></div> <div class="flex gap-4 w-full"><label for="startMiles">Start Miles:
					<input ${'disabled'} type="text" class="input"${add_attribute(
						'value',
						truckData?.startMiles,
						0
					)} name="startMiles"></label></div> ${``}</form> </section> <footer class="card-footer" data-svelte-h="svelte-r2lxbb">(footer)</footer></div>`;
});
export { Page as default };
