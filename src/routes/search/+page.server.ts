import { CountryCodeDictionary } from '$lib';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const body = Object.fromEntries(await request.formData());

		if (body.location.length == 2) {
			throw redirect(303, `/search/${body.location}`);
		} else if (CountryCodeDictionary.get(`${body.location}`) != undefined) {
			throw redirect(303, `/search/${CountryCodeDictionary.get(`${body.location}`)}`);
		} else {
			return fail(400, { message: 'Invalid search query' });
		}
	}
};
