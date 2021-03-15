<template>
	<the-header></the-header>
	<div class="content">
		<home-items></home-items>
	</div>
	
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import HomeItems from './components/home/HomeItems.vue';

export default {
	components :{
		TheHeader,
		HomeItems
	}
}
</script>

<style>
.content{
	display: flex;
	justify-content: center;
}
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