<template>
	<div class="container">
		{{name}} - {{usersCount}} / {{maxUsers}} <button @click="$emit('join-room')">join</button>
	</div>
</template>

<script>

export default {
    props: {
		name: 		{ type: String, 			default: "unknown" },
		usersCount: { type: [Number, String], 	default: '?' },
		maxUsers: 	{ type: [Number, String], 	default: '?' },
	},
    data(){
        return {
        }
    },
    directives: {},
    components: {},
    computed: {},
    watch: {},
    methods: {}
}
</script>

<style scoped>
.container {
	display: flex;
	border: 1px solid black;
	border-radius: 6px;
	padding: 8px;
	margin: 6px;
	width: 100%;
	box-sizing: border-box;
}
</style>