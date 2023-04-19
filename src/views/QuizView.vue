<script setup>
	import { ref } from "vue";
	import NavBar from "@/components/NavBar.vue";
	import swal from "sweetalert";
	import quiz from "@/assets/quiz.json";
	import { useThemeStore } from "@/stores/theme";
	const theme = useThemeStore();

	let incercari = ref(0);
	const questionIndex = ref(0);
	const question = ref(quiz[0]);
	const answer = ref("");
	function selectAnswer(c) {
		answer.value = c;
	}
	function submit() {
		if (answer.value) incercari.value++;
		const currentAnswer = answer.value;
		const currentQuestion = question.value;
		const isCorrect = currentAnswer === currentQuestion.rightAnswer;
		if (isCorrect) {
			swal("Raspuns corect", "", "success");
		} else if (answer.value) swal("Raspuns gresit", "Reincearca", "error");
		else swal("Nu ai selectat niciun raspuns. Reincearca", "", "error");

		if (questionIndex.value < quiz.length && isCorrect) {
			questionIndex.value++;
			question.value = { ...quiz[questionIndex.value] };
		}
		answer.value = "";
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
					<div class="grid grid-cols-2 gap-16 items-center">
						<div
							v-for="c of question.choices"
							:key="c"
							:class="[
								theme.dark ? 'bg-slate-900' : 'bg-zinc-300',
								'border rounded-lg my-4 p-3 text-xl border-gray-950',
							]"
							@click="selectAnswer(c)"
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
				</div>
				<div
					v-else
					class="grid items-center gap-24"
				>
					<div class="text-2xl">Ai raspuns corect la toate intrebarile in {{ incercari }} incercari!</div>
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
				v-if="questionIndex < quiz.length"
				:class="[theme.dark ? 'bg-slate-900' : 'bg-zinc-300', 'border rounded-lg my-4 p-3  text-xl border-gray-950']"
				type="button"
				@click="submit"
			>
				Verifica
			</button>
		</main>
	</full>
</template>
<style scoped>
	full {
		height: 100vh;
	}
</style>
