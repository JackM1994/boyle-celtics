<template>
    <div class='box-container'>
        <home-items name="50/50 Draw"></home-items>
        <home-items class="middle" name="Pay Registration" ></home-items>
        <home-items name="Covid Form"></home-items>
    </div>
    <div class="contact-div">
        <contact-items></contact-items>
    </div>
 
</template>

<script>
import HomeItems from '../components/home/HomeItems.vue';
import ContactItems from '../components/contact/ContactItem.vue';
export default{
    components: {
        HomeItems,
        ContactItems
    }
}
</script>
<style scoped>
.box-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.middle{
    background-color: #5ca08e;
}
.contact-div{
    position: relative;
    margin-top: 250px;
    
}
</style>