<script lang="ts">
	export let data;

	let { apiRes } = data;
	let locationJSON = Object.entries(apiRes.data)[0][1];

	let score = locationJSON.advisory.score;
</script>

<h1>{locationJSON.advisory.score}</h1>
<p>This means {locationJSON.advisory.message}</p>
