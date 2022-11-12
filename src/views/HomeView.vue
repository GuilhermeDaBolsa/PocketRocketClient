<template>
	<div>
		<canvas id="canvas"></canvas>
	</div>
</template>

<script>

export default {
    props: {},
    data(){
        return {
        }
    },
    directives: {},
    components: { },
    computed: {},
    watch: {},
    methods: {},
	mounted() {
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
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: cornflowerblue;
}
</style>