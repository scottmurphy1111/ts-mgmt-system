<script lang="ts">
	import { createSearchStore } from '$lib/stores/search';
	import { getContext, onDestroy, onMount, setContext } from 'svelte';
	import type { PageData } from './$types';
	// import { enhance } from '$app/forms';
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import SearchIcon from '$lib/assets/icons/search.svelte';
	import CloseIcon from '$lib/assets/icons/close.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import EditCustomer from './EditCustomer.svelte';
	import { createFormStore } from '$lib/stores/form';
	import { writable } from 'svelte/store';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';

	let dialog: HTMLDialogElement;

	let createNewCustomerForm: HTMLFormElement;

	export let data: PageData;

	const { customers } = data;

	const searchStore = createSearchStore(customers);

	const customerFormStore = createFormStore({
		data: {},
		status: 'idle'
	});

	setContext('customerFormStore', customerFormStore);

	const addNewCustomer = () => {
		createNewCustomerForm.reset();
		customerFormStore.updateStatus?.('editing');
		dialog.showModal();
	};

	const resetForm = () => {
		createNewCustomerForm.reset();
		dialog?.close();
	};

	const deleteSelectedCustomers = async () => {
		const customerIds = $selectedCustomers.map((id) => encodeURIComponent(id)).join(',');
		await fetch(`/api/customers?ids=${customerIds}`, {
			method: 'DELETE'
		});

		await resetCustomerList();
		selectedCustomers.set([]);
	};

	const resetCustomerList = async () => {
		await invalidateAll();
		searchStore.set({
			data: data.customers,
			filtered: data.customers,
			search: ''
		});
	};

	const selectedCustomers = writable<string[]>([]);

	const getSearchedCustomers = async (searchTerm: string) => {
		const response = await fetch(`/api/customers?search=${searchTerm}`);
		$searchStore.filtered = await response.json();
	};

	const goToCustomer = (id: string) => {
		goto(`/customers/${id}`);
	};

	const processTruckData = (customer: CustomerWithTrucks) => {
		const trucks = customer.trucks
			.map((truck) => `<div>${truck.year} ${truck.make} ${truck.model}</div>`)
			.join('');

		return trucks;
	};

	const clearSearch = () => {
		resetCustomerList();
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
			if (!Object.keys(event.form.errors).length) {
				dialog.close();
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'Customer Created Successfully!'
				});
				customerFormStore.updateStatus?.('idle');
				resetCustomerList();
			}
		}
	});
</script>

<div class="flex justify-between items-center mb-4">
	<form on:submit={() => getSearchedCustomers($searchStore.search)}>
		<div class="flex w-1/3 gap-2">
			<input
				class="input min-w-[300px] pr-8"
				type="text"
				name="search"
				placeholder="Search by Last Name"
				bind:value={$searchStore.search}
				on:keyup={(e) => {
					if (e.key === 'Escape') {
						resetCustomerList();
					}
				}}
			/>
			<div class="flex ml-auto align-middle justify-end gap-3 bg-transparent z-10">
				{#if $searchStore.search.length > 0}
					<button type="button" on:click={clearSearch}>
						<svelte:component this={CloseIcon} />
					</button>
				{/if}
				<button type="submit">
					<svelte:component this={SearchIcon} />
				</button>
			</div>
		</div>
	</form>
	<div class="flex gap-2">
		{#if $selectedCustomers.length > 0}
			<button class="btn variant-filled-error" type="button" on:click={deleteSelectedCustomers}
				>Delete Selected</button
			>
		{/if}
		<button class="btn btn-primary" on:click={addNewCustomer}>Add New</button>
	</div>
</div>
<Dialog bind:dialog>
	<div class="p-8">
		<h3 class="h3 mb-8">Add New Customer</h3>
		<form
			bind:this={createNewCustomerForm}
			class="flex flex-col gap-4 mb-4"
			method="post"
			action="?/create"
			use:enhance
		>
			<EditCustomer {resetForm} {errors} />
		</form>
	</div>
</Dialog>

<div class="table-container w-full">
	<table class="table bg-transparent">
		<thead>
			<tr>
				<th>
					<input
						class="checkbox"
						type="checkbox"
						checked={$selectedCustomers.length === $searchStore.filtered.length &&
							$selectedCustomers.length > 0}
						on:click={(e) => {
							const isChecked = e.currentTarget?.checked;
							if (isChecked) {
								selectedCustomers.set($searchStore.filtered.map((c) => c.id));
							} else {
								selectedCustomers.set([]);
							}
						}}
					/>
				</th>
				<th>ID</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Email</th>
				<th>Phone</th>
				<th>Address</th>
				<th>City</th>
				<th>State</th>
				<th>Zip</th>
				<th>Trucks</th>
			</tr>
		</thead>
		<tbody>
			{#if $searchStore.filtered.length === 0}
				<p class="p-4">No results found</p>
			{:else}
				{#each $searchStore.filtered as customer}
					<tr on:click={() => goToCustomer(customer.id)}>
						<td>
							<input
								class="checkbox"
								type="checkbox"
								checked={$selectedCustomers.includes(customer.id)}
								on:click={(e) => {
									e.stopPropagation();
									const isChecked = e.currentTarget?.checked;
									if (isChecked) {
										selectedCustomers.update((customers) => [...customers, customer.id]);
									} else {
										selectedCustomers.update((customers) =>
											customers.filter((c) => c !== customer.id)
										);
									}
								}}
							/>
						</td>
						<td>{customer.id}</td>
						<td>{customer.firstName}</td>
						<td>{customer.lastName}</td>
						<td>{customer.email}</td>
						<td>{customer.phone}</td>
						<td>{customer.address}</td>
						<td>{customer.city}</td>
						<td>{customer.state}</td>
						<td>{customer.zip}</td>
						<td>{@html processTruckData(customer)}</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>

<style>
	tr {
		cursor: pointer;
	}
</style>
