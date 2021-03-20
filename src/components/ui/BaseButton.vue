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
	padding: 0.4rem 2.5rem;
	font: inherit;
	background-color: inherit;
	border: 1px solid #fff;
	color: #fff;
	cursor: pointer;
	border-radius: 5px;
	margin-right: 0.5rem;
	display: inline-block;
	font-weight: bold;
}

a:hover,
a:active,
button:hover,
button:active{
	background-color: inherit;
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