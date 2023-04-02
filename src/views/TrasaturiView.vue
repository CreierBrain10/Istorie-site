<script setup>
	import NavBar from "../components/NavBar.vue";
	const style = "";
</script>
<template>
	<NavBar />
	<div class="grid custom">
		<main class="mt-20 text-center grid grid-cols-2 m-8 p-8 gap-8 h-96 self-center place-items-center">
			<p>
				<strong class="block">Programul Partidului National Liberal(1922)</strong>
				<span class="block">-dreptate sociala</span> -sporire a productiei si inlesnirea exportului
			</p>
			<p>
				<strong class="block">Programul Partidului National Taranesc (1935)</strong>
				<span class="block">-drept de vot la femei</span> -loc de munca si proprietate garantat
			</p>
			<p>
				<strong class="block">Comunism</strong> <span class="block">-stat de nationalitati</span> -lupta pentru
				eliberare si independenta lor nationala( Basarabia, Bucovina ,Transilvania si Dobrogea)
			</p>
			<p>
				<strong class="block"> legionalism</strong>
				<span class="block">-conservatorism nationalist</span> -ultranationalism de extrema dreapta
			</p>
		</main>
	</div>
</template>
<style scoped>
	p {
		margin-top: 22px;
		max-width: 600px;
	}
	main {
		height: 80vh;
	}
	strong {
		margin-bottom: 26px;
	}
	.custom {
		height: 100vh;
		width: 100vw;
	}
</style>
