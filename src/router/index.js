import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: HomeView,
		},
		{
			path: "/DiagramaEvolutiei",
			name: "Diagrama evolutiei",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/DiagramaView.vue"),
		},
		{
			path: "/SistemulPartidelorPolitice",
			name: "Sistemul Partidelor",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/SistemPartide.vue"),
		},
		{
			path: "/TrasaturiIdeologice",
			name: "Trasaturi ideologice",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/TrasaturiView.vue"),
		},
		{
			path: "/Quiz",
			name: "Quiz",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/QuizView.vue"),
		},
	],
});

export default router;
