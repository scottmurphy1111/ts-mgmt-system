<script lang="ts">
	import { createFormStore } from '$lib/stores/form';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData, PageServerData } from './$types';
	import { DutyType } from '@prisma/client';
	import type { TrucksWithProgramsEnrolled } from '$lib/types/truck.types';

	export let data: PageServerData;

	const trucks = data.trucks as unknown as TrucksWithProgramsEnrolled[];

	const toastStore = getToastStore();
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

<div class="flex p-4 w-full items-start">
	{#each trucks as truck}
		<form class="flex flex-col gap-4 mb-4" method="post" action="?/updateTruckInfo" use:enhance>
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
		</form>
	{/each}
</div>
