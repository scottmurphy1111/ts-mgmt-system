<script lang="ts">
	import { createFormStore } from '$lib/stores/form';
	import type { CustomerWithTrucks } from '$lib/types/customer.types';
	import { toastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { DutyType } from '@prisma/client';
	export let data: PageData;

	const { trucks } = data;

	const truckFormStore = createFormStore({
		data: trucks,
		status: 'idle'
	});

	$: console.log('trucks', trucks);
	$: console.log('trucks store', $truckFormStore);

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
			console.log('🙆‍♀️', event.form);
			if (!Object.keys(event.form.errors).length) {
				// dialog.close();
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'Customer Updated Successfully!'
				});
				truckFormStore.updateFormData(event.form.data);
				truckFormStore.updateStatus?.('idle');
				// resetCustomerList();
			}
		}
	});
</script>

<div class="flex p-4 w-full items-start">
	{#each $truckFormStore.data as truck}
		<form class="flex flex-col gap-4 mb-4" method="post" action="?/updateTruckInfo" use:enhance>
			<div class="flex flex-col gap-4">
				<input hidden type="text" name="id" value={truck.id} />
				<label class="font-light" for="vin">
					VIN:
					<input
						type="text"
						class="input font-semibold"
						value={truck.vin ?? ''}
						name="vin"
						on:change={(e) => (truck.vin = e.currentTarget.value)}
					/>
				</label>
				<label class="font-light" for="year">
					Year:
					<input
						type="text"
						class="input font-semibold"
						value={truck.year ?? ''}
						name="year"
						on:change={(e) => (truck.year = e.currentTarget.value)}
					/>
				</label>
				<label class="font-light" for="make">
					Make:
					<input
						type="text"
						class="input font-semibold"
						value={truck.make ?? ''}
						name="make"
						on:change={(e) => (truck.make = e.currentTarget.value)}
					/>
				</label>
				<label class="font-light" for="model">
					Model:
					<input
						type="text"
						class="input font-semibold"
						value={truck.model ?? ''}
						name="model"
						on:change={(e) => (truck.model = e.currentTarget.value)}
					/>
				</label>
				<label class="font-light" for="startMiles">
					Start Miles:
					<input
						type="text"
						class="input font-semibold"
						value={truck.startMiles ?? ''}
						name="startMiles"
						on:change={(e) => (truck.startMiles = e.currentTarget.value)}
					/>
				</label>
				<label class="font-light" for="dutyType">
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
			<div class="flex justify-end gap-2 flex-auto">
				<button type="submit" class="btn btn-primary">Save</button>
			</div>
		</form>
	{/each}
</div>
