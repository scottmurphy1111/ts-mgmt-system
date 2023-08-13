<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { customerData } = data;
</script>

<div class="card p-4">
	<header class="card-header">
		{customerData?.firstName}
		{customerData?.lastName}
		<div class="badge">
			Cust Id# {customerData?.id}
		</div>
	</header>
	<section class="p-4 grid grid-cols-4 gap-4">
		<label>
			First Name:
			<input type="text" class="input" value={customerData?.firstName} />
		</label>
		<label>
			Last Name:
			<input type="text" class="input" value={customerData?.lastName} />
		</label>
		<label>
			Email:
			<input type="text" class="input" value={customerData?.email} />
		</label>
		<label>
			Phone:
			<input type="text" class="input" value={customerData?.phone} />
		</label>
		<label>
			Address:
			<input type="text" class="input" value={customerData?.address} />
		</label>
		<label>
			City:
			<input type="text" class="input" value={customerData?.city} />
		</label>
		<label>
			State:
			<input type="text" class="input" value={customerData?.state} />
		</label>
		<label>
			Zip:
			<input type="text" class="input" value={customerData?.zip} />
		</label>
	</section>
	<footer class="card-footer">(footer)</footer>
</div>
