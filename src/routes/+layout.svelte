<script>
	import '../app.pcss';
	import { page } from '$app/stores';
</script>

<header class={$page.route.id === '/' ? 'absolute z-[1]' : ''}>
	<nav>
		<a href="/" class="aesthetic-button">Home</a>
		<a href="/search" class="aesthetic-button">Search</a>
	</nav>
</header>
<slot />

<style>
	.aesthetic-button {
		display: inline-block; /* Ensure button behavior */
		padding: 10px 20px; /* Adjust for desired size */
		border: none; /* Remove default borders */
		border-radius: 5px; /* Add rounded corners */
		background-color: #6b8e23; /* Set background color */
		color: white; /* Set text color */
		text-decoration: none; /* Remove underlines */
		font-weight: bold; /* Make text bolder */
		cursor: pointer; /* Indicate interactivity */
	}
	.aesthetic-button::hover {
		background-color: #3e8e41; /* Darken background on hover */
	}
</style>
