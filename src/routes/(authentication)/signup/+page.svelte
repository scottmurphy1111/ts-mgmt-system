<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	export let data;

	const { form, errors, enhance, message, delayed, constraints } = superForm(data.form, {
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null
	});
</script>

<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl">
	{#if $delayed}
		<h2>Creating User...</h2>
		<ProgressBar />
	{:else}
		<h3 class="h3">Create a New User</h3>
		<form class="flex flex-col gap-2" method="post" use:enhance>
			<label for="name" class="label">
				<span>Name</span>
				<input
					class="input"
					class:input-error={$errors.name}
					aria-invalid={$errors.name ? 'true' : undefined}
					name="name"
					bind:value={$form.name}
				/>
			</label>
			{#if $errors.name}
				<p class="text-error-500">{$errors.name}</p>
			{/if}

			<label class="label" for="email">
				<span> Email </span>
				<input
					class="input"
					class:input-error={$errors.email}
					aria-invalid={$errors.name ? 'true' : undefined}
					name="email"
					bind:value={$form.email}
				/>
			</label>
			{#if $errors.email}
				<p class="text-error-500">{$errors.email}</p>
			{/if}

			<label class="label" for="password">
				<span> Password </span>
				<input
					class="input"
					class:input-error={$errors.password}
					aria-invalid={$errors.password ? 'true' : undefined}
					type="password"
					name="password"
				/>
			</label>
			{#if $errors.password}
				<p class="text-error-500">{$errors.password}</p>
			{/if}

			<label class="label mb-2" for="passwordConfirm">
				<span> Confirm Password </span>
				<input
					class="input"
					class:input-error={$errors.passwordConfirm}
					aria-invalid={$errors.passwordConfirm ? 'true' : undefined}
					type="password"
					name="passwordConfirm"
				/>
			</label>
			{#if $errors.passwordConfirm}
				<p class="text-error-500">{$errors.passwordConfirm}</p>
			{/if}

			<div class="flex flex-auto mb-4">
				<button
					type="submit"
					class="btn variant-filled-primary"
					class:opacity-50={$delayed}
					class:cursor-not-allowed={$delayed}>Submit</button
				>
			</div>
		</form>
		{#if $message}
			<div class="text-error-500">{$message}</div>
		{/if}
		<a class="anchor" href="/login">Login</a>
	{/if}
</div>
