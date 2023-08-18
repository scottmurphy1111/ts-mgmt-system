<script lang="ts">
	import { afterUpdate, onDestroy, onMount, setContext } from 'svelte';
	import type { PageData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { createCustomerStore, customerHandler } from '$lib/stores/customer';
	import EditCustomer from '../EditCustomer.svelte';
	import { browser } from '$app/environment';
	import { type FormStoreModel, createFormStore } from '$lib/stores/form';

	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import DisplayCustomer from '../DisplayCustomer.svelte';
	import { page } from '$app/stores';

	export let data: PageData;
	// export let form: FormStoreModel<CustomerWithTrucks>;
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

	// console.log('customerFormStore', customerFormStore);
	// let customerForm = {};

	// const unsubscribe = customerFormStore.subscribe((value) => (customerForm = value));

	// onDestroy(() => {
	// 	unsubscribe();
	// });

	// if (browser) {
	// 	customerData = data.customerData;
	// }
	// let isEditing = false;
	const toggleEdit = () => {
		$customerFormStore.status === 'editing'
			? customerFormStore.updateStatus?.('idle')
			: customerFormStore.updateStatus?.('editing');
	};
</script>

<div class="flex justify-between mb-4">
	<h3 class="h3">
		{$customerFormStore?.data.firstName}
		{$customerFormStore?.data.lastName} - Cust Id# {$customerFormStore?.data.id}
	</h3>
	<button class="btn btn-primary" type="button" on:click={toggleEdit}>Edit</button>
</div>
<div class="card p-4">
	<section class="p-4 w-full">
		<form
			bind:this={editCustomerForm}
			class="flex flex-col gap-4 mb-4"
			method="post"
			action="?/update"
			use:enhance={({ action, formData, formElement, submitter, cancel, controller }) => {
				// console.log('action', action);
				// console.log('formData', formData);
				// console.log('formElement', formElement);
				// console.log('submitter', submitter);
				// console.log('cancel', cancel);
				// console.log('controller', controller);
				return async ({ result }) => {
					// console.log('result', result);
					// console.log('update', update);
					// console.log('action', action);
					// console.log('formData', formData);
					// console.log('formElement', formElement);
					if (result.type === 'success') {
						await invalidateAll();

						// await update();
						// await applyAction(result);
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
			<!-- <h4 class="text-lg font-semibold mb-4">Personal Info</h4>
			<div class="flex gap-4 w-full">
				<label for="firstName">
					First Name:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.firstName}
						name="firstName"
					/>
				</label>

				<label for="lastName">
					Last Name:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.lastName}
						name="lastName"
					/>
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label for="address">
					Address:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.address}
						name="address"
					/>
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label for="city">
					City:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.city}
						name="city"
					/>
				</label>
				<label for="state">
					State:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.state}
						name="state"
					/>
				</label>
				<label for="zip">
					Zip:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.zip}
						name="zip"
					/>
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label for="email">
					Email:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.email}
						name="email"
					/>
				</label>
				<label for="phone">
					Phone:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={customerData?.phone}
						name="phone"
					/>
				</label>
			</div> -->
			<!-- {#if isEditing}
				<div class="w-4">
					<button class="btn btn-primary" type="submit">Save</button>
				</div>
			{/if} -->
		</form>
		<!-- {#if customerData?.trucks}
			<div class="col-span-3">
				{customerData?.trucks?.map((truck) => truck.id)}
			</div>
		{/if} -->
	</section>
	<footer class="card-footer">(footer)</footer>
</div>
