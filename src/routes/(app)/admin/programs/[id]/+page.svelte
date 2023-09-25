<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const { program } = data;

	const toastStore = getToastStore();

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
					message: event.form.message ? event.form.message : 'Program Updated Successfully!'
				});
				goto('/admin/programs');
			}
		}
	});
</script>

<div class="flex flex-col justify-between mb-4">
	<h3 class="h3">
		{$page.data.program.name} - Program Id# {$page.data.program.id}
	</h3>
</div>
<form class="flex flex-col gap-4 mb-4 flex-auto" method="post" action="?/updateProgram" use:enhance>
	<label class="label" for="name">
		Program Name
		<input class="input" type="text" name="name" value={program?.name} />
	</label>
	<label class="label" for="term">
		Term
		<input class="input" type="text" name="term" value={program?.term} />
	</label>
	<label class="label" for="description">
		Program Description
		<textarea class="textarea" name="description" value={program?.description} />
	</label>
	<div class="flex justify-end gap-2">
		<button class="btn btn-primary" type="submit">Save</button>
		<button
			class="btn variant-filled-error text-white"
			type="button"
			on:click={() => goto('/admin/programs')}>Cancel</button
		>
	</div>
</form>
