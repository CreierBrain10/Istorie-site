<script setup>
	import { ref, reactive } from "vue";
</script>

<template>
	<nav class="bg-gray-800">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="flex flex-1 items-center justify-center">
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
							<RouterLink
								to="/"
								href="#"
								class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
								aria-current="page"
								>Dashboard</RouterLink
							>

							<RouterLink
								to="/"
								href="#"
								class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>Team</RouterLink
							>

							<RouterLink
								to="/"
								href="#"
								class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>Projects</RouterLink
							>

							<RouterLink
								to="/"
								href="#"
								class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
								>Calendar</RouterLink
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div
			class="sm:hidden"
			id="mobile-menu"
		>
			<div class="space-y-1 px-2 pb-3 pt-2">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a
					href="#"
					class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
					aria-current="page"
					>Dashboard</a
				>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
					>Team</a
				>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
					>Projects</a
				>

				<a
					href="#"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
					>Calendar</a
				>
			</div>
		</div>
	</nav>
</template>
