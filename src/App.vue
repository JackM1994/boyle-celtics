<template>
	<the-header></the-header>
	<router-view>
		
	</router-view>
	<div class="main">
		<h1 class="header">Boyle Celtic FC</h1>
	</div>
	<div class="home">
		<home></home>
	</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import Home from './pages/Home.vue';

export default {
	components :{
		TheHeader,
		Home
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
	.home{
		width: 99%;
		border: solid 1px rgb(238, 238, 238);
		border-radius: 3px;
		z-index: 100000;
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%, 60%);
		background-color: #fff;
		height: 1100px;	
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