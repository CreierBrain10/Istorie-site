<script setup>
	import { ref } from "vue";
	import NavBar from "../components/NavBar.vue";
	const darkTheme = ref(true);
	function themeToggler() {
		darkTheme = !darkTheme.value;
	}
</script>
<template>
	<NavBar darkTheme="{{darkTheme.value}}" />
	<div class="grid place-items-center justify-center mt-20">
		<div class="grid place-items-center border inset-0 border-gray-600 rounded-xl p-4 border-double">
			<img src="@/components/icons/diagram.png" />
			<p>Diagrama evoluției formelor de guvernare în România 1918-1938</p>
		</div>
	</div>
</template>
<style scoped>
	.border {
		border-width: 8px;
	}
</style>
