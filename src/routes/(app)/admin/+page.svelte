<script lang="ts">
	import ProgramsIcon from '$lib/assets/icons/programs.svelte';
	import SalesRepsIcon from '$lib/assets/icons/salesReps.svelte';
	import CustomersIcon from '$lib/assets/icons/customers.svelte';
	import HatIcon from '$lib/assets/icons/hat.svelte';
</script>

<h2 class="h2">Admin</h2>
<div class="flex gap-4 py-4 flex-wrap">
	<a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/programs">
		<header>
			<h3 class="flex gap-2 h3 items-center"><svelte:component this={ProgramsIcon} />Programs</h3>
		</header>
		<section>
			<p>Manage TS Programs</p>
		</section>
		<footer>
			<button class="btn btn-primary">Launch</button>
		</footer>
	</a>
	<a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/sales-reps">
		<header>
			<h3 class="flex gap-2 h3 items-center">
				<svelte:component this={SalesRepsIcon} />Sales Reps
			</h3>
		</header>
		<section>
			<p>Manage TS Sales Reps</p>
		</section>
		<footer>
			<button class="btn btn-primary">Launch</button>
		</footer>
	</a>
	<a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/users">
		<header>
			<h3 class="flex gap-2 h3 items-center"><svelte:component this={CustomersIcon} />Users</h3>
		</header>
		<section>
			<p>Manage TS Users</p>
		</section>
		<footer>
			<button class="btn btn-primary">Launch</button>
		</footer>
	</a>
	<!-- <a class="card card-hover shadow-md p-8 flex flex-col gap-4 w-96" href="/admin/roles">
		<header>
			<h3 class="flex gap-2 h3 items-center"><svelte:component this={HatIcon} />Roles</h3>
		</header>
		<section>
			<p>Manage TS User Roles</p>
		</section>
		<footer>
			<button class="btn btn-primary">Launch</button>
		</footer>
	</a> -->
</div>
<!-- <div class="card p-8 flex gap-4 w-full">
	<div class="flex flex-col gap-4">
		<h3 class="flex gap-2 h3 mb-8">Manage Users / Roles</h3>
		<div class="flex w-full gap-8">
			<a href="/admin/users" class="flex flex-col gap-2 justify-center items-center w-40">
				<header class="text-3xl">
					<svelte:component this={CustomersIcon} />
				</header>
				<section>Users</section>
				<footer class="w-full flex-auto basis-full">
					<button class="btn btn-primary w-full">Launch</button>
				</footer>
			</a>
			<a href="/admin/roles" class="flex flex-col gap-2 justify-center items-center w-40">
				<header class="text-3xl">
					<svelte:component this={HatIcon} />
				</header>
				<section>Roles</section>
				<footer class="w-full flex-auto basis-full">
					<button class="btn btn-primary w-full">Launch</button>
				</footer>
			</a>
		</div>
	</div>
</div> -->
