<template>
	<the-header></the-header>
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
	components :{
		TheHeader
	}
}
</script>

<style>
	.route-enter-from{
		opacity: 0;
		transform: translateY(-30px);
	}
	.route-leave-to{
		opacity: 0;
		transform: translateY(30px);
	}
	.route-enter-active{
		transform: all 0.3s ease-in;
	}
	.route-leave-active{
		transform: all 0.3s ease-out;
	}
	.route-enter-to,
	.route-leave-fron{
		opacity: 1;
		transform: translateY(0);
	}
	@import './app.css';


</style>