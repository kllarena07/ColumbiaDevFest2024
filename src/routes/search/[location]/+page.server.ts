import { JASMINI_KEY } from '$env/static/private';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	const response = await fetch(
		`https://www.travel-advisory.info/api?countrycode=${params.location}`
	);
	const json = await response.json();

	const data = null;

	const url =
		'https://img4me.p.rapidapi.com/?text=Test%20Me&font=trebuchet&size=12&fcolor=000000&bcolor=FFFFFF&type=png';

	fetch(url, {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': JASMINI_KEY,
			'X-RapidAPI-Host': 'img4me.p.rapidapi.com'
		},
		credentials: 'include' // This is equivalent to xhr.withCredentials = true
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.text();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error('There was a problem with the fetch operation:', error);
		});

	return {
		apiRes: json
	};
};
