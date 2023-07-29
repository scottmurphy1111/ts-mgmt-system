<script>
	import search from '$lib/images/icons/search.svg';
	import { isSearching } from '$lib/stores/isSearching';
	let searchInput = '';
</script>

<div class="search">
	<img src={search} alt="search" />
	<form>
		<input
			type="text"
			placeholder="Search..."
			on:input={(e) => {
				const value = e.currentTarget.value;

				if (value.length !== 0) $isSearching = true;
				else $isSearching = false;
				searchInput = value;
			}}
		/>
	</form>
	{#if $isSearching}
		<div class="search-results">Search Results</div>
	{/if}
</div>

<style>
	.search {
		display: flex;
		gap: 0.5rem;
		/* flex: 1 1 auto; */
	}

	img {
		width: 1.125rem;
		height: 1.125rem;
		flex-shrink: 0;
	}

	form {
		width: 100%;
	}

	input {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		background: transparent;
		font-size: 0.875rem;
		font-family: var(--font-family);
		font-weight: 400;
		color: var(--color-ts-black);
	}

	.search-results {
		position: absolute;
		z-index: 4;
		top: 3rem;
		background: var(--color-ts-white);
		padding: 1rem;
		box-sizing: border-box;
	}
</style>
