import { PB_URL } from '$env/static/private';
import { redirect, type Handle } from '@sveltejs/kit';
import Pocketbase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase(PB_URL);

	if (event.locals.pb) {
		console.log('created PB instance');
	} else {
		console.log('error creating PB instance');
	}

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	event.locals.user = event.locals.pb.authStore.isValid
		? structuredClone(event.locals.pb.authStore.model)
		: undefined;

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: true }));

	return response;
};
