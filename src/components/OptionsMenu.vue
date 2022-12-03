<template>
	<div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
		<div style="padding: 20px; width: 140px;">
			<Button class="buttonInMenu">CREATE ROOM</Button>
			<Button class="buttonInMenu" @click="navigate('rooms')">FIND ROOM</Button>
			<Button class="buttonInMenu">?</Button>
			
		</div>
	</div>
</template>

<script>
import Button from './Button.vue'

export default {
    props: {},
    data(){
        return {
        }
    },
    directives: {},
    components: { Button },
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