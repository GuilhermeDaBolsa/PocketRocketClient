<template>
	<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
		<div style="font-size: 1.3rem; color: red;">Erro: {{message}}</div>
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