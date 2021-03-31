<template>
	<the-header></the-header>
	<router-view>
		
	</router-view>
	<div class="main">
		<h1 class="header">Boyle Celtic FC</h1>
	</div>
	


	
	
	
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
	.main{
		position: fixed;
		width: 100%;
		background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('./images/boylecelticpitch.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 500px;
	}
	.header{
		margin-top: 250px;
		text-align: center;
		font-size: 4rem;
		color: #fff;
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