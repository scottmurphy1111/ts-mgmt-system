<script lang="ts">
	import { format } from 'date-fns';
	import EditIcon from '$lib/assets/icons/edit.svelte';
	import DeleteIcon from '$lib/assets/icons/delete.svelte';
	import type { TruckProgramsEnrolledWithProgram } from '$lib/types/truck.types';
	import { writable } from 'svelte/store';
	import { enhance } from '$app/forms';

	import { invalidateAll } from '$app/navigation';
	import { getToastStore } from '@skeletonlabs/skeleton';

	export let programEnrolled: TruckProgramsEnrolledWithProgram;
	export let truckId: string;

	const calendarTheme = {
		calendar: {
			position: 'absolute',
			top: '40px',
			width: '300px',
			maxWidth: '300px',
			font: {
				regular: '12px',
				large: '20px'
			}
		}
	};

	const toastStore = getToastStore();
	const editProgramMode = writable<boolean>(false);

	const toggleEditProgramMode = () => {
		// console.log('toggleEditProgramMode');
		editProgramMode.update((value) => !value);
	};

	// $: console.log('programEnrolled', programEnrolled);
	// $: console.log('editProgramMode', $editProgramMode);

	const programData = writable({
		startDate: format(programEnrolled.startDate, 'MM-dd-yyyy'),
		endDate: format(programEnrolled.endDate, 'MM-dd-yyyy'),
		price: programEnrolled.price
	});

	const saveProgramEdits = () => {
		console.log('saveProgramEdits');
		console.log('programData', $programData);
		toggleEditProgramMode();
	};
</script>

<tr class="middle">
	<td>{programEnrolled.program?.name}</td>
	<td>{programEnrolled.program?.term}</td>
	{#if $editProgramMode}
		<td>
			<div class="relative">
				<div class=" w-[241px]">
					<input type="text" class="input" name="startDate" bind:value={$programData.startDate} />
					<span class="text-gray-400 dark:text-gray-500">Must be in (mm-dd-yyyy) format</span>
				</div>
			</div>
		</td>
	{:else}
		<td>{format(programEnrolled.startDate, 'MMMM dd, yyyy')}</td>
	{/if}
	{#if $editProgramMode}
		<td>
			<div class="relative">
				<div class=" w-[241px]">
					<input type="text" class="input" name="startDate" bind:value={$programData.endDate} />
					<span class="text-gray-400 dark:text-gray-500">Must be in (mm-dd-yyyy) format</span>
				</div>
			</div>
		</td>
	{:else}
		<td>{format(programEnrolled.endDate, 'MMMM dd, yyyy')}</td>
	{/if}

	{#if $editProgramMode}
		<td>
			<input type="text" class="input" name="price" bind:value={$programData.price} />
		</td>
	{:else}
		<td>${programEnrolled.price}</td>
	{/if}
	<td>{programEnrolled.status}</td>
	<td>
		<div class="flex gap-2 items-center">
			{#if $editProgramMode}
				<form
					method="post"
					action="?/updateProgram"
					use:enhance={() => {
						return async ({ result, update }) => {
							console.log('result', result);
							if (result.type === 'success') {
								await invalidateAll();
								toastStore.trigger({
									message: 'Program Updated Successfully!'
								});
								toggleEditProgramMode();
							}
						};
					}}
				>
					<input hidden type="text" name="truckId" value={truckId} />
					<input hidden type="text" name="id" value={programEnrolled.id} />
					<input hidden type="text" name="startDate" value={$programData.startDate} />
					<input hidden type="text" name="endDate" value={$programData.endDate} />
					<input hidden type="text" name="price" value={$programData.price} />
					<button class="btn btn-primary">Save</button>
				</form>
				<button class="btn bg-error-500 text-white" on:click={toggleEditProgramMode}>Cancel</button>
			{:else}
				<button class="text-xl text-gray-700 dark:text-gray-200" on:click={toggleEditProgramMode}>
					<svelte:component this={EditIcon} />
				</button>
				<form
					method="post"
					action="?/removeProgram"
					use:enhance={() => {
						return async ({ result, update }) => {
							console.log('result', result);
							if (result.type === 'success') {
								await invalidateAll();
								toastStore.trigger({
									message: 'Program Deleted Successfully!'
								});
							}
						};
					}}
				>
					<input hidden type="text" name="truckId" value={truckId} />
					<input hidden type="text" name="id" value={programEnrolled.id} />
					<button class="text-lg text-gray-700 dark:text-gray-200">
						<svelte:component this={DeleteIcon} />
					</button>
				</form>
			{/if}
		</div>
	</td>
</tr>

<style>
	.middle td {
		vertical-align: baseline;
	}
</style>
