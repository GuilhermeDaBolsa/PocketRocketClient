<template>
	<div style="height: 78vh;">
		<TopBar />
		<div style="display: flex; flex-direction: column; height: 100%; justify-content: center; align-items: center;">
			<div class="d-flex">
				<div class="row">
					<div class="col-12">
						<div class="d-flex" style="padding: 10px;">
							<img src="src/assets/Images/car-piskel-animation-blue.gif"
								style="width: 80px; height: 50px;">
							<h1 class="text-center">
								Pocket Rocket</h1>
							<img src="src/assets/Images/car-piskel-animation-red.gif"
								style="width: 80px; height: 50px;">
						</div>
						<Button class="buttonInMenu" @click="navigate('createRoom')">CREATE ROOM</Button>
						<Button class="buttonInMenu" @click="navigate('findRooms')">FIND ROOM</Button>
						<Button class="buttonInMenu">?</Button>
					</div>
				</div>
			</div>
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

<!-- <style scoped>
.buttonInMenu {
	margin-bottom: 16px;
	width: 100%;
	font-size: 18px;
}
</style> -->