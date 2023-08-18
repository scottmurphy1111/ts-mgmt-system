<script lang="ts">
	import type { FormStoreModel } from '$lib/stores/form';
	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let customerFormStore =
		getContext<Writable<FormStoreModel<CustomerWithTrucks>>>('customerFormStore');
	export let resetForm: () => void;
</script>

<h4 class="h4 text-lg font-semibold mb-4 text-inherit">Personal Info</h4>
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
			<option value="AL">Alabama</option>
			<option value="AK">Alaska</option>
			<option value="AZ">Arizona</option>
			<option value="AR">Arkansas</option>
			<option value="CA">California</option>
			<option value="CO">Colorado</option>
			<option value="CT">Connecticut</option>
			<option value="DE">Delaware</option>
			<option value="DC">District Of Columbia</option>
			<option value="FL">Florida</option>
			<option value="GA">Georgia</option>
			<option value="HI">Hawaii</option>
			<option value="ID">Idaho</option>
			<option value="IL">Illinois</option>
			<option value="IN">Indiana</option>
			<option value="IA">Iowa</option>
			<option value="KS">Kansas</option>
			<option value="KY">Kentucky</option>
			<option value="LA">Louisiana</option>
			<option value="ME">Maine</option>
			<option value="MD">Maryland</option>
			<option value="MA">Massachusetts</option>
			<option value="MI">Michigan</option>
			<option value="MN">Minnesota</option>
			<option value="MS">Mississippi</option>
			<option value="MO">Missouri</option>
			<option value="MT">Montana</option>
			<option value="NE">Nebraska</option>
			<option value="NV">Nevada</option>
			<option value="NH">New Hampshire</option>
			<option value="NJ">New Jersey</option>
			<option value="NM">New Mexico</option>
			<option value="NY">New York</option>
			<option value="NC">North Carolina</option>
			<option value="ND">North Dakota</option>
			<option value="OH">Ohio</option>
			<option value="OK">Oklahoma</option>
			<option value="OR">Oregon</option>
			<option value="PA">Pennsylvania</option>
			<option value="RI">Rhode Island</option>
			<option value="SC">South Carolina</option>
			<option value="SD">South Dakota</option>
			<option value="TN">Tennessee</option>
			<option value="TX">Texas</option>
			<option value="UT">Utah</option>
			<option value="VT">Vermont</option>
			<option value="VA">Virginia</option>
			<option value="WA">Washington</option>
			<option value="WV">West Virginia</option>
			<option value="WI">Wisconsin</option>
			<option value="WY">Wyoming</option>
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
