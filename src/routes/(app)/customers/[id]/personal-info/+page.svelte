<script lang="ts">
	import { afterUpdate, onDestroy, onMount, setContext } from 'svelte';
	import type { PageData } from './$types';
	import { applyAction } from '$app/forms';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { type FormStoreModel, createFormStore } from '$lib/stores/form';

	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { page } from '$app/stores';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import DisplayCustomer from './DisplayCustomer.svelte';
	import EditCustomer from './EditCustomer.svelte';

	export let data: PageData;

	let editCustomerForm: HTMLFormElement;

	const { customer } = data;

	const toastStore = getToastStore();

	// $: console.log('data', data);
	const customerFormStore = createFormStore({
		data: customer as CustomerWithTrucks,
		status: 'idle'
	});

	setContext('customerFormStore', customerFormStore);

	const resetForm = async () => {
		customerFormStore.set?.({ data: customer as CustomerWithTrucks, status: 'idle' });
	};

	const toggleEdit = () => {
		$customerFormStore.status === 'editing'
			? customerFormStore.updateStatus?.('idle')
			: customerFormStore.updateStatus?.('editing');
	};

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
					message: event.form.message ? event.form.message : 'Customer Updated Successfully!'
				});
				customerFormStore.updateFormData(event.form.data as CustomerWithTrucks);
				customerFormStore.updateStatus?.('idle');
				// resetCustomerList();
			}
		}
	});
</script>

<section class="flex p-4 w-full items-start">
	<form
		id="editCustomerForm"
		bind:this={editCustomerForm}
		class="flex flex-col gap-4 mb-4"
		method="post"
		action="?/updatePersonalInfo"
		use:enhance
	>
		{#if $customerFormStore?.status !== 'editing'}
			<DisplayCustomer />
		{/if}
		{#if $customerFormStore?.status === 'editing'}
			<EditCustomer {errors} {resetForm} />
		{/if}
	</form>
	{#if $customerFormStore?.status !== 'editing'}
		<div class="flex justify-end gap-2 flex-auto">
			<button class="btn btn-primary" type="button" on:click={toggleEdit}>Edit</button>
		</div>
	{/if}
	{#if $customerFormStore?.status === 'editing'}
		<div class="flex justify-end gap-2 flex-auto">
			<div class="">
				<button form="editCustomerForm" class="btn btn-primary" type="submit">Save</button>
			</div>
			<div class="">
				<button class="btn variant-filled-error text-white" type="button" on:click={resetForm}
					>Cancel</button
				>
			</div>
		</div>
	{/if}
</section>
