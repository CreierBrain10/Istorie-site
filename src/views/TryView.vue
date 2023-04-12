<script setup>
	import { useThemeStore } from "@/stores/theme";
	const theme = useThemeStore();
	function toggleTheme() {
		theme.themeToggler();
	}
</script>
<template>
	<button
		class="w-10 h-10 bg-slate-600"
		@click="toggleTheme"
	>
		{{ theme.dark }}
	</button>
</template>
