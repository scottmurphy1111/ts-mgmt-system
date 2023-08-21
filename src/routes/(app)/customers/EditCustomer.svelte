<script lang="ts">
	import type { FormStoreModel } from '$lib/stores/form';
	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { states } from '$lib/data/states';

	let customerFormStore =
		getContext<Writable<FormStoreModel<CustomerWithTrucks>>>('customerFormStore');
	export let resetForm: () => void;
</script>

<div class="flex gap-4 w-full">
	<label class="font-light" for="firstName">
		First Name:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.firstName ?? ''}
			name="firstName"
		/>
	</label>

	<label class="font-light" for="lastName">
		Last Name:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.lastName ?? ''}
			name="lastName"
		/>
	</label>
</div>
<div class="flex gap-4 w-full">
	<label class="font-light" for="address">
		Address:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.address ?? ''}
			name="address"
		/>
	</label>
</div>
<div class="flex gap-4 w-full">
	<label class="font-light" for="city">
		City:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.city ?? ''}
			name="city"
		/>
	</label>
	<label class="font-light" for="state">
		State:
		<select
			class="select"
			name="state"
			bind:value={$customerFormStore.data.state}
			on:change={(e) => ($customerFormStore.data.state = e.currentTarget.value)}
		>
			<option value="" selected disabled hidden>Select State</option>
			{#each states as state}
				<option value={state.abbreviation}>{state.name}</option>
			{/each}
		</select>
		<!-- <input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.state ?? ''}
			name="state"
		/> -->
	</label>
	<label class="font-light" for="zip">
		Zip:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.zip ?? ''}
			name="zip"
		/>
	</label>
</div>
<div class="flex gap-4 w-full">
	<label class="font-light" for="email">
		Email:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.email ?? ''}
			name="email"
		/>
	</label>
	<label class="font-light" for="phone">
		Phone:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="text"
			class="input font-semibold"
			value={$customerFormStore?.data?.phone ?? ''}
			name="phone"
		/>
	</label>
</div>
{#if $customerFormStore?.status === 'editing'}
	<div class="flex justify-end gap-2">
		<div class="">
			<button class="btn btn-primary" type="submit">Save</button>
		</div>
		<div class="">
			<button class="btn variant-filled-error text-white" type="button" on:click={resetForm}
				>Cancel</button
			>
		</div>
	</div>
{/if}
