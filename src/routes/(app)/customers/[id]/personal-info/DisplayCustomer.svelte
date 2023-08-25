<script lang="ts">
	import { page } from '$app/stores';
	import type { FormStoreModel } from '$lib/stores/form';
	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let customerFormStore =
		getContext<Writable<FormStoreModel<CustomerWithTrucks>>>('customerFormStore');
	// export let resetForm: () => void;

	$: console.log('store', $customerFormStore);
	$: console.log('page', $page);
</script>

<div class="flex flex-col gap-2">
	<div class="flex gap-4 w-auto">
		<p class="text-md font-semibold">
			{$customerFormStore?.data?.firstName}
			{$customerFormStore?.data?.lastName}
			{$customerFormStore?.data?.companyName}
		</p>
	</div>
	<div class="flex gap-4 w-full">
		<p class="text-md font-semibold">
			{$customerFormStore?.data?.address}
		</p>
	</div>
	<div class="flex gap-4 w-full">
		<p class="text-md font-semibold">
			{$customerFormStore?.data?.city}, {$customerFormStore?.data?.state}
			{$customerFormStore?.data?.zip}
		</p>
	</div>
	<div class="flex gap-4 w-full">
		<p class="text-md font-semibold">
			{$customerFormStore?.data?.email}
		</p>
	</div>
	<div class="flex gap-4 w-full">
		<p class="text-md font-semibold">
			{$customerFormStore?.data?.phone}
		</p>
	</div>
</div>
<!-- <h4 class="text-lg font-semibold mb-4">Trucks</h4>
<div class="flex gap-4 w-full">
	<label class="font-light" for="trucks">
		Trucks:

		<p class="text-md font-semibold"> -->
<!-- {@html processTruckData($customerFormStore?.data)} -->
<!-- </p>
	</label> 
</div> -->
