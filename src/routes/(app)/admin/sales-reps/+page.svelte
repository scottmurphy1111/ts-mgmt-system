<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import Dialog from '$lib/components/Dialog.svelte';

	import { toastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import { createFormStore } from '$lib/stores/form';
	import type { SalesRep } from '@prisma/client';
	import { page } from '$app/stores';

	let dialog: HTMLDialogElement;
	let createNewSalesRepForm: HTMLFormElement;

	export let data: PageData;

	$: ({ salesReps } = data);

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
	<h2 class="h2">SalesReps</h2>
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
	<div class="p-8 w-96">
		<h3 class="h3 mb-8">Add New SalesRep</h3>
		<form
			bind:this={createNewSalesRepForm}
			class="flex flex-col gap-4 mb-4"
			method="post"
			action="?/create"
			use:enhance
		>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<label for="firstName">First Name</label>
					<input
						class="input"
						type="text"
						name="firstName"
						id="firstName"
						required
						placeholder="Enter Name"
					/>
					<label for="lastName">Last Name</label>
					<input
						class="input"
						type="text"
						name="lastName"
						id="lastName"
						required
						placeholder="Enter Name"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label for="address">Address</label>
					<input
						class="input"
						type="text"
						name="address"
						id="address"
						required
						placeholder="Enter Name"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label for="city">City</label>
					<input
						class="input"
						type="text"
						name="city"
						id="city"
						required
						placeholder="Enter Name"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label for="description">Description</label>
					<textarea
						class="input"
						name="description"
						id="description"
						required
						placeholder="Enter Description"
					></textarea>
				</div>
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
	<table class="table bg-transparent">
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
				<th>Id</th>
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
				<tr on:click={() => goToSalesRep(salesRep.id)}>
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
					<td>{salesRep.id}</td>
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

<style>
	tr {
		cursor: pointer;
	}
</style>
