<script lang="ts">
	import { createFormStore } from '$lib/stores/form';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData, PageServerData } from './$types';
	import { DutyType, type Program } from '@prisma/client';
	import type { TrucksWithProgramsEnrolled } from '$lib/types/truck.types';
	import AddTruckIcon from '$lib/assets/icons/addTruck.svelte';
	import EditIcon from '$lib/assets/icons/edit.svelte';
	import DeleteIcon from '$lib/assets/icons/delete.svelte';
	import format from 'date-fns/format';
	import Dialog from '$lib/components/Dialog.svelte';

	import { DateInput, localeFromDateFnsLocale } from 'date-picker-svelte';
	import { enUS } from 'date-fns/locale';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';

	$: console.log($page);

	export let data: PageServerData;
	let dialog: HTMLDialogElement;

	let programs: Program[] = [];
	const trucks = data.trucks as unknown as TrucksWithProgramsEnrolled[];

	const toastStore = getToastStore();

	const truckId = writable<string>('');
	$: console.log('data', data);
	$: console.log('trucks', trucks);
	// $: console.log('getPrograms', getPrograms(trucks));
	// $: console.log('trucks store', $truckFormStore);

	// const updateTruckInfo = async (truckId: string) => {
	// 	const truckInfo = $truckFormStore.data.find((truck: any) => truck.id === truckId);
	// 	const res = await fetch(`/api/truck?truckId=${encodeURIComponent(truckId)}`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(truckInfo)
	// 	});
	// 	const data = await res.json();
	// 	console.log(data);
	// };

	const getDutyTypeSelection = (value: string) => {
		switch (value) {
			case 'MEDIUM':
				return DutyType.MEDIUM;
			case 'HEAVY':
				return DutyType.HEAVY;
			default:
				return DutyType.MEDIUM;
		}
	};

	const openAddPrograms = async (currentTruckId: string) => {
		dialog.showModal();

		programs = await getPrograms();
		truckId.set(currentTruckId);
	};

	const getPrograms = async () => {
		const programs = await fetch('/api/programs', {
			method: 'GET'
		});
		const result = await programs.json();
		console.log('result', result);
		return result;
	};

	const addProgramToTruck = async (truckId: string, programId: string) => {
		const res = await fetch(`/api/truck-programs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				truckId,
				programId
			})
		});
		const data = await res.json();
		console.log(data);
	};

	const { form, errors, enhance, delayed } = superForm(data.form, {
		invalidateAll: true,
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
			if (!Object.keys(event.form.errors).length) {
				// dialog.close();
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'Customer Updated Successfully!'
				});
				// bring this back when ts errors fixed
				// truckFormStore.updateFormData(event.form.data);
				// truckFormStore.updateStatus?.('idle');
				// resetCustomerList();
			}
		}
	});
</script>

<Dialog bind:dialog>
	<div class="w-[600px] p-8">
		<h3 class="h3 mb-8">Add Program</h3>
		{#each programs as program}
			<div class="card p-4 w-full flex flex-col gap-4 mb-8 items-start justify-between">
				<header class="flex gap-4">
					<h4 class="h4">
						{program.name}
					</h4>
				</header>
				<div class="flex gap-4">
					<p>
						{program.description}
					</p>
				</div>
				<button
					class="btn btn-sm btn-primary"
					on:click={() => addProgramToTruck($truckId, program.id)}>Add Program</button
				>
			</div>
		{/each}
	</div>
</Dialog>
<div class="flex justify-between items-start py-4">
	<div class="flex flex-col gap-4 w-full items-start">
		<!-- <pre>
    {JSON.stringify(trucks, null, 2)}
  </pre> -->
		{#each trucks as truck}
			<div class="card p-4 w-full flex flex-col gap-4 mb-8 items-start justify-between">
				<header class="flex gap-4">
					<h4 class="h4">
						{truck.vin}
					</h4>
				</header>
				<div class="flex gap-4">
					<p>
						{truck.year}
						{truck.make}
						{truck.model}
					</p>
					<p>
						{truck.startMiles} miles
					</p>
					<p>
						{truck.dutyType}
					</p>
				</div>
				<a href={`/trucks/${truck.id}`} class="btn btn-sm btn-primary">Edit Truck Info</a>
				{#if truck.programsEnrolled.length > 0}
					<!-- <DateInput
						locale={localeFromDateFnsLocale(enUS)}
						format="MM dd, yyyy"
						bind:value={truck.programsEnrolled[0].startDate}
					/> -->
					<div class="table-container">
						<table class="table">
							<thead class="bg-white">
								<tr>
									<th>Program</th>
									<th>Term</th>
									<th>Purchase Date</th>
									<th>End Date</th>
									<th>Price</th>
									<th>Status</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{#each truck.programsEnrolled as programEnrolled}
									<tr>
										<td>{programEnrolled.program?.name}</td>
										<td>{programEnrolled.program?.term}</td>
										<td>{format(programEnrolled.startDate, 'MMMM dd, yyyy')}</td>
										<td>{format(programEnrolled.endDate, 'MMMM dd, yyyy')}</td>
										<td>${programEnrolled.price}</td>
										<td>{programEnrolled.status}</td>
										<td>
											<div class="flex gap-2 items-center">
												<div class="text-xl text-gray-700 dark:text-gray-100">
													<svelte:component this={EditIcon} />
												</div>

												<div class="text-lg text-gray-700 dark:text-gray-100">
													<svelte:component this={DeleteIcon} />
												</div>
											</div></td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
				<button class="text-primary-500 font-semibold" on:click={() => openAddPrograms(truck.id)}
					>+ Add Program</button
				>
			</div>
			<!-- <form class="flex flex-col gap-4 mb-4" method="post" action="?/updateTruckInfo" use:enhance>
			<div class="flex flex-col gap-4">
				<input hidden type="text" name="id" value={truck.id} />
				<label class="label" for="vin">
					VIN:
					<input
						type="text"
						class="input"
						value={truck.vin ?? ''}
						name="vin"
						on:change={(e) => (truck.vin = e.currentTarget.value)}
					/>
				</label>
				<label class="label" for="year">
					Year:
					<input
						type="text"
						class="input"
						value={truck.year ?? ''}
						name="year"
						on:change={(e) => (truck.year = e.currentTarget.value)}
					/>
				</label>
				<label class="label" for="make">
					Make:
					<input
						type="text"
						class="input"
						value={truck.make ?? ''}
						name="make"
						on:change={(e) => (truck.make = e.currentTarget.value)}
					/>
				</label>
				<label class="label" for="model">
					Model:
					<input
						type="text"
						class="input"
						value={truck.model ?? ''}
						name="model"
						on:change={(e) => (truck.model = e.currentTarget.value)}
					/>
				</label>
				<label class="label" for="startMiles">
					Start Miles:
					<input
						type="text"
						class="input"
						value={truck.startMiles ?? ''}
						name="startMiles"
						on:change={(e) => (truck.startMiles = e.currentTarget.value)}
					/>
				</label>
				<label class="label" for="dutyType">
					Duty Type:
					<select
						class="select"
						bind:value={truck.dutyType}
						on:change={(e) => getDutyTypeSelection(e.currentTarget.value)}
						name="dutyType"
					>
						<option value="MEDIUM">Medium Duty</option>
						<option value="HEAVY">Heavy Duty</option>
					</select>
				</label>
			</div>
			<h3 class="h3">Programs</h3>
			{#each truck.programsEnrolled as programEnrolled}
				<div class="flex gap-4">
					<p>
						{programEnrolled.program?.name}
					</p>
					<p>
						{programEnrolled.program?.description}
					</p>
				</div>
			{/each}
			<div class="flex justify-end gap-2 flex-auto">
				<button type="submit" class="btn btn-primary">Save</button>
			</div>
		</form> -->
		{/each}
	</div>
</div>
<button class="btn btn-primary">
	<div class="text-2xl">
		<svelte:component this={AddTruckIcon} />
	</div>
	&nbsp;Add Truck</button
>
