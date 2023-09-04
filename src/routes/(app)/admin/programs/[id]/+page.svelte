<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { program } = data;
</script>

<div>
	<p>
		{program?.name}
	</p>
	<p>
		{program?.description}
	</p>
</div>
