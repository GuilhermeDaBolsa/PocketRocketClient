<template>
	<div style="height: 100vh;">
		<TopBar showBackBtn title="Create Room"/>

		<div style="display: flex; flex-direction: column; height: 100%; justify-content: center; align-items: center;">
			<div style="padding: 20px; width: 160px;">
				Nome:
				<input
					type="text"
					value="Salinha"
					disabled
					style="width: 100%; margin-bottom: 5px; box-sizing: border-box; color: #dddddd"
				/>
				<Button @click="createNewRoom">CREATE</Button>
			</div>

			<APIRequestHandler :loading="roomState.loadingRoom" :errorMessage="roomState.errorMessageRoom" :results="roomState.roomData">
				<template v-slot:results>
					Entrando na sala...
				</template>
			</APIRequestHandler>
		</div>

	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'
import TopBar from '../components/TopBar.vue'
import Button from '../components/Button.vue'

export default {
    props: {},
    data(){
        return {
        }
    },
    directives: {},
    components: { TopBar, APIRequestHandler, Button},
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
			await this.$store.dispatch("room/createRoom", this.user?.id ?? null); //TODO rethink this 'this.user?.id ?? null'
		}
	}
}
</script>

<style scoped>
</style>