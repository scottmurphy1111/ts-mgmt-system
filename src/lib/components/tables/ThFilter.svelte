<script lang="ts">
	import type { DataHandler, Field } from '@vincjo/datatables';
	export let handler: DataHandler;
	export let filterBy: Field<any>;
	let value = '';
</script>

<th>
	<input
		type="text"
		placeholder="Filter"
		bind:value
		on:input={() => handler.filter(value, filterBy)}
	/>
</th>

<style>
	input {
		margin: 0;
		padding: 0 16px;
		width: 100%;
		height: 24px;
		border: none;
		border-bottom: 1px solid #e0e0e0;
		background: inherit;
		outline: none;
		border-radius: 0;
		font-size: 14px;
	}
	input::placeholder {
		color: #bdbdbd;
		font-style: italic;
		font-size: 13px;
	}
	input:focus {
		outline: 1px solid #bdbdbd;
	}
</style>
