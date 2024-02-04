import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	const response = await fetch(
		`https://www.travel-advisory.info/api?countrycode=${params.location}`
	);
	const data = await response.json();
	return {
		apiRes: data
	};
};
