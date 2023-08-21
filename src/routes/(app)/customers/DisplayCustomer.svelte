<script lang="ts">
	import type { FormStoreModel } from '$lib/stores/form';
	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let customerFormStore =
		getContext<Writable<FormStoreModel<CustomerWithTrucks>>>('customerFormStore');
	// export let resetForm: () => void;
</script>

<div class="flex gap-4 w-full">
	<label class="font-light" for="firstName">
		First Name:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.firstName}
		</p>
	</label>

	<label class="font-light" for="lastName">
		Last Name:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.lastName}
		</p>
	</label>
</div>
<div class="flex gap-4 w-full">
	<label class="font-light" for="address">
		Address:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.address}
		</p>
	</label>
</div>
<div class="flex gap-4 w-full">
	<label class="font-light" for="city">
		City:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.city}
		</p>
	</label>
	<label class="font-light" for="state">
		State:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.state}
		</p>
	</label>
	<label class="font-light" for="zip">
		Zip:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.zip}
		</p>
	</label>
</div>
<div class="flex gap-4 w-full">
	<label class="font-light" for="email">
		Email:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.email}
		</p>
	</label>
	<label class="font-light" for="phone">
		Phone:

		<p class="text-md font-semibold">
			{$customerFormStore?.data?.phone}
		</p>
	</label>
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
