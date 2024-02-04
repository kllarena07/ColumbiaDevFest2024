<script lang="ts">
	import { enhance } from '$app/forms';

	import { Input } from '$lib/components/ui/input';
	import Pic1 from '$lib/assets/pic1.jpg';
	import Pic2 from '$lib/assets/pic2.jpg';
	import Pic3 from '$lib/assets/pic3.webp';
	import Pic4 from '$lib/assets/pic4.webp';
	import Pic5 from '$lib/assets/pic5.jpg';
	import Pic6 from '$lib/assets/pic6.jpg';

	const test = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];

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
</script>

<main class="grid grid-row-2 h-full p-10">
	<section>
		<h2 class="font-bold">Where To?</h2>
		<div class="relative">
			<img src="" />
			<form method="POST" use:enhance>
				<Input name="location" placeholder="&#128269; Search..." aria-label="Search" />
			</form>
		</div>
	</section>
	<section>
		<h2 class="font-bold">Don't Know Where To Go?</h2>
		<ul class="flex gap-5 py-5">
			{#each { length: 6 } as _, i}
				<a class="flex-none overflow-x-scroll" href="/">
					<img src={test[i]} class="w-64 h-32 object-cover" alt="destination {i}" />
				</a>
			{/each}
		</ul>
	</section>
</main>

<div class="iframe-container">
	<iframe
		srcdoc={`
    <!DOCTYPE html>
<!--
 @license
 Copyright 2019 Google LLC. All Rights Reserved.
 SPDX-License-Identifier: Apache-2.0
-->
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
     ✂prettier:content✂="" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>
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
