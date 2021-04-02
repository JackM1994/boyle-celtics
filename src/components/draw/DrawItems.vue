<template>
	<div class="ticket">
		<img class="boyle-logo" src="../../images/boyle-logo.png" />
		<h2>{{title}}</h2>
		<h3>50/50 Weekly Draw</h3>
		<section>
			<h4>Inputs</h4>
		</section>
	</div>
</template>

<script>
    export default{
        props: ['title']
    }
</script>

<style scoped>
	
	.ticket{
		margin-top: -500px;
		width: 75%;
		height: 300px;
		border: 5px solid #5ca08e;
		position: relative;
	}

	h2{
		font-size: 3rem;
		text-transform: uppercase;
		color: #5ca08e;

	}
	h2,
	h3{
		text-align: center;
		margin: 10px 0;
		position: absolute;
		top: 20%;
		left: 48%;
		transform: translate(-50%, -50%);
		
	}
	h3{
		font-style: italic;
		font-size: 2.5rem;
		color: #454B59;
		top: 35%;
	}
</style>