<script lang="ts">
	import { createFormStore } from '$lib/stores/form';
	import type { PageData } from './$types';
	export let trucks: any;

	const truckFormStore = createFormStore({
		data: trucks,
		status: 'idle'
	});

	$: console.log('trucks', $truckFormStore);

	const updateTruckInfo = async (truckId: string) => {
		const truckInfo = $truckFormStore.data.find((truck: any) => truck.id === truckId);
		const res = await fetch(`/api/truck?truckId=${encodeURIComponent(truckId)}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(truckInfo)
		});
		const data = await res.json();
		console.log(data);
	};
</script>

<div class="flex p-4 w-full items-start">
	{#each $truckFormStore.data as truck}
		<div class="flex flex-col gap-4">
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
					on:change={(e) => (truck.dutyType = e.currentTarget.value)}
					name="dutyType"
				>
					<option value="MEDIUM">Medium Duty</option>
					<option value="HEAVY">Heavy Duty</option>
				</select>
			</label>
		</div>
		<div class="flex justify-end gap-2 flex-auto">
			<button type="button" class="btn btn-primary" on:click={() => updateTruckInfo(truck.id)}
				>Save</button
			>
		</div>
	{/each}
</div>
<!-- </form> -->
