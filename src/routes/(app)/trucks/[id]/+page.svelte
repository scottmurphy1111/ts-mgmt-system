<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: truckData = data.truckData;
	let isEditing = false;
	const toggleEdit = () => {
		isEditing = !isEditing;
	};
</script>

<div class="flex justify-between mb-4">
	<h3 class="h3">
		{truckData?.year}
		{truckData?.make}
		{truckData?.model} - VIN # {truckData?.vin}
	</h3>
	<button class="btn btn-primary" type="button" on:click={toggleEdit}>Edit</button>
</div>
<div class="card p-4">
	<section class="p-4 w-full">
		<form
			class="flex flex-col gap-4 mb-4"
			method="post"
			action="?/update"
			use:enhance={({ formData }) => {
				return async ({ result }) => {
					console.log('result', result);
					if (result.type === 'success') {
						// await update();
						// await applyAction(result);
						await invalidateAll();
						toggleEdit();
					}
				};
			}}
		>
			<h4 class="text-lg font-semibold mb-4">Personal Info</h4>
			<div class="flex gap-4 w-full">
				<label for="vin">
					VIN #:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={truckData?.vin}
						name="vin"
					/>
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label for="year">
					Year:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={truckData?.year}
						name="year"
					/>
				</label>
				<label for="make">
					Make:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={truckData?.make}
						name="make"
					/>
				</label>
				<label for="model">
					Model:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={truckData?.model}
						name="model"
					/>
				</label>
			</div>
			<div class="flex gap-4 w-full">
				<label for="startMiles">
					Start Miles:
					<input
						disabled={!isEditing}
						type="text"
						class="input"
						value={truckData?.startMiles}
						name="startMiles"
					/>
				</label>
			</div>
			{#if isEditing}
				<div class="w-4">
					<button class="btn btn-primary flex-shrink-0" type="submit">Save</button>
				</div>
			{/if}
		</form>
		<!-- {#if truckData?.trucks}
			<div class="col-span-3">
				{truckData?.trucks?.map((truck) => truck.id)}
			</div>
		{/if} -->
	</section>
	<footer class="card-footer">(footer)</footer>
</div>
