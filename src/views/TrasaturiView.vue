<script setup>
	import NavBar from "@/components/NavBar.vue";
	import { useThemeStore } from "@/stores/theme";
	const theme = useThemeStore();
</script>
<template>
	<NavBar />
	<div :class="[theme.dark ? 'dark ' : 'light ', theme.steaua ? ' steauaClass' : '', 'grid custom']">
		<main class="mt-20 text-center grid grid-cols-2 m-8 p-8 gap-8 h-96 self-center place-items-center">
			<p class="inset border-slate-800 rounded-2xl border-8 shadow-md p-6">
				<strong class="block text-6xl">Programul Partidului National Liberal(1922)</strong>
				<span class="block text-2xl">-Dreptate sociala</span>
				<span class="block text-2xl">-Sporire a productiei si inlesnirea exportului</span>
			</p>
			<p class="inset border-slate-800 rounded-2xl border-8 shadow-md p-6">
				<strong class="block text-6xl">Programul Partidului National Taranesc (1935)</strong>
				<span class="block text-2xl">-Femeile primesc dreptul la vot</span>
				<span class="block text-2xl">-Locul de munca si proprietatea sunt garantate</span>
			</p>
			<p class="inset border-slate-800 rounded-2xl border-8 shadow-md p-6">
				<strong class="block text-6xl">Comunism</strong> <span class="block text-2xl">-Stat de nationalitati</span>
				<span class="block text-2xl"
					>-Lupta pentru eliberare si independenta nationala a provinciilor ( Basarabia, Bucovina ,Transilvania si
					Dobrogea)</span
				>
			</p>
			<p class="inset border-slate-800 rounded-2xl border-8 shadow-md p-6">
				<strong class="block text-6xl"> Legionari</strong>
				<span class="block text-2xl">-Conservatorism nationalist</span>
				<span class="block text-2xl">-Ultranationalism de extrema dreapta (nazism)</span>
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
