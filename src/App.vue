<template>
	<div style="display: flex; flex-flow: column; height: 100vh;">
		<TopBar style="flex: 0 1 auto;"/>

		<div style="flex: 1">
			<RouterView />
		</div>
	</div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
    props: {},
    data(){
        return {
        }
    },
    directives: {},
    components: { TopBar },
    computed: {},
    watch: {},
    methods: {}
}
</script>

<style scoped>
</style>
