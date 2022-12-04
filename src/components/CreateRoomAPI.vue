<template>
	<div style="height: 100vh;">
		<TopBar showBackBtn title="Create Room"/>

		<APIRequestHandler :loading="loadingCreateRoom" :errorMessage="createRoomErrorMessage" :results="createdRoom" style="height: 100%;">
			<template v-slot:blank>
				<div style="width: 200px; height: 200px;">
					Nome:
					<input type="text" value="Salinha" disabled />
					<button>Create</button>

				</div>
			</template>
			
			<template v-slot:results>

			</template>

		</APIRequestHandler>
	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'
import TopBar from './TopBar.vue'
import { createRoom } from '../scripts/APIs'

export default {
    props: {},
    data(){
        return {
			loadingCreateRoom: false,
			createRoomErrorMessage: "",
			createdRoom: null,
        }
    },
    directives: {},
    components: { TopBar, APIRequestHandler },
    computed: {},
    watch: {},
    methods: {
		async createNewRoom() {
			this.loadingCreateRoom = true;

			/* const user = 

			const response = await createRoom(); */

			this.loadingCreateRoom = false;
		}
	}
}
</script>

<style scoped>
</style>