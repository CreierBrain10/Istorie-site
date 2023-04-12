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
			name: "Sistemul partidelor",
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
			path: "/grupa",
			name: "Grupa",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/GrupaView.vue"),
		},
		{
			path: "/quiz",
			name: "Quiz",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/QuizView.vue"),
		},
		{
			path: "/try",
			name: "Try",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/TryView.vue"),
		},
	],
});

export default router;
