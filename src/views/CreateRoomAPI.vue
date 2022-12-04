<template>
	<div style="height: 100vh;">
		<TopBar showBackBtn title="Create Room"/>

		<div style="width: 200px; height: 200px;">
			Nome:
			<input type="text" value="Salinha" disabled />
			<button @click="createNewRoom" :disabled="roomState.loadingRoom">Create</button>

		</div>

		<APIRequestHandler :loading="roomState.loadingRoom" :errorMessage="roomState.errorMessageRoom" :results="roomState.roomData">
			<template v-slot:results>
				Entrando na sala...
			</template>

		</APIRequestHandler>
	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'
import TopBar from '../components/TopBar.vue'

export default {
    props: {},
    data(){
        return {
        }
    },
    directives: {},
    components: { TopBar, APIRequestHandler },
    computed: {
		user: {
			get() {
				return this.$store.getters["user/userData"];
			}
		},
		roomState: {
			get() {
				return this.$store.state.room;
			}
		},
	},
    watch: {},
    methods: {
		async createNewRoom() {
			await this.$store.dispatch("room/createRoom", this.user?.id ?? false);
			if(!this.roomState.errorMessageRoom && this.roomState.roomData) {
				setTimeout(() => {
					this.$router.push({ name: "gameRoom" });
				}, 1000)
			}
		}
	}
}
</script>

<style scoped>
</style>