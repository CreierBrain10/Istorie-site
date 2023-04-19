<script setup>
	import NavBar from "@/components/NavBar.vue";
	import { useThemeStore } from "@/stores/theme";
	const theme = useThemeStore();
</script>
<template>
	<NavBar />
	<main :class="[theme.dark ? 'dark ' : 'light ', 'grid justify-center gap-10', theme.steaua ? ' steauaClass' : '']">
		<section class="max-w-6xl mt-20">
			<p class="text-8xl text-start px-12 ml-8 mt-16">
				,,Adevărul învinge, <span class="text-blue-500">indiferent</span> de soarta celor care l-au servit."
			</p>
			<p class="text-end mt-4 text-2xl underline">
				<a
					href="https://ro.wikipedia.org/wiki/Gheorghe_I._Br%C4%83tianu"
					target="_blank"
					>Gheorghe I. Brătianu</a
				>
			</p>
		</section>
		<div class="mb-0 mr-0 self-center bratianuContainer justify-self-center">
			<img
				src="../components/icons/Bratianu.png"
				class="rounded-full bratianu"
			/>
		</div>

		<div class="pnl mb-0 self-start flex">
			<img
				src="../components/icons/pnl.png"
				class="inline-block"
			/>

			<p class="ml-8 mt-2 text-center max-w-md text-2xl self-center inline-block">
				<strong class="block text-4xl mb-8">Partidul Național Liberal</strong> Înființat pentru prima data sub acest
				nume la 24 mai 1875, este unul dintre princilalele partide din România și totodată cea mai veche formațiune
				politica din țară
			</p>
		</div>
		<div class="mb-0 self-start inline-block stema">
			<img
				src="../components/icons/stema.png"
				class=""
			/>
		</div>
		<div>
			<h1 class="text-4xl justify-self-center flex">Membrii grupei</h1>
			<ul class="text-start justify-self-center text-2xl mt-12">
				<li>&#x2022;Boca Stefan-Mihai</li>
				<li>&#x2022;Stefanache Cosmin</li>
				<li>&#x2022;Luca Daria-Andreea</li>
				<li>&#x2022;Alexa Ioana-Stefania</li>
				<li>&#x2022;Baban Florentina</li>
				<li>&#x2022;Radu Mihai-Alexandru</li>
			</ul>
		</div>
	</main>
</template>
<style scoped>
	main {
		grid-template-columns: 600px 600px 600px;
		height: 100vh;
	}
	section {
		grid-column: 1 / span 2;
	}
	.bratianu {
		width: 300px;
	}
	.stema {
		width: 200px;
		justify-self: center;
	}
</style>
