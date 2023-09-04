<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="card p-8 flex flex-col gap-4 bg-surface-200-800-token max-w-[400px] shadow-xl">
	<h3 class="h3">Email verification</h3>
	<p>
		Your email verification link was sent to your inbox. If you didn't receive it, please click
		below
	</p>

	<form method="post" use:enhance>
		<input class="btn btn-primary cursor-pointer" type="submit" value="Resend" />
	</form>
</div>
