<script lang="ts">
	import { setContext } from 'svelte';
	import type { PageData } from './$types';
	import { createFormStore } from '$lib/stores/form';

	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { TabGroup, Tab, getToastStore, TabAnchor } from '@skeletonlabs/skeleton';
	import PersonalInfo from './PersonalInfo.svelte';
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import Trucks from './Trucks.svelte';

	export let data: PageData;

	const { customer } = data;

	const toastStore = getToastStore();

	// console.log('customer', customer);

	const customerFormStore = createFormStore({
		data: customer as CustomerWithTrucks,
		status: 'idle'
	});

	setContext('customerFormStore', customerFormStore);

	let tab: number = 0;
</script>

<div class="flex justify-between mb-4">
	<h3 class="h3">
		{$page.data.customer.firstName}
		{$page.data.customer.lastName}
	</h3>
</div>
<TabGroup>
	<!-- <TabAnchor
		href={`/customers/${$page.data.customer.id}/personal-info`}
		selected={tab === 0}
		bind:group={tab}
		name="Personal Info"
		value={0}>Personal Info</TabAnchor
	>
	<Tab bind:group={tab} name="Trucks Info" value={1}>Trucks</Tab>
	<Tab bind:group={tab} name="Lender" value={2}>Lender</Tab>

	<svelte:fragment slot="panel">
		{#if tab === 0}
			<PersonalInfo {data} />
		{:else if tab === 1}
			<Trucks trucks={customer?.trucks} />
		{:else if tab === 2}
			<h2>Lender</h2>
		{:else}
			<h2>Other</h2>
		{/if}
	</svelte:fragment> -->
	<!-- <form
				bind:this={editCustomerForm}
				class="flex flex-col gap-4 mb-4"
				method="post"
				action="?/update"
				use:enhance={({ action, formData, formElement, submitter, cancel, controller }) => {
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
			</form> -->
</TabGroup>
