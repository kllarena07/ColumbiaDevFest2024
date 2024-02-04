<script lang="ts">
	import { enhance } from '$app/forms';

	import { Input } from '$lib/components/ui/input';
	import Pic1 from '$lib/assets/pic1.jpg';
	import Pic2 from '$lib/assets/pic2.jpg';
	import Pic3 from '$lib/assets/pic3.webp';
	import Pic4 from '$lib/assets/pic4.webp';
	import Pic5 from '$lib/assets/pic5.jpg';
	import Pic6 from '$lib/assets/pic6.jpg';
	import morning from '$lib/assets/morning.avif';
	import afternoon from '$lib/assets/afternoon.avif';
	import evening from '$lib/assets/EVENING.avif';

	import Button from '$lib/components/ui/button/button.svelte';

	function getGreeting() {
		const currentHour = new Date().getHours();

		if (currentHour >= 5 && currentHour < 12) {
			return [morning, 'Good morning! ☀️'];
		} else if (currentHour >= 12 && currentHour < 18) {
			return [afternoon, 'Good afternoon.'];
		} else {
			return [evening, 'Good evening! ⭐'];
		}
	}

	const test = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];
</script>

<main>
	<section class="flex gap-5 justify-center items-center flex-col h-[70dvh]">
		<img
			src={getGreeting()[0]}
			class="w-full h-[70dvh] object-cover absolute z-[-1]"
			alt={getGreeting()[1]}
		/>
		<h2 class="font-bold text-3xl text-white">{getGreeting()[1]} Where To?</h2>
		<form class="flex flex-col gap-5 w-[50%] text-white" method="POST" use:enhance>
			<Input
				name="location"
				class="border-2 placeholder:text-white"
				placeholder="&#128269; Search..."
				aria-label="Search"
			/>
			<Button type="submit" class="self-center w-[50%]">Search</Button>
		</form>
	</section>
	<section class="p-5">
		<h2 class="font-bold text-3xl">Don't Know Where To Go?</h2>
		<p>Here are some popular places that you might like</p>
		<ul class="flex gap-5 py-5 overflow-x-scroll">
			{#each { length: 6 } as _, i}
				<a class="flex-none" href="/">
					<img src={test[i]} class="w-64 h-32 object-cover" alt="destination {i}" />
				</a>
			{/each}
		</ul>
	</section>
</main>
