<template>
	<div style="height: 100vh;">
		<TopBar showBackBtn title="Create Room"/>

		<div style="position: relative; height: 500px;">
			<canvas id="canvas"></canvas>
		</div>

		USER 1    -    USER 2
	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'
import TopBar from '../components/TopBar.vue'
import Game2D from "../scripts/handleCanva"
import { exitRoom } from '../scripts/APIs'


export default {
    props: {},
    data(){
        return {
			game: null,
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
	},
	mounted() {
		const canva = document.getElementById('canvas');
		this.game = new Game2D(canva, 800, 440);
		this.game.openConnection("ws://localhost:8080/" + this.roomState.roomData.connectionRoute, this.user.id);
		this.game.start();
	},
	beforeUnmount() {
		exitRoom(this.user.id)
		.then(r => { this.game.stop(); }) //TODO IF SUCCESS, ERASE ROOM INFO IN ROOM STORE
		.catch(e => console.log("F"));
	}
}
</script>

<style scoped>
#canvas {
	border: 5px solid black;
	position: absolute;
	width: 800px;
	height: 440px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: cornflowerblue;
}
</style>