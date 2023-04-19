<script setup>
	import NavBar from "@/components/NavBar.vue";
	import { useThemeStore } from "@/stores/theme";
	const theme = useThemeStore();
</script>
<template>
	<NavBar />
	<div :class="[theme.dark ? 'dark ' : 'light ', 'grid place-items-center justify-center']">
		<div class="grid place-items-center border inset-0 border-gray-600 rounded-xl p-4 border-double mt-20">
			<img src="@/components/icons/diagram.png" />
			<p>Diagrama evoluției formelor de guvernare în România 1918-1938</p>
		</div>
	</div>
</template>
<style scoped>
	.border {
		border-width: 8px;
	}
	.light,
	.dark {
		height: 100vh;
	}
</style>
