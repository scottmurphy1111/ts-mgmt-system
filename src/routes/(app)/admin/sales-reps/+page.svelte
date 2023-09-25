<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import Dialog from '$lib/components/Dialog.svelte';

	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import { states } from '$lib/data/states';

	let dialog: HTMLDialogElement;
	let createNewSalesRepForm: HTMLFormElement;

	export let data: PageData;

	$: ({ salesReps } = data);

	const toastStore = getToastStore();

	const selectedSalesReps = writable<string[]>([]);

	// const salesRepFormStore = createFormStore({
	// 	data: salesReps.map((salesRep) => ({
	// 		id: salesRep.id,
	// 		name: salesRep.name,
	// 		description: salesRep.description
	// 	})),
	// 	status: 'idle'
	// });

	const resetSalesRepList = async () => {
		await invalidateAll();
		// salesRepFormStore.updateFormData?.($page.data.salesReps);
	};

	const goToSalesRep = (id: string) => {
		goto(`/admin/sales-reps/${id}`);
	};

	const addNewSalesRep = () => {
		// salesRepFormStore.updateStatus?.('editing');
		dialog.showModal();
	};

	const resetForm = () => {
		createNewSalesRepForm.reset();
		dialog?.close();
	};

	const deleteSelectedSalesReps = async () => {
		const salesRepIds = $selectedSalesReps.map((id) => encodeURIComponent(id)).join(',');
		await fetch(`/api/salesReps?ids=${salesRepIds}`, {
			method: 'DELETE'
		});

		await invalidateAll();
		selectedSalesReps.set([]);
	};

	const { form, errors, enhance, delayed } = superForm(data.form, {
		// invalidateAll: true,
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
			// console.log('🙆‍♀️', event.form);
			// console.log('🙆‍♀️ form', form);
			// console.log('page salesReps', $page.data.salesReps);
			if (!Object.keys(event.form.errors).length) {
				dialog.close();
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'SalesRep Created Successfully!'
				});
				// salesRepFormStore.updateStatus?.('idle');
				resetSalesRepList();

				// salesRepFormStore.set?.({ data: [event.form.data], status: 'idle' });
			}
		}
	});

	// $: console.log('🙆‍♀️ refresh', $salesRepFormStore.data);
	// $: console.log('🙆‍♀️ salesReps', salesReps);
</script>

<div class="flex justify-between gap-2 mb-4">
	<h2 class="h2">Sales Reps</h2>
	{#if $selectedSalesReps.length > 0}
		<button
			class="btn variant-filled-error ml-auto"
			type="button"
			on:click={deleteSelectedSalesReps}>Delete Selected</button
		>
	{/if}
	<button class="btn btn-primary" on:click={addNewSalesRep}>Add New</button>
</div>

<Dialog bind:dialog>
	<div class="p-8">
		<h3 class="h3 mb-8">Add New Sales Rep</h3>
		<form
			class="flex flex-col gap-4"
			bind:this={createNewSalesRepForm}
			method="post"
			action="?/create"
			use:enhance
		>
			<div class="flex gap-4 w-full">
				<label class="label" for="firstName"
					>First Name
					<input class="input" type="text" name="firstName" id="firstName" />
				</label>
				<label class="label" for="lastName"
					>Last Name
					<input class="input" type="text" name="lastName" id="lastName" />
				</label>
				<label class="label" for="company"
					>Company
					<input class="input" type="text" name="company" id="company" />
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label class="label" for="address"
					>Address
					<input class="input" type="text" name="address" id="address" />
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label class="label" for="city"
					>City
					<input class="input" type="text" name="city" id="city" />
				</label>
				<label class="label" for="state">
					State:
					<select class="select" name="state">
						<option value="" selected disabled hidden>Select State</option>
						{#each states as state}
							<option value={state.abbreviation}>{state.name}</option>
						{/each}
					</select>
					{#if $errors.state}
						<p class="text-error-500">{$errors.state}</p>
					{/if}
				</label>
				<label class="label" for="zip"
					>Zip
					<input class="input" type="text" name="zip" id="zip" />
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label class="label" for="email">
					Email:
					<input type="email" class="input" name="email" />
					{#if $errors.email}
						<p class="text-error-500">{$errors.email}</p>
					{/if}
				</label>
				<label class="label" for="phone">
					Phone: <small>XXX-XXX-XXXX</small>
					<input type="tel" class="input" name="phone" maxlength="12" />
					{#if $errors.phone}
						<p class="text-error-500">{$errors.phone}</p>
					{/if}
				</label>
			</div>
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
		</form>
	</div>
</Dialog>
<div class="table-container w-full">
	<table class="table">
		<thead>
			<tr>
				<th>
					<input
						class="checkbox"
						type="checkbox"
						checked={$selectedSalesReps.length === salesReps.length &&
							$selectedSalesReps.length > 0}
						on:click={(e) => {
							const isChecked = e.currentTarget?.checked;
							if (isChecked) {
								selectedSalesReps.set(salesReps.map((c) => c.id));
							} else {
								selectedSalesReps.set([]);
							}
						}}
					/>
				</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Address</th>
				<th>City</th>
				<th>State</th>
				<th>Zip</th>
				<th>Country</th>
				<th>Email</th>
				<th>Phone</th>
				<th>Company</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			{#each salesReps as salesRep}
				<tr class="cursor-pointer" on:click={() => goToSalesRep(salesRep.id)}>
					<td>
						<input
							class="checkbox"
							type="checkbox"
							checked={$selectedSalesReps.includes(salesRep.id)}
							on:click={(e) => {
								e.stopPropagation();
								const isChecked = e.currentTarget?.checked;
								if (isChecked) {
									selectedSalesReps.update((salesReps) => [...salesReps, salesRep.id]);
								} else {
									selectedSalesReps.update((salesReps) =>
										salesReps.filter((c) => c !== salesRep.id)
									);
								}
							}}
						/>
					</td>
					<td>{salesRep.firstName}</td>
					<td>{salesRep.lastName}</td>
					<td>{salesRep.address}</td>
					<td>{salesRep.city}</td>
					<td>{salesRep.state}</td>
					<td>{salesRep.zip}</td>
					<td>{salesRep.country}</td>
					<td>{salesRep.email}</td>
					<td>{salesRep.phone}</td>
					<td>{salesRep.company}</td>
					<td>{salesRep.notes}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
