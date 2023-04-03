<script setup>
	import { ref, reactive } from "vue";
	import NavBar from "../components/NavBar.vue";

</script>

<template>
	<NavBar />
	<div class="grid">
		<membri class="grid mt-32 content-start">
			<h1 class="text-6xl h-16 block justify-self-center">Membrii grupei</h1>
			<ul class="text-start justify-self-center text-2xl mt-16">
				<li>&#x2022;Boca Stefan-Mihai</li>
				<li>&#x2022;Stefanache Cosmin</li>
				<li>&#x2022;Luca Daria</li>
				<li>&#x2022;Alexa Ioana-Stefania</li>
				<li>&#x2022;Baban Florentina</li>
				<li>&#x2022;Radu Mihai-Alexandru</li>
			</ul>
		</membri>
</template>
<style scoped>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>
