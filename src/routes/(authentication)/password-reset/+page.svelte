<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { ActionData } from './$types';

	export let data;
	export let form: ActionData;

	const {
		form: resetForm,
		errors,
		enhance,
		delayed,
		message
	} = superForm(data.form, {
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null
	});

	$: console.log('🥶', form);
	$: console.log('message', $message);
	$: console.log('😍', $delayed);
	$: console.log('🙆‍♀️', $resetForm);
</script>

<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl">
	<h3 class="h3">Password Reset</h3>
	{#if form?.sendReset?.accepted}
		<p class="text-secondary-500">
			{`Password Reset email successfully sent to: ${form.sendReset.accepted[0]}`}
		</p>
	{:else}
		<form class="flex flex-col gap-4" method="post" use:enhance>
			<label for="email" class="label">
				<span>Email</span>
				<input
					class="input"
					class:input-error={$errors.email}
					aria-invalid={$errors.email ? 'true' : undefined}
					name="email"
					autocomplete="email"
					bind:value={$resetForm.email}
				/>
			</label>
			<button class="btn btn-primary" type="submit">Send Reset Email</button>
			{#if $errors.email}
				<p class="text-error-500">{$errors.email}</p>
			{/if}
		</form>
	{/if}
</div>
