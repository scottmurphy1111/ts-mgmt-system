<script lang="ts">
	import Aside from '$lib/components/Aside.svelte';
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import { isSearching } from '$lib/stores/isSearching';
	import { fade } from 'svelte/transition';
	import { supabaseClient } from '$lib/supabase';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
  
  export let data;

	$: activeOverlay = $isSearching ? 'active' : '';
  let { supabase, session } = data;

  onMount(() => {
    const { data: { subscription }} = supabaseClient.auth.onAuthStateChange((event, _session) => {
      if(_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });

    return () => subscription?.unsubscribe();
  });

</script>

<div class="app">
	<Aside />

	<main>
		<Header />
		<div class="overlay {activeOverlay}" transition:fade={{ delay: 250, duration: 300 }} />
		<slot />
	</main>

	<!-- <footer> -->
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	<!-- </footer> -->
</div>

<style>
	.app {
		display: grid;
		grid-template-columns: 15rem 1fr;
		min-height: 100vh;
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 0 1rem;
		width: 100%;
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;
		background-image: url('$lib/images/bg-image.jpg');
		background-size: cover;
	}

	.overlay {
		&.active {
			opacity: 0.4;
			background: #002950;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	} */

	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
