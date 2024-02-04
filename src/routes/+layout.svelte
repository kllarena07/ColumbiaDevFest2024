<script>
	import '../app.pcss';
	import { page } from '$app/stores';
	import Logo from '$lib/assets/bruh2.png';
</script>

<header>
	<nav class="flex items-center bg-[#6b8e23] px-10 py-5 text-white font-bold justify-between">
		<a href="/">
			<img class="w-10 h-10" src={Logo} alt="Our logo. It's a compass" />
		</a>
		<div class="flex gap-10 items-center">
			<a href="/" class={$page.route.id === '/' ? 'underline' : ''}>Home</a>
			<a href="/#about">About</a>
			<a href="/search" class={$page.route.id === '/search' ? 'underline' : ''}>Explore</a>
			<a href="/news" class={$page.route.id === '/news' ? 'underline ' : ''}>News</a>
			<a href="/profile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
					/>
				</svg>
			</a>
		</div>
	</nav>
</header>
<slot />
