import {
	c as create_ssr_component,
	s as subscribe,
	b as each,
	a as add_attribute
} from '../../../../../../chunks/ssr.js';
import { c as createFormStore } from '../../../../../../chunks/form.js';
import { t as toastStore } from '../../../../../../chunks/stores2.js';
import '../../../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js';
import { s as superForm } from '../../../../../../chunks/index3.js';
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $truckFormStore, $$unsubscribe_truckFormStore;
	let { data } = $$props;
	const { trucks } = data;
	const truckFormStore = createFormStore({ data: trucks, status: 'idle' });
	$$unsubscribe_truckFormStore = subscribe(truckFormStore, (value) => ($truckFormStore = value));
	superForm(data.form, {
		invalidateAll: true,
		resetForm: true,
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null,
		onSubmit: (data2) => {},
		onUpdate: (event) => {},
		onError: (errors2) => {},
		onUpdated: (event) => {
			if (!Object.keys(event.form.errors).length) {
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'Customer Updated Successfully!'
				});
				truckFormStore.updateFormData(event.form.data);
				truckFormStore.updateStatus?.('idle');
			}
		}
	});
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	{
		console.log('trucks', trucks);
	}
	{
		console.log('trucks store', $truckFormStore);
	}
	$$unsubscribe_truckFormStore();
	return `<div class="flex p-4 w-full items-start">${each($truckFormStore.data, (truck) => {
		return `<form class="flex flex-col gap-4 mb-4" method="post" action="?/updateTruckInfo"><div class="flex flex-col gap-4"><input hidden type="text" name="id"${add_attribute(
			'value',
			truck.id,
			0
		)}> <label class="font-light" for="vin">VIN:
					<input type="text" class="input font-semibold"${add_attribute(
						'value',
						truck.vin ?? '',
						0
					)} name="vin"></label> <label class="font-light" for="year">Year:
					<input type="text" class="input font-semibold"${add_attribute(
						'value',
						truck.year ?? '',
						0
					)} name="year"></label> <label class="font-light" for="make">Make:
					<input type="text" class="input font-semibold"${add_attribute(
						'value',
						truck.make ?? '',
						0
					)} name="make"></label> <label class="font-light" for="model">Model:
					<input type="text" class="input font-semibold"${add_attribute(
						'value',
						truck.model ?? '',
						0
					)} name="model"></label> <label class="font-light" for="startMiles">Start Miles:
					<input type="text" class="input font-semibold"${add_attribute(
						'value',
						truck.startMiles ?? '',
						0
					)} name="startMiles"></label> <label class="font-light" for="dutyType">Duty Type:
					<select class="select" name="dutyType"><option value="MEDIUM" data-svelte-h="svelte-sn7vhg">Medium Duty</option><option value="HEAVY" data-svelte-h="svelte-199ajam">Heavy Duty</option></select> </label></div> <div class="flex justify-end gap-2 flex-auto" data-svelte-h="svelte-191ku2w"><button type="submit" class="btn btn-primary">Save</button></div> </form>`;
	})}</div>`;
});
export { Page as default };
