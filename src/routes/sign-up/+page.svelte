<script>
	export let form;
</script>

<main>
	<form method="POST">
		<div class="form-group">
			<label for="firstName">First Name</label>
			<input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" />
			<label for="lastName">Last Name</label>
			<input type="text" id="lastName" name="lastName" placeholder="Enter your Last Name" />
		</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" placeholder="Enter your email" />
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="Enter your password" />
		</div>
		<div class="form-group">
			<label for="confirmPassword">Confirm Password</label>
			<input
				type="password"
				id="confirmPassword"
				name="confirmPassword"
				placeholder="Confirm your password"
			/>
		</div>
		<div class="form-group">
			<button type="submit">Sign Up</button>
		</div>
		{#if form?.error}
			<div class="form-group">
				<p class="error">{form.error}</p>
			</div>
		{/if}
	</form>
</main>
