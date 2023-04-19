<script setup>
	import { ref } from "vue";
	import NavBar from "../components/NavBar.vue";
	import swal from "sweetalert";
	import quiz from "../assets/quiz.json";
	import { useThemeStore } from "@/stores/theme";
	const theme = useThemeStore();

	const questionIndex = ref(0);
	const question = ref(quiz[0]);
	const answer = ref("");
	function submit() {
		const currentAnswer = answer.value;
		const currentQuestion = question.value;
		const isCorrect = currentAnswer === currentQuestion.rightAnswer;
		if (isCorrect) {
			swal("Raspuns corect", "", "success");
		} else swal("Raspuns gresit", "Reincearca", "error");

		if (questionIndex.value < quiz.length && isCorrect) {
			questionIndex.value++;
			question.value = { ...quiz[questionIndex.value] };
		}
	}

	function restart() {
		question.value = quiz[0];
		answer.value = "";
		questionIndex.value = 0;
	}
</script>

<template>
	<full :class="[theme.dark ? 'dark' : 'light', 'grid']">
		<NavBar />
		<main class="grid place-items-center text-xl pt-20">
			<form>
				<div v-if="questionIndex < quiz.length">
					<div class="mb-20 text-3xl">{{ question.question }}</div>
					<div
						v-for="c of question.choices"
						:key="c"
						:class="[
							theme.dark ? 'bg-slate-900' : 'bg-zinc-300',
							'border rounded-lg my-4 p-3  text-xl border-gray-950',
						]"
					>
						<input
							type="radio"
							name="choice"
							v-model="answer"
							:value="c"
						/>
						{{ c }}
					</div>
				</div>
				<div v-else>
					<button
						:class="[
							theme.dark ? 'bg-slate-900' : 'bg-zinc-300',
							'border rounded-lg my-4 p-3  text-xl border-gray-950',
						]"
						type="button "
						@click="restart"
					>
						Reincepe testul
					</button>
				</div>
			</form>
			<button
				v-if="questionIndex < quiza.length"
				:class="[theme.dark ? 'bg-slate-900' : 'bg-zinc-300', 'border rounded-lg my-4 p-3  text-xl border-gray-950']"
				type="button"
				@click="submit"
			>
				Verifica raspunsul
			</button>
		</main>
	</full>
</template>
<style scoped>
	full {
		height: 100vh;
	}
</style>
