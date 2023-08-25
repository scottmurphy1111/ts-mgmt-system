<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	const goToProgram = (id: string) => {
		goto(`/admin/programs/${id}`);
	};
</script>

<div class="h2">Programs</div>
<div class="table-container w-full">
	<table class="table bg-transparent">
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			{#each data.programs as program}
				<tr on:click={() => goToProgram(program.id)}>
					<td>{program.name}</td>
					<td>{program.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
