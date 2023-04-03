<script setup>
	import NavBar from "../components/NavBar.vue";
</script>
<template>
	<NavBar />
	<main class="grid">
		<section class="max-w-6xl mt-20">
			<div>
				<p class="text-8xl text-start px-12 ml-8 mt-16">
					,,Adevărul învinge, <span class="text-blue-500">indiferent</span> de soarta celor care l-au servit."
				</p>
				<p class="text-end mr-52 mt-4 text-2xl underline">
					<a
						href="https://ro.wikipedia.org/wiki/Gheorghe_I._Br%C4%83tianu"
						target="_blank"
						>Gheorghe I. Brătianu</a
					>
				</p>
			</div>
		</section>
		<div class="justify-self-end mb-0 grid place-self-end imagediv absolute">
			<img
				src="../components/icons/Bratianu.png"
				class="bratianu"
			/>
		</div>
		<div class="justify-self-start mb-0 grid place-self-end">
			<img src="../components/icons/pnl.png" />
		</div>
		<p class="ml-64 text-center max-w-md text-2xl self-end mb-16 absolute">
			<strong class="block text-4xl mb-8">Partidul Național Liberal</strong> Înființat pentru prima data sub acest nume
			la 24 mai 1875, este unul dintre princilalele partide din România și totodată cea mai veche formațiune politica
			din țară
		</p>
		<div class="justify-self-center mb-0 grid place-self-end absolute">
			<img
				src="../components/icons/stema.png"
				class="stema"
			/>
		</div>
	</main>
</template>
<style scoped>
	main {
		height: 100vh;
		width: 100vw;
	}
	.bratianu {
		width: 600px;
	}
	.stema {
		width: 300px;
		display: inline-block;
	}
</style>
