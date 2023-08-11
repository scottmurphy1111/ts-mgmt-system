<script lang="ts">
	// import tsLogo from 'images/ts-logo.svg';
	// import tsLogoDark from 'images/ts-logo-dark.svg';
	import CustomersIcon from '$lib/icons/customers.svelte';
	import ProducersIcon from '$lib/icons/producers.svelte';
	import ProgramsIcon from '$lib/icons/programs.svelte';
	import SalesRepsIcon from '$lib/icons/salesReps.svelte';
	import ReportsIcon from '$lib/icons/reports.svelte';

	let items = [
		{
			icon: CustomersIcon,
			title: 'Customers',
			link: '/customers'
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
			link: '/salesReps'
		},
		{
			icon: ReportsIcon,
			title: 'Reports',
			link: '/reports'
		}
	];

	import { page } from '$app/stores';
	// console.log($page);
</script>

<div class="shadow-md w-64 h-full p-4 bg-white dark:bg-surface-900 z-10">
	<ul class="m-0 p-0 flex flex-col gap-2 list-none">
		{#each items as item}
			<li>
				<a
					class="inline-flex h-8 w-full gap-2 items-center"
					class:active={$page.url.pathname === item.link}
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
			/* content: '';
			display: block;
			width: 5px;
			height: 24px;
			margin-left: -1rem;
			margin-right: calc(1rem - 5px); */
		}
	}
	/*  aside { 
		box-sizing: border-box;
		padding: 1rem;
		width: 15rem;
		height: 100vh;
		background: var(--ts-white);
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
		position: relative;
		z-index: 3;

		> a {
			display: flex;
			width: 189px;
			margin-bottom: 3.5rem;

			img {
				width: 100%;
			}
		}
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	li {
		display: inline-flex;
		height: 24px;

		&.active {
			&:before {
				content: '';
				display: block;
				width: 5px;
				height: 24px;
				background-color: var(--ts-blue);
				margin-left: -1rem;
				margin-right: calc(1rem - 5px);
			}

			path {
				fill: var(--ts-blue);
			}

			a {
				color: var(--ts-blue);
			}
			.title {
				font-weight: 600;
			}
		}

		a {
			display: flex;
			gap: 0.69rem;
			align-items: center;
			text-decoration: none;
			color: var(--ts-black);

			img {
				width: 0.875rem;
				height: 0.875rem;
			}
		}
	} */
</style>
