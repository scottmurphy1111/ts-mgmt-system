<script lang="ts">
	import '../../theme.postcss';
	import '../../app.postcss';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { AppBar, AppShell, LightSwitch, Toast } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import UserSettings from '$lib/components/UserSettings.svelte';
	import logo from '$lib/assets/images/ts-logo.svg';
	import logoDark from '$lib/assets/images/ts-logo-dark.svg';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();

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
				{#if Object.values(data)[0]?.length}
					<UserSettings />
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="h-full w-full flex flex-col justify-start items-center p-12">
		<div class="flex gap-4 justify-center items-center mb-8">
			<a href="/">
				<img src={logo} alt="ts-logo" class="w-full block dark:hidden" />
				<img src={logoDark} alt="ts-logo" class="w-full hidden dark:block" />
			</a>
		</div>

		<slot />
	</div>
</AppShell>>

<style>
</style>
