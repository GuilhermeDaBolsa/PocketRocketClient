<template>
	<div style="height: 100vh;">
		<TopBar title="Home"/>

		<div style="display: flex; flex-direction: column; height: 100%; justify-content: center; align-items: center;">
			<div style="padding: 20px; width: 160px;">
				<Button class="buttonInMenu" @click="navigate('createRoom')">CREATE ROOM</Button>
				<Button class="buttonInMenu" @click="navigate('findRooms')">FIND ROOM</Button>
				<Button class="buttonInMenu">?</Button>
				
			</div>
		</div>
	</div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import Button from '../components/Button.vue'

export default {
    props: {},
    data(){
        return {
        }
    },
    directives: {},
    components: { TopBar, Button },
    computed: {},
    watch: {},
    methods: {
		navigate(route) {
			this.$router.push({name: route});
		}
	}
}
</script>

<style scoped>
.buttonInMenu {
	margin-bottom: 16px;
	width: 100%;
	font-size: 18px;
}
</style>