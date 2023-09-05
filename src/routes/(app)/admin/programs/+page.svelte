<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import Dialog from '$lib/components/Dialog.svelte';

	import { toastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import { createFormStore } from '$lib/stores/form';
	import type { Program } from '@prisma/client';
	import { page } from '$app/stores';

	let dialog: HTMLDialogElement;
	let createNewProgramForm: HTMLFormElement;

	export let data: PageData;

	$: ({ programs } = data);

	const selectedPrograms = writable<string[]>([]);

	// const programFormStore = createFormStore({
	// 	data: programs.map((program) => ({
	// 		id: program.id,
	// 		name: program.name,
	// 		description: program.description
	// 	})),
	// 	status: 'idle'
	// });

	const resetProgramList = async () => {
		await invalidateAll();
		// programFormStore.updateFormData?.($page.data.programs);
	};

	const goToProgram = (id: string) => {
		goto(`/admin/programs/${id}`);
	};

	const addNewProgram = () => {
		// programFormStore.updateStatus?.('editing');
		dialog.showModal();
	};

	const resetForm = () => {
		createNewProgramForm.reset();
		dialog?.close();
	};

	const deleteSelectedPrograms = async () => {
		const programIds = $selectedPrograms.map((id) => encodeURIComponent(id)).join(',');
		await fetch(`/api/programs?ids=${programIds}`, {
			method: 'DELETE'
		});

		await invalidateAll();
		selectedPrograms.set([]);
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
			// console.log('page programs', $page.data.programs);
			if (!Object.keys(event.form.errors).length) {
				dialog.close();
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'Program Created Successfully!'
				});
				// programFormStore.updateStatus?.('idle');
				resetProgramList();

				// programFormStore.set?.({ data: [event.form.data], status: 'idle' });
			}
		}
	});

	// $: console.log('🙆‍♀️ refresh', $programFormStore.data);
	// $: console.log('🙆‍♀️ programs', programs);
</script>

<div class="flex justify-between gap-2 mb-4">
	<h2 class="h2">Programs</h2>
	{#if $selectedPrograms.length > 0}
		<button class="btn variant-filled-error ml-auto" type="button" on:click={deleteSelectedPrograms}
			>Delete Selected</button
		>
	{/if}
	<button class="btn btn-primary" on:click={addNewProgram}>Add New</button>
</div>

<Dialog bind:dialog>
	<div class="p-8 w-96">
		<h3 class="h3 mb-8">Add New Program</h3>
		<form
			bind:this={createNewProgramForm}
			class="flex flex-col gap-4 mb-4"
			method="post"
			action="?/create"
			use:enhance
		>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<label for="name">Name</label>
					<input
						class="input"
						type="text"
						name="name"
						id="name"
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
						checked={$selectedPrograms.length === programs.length && $selectedPrograms.length > 0}
						on:click={(e) => {
							const isChecked = e.currentTarget?.checked;
							if (isChecked) {
								selectedPrograms.set(programs.map((c) => c.id));
							} else {
								selectedPrograms.set([]);
							}
						}}
					/>
				</th>
				<th>Id</th>
				<th>Name</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{#each programs as program}
				<tr on:click={() => goToProgram(program.id)}>
					<td>
						<input
							class="checkbox"
							type="checkbox"
							checked={$selectedPrograms.includes(program.id)}
							on:click={(e) => {
								e.stopPropagation();
								const isChecked = e.currentTarget?.checked;
								if (isChecked) {
									selectedPrograms.update((programs) => [...programs, program.id]);
								} else {
									selectedPrograms.update((programs) => programs.filter((c) => c !== program.id));
								}
							}}
						/>
					</td>
					<td>{program.id}</td>
					<td>{program.name}</td>
					<td>{program.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
