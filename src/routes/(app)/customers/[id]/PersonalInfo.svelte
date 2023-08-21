<script lang="ts">
	import { afterUpdate, onDestroy, onMount, setContext } from 'svelte';
	import type { PageData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidate, invalidateAll } from '$app/navigation';
	import EditCustomer from '../EditCustomer.svelte';
	import { browser } from '$app/environment';
	import { type FormStoreModel, createFormStore } from '$lib/stores/form';

	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import DisplayCustomer from '../DisplayCustomer.svelte';
	import { page } from '$app/stores';

	export let data: PageData;

	let editCustomerForm: HTMLFormElement;

	const { customerData } = data;

	const customerFormStore = createFormStore({
		data: customerData as CustomerWithTrucks,
		status: 'idle'
	});

	setContext('customerFormStore', customerFormStore);

	const resetForm = async () => {
		customerFormStore.set?.({ data: customerData as CustomerWithTrucks, status: 'idle' });
	};

	const toggleEdit = () => {
		$customerFormStore.status === 'editing'
			? customerFormStore.updateStatus?.('idle')
			: customerFormStore.updateStatus?.('editing');
	};
</script>

<section class="p-4 w-full">
	<form
		bind:this={editCustomerForm}
		class="flex flex-col gap-4 mb-4"
		method="post"
		action="?/update"
		use:enhance={() => {
			return async ({ result }) => {
				if (result.type === 'success') {
					await invalidateAll();

					customerFormStore.updateFormData?.($page.data.customerData);
					customerFormStore.updateStatus('idle');
				}
			};
		}}
	>
		{#if $customerFormStore?.status !== 'editing'}
			<DisplayCustomer />
		{/if}
		{#if $customerFormStore?.status === 'editing'}
			<EditCustomer {resetForm} />
		{/if}
	</form>
	{#if $customerFormStore?.status !== 'editing'}
		<div class="flex justify-end gap-2">
			<button class="btn btn-primary" type="button" on:click={toggleEdit}>Edit</button>
		</div>
	{/if}
</section>
