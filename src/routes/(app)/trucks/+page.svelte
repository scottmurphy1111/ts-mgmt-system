<script lang="ts">
	import { createSearchStore } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import type { TruckWithCustomers } from '$lib/types/truck.types';
	import { enhance } from '$app/forms';

	export let data: PageData;

	const searchStore = createSearchStore(data.trucks);

	const unsubscribe = searchStore.subscribe((model) => model);

	onDestroy(() => {
		unsubscribe();
	});

	const getSearchedTrucks = async (searchTerm: string) => {
		const response = await fetch(`/api/trucks?search=${searchTerm}`);
		$searchStore.filtered = await response.json();
		// return searchedTrucks;
	};

	const goToTruck = (vin: string) => {
		goto(`/trucks/${vin}`);
	};
</script>

<form on:submit|preventDefault={() => getSearchedTrucks($searchStore.search)}>
	<div class="flex w-1/3 gap-2 mb-4">
		<input
			class="input min-w-[250px]"
			type="text"
			name="search"
			placeholder="Search by Vin#"
			bind:value={$searchStore.search}
			on:keyup={(e) => {
				if (e.key === 'Escape') {
					searchStore.set({
						data: data.trucks,
						filtered: data.trucks,
						search: ''
					});
				}
			}}
		/>
		<button class="btn" type="submit">Search</button>
	</div>
</form>

<div class="table-container w-full">
	<table class="table">
		<thead>
			<tr>
				<th>VIN #</th>
				<th>Year</th>
				<th>Make</th>
				<th>Model</th>
				<th>Start Miles</th>
				<!-- <th></th> -->
			</tr>
		</thead>
		<tbody>
			{#each $searchStore.filtered as truck}
				<tr class="cursor-pointer" on:click={() => goToTruck(truck.id)}>
					<td>{truck.vin}</td>
					<td>{truck.year}</td>
					<td>{truck.make}</td>
					<td>{truck.model}</td>
					<td>{truck.startMiles}</td>
					<!-- <td>{@html processCustomerData(truck)}</td> -->
				</tr>
			{/each}
		</tbody>
	</table>
</div>
