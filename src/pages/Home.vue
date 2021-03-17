<template>
<div class='box-container'>
    <home-items name="50/50 Draw"></home-items>
    <home-items class="middle" name="Pay Registration" ></home-items>
    <home-items name="Covid Form"></home-items>
</div>
</template>

<script>
import HomeItems from '../components/home/HomeItems.vue';

export default{
    components: {
        HomeItems
    }
}
</script>
<style scoped>
.box-container{
    display: flex;
    justify-content: space-evenly;
}
.middle{
    background-color: #5ca08e;
}
</style>