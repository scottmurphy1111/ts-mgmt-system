<script lang="ts">
	import CustomersIcon from '$lib/assets/icons/customers.svelte';
	import TrucksIcon from '$lib/assets/icons/trucks.svelte';
	import ProducersIcon from '$lib/assets/icons/producers.svelte';
	import ProgramsIcon from '$lib/assets/icons/programs.svelte';
	import SalesRepsIcon from '$lib/assets/icons/salesReps.svelte';
	import ReportsIcon from '$lib/assets/icons/reports.svelte';

	let items = [
		{
			icon: CustomersIcon,
			title: 'Customers',
			link: '/customers'
		},
		{
			icon: TrucksIcon,
			title: 'Trucks',
			link: '/trucks'
		},
		{
			icon: ProducersIcon,
			title: 'Producers',
			link: '/producers'
		},
		{
			icon: ProgramsIcon,
			title: 'Programs',
			link: '/programs'
		},
		{
			icon: SalesRepsIcon,
			title: 'Sales Reps',
			link: '/sales-reps'
		},
		{
			icon: ReportsIcon,
			title: 'Reports',
			link: '/reports'
		}
	];

	import { page } from '$app/stores';
</script>

<div class="shadow-md w-64 h-full p-4 bg-white dark:bg-surface-900 z-10">
	<ul class="m-0 p-0 flex flex-col gap-2 list-none">
		{#each items as item}
			<li>
				<a
					class="inline-flex h-8 w-full gap-2 items-center"
					class:active={$page.url.pathname.startsWith(item.link)}
					href={item.link}
				>
					<svelte:component this={item.icon} />

					<span class="text-style-md title">{item.title}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	a {
		&:before {
			content: '';
			display: block;
			width: 5px;
			height: 24px;
			/* background-color: rgba(var(--color-primary-500) / 0.5); */
			margin-left: -1rem;
			margin-right: calc(1rem - 5px);
		}
	}
	.active {
		color: rgba(var(--color-primary-500) / 1);
		font-weight: 600;
		&:before {
			background-color: rgba(var(--color-primary-500) / 1);
		}
	}
</style>
