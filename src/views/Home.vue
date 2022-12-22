<template>
	<div style="height: 78vh;">
		<TopBar />
		<div style="display: flex; flex-direction: column; height: 100%; justify-content: center; align-items: center;">
			
			<div class="d-flex mb-2" style="padding: 10px;">
				<img
					class="mx-4"
					src="src/assets/Images/car-piskel-animation-blue.gif"
					style="width: 80px; height: 50px;"
				/>
				<h1 class="text-center">Pocket Rocket</h1>
				<img
					class="mx-4"
					src="src/assets/Images/car-piskel-animation-red.gif"
					style="width: 80px; height: 50px;"
				/>
			</div>

			<Button class="buttonInMenu" @click="navigate('createRoom')">CREATE ROOM</Button>
			<Button class="buttonInMenu" @click="navigate('findRooms')">FIND ROOM</Button>
			<Button class="buttonInMenu">?</Button>
		</div>
		<Footer class="px-2 py-2" />
	</div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue'

export default {
	props: {},
	data() {
		return {
		}
	},
	directives: {},
	components: { TopBar, Button, Footer },
	computed: {},
	watch: {},
	methods: {
		navigate(route) {
			this.$router.push({ name: route });
		}
	}
}
</script>

<style scoped>
.buttonInMenu {
	margin-bottom: 10px;
	max-width: 250px;
}
</style>