<script lang="ts">
	import '../theme.postcss';

	import '../app.postcss';
	import { page } from '$app/stores';
	import Aside from '$lib/components/Aside.svelte';
	import UserSettings from '$lib/components/UserSettings.svelte';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import logo from '$lib/assets/images/ts-logo.svg';
	import logoDark from '$lib/assets/images/ts-logo-dark.svg';

	$: console.log('page', $page);
</script>

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
		<h3 class="h3">
			{$page.status}: {$page.error?.message}
		</h3>

		{#if $page.status === 404}
			{$page.url.pathname}
		{/if}
	</div>
</AppShell>
