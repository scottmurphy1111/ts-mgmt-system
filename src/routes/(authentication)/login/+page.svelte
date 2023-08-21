<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { ProgressBar, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import type { ActionResult } from '@sveltejs/kit';
	export let data;

	const errorToast: ToastSettings = {
		message: 'There was an error logging in. Please try again.'
	};

	const { form, errors, enhance, delayed } = superForm(data.form, {
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null,
		onSubmit: (data) => {},
		onUpdate: (event) => {
			toastStore.trigger({
				message: event.form.message ? event.form.message : 'Logged in successfully!'
			});
		},
		onError: (errors) => {
			toastStore.trigger({
				message: errors.result.error.message
			});
		}
	});
</script>

<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl">
	{#if $delayed}
		<h2>Logging In...</h2>
		<ProgressBar />
	{:else}
		<h3 class="h3">Login</h3>
		<form class="flex flex-col gap-2" method="post" use:enhance>
			<label for="email" class="label">
				<span>Email</span>
				<input
					class="input"
					class:input-error={$errors.email}
					aria-invalid={$errors.email ? 'true' : undefined}
					name="email"
					autocomplete="email"
					bind:value={$form.email}
				/>
			</label>
			{#if $errors.email}
				<p class="text-error-500">{$errors.email}</p>
			{/if}

			<label for="password" class="label mb-2">
				<span>Password</span>
				<input
					class="input"
					class:input-error={$errors.password}
					aria-invalid={$errors.password ? 'true' : undefined}
					type="password"
					name="password"
					autocomplete="current-password"
				/>
			</label>
			{#if $errors.password}
				<p class="text-error-500">{$errors.password}</p>
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
		<!-- {#if $message}
		<div class="text-error-500">{$message}</div>
	{/if} -->
		<a class="anchor" href="/signup">Create an account</a>
	{/if}
</div>
