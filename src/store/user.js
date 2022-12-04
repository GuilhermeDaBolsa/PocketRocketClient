import { createUser } from '../scripts/APIs'

export default {
	namespaced: true,
	state: {
		loadingUser: false,
		errorMessageUser: "",
		userData: null,
	},
	getters: {
		userData(state) {
			return state.userData;
		},
		getUserFromStorage(state) {
			const user = localStorage.getItem('user');

			if(!user)
				return null;
			
			const parsedUser = JSON.parse(user);

			if(!parsedUser || !parsedUser.id)
				return null;
			
			return parsedUser;
		},
	},
	mutations: {},
	actions: {
		async createUserAccount(store) {
			store.state.loadingUser = true;
			store.state.errorMessageUser = "";

			const response = await createUser();

			if(response.isError)
				store.state.errorMessageUser = response.errorMessage;
			else {
				store.state.userData = response;
				localStorage.setItem('user', JSON.stringify(response));
			}

			store.state.loadingUser = false;
		},
		loadUserFromLocalStorage(store) {
			store.state.userData = store.getters.getUserFromStorage;
		}
	},
	modules: {},
};
