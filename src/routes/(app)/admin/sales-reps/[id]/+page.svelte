<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const { salesRep } = data;

	const toastStore = getToastStore();

	const { form, errors, enhance, delayed } = superForm(data.form, {
		invalidateAll: true,
		resetForm: true,
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null,
		onSubmit: (data) => {
			// console.log('🙆‍♀️', data);
		},
		onUpdate: (event) => {},
		onError: (errors) => {
			// toastStore.trigger({
			// 	message: errors.result.error.message
			// });
		},
		onUpdated: (event) => {
			// console.log('🙆‍♀️', event.form);
			if (!Object.keys(event.form.errors).length) {
				// dialog.close();
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'SalesRep Updated Successfully!'
				});
				goto('/admin/sales-reps');
			}
		}
	});
</script>

<div class="flex flex-col justify-between mb-4">
	<h3 class="h3">
		{$page.data.salesRep.firstName}
		{$page.data.salesRep.lastName} - SalesRep Id# {$page.data.salesRep.id}
	</h3>
</div>
<form
	class="flex flex-col gap-4 mb-4 flex-auto"
	method="post"
	action="?/updateSalesRep"
	use:enhance
>
	<label class="label" for="firstName">
		First Name
		<input class="input" type="text" name="firstName" value={salesRep?.firstName} />
	</label>
	<label class="label" for="lastName">
		First Name
		<input class="input" type="text" name="lastName" value={salesRep?.lastName} />
	</label>
	<label class="label" for="address">
		Address
		<input class="input" type="text" name="address" value={salesRep?.address} />
	</label>
	<label class="label" for="city">
		City
		<input class="input" type="text" name="city" value={salesRep?.city} />
	</label>
	<label class="label" for="state">
		State
		<input class="input" type="text" name="state" value={salesRep?.state} />
	</label>
	<label class="label" for="zip">
		Zip
		<input class="input" type="text" name="zip" value={salesRep?.zip} />
	</label>
	<label class="label" for="country">
		Country
		<input class="input" type="text" name="country" value={salesRep?.country} />
	</label>
	<label class="label" for="email">
		Email
		<input class="input" type="text" name="email" value={salesRep?.email} />
	</label>
	<label class="label" for="phone">
		Phone
		<input class="input" type="text" name="phone" value={salesRep?.phone} />
	</label>
	<label class="label" for="Company">
		Company
		<input class="input" type="text" name="company" value={salesRep?.company} />
	</label>
	<label class="label" for="notes">
		Notes
		<textarea class="textarea" name="notes" value={salesRep?.notes} />
	</label>
	<div class="flex justify-end gap-2">
		<button class="btn btn-primary" type="submit">Save</button>
		<button
			class="btn variant-filled-error text-white"
			type="button"
			on:click={() => goto('/admin/sales-reps')}>Cancel</button
		>
	</div>
</form>
