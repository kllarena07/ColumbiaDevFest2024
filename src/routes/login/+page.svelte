<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<main class="flex flex-col items-center justify-center w-full h-dvh">
	<h1 class="font-bold text-3xl">Login</h1>
	<h2 class="text-stone-500">Enter your email and password below to login</h2>
	<form class="flex flex-col justify-center gap-2 p-2.5" method="POST" action="?/login">
		<Label>Email Address</Label>
		<Input name="email" type="email" placeholder="Your email address" />
		<Label>Password</Label>
		<Input name="password" type="password" placeholder="Your password" />
		<Button type="submit">Login</Button>
	</form>
	<a class="text-blue-500" href="/register">Don't have an account? Register</a>
</main>
