<script lang="ts">
	import picture1 from '$lib/assets/picture1.jpg';
	import picture2 from '$lib/assets/picture2.jpg';
	import picture3 from '$lib/assets/picture3.jpg';
	import picture4 from '$lib/assets/picture4.avif';
	import picture5 from '$lib/assets/picture5.jpg';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;
	let { apiRes } = data;
	let locationJSON = Object.entries(apiRes.data)[0][1];

	const pics = [picture1, picture2, picture3, picture4, picture5];

	// Had to comment out Google Maps thing cuz it was slowing loading down really bad, we need to lazily load it
	import { onMount } from 'svelte';
	let iframeLoaded = false;

	// Set iframeLoaded to true once the iframe is loaded
	const handleIframeLoad = () => {
		iframeLoaded = true;
	};

	// Ensure the iframe is resized to fit its content once loaded
	onMount(() => {
		const resizeIframe = () => {
			const iframe = document.getElementById('mapIframe');
			if (iframe) {
				iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
			}
		};
		window.addEventListener('resize', resizeIframe);
		return () => window.removeEventListener('resize', resizeIframe);
	});

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Generate a random number between 1 and 5
	const randomNumber = getRandomNumber(0, 4);

	let toggled = false;
</script>

<section class="relative flex w-full h-[calc(100dvh-5rem)]">
	<div id="msg" class="absolute">
		<p>This means {locationJSON.advisory.message}</p>
		<button class="absolute top-0 right-0" on:click={() => (toggled = !toggled)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={toggled ? 'black' : 'none'}
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
				/>
			</svg>
		</button>
	</div>
	<img
		src={pics[randomNumber]}
		class="w-full h-full object-cover"
		alt="destination {randomNumber}"
	/>
</section>

<p>Imagine a map here</p>

<style>
	#msg {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: beige;
		padding: 5rem;
		text-align: center;
	}
</style>
