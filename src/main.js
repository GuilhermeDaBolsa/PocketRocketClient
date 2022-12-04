import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";

import user from "./store/user"
import room from "./store/room"

const app = createApp(App)

app.use(Vuex);
app.use(new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		user,
		room,
	},
}))

app.use(router)

app.mount('#app')
