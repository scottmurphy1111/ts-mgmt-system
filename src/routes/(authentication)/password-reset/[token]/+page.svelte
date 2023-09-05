<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { ActionData } from './$types';
	export let data;
	export let form: ActionData;

	// $: console.log('data', data);
	// $: console.log('form', form);
	const {
		form: resetForm,
		errors,
		enhance,
		message,
		delayed,
		constraints
	} = superForm(data.form, {
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null
	});
</script>

<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl">
	<h3 class="h3">Change Password</h3>
	<form class="flex flex-col gap-4" method="post" use:enhance>
		<label class="label" for="password">
			New Password
			<input
				class="input"
				class:input-error={$errors.password}
				aria-invalid={$errors.password ? 'true' : undefined}
				name="password"
				id="password"
				type="password"
			/>
		</label>
		<label class="label" for="passwordConfirm">
			Confirm Password
			<input
				class="input"
				class:input-error={$errors.passwordConfirm}
				aria-invalid={$errors.passwordConfirm ? 'true' : undefined}
				name="passwordConfirm"
				id="passwordConfirm"
				type="password"
			/>
		</label>
		{#if $errors.passwordConfirm}
			<p class="text-error-500">{$errors.passwordConfirm}</p>
		{/if}
		<button class="btn btn-primary mt-2" type="submit">Update Password</button>
	</form>
	{#if $message}
		<div class="text-error-500">{$message}</div>
	{/if}
</div>
