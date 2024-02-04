<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<main class="flex flex-col items-center justify-center w-full h-dvh">
	<h1 class="font-bold text-3xl">Register</h1>
	<h2 class="text-stone-500">Enter your email and password to create an account</h2>
	<form class="flex flex-col justify-center gap-2 p-2.5" method="POST" action="?/register">
		<Label>Email Address</Label>
		<Input name="email" type="email" placeholder="Your email address" required />
		<Label>Password</Label>
		<Input name="password" type="password" placeholder="Your password" required />
		<Label>Confirm Password</Label>
		<Input name="passwordConfirm" type="password" placeholder="Confirm your password" required />
		<Button type="submit">Register</Button>
	</form>
	<a class="text-blue-500" href="/login">Already have an account? Login</a>
</main>
