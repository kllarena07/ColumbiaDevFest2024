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

<div class="iframe-container">
	<iframe
		srcdoc={`
    <!DOCTYPE html>
<html>
  <head>
    <title>Place Details</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script>
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */
      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -33.866, lng: 151.196 },
          zoom: 15,
        });
        const request = {
          placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
          fields: ["name", "formatted_address", "place_id", "geometry"],
        };
        const infowindow = new google.maps.InfoWindow();
        const service = new google.maps.places.PlacesService(map);

        service.getDetails(request, (place, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            place &&
            place.geometry &&
            place.geometry.location
          ) {
            const marker = new google.maps.Marker({
              map,
              position: place.geometry.location,
            });

            google.maps.event.addListener(marker, "click", () => {
              const content = document.createElement("div");
              const nameElement = document.createElement("h2");

              nameElement.textContent = place.name;
              content.appendChild(nameElement);

              const placeIdElement = document.createElement("p");

              placeIdElement.textContent = place.place_id;
              content.appendChild(placeIdElement);

              const placeAddressElement = document.createElement("p");

              placeAddressElement.textContent = place.formatted_address;
              content.appendChild(placeAddressElement);
              infowindow.setContent(content);
              infowindow.open(map, marker);
            });
          }
        });
      }

      window.initMap = initMap;
    </script>
    <style>
      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */
      /* 
       * Always set the map height explicitly to define the size of the div element
       * that contains the map. 
       */
      #map {
        height: 100%;
      }

      /* Optional: Makes the sample page fill the window. */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYGqrfdJja9zlYIxpSIYW-o4kCneGOY-M&callback=initMap&libraries=places&v=weekly&solution_channel=GMP_CCS_placedetails_v1"
      defer
     ✂prettier:content✂="" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>
  </body>
</html>
    `}
		id="mapIframe"
		frameborder="0"
		scrolling="no"
		onload={handleIframeLoad}
	></iframe>
</div>

<style>
	#msg {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: beige;
		padding: 5rem;
		text-align: center;
	}
	.iframe-container {
		position: relative;
		width: 100%;
		overflow: hidden;
		padding-top: 56.25%; /* 16:9 aspect ratio */
	}
	.iframe-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
