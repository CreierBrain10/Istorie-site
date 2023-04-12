<script setup>
	import NavBar from "../components/NavBar.vue";
	import { useThemeStore } from "@/stores/theme";
	const theme = useThemeStore();
</script>

<template>
	<NavBar />
	<membri :class="[theme.dark ? 'dark ' : 'light ', 'grid content-start main']">
		<div class="grid mt-32">
			<h1 class="text-6xl h-16 block justify-self-center">Membrii grupei</h1>
			<ul class="text-start justify-self-center text-2xl mt-16">
				<li>&#x2022;Boca Stefan-Mihai</li>
				<li>&#x2022;Stefanache Cosmin</li>
				<li>&#x2022;Luca Daria-Andreea</li>
				<li>&#x2022;Alexa Ioana-Stefania</li>
				<li>&#x2022;Baban Florentina</li>
				<li>&#x2022;Radu Mihai-Alexandru</li>
			</ul>
		</div>
	</membri>
</template>
<style scoped>
	.main {
		width: 100vw;
		height: 100vh;
	}
</style>
