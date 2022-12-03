<template>
	<div style="height: 100vh;">
		<APIRequestHandler :loading="loading" :errorMessage="errorMessage" :results="rooms">
			<template v-slot:results>

				<RoomItem
					v-for="room in rooms"
					:key="room.id"
					:name="room.name"
					:usersCount="room.usersCount"
					:maxUsers="room.maxUsers"
				/>

			</template>
		</APIRequestHandler>
	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'
import RoomItem from './RoomItem.vue';

export default {
    props: {},
    data(){
        return {
			loading: false,
			errorMessage: "",
			rooms: null,
        }
    },
    directives: {},
    components: { APIRequestHandler, RoomItem },
    computed: {},
    watch: {},
    methods: {
		async loadRooms() {
			this.loading = true;
			this.errorMessage = ""

			try{
				const rawResponse = await fetch('http://127.0.0.1:8080/get_rooms');
				this.rooms = (await rawResponse.json()).rooms;
			} catch (error) {
				console.log(error);
				this.errorMessage = error.msg ?? "IDK"
			}

			this.loading = false;
		}
	},
	created() {
		this.loadRooms();
	}
}
</script>

<style scoped>
</style>