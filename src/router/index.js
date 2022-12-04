import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/Game.vue'
import HomeView from '../views/Home.vue'
import FindRoomsAPI from '../components/FindRoomsAPI.vue'
import CreateRoomAPI from '../components/CreateRoomAPI.vue'

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
			name: 'findRooms',
			component: FindRoomsAPI
		},
		{
			path: '/createRoom',
			name: 'createRoom',
			component: CreateRoomAPI
		},
		{
			path: '/game',
			name: 'game',
			component: GameView
		},
	]
})

export default router
