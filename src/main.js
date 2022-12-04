import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";

import user from "./store/user"

const app = createApp(App)

app.use(Vuex);
app.use(new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		user,
	},
}))

app.use(router)

app.mount('#app')
