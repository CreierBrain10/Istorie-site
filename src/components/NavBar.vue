<script setup>
	import { getCurrentInstance, onMounted, ref } from "vue";
	import { useRoute } from "vue-router";
	import { useThemeStore } from "@/stores/theme";

	import moonSVG from "@/components/icons/moon.svg";
	import sunSVG from "@/components/icons/sun.svg";
	const { proxy } = getCurrentInstance();
	const currentUri = proxy.$route.path;
	let navigation = [
		{ name: "Home", route: "/", current: false },
		{ name: "Diagrama evolutiei formelor de guvernare", route: "/DiagramaEvolutiei", current: false },
		{ name: "Sistemul partidelor politice", route: "/SistemulPartidelorPolitice", current: false },
		{ name: "Trasaturi ideologice", route: "/TrasaturiIdeologice", current: false },
		{ name: "Membrii grupei", route: "/grupa", current: false },
		{ name: "Quiz", route: "/quiz", current: false },
	];

	navigation.forEach((element) => {
		if (currentUri === element.route) element.current = true;
		else element.current = false;
	});

	const theme = useThemeStore();
	function toggleTheme() {
		theme.themeToggler();
	}
</script>

<template>
	<Disclosure
		as="nav"
		:class="[theme.dark ? 'bg-gray-800' : 'bg-blue-950', 'grid fixed w-full opacity-75 z-50']"
	>
		<div class="mx-bo max-w-7xl px-2 sm:px-6 lg:px-8 justify-self-center">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
				<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<div v-for="item in navigation">
								<RouterLink
									:to="item.route"
									:key="item.name"
									:class="[
										theme.dark
											? item.current
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white hover:opacity-100'
											: item.current
											? 'bg-slate-950 text-gray-300'
											: 'text-white hover:bg-gray-600 hover:text-white hover:opacity-100',
										'rounded-md px-3 py-2 text-sm font-medium',
									]"
									:aria-current="item.current ? 'page' : undefined"
								>
									{{ item.name }}
								</RouterLink>
							</div>
							<button @click="toggleTheme">
								<img
									:src="theme.dark ? sunSVG : moonSVG"
									height="20"
									width="20"
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Disclosure>
</template>
