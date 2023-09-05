<script lang="ts">
	import '../../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../../app.postcss';
	import { AppBar, AppShell, LightSwitch, Toast } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import UserSettings from '$lib/components/UserSettings.svelte';
	import Aside from '$lib/components/Aside.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import logo from '$lib/assets/images/ts-logo.svg';
	import logoDark from '$lib/assets/images/ts-logo-dark.svg';

	export let data: LayoutData;
</script>

<Toast />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar shadow="shadow" background="bg-white dark:bg-surface-900">
			<svelte:fragment slot="lead">
				<a class="w-48" href="/">
					<img class="block dark:hidden" src={logo} alt="ts-logo" />
					<img class="hidden dark:block" src={logoDark} alt="ts-logo-dark" />
				</a>
				<!-- {#if data.name}
					<div>Welcome {data.name}</div>
				{/if} -->
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<UserSettings />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Aside />
	</svelte:fragment>
	<div class="p-8">
		<slot />
	</div>
</AppShell>
