<script lang="ts">
	import BackgroundVideo from '$lib/assets/eco-tourismvideo.mp4';
	import * as Accordion from '$lib/components/ui/accordion';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<video
		class="w-full h-dvh object-cover"
		width="3840"
		height="2160"
		muted
		autoplay
		loop
		playsinline
		disablepictureinpicture
	>
		<source src={BackgroundVideo} type="video/mp4" />
		Your browser does not support the video tag.
	</video>

	<section class="bg-gray-800 text-white p-5">
		<h3 class="text-center font-bold text-3xl">Welcome to Our Platform</h3>
		<br />
		<p class="text-center">
			We are dedicated to raising awareness about responsible tourism and its impact on both the
			environment and the economy. We believe that travel should not only enrich our lives but also
			contribute positively to the places we visit.
		</p>
		<br />
	</section>

	<section class="grid grid-cols-2 align-middle py-20 px-10 gap-16">
		<section class="text-center">
			<h3 class="font-bold text-3xl">Our Mission</h3>
			<p class="py-5">
				We want to educate and inspire travelers to make conscious choices that promote
				sustainability, protect local ecosystems, and support the economic development of
				communities. By providing valuable insights into the environmental and economic effects of
				tourism in specific areas, we empower individuals to make informed decisions, fostering a
				deeper connection between travelers and the destinations they explore. Join us in promoting
				responsible tourism practices for a more sustainable and harmonious world.
			</p>
		</section>
		<section id="about" class="text-center">
			<Accordion.Root>
				<Accordion.Item value="item-1">
					<Accordion.Trigger>Tourism a Problem</Accordion.Trigger>
					<Accordion.Content
						>Excessive amounts of tourism increases prices for locals and drives out the local
						population.
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item value="item-2">
					<Accordion.Trigger>The Economy</Accordion.Trigger>
					<Accordion.Content>
						Tourism stimulates the economy in areas that rely on tourism. High amounts of tourism
						help countries who depend on the foreign income thrive.
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item value="item-3">
					<Accordion.Trigger>Pollution and Litter</Accordion.Trigger>
					<Accordion.Content>
						Tourism rises rates of carbon pollution and littering in popular areas
					</Accordion.Content>
				</Accordion.Item>

				<Accordion.Item value="item-4">
					<Accordion.Trigger>Carbon Emissions</Accordion.Trigger>
					<Accordion.Content>
						Travelling during peak travel season is not only expensive but also contributes to high
						levels of carbon emissions
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</section>
	</section>
</main>

<Footer />
