import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/Game.vue'
import HomeView from '../views/Home.vue'
import RoomsAPI from '../components/RoomsAPI.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/rooms',
			name: 'rooms',
			component: RoomsAPI
		},
		{
			path: '/game',
			name: 'game',
			component: GameView
		},
	]
})

export default router
