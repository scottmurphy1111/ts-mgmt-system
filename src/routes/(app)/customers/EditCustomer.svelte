<script lang="ts">
	import type { FormStoreModel } from '$lib/stores/form';
	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { getContext, onDestroy, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { states } from '$lib/data/states';
	import { formatPhoneInput } from '$lib/utils/formatters';

	let customerFormStore =
		getContext<Writable<FormStoreModel<CustomerWithTrucks>>>('customerFormStore');
	export let resetForm: () => void;
	export let errors: any;
	let phoneInput: HTMLInputElement;

	// onMount(() => {
	// 	formatPhoneInput(phoneInput);
	// });

	// onDestroy(() => {});
	console.log($customerFormStore);
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
		{#if $errors.firstName}
			<p class="text-error-500">{$errors.firstName}</p>
		{/if}
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
		{#if $errors.lastName}
			<p class="text-error-500">{$errors.lastName}</p>
		{/if}
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
		{#if $errors.address}
			<p class="text-error-500">{$errors.address}</p>
		{/if}
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
		{#if $errors.city}
			<p class="text-error-500">{$errors.city}</p>
		{/if}
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
		{#if $errors.state}
			<p class="text-error-500">{$errors.state}</p>
		{/if}
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
		{#if $errors.zip}
			<p class="text-error-500">{$errors.zip}</p>
		{/if}
	</label>
</div>
<div class="flex gap-4 w-full">
	<label class="font-light" for="email">
		Email:
		<input
			disabled={$customerFormStore?.status !== 'editing'}
			type="email"
			class="input font-semibold"
			value={$customerFormStore?.data?.email ?? ''}
			name="email"
		/>
		{#if $errors.email}
			<p class="text-error-500">{$errors.email}</p>
		{/if}
	</label>
	<label class="font-light" for="phone">
		Phone: <small>XXX-XXX-XXXX</small>
		<input
			bind:this={phoneInput}
			disabled={$customerFormStore?.status !== 'editing'}
			type="tel"
			class="input font-semibold"
			value={$customerFormStore?.data?.phone ?? ''}
			name="phone"
			maxlength="12"
		/>
		{#if $errors.phone}
			<p class="text-error-500">{$errors.phone}</p>
		{/if}
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
