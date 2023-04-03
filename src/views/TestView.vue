<script setup>
	import NavBar from "../components/NavBar.vue";
	import { ref } from "vue";
	let test = ref(0);
	const intrebari = [
		{
			question: "Cine a fost primul lider al legionarilor?",
			options: [
				{ id: 1, text: "Mugur Mihaiescu" },
				{ id: 2, text: "Garcea" },
			],
			correctAnswer: [2],
		},
		{
			question: "Cine a fost garcea?",
			options: [
				{ id: 1, text: "Mare smecher" },
				{ id: 2, text: "Smecher" },
			],
			correctAnswer: [1],
		},
	];

	const selectedOptions = ref([]);

	function submitAnswers() {
		const isCorrect =
			selectedOptions.value.length === intrebari[test].correctAnswer.length &&
			selectedOptions.value.every((option) => intrebari[test].correctAnswer.includes(option));
		alert(`Raspunsul este ${isCorrect ? "corect" : "incorect. Reincearca"}.`);
		if (isCorrect) {
			test++;
		}
	}
</script>
<template>
	<NavBar />
	<div class="mt-20 ml-4">
		<h1>{{ intrebari[test].question }}</h1>
		<div
			v-for="option in intrebari[test].options"
			:key="option.id"
		>
			<label>
				<input
					type="checkbox"
					:value="option.id"
					v-model="selectedOptions"
				/>
				{{ option.text }}
			</label>
		</div>
		<button @click="submitAnswers">Submit</button>
	</div>
</template>
<style scoped></style>
