<script lang="ts">
	export let dialog: HTMLDialogElement;
</script>

<dialog bind:this={dialog} on:close class="rounded-md shadow-md">
	<button class="absolute top-0 right-0 p-2" on:click={() => dialog.close()}>
		<svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"
			></path>
		</svg>
	</button>
	<slot />
</dialog>
