<template>

	<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
		<div class="col-md-4 d-flex align-items-center">
			<img src="../assets/Images/small-red-car.gif">
		</div>
		<p>Made with love and stress by the Observable Universe team.</p>
	</footer>

</template>

<script>

export default {
	props: {
		color: {
			type: String,
			default: "#000000"
		}
	},
	data() {
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