<template>
	<header>
		<nav>
			<h1><router-link to ="/">Boyle Celtic FC</router-link></h1>
			<ul>
				<li><router-link to="/coaches">Home</router-link></li>
				<li v-if="isLoggedIn"><router-link to ="/requests">Registeration</router-link></li>
				<li v-else><router-link to="/auth">Login</router-link></li>
				<li v-if="isLoggedIn">
					<base-button @click="logout">Logout</base-button>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default{
		
		methods:{
			logout(){
				this.$store.dispatch('logout');
				this.$router.replaces('/coaches');
			}
		}
	}
</script>
<style scoped>
@import './header.css';
</style>