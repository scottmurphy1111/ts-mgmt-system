<script lang="ts">
	import tsLogo from '$lib/images/ts-logo.svg';
	import CustomersIcon from '$lib/images/icons/customers.svelte';
	import ProducersIcon from '$lib/images/icons/producers.svelte';
	import ProgramsIcon from '$lib/images/icons/programs.svelte';
	import SalesRepsIcon from '$lib/images/icons/salesReps.svelte';
	import ReportsIcon from '$lib/images/icons/reports.svelte';

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
</script>

<aside>
	<a href="/">
		<img src={tsLogo} alt="ts-logo" />
	</a>
	<ul>
		{#each items as item}
			<li class={$page.route.id === item.link ? 'active' : ''}>
				<a href={item.link}>
					<svelte:component this={item.icon} />

					<span class="text-style-md title">{item.title}</span>
				</a>
			</li>
		{/each}
	</ul>
</aside>

<style lang="postcss">
	aside {
		box-sizing: border-box;
		padding: 1rem;
		width: 15rem;
		height: 100vh;
		background: var(--color-ts-white);
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
				width: 4px;
				height: 24px;
				background-color: var(--color-ts-blue);
				margin-left: -1rem;
				margin-right: calc(1rem - 4px);
			}

			path {
				fill: var(--color-ts-blue);
			}

			a {
				color: var(--color-ts-blue);
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
			color: var(--color-ts-black);

			img {
				width: 0.875rem;
				height: 0.875rem;
			}
		}
	}
</style>
