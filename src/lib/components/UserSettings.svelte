<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User } from '@prisma/client';
	import { popup } from '@skeletonlabs/skeleton';
	import userIcon from '$lib/assets/images/icons/user2.svg';

	import type { PopupSettings } from '@skeletonlabs/skeleton';

	const userSettings: PopupSettings = {
		event: 'click',
		target: 'userSettings',
		placement: 'bottom-end'
	};

	export let userData: Partial<User>;

	//this doesn't work
	const logout = async () => {
		document.cookie = 'auth_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};

	// console.log(userData);
</script>

<div class="badge-icon variant-filled-white p-1 w-7 h-7 dark:bg-white" use:popup={userSettings}>
	<img src={userIcon} alt="user" />
</div>

<div class="card flex flex-col p-4" data-popup="userSettings">
	{userData.name}
	{userData.email}
	<button class="btn btn-primary" on:click={logout}>Logout</button>
	<!-- <form method="post" action="?/logout" use:enhance>
		<input type="submit" value="Sign out" />
	</form> -->
</div>

<style>
	.badge-icon {
		cursor: pointer;
	}
</style>
