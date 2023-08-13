<script lang="ts">
	import { createSearchStore } from '$lib/stores/search';
	import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const searchStore = createSearchStore(data.customers);

	const unsubscribe = searchStore.subscribe((model) => model);

	onDestroy(() => {
		unsubscribe();
	});

	const getSearchedCustomers = async (searchTerm: string) => {
		const response = await fetch(`/api/customers?search=${searchTerm}`);
		$searchStore.filtered = await response.json();
		// return searchedCustomers;
	};

	const goToCustomer = (id: string) => {
		goto(`/customers/${id}`);
	};
</script>

<!-- <pre>{JSON.stringify($searchStore.filtered, null, 2)}</pre> -->
<!-- <h3 class="h3 mb-4">Customers</h3> -->
<form on:submit={() => getSearchedCustomers($searchStore.search)}>
	<div class="flex w-1/3 gap-2 mb-4">
		<input
			class="input min-w-[250px]"
			type="search"
			name="search"
			placeholder="Search by Lastname"
			bind:value={$searchStore.search}
		/>
		<button class="btn btn-sm h-9" type="submit">Search</button>
	</div>
</form>
<!-- <input
		class="input mb-4 w-1/4"
		type="search"
		placeholder="Search by Lastname"
		bind:value={$searchStore.search}
		on:change={() => getSearchedCustomers($searchStore.search)}
	/> -->

<div class="table-container w-full">
	<table class="table">
		<thead>
			<tr>
				<th>ID</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Email</th>
				<th>Phone</th>
				<th>Address</th>
				<th>City</th>
				<th>State</th>
				<th>Zip</th>
			</tr>
		</thead>
		<tbody>
			{#each $searchStore.filtered as customer}
				<tr on:click={() => goToCustomer(customer.id)}>
					<td>{customer.id}</td>
					<td>{customer.firstName}</td>
					<td>{customer.lastName}</td>
					<td>{customer.email}</td>
					<td>{customer.phone}</td>
					<td>{customer.address}</td>
					<td>{customer.city}</td>
					<td>{customer.state}</td>
					<td>{customer.zip}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
