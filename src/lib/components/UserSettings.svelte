<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User } from '@prisma/client';
	import { popup } from '@skeletonlabs/skeleton';
	import userIcon from '$lib/assets/images/icons/user2.svg';

	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const userSettings: PopupSettings = {
		event: 'click',
		target: 'userSettings',
		placement: 'bottom-end'
	};

	//this doesn't work
	const logout = async () => {
		await fetch('/api/logout', {
			method: 'POST'
		}).then((res) => {
			if (res.ok) {
				goto('/login');
			}
		});
	};

	// $: console.log('$page', $page);
</script>

<div
	class="badge-icon cursor-pointer variant-filled-white p-1 w-7 h-7 dark:bg-white"
	use:popup={userSettings}
>
	<img src={userIcon} alt="user" />
</div>

<div class="card w-80" data-popup="userSettings">
	<div class="flex flex-col p-4 gap-4">
		<h3 class="h3">Current User</h3>
		<p>
			Name: {$page.data.name}
		</p>
		<p>
			Email: {$page.data.email}
		</p>
		<p>
			Role {$page.data.role}
		</p>
		<a href="/password-reset" class="underline text-primary-500 hover:text-primary-800"
			>Change Password</a
		>
		<button class="btn btn-primary" on:click={logout}>Logout</button>
		<!-- <form method="post" action="?/logout" use:enhance>
      class="input" type="submit" value="Sign out" />
    </form> -->
	</div>
</div>
