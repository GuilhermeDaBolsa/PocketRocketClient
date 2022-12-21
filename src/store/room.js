import { createRoom, joinRoom, exitRoom } from '../scripts/APIs'
import router from '../router'

export default {
	namespaced: true,
	state: {
		loadingRoom: false,
		errorMessageRoom: "",
		roomData: null,

		loadingExitRoom: false,
		errorMessageExitRoom: "",

		game: null,
	},
	getters: {
		roomData(state) {
			return state.roomData;
		}
	},
	mutations: {},
	actions: {
		async createRoom(store, userId) {
			store.state.loadingRoom = true;
			store.state.errorMessageRoom = "";

			const response = await createRoom(userId);

			if(response.isError)
				store.state.errorMessageRoom = response.errorMessage;
			else {
				store.state.roomData = response;
				router.push({ name: "gameRoom" });
			}
			
			store.state.loadingRoom = false;
		},
		async joinRoom(store, {userId, roomId}) {
			store.state.loadingRoom = true;
			store.state.errorMessageRoom = "";

			const response = await joinRoom(userId, roomId);

			if(response.isError)
				store.state.errorMessageRoom = response.errorMessage;
			else {
				store.state.roomData = response;
				router.push({ name: "gameRoom" });
			}
			
			store.state.loadingRoom = false;
		},
		async exitRoom(store, userId) {
			store.state.loadingExitRoom = true;
			store.state.errorMessageExitRoom = "";

			const response = await exitRoom(userId) ?? {} //TODO BAD '??', SHOULD CHANGE IN API.js

			if(response.isError)
				store.state.errorMessageExitRoom = response.errorMessage;
			else {
				store.state.game.stop();
				store.state.roomData = null;
			}
			
			store.state.loadingExitRoom = false;
		}
	},
	modules: {},
};
