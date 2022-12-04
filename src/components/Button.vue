<template>
	<div class="container noselect">
		<slot></slot>
	</div>
</template>

<script>

export default {
	props: {
		primaryColor: {
			type: String,
			default: "#fff"
		},
		secondaryColor: {
			type: String,
			default: "#444"
		},
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
	width: 100%;
	background-color: v-bind(primaryColor);
	color: v-bind(secondaryColor);
	padding: 8px 12px;
	border-radius: 12px;
	text-align: center;
	border: 1px solid v-bind(secondaryColor);
	cursor: pointer;
	box-sizing: border-box;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>