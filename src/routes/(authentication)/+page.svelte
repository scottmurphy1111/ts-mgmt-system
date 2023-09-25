<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import ProgramsIcon from '$lib/assets/icons/programs.svelte';
	import ProducersIcon from '$lib/assets/icons/producers.svelte';
	import ServerIcon from '$lib/assets/icons/server.svelte';
	import UnlockIcon from '$lib/assets/icons/unlock.svelte';
	export let data: PageData;
</script>

{#if data.name}
	<h3 class="h3">Welcome {`${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`}</h3>
{/if}
<div class="h-full p-24">
	<div class="flex flex-wrap gap-4 justify-center items-center">
		<a
			href="/customers"
			class="card card-hover shadow-md bg-secondary-to-primary-300-600-token p-8 flex flex-col gap-4 w-96"
			data-sveltekit-preload-data="tap"
		>
			<header>
				<h3 class="flex gap-2 h3 items-center">
					<svelte:component this={ServerIcon} />TS Mgmt System
				</h3>
			</header>
			<section>
				<p>Manage Customer Info</p>
			</section>
			<footer>
				<button class="btn btn-primary">Launch</button>
			</footer>
		</a>
		<a href="/lead-system/launch" class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96">
			<header>
				<h3 class="flex gap-2 h3 items-center">
					<svelte:component this={ProducersIcon} />TS Lead System
				</h3>
			</header>
			<section>
				<p>Manage Potential Customers</p>
			</section>
			<footer>
				<button class="btn btn-primary">Launch</button>
			</footer>
		</a>

		{#if data.role === 'ADMIN'}
			<a
				href="/admin"
				class="card card-hover shadow-md bg-secondary-to-primary-300-600-token p-8 flex flex-col gap-4 w-96"
			>
				<header>
					<h3 class="flex gap-2 h3 items-center"><svelte:component this={UnlockIcon} />TS Admin</h3>
				</header>
				<section>
					<p>Manage Users</p>
				</section>
				<footer>
					<button class="btn btn-primary">Launch</button>
				</footer>
			</a>
		{/if}
	</div>
</div>

<!-- <form method="post" action="?/logout" use:enhance>
	<input type="submit" value="Sign out" />
</form> -->
