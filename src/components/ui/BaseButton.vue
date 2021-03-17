<template>
	<button v-if="!link" :class="mode">
		<slot></slot>
	</button>
	<router-link v-else :to="to" :class="mode">
		<slot></slot>
	</router-link>
</template>

<script>
	export default {
		props: {
			mode: {
				type: String,
				required: false,
				default: null
			},
			link: {
				type: Boolean,
				required: false,
				default: false
			},
			to: {
				type: String,
				required: false,
				default: '/'
			},

		}
	}
</script>

<style scoped>
button,
a {
	text-decoration: none;
	padding: 0.55rem 1.5rem;
	font: inherit;
	background-color: #fdfa3f;
	border: 1px solid #fdfa3f;
	color: #009B77;
	cursor: pointer;
	border-radius: 20px;
	margin-right: 0.5rem;
	display: inline-block;
	font-weight: bold;
}

a:hover,
a:active,
button:hover,
button:active{
	background-color: #fdfa3f;
	border-color: #fdfa3f;
}
.flat{
	background-color: transparent;
	color: #fff;
	border: none;
}
.outline{
	background-color: transparent;
	border-color: #fdfa3f;
	color: #fdfa3f;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active{
	background-color: #edd2ff;
}
</style>