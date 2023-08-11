<script lang="ts">
	import '../../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../../app.postcss';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { AppBar, AppShell, LightSwitch, Toast } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import UserSettings from '$lib/components/UserSettings.svelte';

	export let data: LayoutData;
</script>

<Toast />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar shadow="shadow">
			<svelte:fragment slot="lead">
				<span></span>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch ring-surface-100-900-token />
				<UserSettings userData={data} />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="h-full w-full flex flex-col justify-start items-center p-12">
		<div class="flex gap-4 justify-center items-center mb-8">
			<img src="images/ts-logo.svg" alt="ts-logo" class="w-full block dark:hidden" />
			<img src="images/ts-logo-dark.svg" alt="ts-logo" class="w-full hidden dark:block" />
		</div>
		{#if data.name}
			<h3 class="h3">Welcome {`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`}</h3>
		{/if}
		<slot />
	</div>
</AppShell>>

<style>
</style>
