<script setup>
	import { getCurrentInstance, onMounted, ref, defineEmits } from "vue";
	import { useRoute } from "vue-router";
	import moonSVG from "@/components/icons/moon.svg";
	import sunSVG from "@/components/icons/sun.svg";
	const { proxy } = getCurrentInstance();
	const currentUri = proxy.$route.path;

	defineEmits(["toggleTheme"]);
	const props = defineProps({
		darkTheme: Boolean,
		required: true,
	});

	const emitTheme = () => {
		// Emit the 'toggleTheme' event with some data
		emit("toggleTheme");
	};

	let navigation = [
		{ name: "Home", route: "/", current: false },
		{ name: "Diagrama evolutiei formelor de guvernare", route: "/DiagramaEvolutiei", current: false },
		{ name: "Sistemul partidelor politice", route: "/SistemulPartidelorPolitice", current: false },
		{ name: "Trasaturi ideologice", route: "/TrasaturiIdeologice", current: false },
		{ name: "Membrii grupei", route: "/grupa", current: false },
	];

	navigation.forEach((element) => {
		if (currentUri === element.route) element.current = true;
		else element.current = false;
	});
</script>

<template>
	<Disclosure
		as="nav"
		:class="[darkTheme ? 'bg-gray-800' : 'bg-white', 'grid fixed w-full opacity-75 z-50']"
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
										darkTheme
											? item.current
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white hover:opacity-100'
											: item.current
											? 'bg-slate-900 text-indigo-400'
											: 'text-black hover:bg-gray-600 hover:text-white hover:opacity-100',
										'rounded-md px-3 py-2 text-sm font-medium',
									]"
									:aria-current="item.current ? 'page' : undefined"
								>
									{{ item.name }}
								</RouterLink>
							</div>
							<button @click="emitTheme">
								<img
									:src="darkTheme ? moonSVG : sunSVG"
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
