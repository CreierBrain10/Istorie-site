import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
	state: () => {
		return { dark: true, steaua: false };
	},
	// could also be defined as
	// state: () => ({ count: 0 })
	actions: {
		themeToggler() {
			this.dark = !this.dark;
		},
		steauaToggler() {
			this.steaua = !this.steaua;
		},
	},
});
