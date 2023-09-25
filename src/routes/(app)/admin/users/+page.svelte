<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import Dialog from '$lib/components/Dialog.svelte';

	import { getToastStore } from '@skeletonlabs/skeleton';
	import { superForm } from 'sveltekit-superforms/client';
	import { createFormStore } from '$lib/stores/form';
	import { Role, type User } from '@prisma/client';
	import { page } from '$app/stores';

	let dialog: HTMLDialogElement;
	let createNewUserForm: HTMLFormElement;

	$: roles = Object.values(Role);

	export let data: PageData;

	$: ({ users } = data);

	const toastStore = getToastStore();

	const selectedUsers = writable<string[]>([]);

	// const userFormStore = createFormStore({
	// 	data: users.map((user) => ({
	// 		id: user.id,
	// 		name: user.name,
	// 		description: user.description
	// 	})),
	// 	status: 'idle'
	// });

	const resetUserList = async () => {
		await invalidateAll();
		// userFormStore.updateFormData?.($page.data.users);
	};

	const addNewUser = () => {
		// userFormStore.updateStatus?.('editing');
		dialog.showModal();
	};

	const resetForm = () => {
		createNewUserForm.reset();
		dialog?.close();
	};

	const updateUserRole = async (id: string, value: string) => {
		await fetch(`/api/users?userId=${id}`, {
			method: 'PATCH',
			body: JSON.stringify({ role: value })
		});
		await invalidateAll();
	};

	const openDialog = () => {
		dialog.showModal();
	};

	const deleteSelectedUsers = async () => {
		const userIds = $selectedUsers.map((id) => encodeURIComponent(id)).join(',');
		await fetch(`/api/users?ids=${userIds}`, {
			method: 'DELETE'
		});

		await invalidateAll();
		selectedUsers.set([]);
	};

	const cancelDeleteUsers = () => {
		dialog.close();
		selectedUsers.set([]);
	};

	const { form, errors, enhance, delayed } = superForm(data.form, {
		// invalidateAll: true,
		resetForm: true,
		clearOnSubmit: 'errors-and-message',
		taintedMessage: null,
		onSubmit: (data) => {
			// console.log('🙆‍♀️', data);
		},
		onUpdate: (event) => {},
		onError: (errors) => {
			// toastStore.trigger({
			// 	message: errors.result.error.message
			// });
		},
		onUpdated: (event) => {
			// console.log('🙆‍♀️', event.form);
			// console.log('🙆‍♀️ form', form);
			// console.log('page users', $page.data.users);
			if (!Object.keys(event.form.errors).length) {
				dialog.close();
				toastStore.trigger({
					message: event.form.message ? event.form.message : 'User Created Successfully!'
				});
				// userFormStore.updateStatus?.('idle');
				resetUserList();

				// userFormStore.set?.({ data: [event.form.data], status: 'idle' });
			}
		}
	});

	// $: console.log('🙆‍♀️ refresh', $userFormStore.data);
	// $: console.log('🙆‍♀️ users', users);
</script>

<div class="flex justify-between gap-2 mb-4">
	<h2 class="h2">Users</h2>
	{#if $selectedUsers.length > 0}
		<button class="btn variant-filled-error ml-auto" type="button" on:click={openDialog}
			>Delete Selected</button
		>
	{/if}
	<!-- <button class="btn btn-primary" on:click={addNewUser}>Add New</button> -->
</div>
<Dialog bind:dialog>
	<div class="p-8 w-96">
		<div class="flex flex-col items-center gap-4">
			<h3 class="h3">Are you sure?</h3>
			<p class="text-sm">(This is irreversible)</p>
			<div class="flex justify-end gap-2">
				<button type="button" class="btn btn-primary" on:click={deleteSelectedUsers}>Proceed</button
				>
				<button
					type="button"
					class="btn variant-filled-error text-white"
					on:click={cancelDeleteUsers}>Cancel</button
				>
			</div>
		</div>
	</div>
</Dialog>
<!-- <Dialog bind:dialog>
	<div class="p-8 w-96">
		<h3 class="h3 mb-8">Add New User</h3>
		<form
			bind:this={createNewUserForm}
			class="flex flex-col gap-4 mb-4"
			method="post"
			action="?/create"
			use:enhance
		>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<label for="firstName">First Name</label>
					<input
						class="input"
						type="text"
						name="firstName"
						id="firstName"
						required
						placeholder="Enter Name"
					/>
					<label for="lastName">Last Name</label>
					<input
						class="input"
						type="text"
						name="lastName"
						id="lastName"
						required
						placeholder="Enter Name"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label for="address">Address</label>
					<input
						class="input"
						type="text"
						name="address"
						id="address"
						required
						placeholder="Enter Name"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label for="city">City</label>
					<input
						class="input"
						type="text"
						name="city"
						id="city"
						required
						placeholder="Enter Name"
					/>
					<label for="zip">Zip</label>
					<input class="input" type="text" name="zip" id="zip" required placeholder="Enter Name" />
				</div>
				<div class="flex flex-col gap-2">
					<label for="description">Description</label>
					<textarea
						class="input"
						name="description"
						id="description"
						required
						placeholder="Enter Description"
					></textarea>
				</div>
			</div>
			<div class="flex justify-end gap-2">
				<div class="">
					<button class="btn btn-primary" type="submit">Save</button>
				</div>
				<div class="">
					<button class="btn variant-filled-error text-white" type="button" on:click={resetForm}
						>Cancel</button
					>
				</div>
			</div>
		</form>
	</div>
</Dialog> -->
<div class="table-container w-full">
	<table class="table">
		<thead>
			<tr>
				<th>
					<input
						class="checkbox"
						type="checkbox"
						checked={$selectedUsers.length === users.length && $selectedUsers.length > 0}
						on:click={(e) => {
							const isChecked = e.currentTarget?.checked;
							if (isChecked) {
								selectedUsers.set(users.map((c) => c.id));
							} else {
								selectedUsers.set([]);
							}
						}}
					/>
				</th>
				<th>User Id</th>
				<th>Name</th>
				<th>Email</th>
				<th>Email Verified</th>
				<th>Role</th>
			</tr>
		</thead>
		<tbody>
			{#each users as user}
				<tr>
					<td>
						<input
							class="checkbox"
							type="checkbox"
							checked={$selectedUsers.includes(user.id)}
							on:click={(e) => {
								e.stopPropagation();
								const isChecked = e.currentTarget?.checked;
								if (isChecked) {
									selectedUsers.update((users) => [...users, user.id]);
								} else {
									selectedUsers.update((users) => users.filter((c) => c !== user.id));
								}
							}}
						/>
					</td>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.email_verified}</td>
					<td>
						<select
							class="background-transparent"
							bind:value={user.role}
							on:change={(e) => updateUserRole(user.id, e.currentTarget.value)}
						>
							<!-- Need loading option because delay of bind:value -->
							<option hidden disabled selected value>Loading...</option>
							{#each roles as role}
								<option value={role}>{role}</option>
							{/each}
						</select>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
