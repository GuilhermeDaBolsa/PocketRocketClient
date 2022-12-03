<template>
	<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">

		<!-- loading state -->
		<slot name="loading" v-if="loading">
			<Loading color="red"/>
		</slot>

		<!-- error state -->
		<slot name="error" v-else-if="errorMessage">
			<ErrorMessage :message="errorMessage"/>
		</slot>

		<!-- blank state (didn't make the request yet) (it will probably be the first thing to show up) -->
		<slot name="blank" v-else-if="results == null">
			<!-- It is blank rsrs got it? ;) -->
		</slot>

		<!-- empty state (made the request and no results were found) -->
		<slot name="empty" v-else-if="typeof results == 'object' ? Object.keys(results).length == 0 : results.length == 0">
			Não há resultados
		</slot>

		<!-- results state (made the request and results were found) -->
		<slot name="results" v-else>
			use the results slot to show your data beautifuly :)
		</slot>

	</div>
</template>

<script>
import Loading from '../components/Loading.vue'
import ErrorMessage from './ErrorMessage.vue'

export default {
    props: {
		loading: 		{ type: Boolean, 			default: false },
		errorMessage: 	{ type: String, 			default: "" },
		results: 		{ type: [Object, Array], 	default: null },
	},
    data(){
        return {
        }
    },
    directives: {},
    components: { Loading, ErrorMessage },
    computed: {},
    watch: {},
    methods: {}
}
</script>

<style scoped>
</style>