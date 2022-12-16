<template>
	<div style="height: 100vh;">
		<TopBar showBackBtn title="Find Rooms"/>

		<APIRequestHandler :loading="loadingRooms" :errorMessage="loadRoomsErrorMessage" :results="rooms" style="height: 100%;">
			<template v-slot:empty>
				Não há salas criadas :(
			</template>
			
			<template v-slot:results>

				<RoomItem
					v-for="room in rooms"
					:key="room.id"
					:id="room.id"
					:name="room.name"
					:usersCount="room.usersCount"
					:maxUsers="room.maxUsers"
					@join-room="joinRoom"
				/>

			</template>
		</APIRequestHandler>
	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'
import RoomItem from '../components/RoomItem.vue';
import TopBar from '../components/TopBar.vue'
import { getAllRooms } from '../scripts/APIs'

export default {
    props: {},
    data(){
        return {
			loadingRooms: false,
			loadRoomsErrorMessage: "",
			rooms: null,
        }
    },
    directives: {},
    components: { TopBar, APIRequestHandler, RoomItem },
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
		async loadRooms() {
			this.loadingRooms = true;
			this.loadRoomsErrorMessage = ""

			const response = await getAllRooms();

			if(response.isError)
				this.loadRoomsErrorMessage = response.errorMessage;
			else
				this.rooms = response.rooms;

			this.loadingRooms = false;
		},
		async joinRoom(roomId) {
			await this.$store.dispatch("room/joinRoom", {userId: this.user?.id, roomId: roomId});
			if(!this.roomState.errorMessageRoom && this.roomState.roomData) {
				setTimeout(() => {
					this.$router.push({ name: "gameRoom" });
				}, 1000)
			}
		}
	},
	created() {
		this.loadRooms();
	}
}
</script>

<style scoped>
</style>