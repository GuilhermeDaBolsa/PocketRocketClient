<template>
	<div class="container">
		<div>{{id}} - {{name}}</div>
		<div style="flex: 1;"></div>
		<div>{{usersCount}} / {{maxUsers}}</div>
		<button style="margin-left: 12px;" @click="$emit('join-room', id)">join</button>
	</div>
</template>

<script>

export default {
    props: {
		id: 		{ type: [Number, String], 	default: '?' },
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
	border: 1px solid #dddddd;
	border-radius: 6px;
	padding: 8px;
	margin: 6px;
	width: 100%;
	max-width: 450px;
	box-sizing: border-box;
	white-space: nowrap;
}
</style>