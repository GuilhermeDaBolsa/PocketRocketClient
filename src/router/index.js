import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/GameRoom.vue'
import HomeView from '../views/Home.vue'
import FindRoomsAPI from '../views/FindRoomsAPI.vue'
import CreateRoomAPI from '../views/CreateRoomAPI.vue'

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
			path: '/gameRoom',
			name: 'gameRoom',
			component: GameView
		},
	]
})

export default router
