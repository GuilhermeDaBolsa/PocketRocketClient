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

export default {
    props: {},
    data(){
        return {}
    },
    directives: {},
    components: { TopBar, APIRequestHandler },
    computed: {},
    watch: {},
    methods: {
	},
	created() {
		const externalScript = document.createElement('script')
    	externalScript.setAttribute('src', 'src/scripts/handleCanva.js')
    	externalScript.setAttribute('type', 'module')
    	document.head.appendChild(externalScript)
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