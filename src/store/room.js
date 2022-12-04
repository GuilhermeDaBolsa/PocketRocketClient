import { createRoom, joinRoom } from '../scripts/APIs'

export default {
	namespaced: true,
	state: {
		loadingRoom: false,
		errorMessageRoom: "",
		roomData: null,
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
			else 
				store.state.roomData = response;
			
			store.state.loadingRoom = false;
		},
		async joinRoom(store, {userId, roomId}) {
			store.state.loadingRoom = true;
			store.state.errorMessageRoom = "";

			const response = await joinRoom(userId, roomId);

			if(response.isError)
				store.state.errorMessageRoom = response.errorMessage;
			else 
				store.state.roomData = response;
			
			store.state.loadingRoom = false;
		}
	},
	modules: {},
};
