<template>
	<div class="ticket">
		<img class="boyle-logo" src="../../images/boyle-logo.png" />
		<h2>{{title}}</h2>
		<h3>50/50 Weekly Draw</h3>
		<section>
			<label>{{name + ':'}}</label>
			<input name='name' id='name' />
		</section>

		<section>
			<label>{{address + ':'}}</label>
			<input name='address' id='address' />
		</section>

		<section>
			<label>{{contactNo + ':'}}</label>
			<input name='phone' id='phone' />
		</section>

		<section class='disclaimer'>
			<h5>€2 per entry or €3 for 5</h5>
			<div class='block'>
				guaranteed winner every winner!!!
			</div>
		</section>
		<base-button class='buy'>Buy Now</base-button>

	</div>
</template>

<script>
    export default{
        props: ['title', 'name', 'address', 'contactNo']
    }
</script>

<style scoped>
	
	.ticket{
		margin-top: -500px;
		width: 75%;
		height: 600px;
		border: 5px solid #5ca08e;
		position: relative;
	}

	h2{
		font-size: 2.6rem;
		text-transform: uppercase;
		color: #5ca08e;

	}
	h2,
	h3{
		text-align: center;
		margin: 5px 0;
		position: absolute;
		top: 20%;
		left: 48%;
		transform: translate(-50%, -50%);
		
	}
	h3{
		font-style: italic;
		font-size: 2.2rem;
		color: #454B59;
		top: 35%;
	}
	section{
		margin: 10px;
		margin-top: 45px;
	}
	label{
		margin: 15px 10px;
		margin-left: 150px;
		margin-right: 50px;
		display: inline;
	}
	input{
		border: none;
		border-bottom: dotted 2px black;
		width: 400px;
	}
	.disclaimer{
		margin-top: 15px;
		text-align: center;
		text-transform: uppercase;
	}
	.block{
		margin: 10px auto;
		padding: 20px 10px;
		background-color: #5ca08e;
		color: #fff;
		width: 50%;
	}
	.buy{
		background: green;
		margin: 20px;
		float: right;
		transition: ease-in-out;
	}
	.buy:hover{
		background: rgb(1,114,1);
		transform: scale(1.1);
	}







</style>