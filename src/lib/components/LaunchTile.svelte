<script lang="ts">
	export let buttonText: string;
	export let buttonStyles: string[] = [];

	$: buttonStyle = buttonStyles.join(' ');
</script>

<button class={buttonStyle} {...$$restProps}>
	{#if buttonStyles.includes('withIcon')}
		<slot name="icon" />
	{/if}
	{buttonText}
</button>

<style lang="postcss">
	button {
		cursor: pointer;
		border-radius: 8px;
		color: var(--ts-white);
		border: var(--ts-blue);
		background: var(--ts-blue);
		height: 2.5rem;

		&:hover {
			background: var(--ts-blue-dark, #0f65b3);
		}

		&.smaller {
			height: 2rem;
		}

		&.disabled {
		}

		&.text {
		}

		&.withIcon {
		}
	}
</style>
