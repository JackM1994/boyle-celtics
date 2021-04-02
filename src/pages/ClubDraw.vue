<template>
	<div>
		<draw-items 
			title="Boyle Celtic F.C">
		</draw-items>
	</div>
</template>

<script>
import DrawItems from '../components/draw/DrawItems.vue';
export default{
    components: {
        DrawItems
    }
}
</script>

<style scoped>
	div{
		width: 98%;
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
</style>