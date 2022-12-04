<template>
	<RouterView />
</template>

<script>
export default {
    props: {},
    data(){
        return {}
    },
    directives: {},
    components: {},
    computed: {},
    watch: {},
    methods: {},
	created() {
		this.$store.dispatch('user/loadUserFromLocalStorage');
	}
}
</script>

<style scoped>
</style>
