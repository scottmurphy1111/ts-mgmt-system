<script lang="ts">
	import '../../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../../app.postcss';
	import { AppBar, AppShell, LightSwitch, Toast } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import UserSettings from '$lib/components/UserSettings.svelte';
	import Aside from '$lib/components/Aside.svelte';

	export let data: LayoutData;
</script>

<Toast />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar shadow="shadow" background="bg-white dark:bg-surface-900">
			<svelte:fragment slot="lead">
				<a class="w-48" href="/">
					<img class="block dark:hidden" src="images/ts-logo.svg" alt="ts-logo" />
					<img class="hidden dark:block" src="images/ts-logo-dark.svg" alt="ts-logo-dark" />
				</a>
				<!-- {#if data.name}
					<div>Welcome {data.name}</div>
				{/if} -->
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<UserSettings userData={data} />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Aside />
	</svelte:fragment>
	<slot />
</AppShell>
