<template>
	<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
		<div style="font-size: 4rem;">⛔️</div>
		<div style="font-size: 1.3rem;">Erro: {{message}}</div>
	</div>
</template>

<script>

export default {
    props: {
		message: {
			type: String,
			default: ""
		}
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
</style>