<template>
    <div>
     
    </div>
    
    <div class='box-container'>
        <h1 class="main-header">Boyle Celtic FC</h1>
        <home-items name="50/50 Draw"></home-items>
        <home-items class="middle" name="Pay Registration" ></home-items>
        <home-items name="Covid Form"></home-items>
    </div>
    <div class="contact-div">
        <contact-items 
            title="Boyle Celtic" 
            contact="Contact Information"
            address ="Club Address"
            clubContact="Club Contact"
            boyle="DeerPark Boyle"
            login="Login for club contact details"
            >
        </contact-items>
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
.main-header{
    margin-top: 90px;
    position: absolute;
    left: 20%;
   
}
.box-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.middle{
    background-color: #5ca08e;
    transition: all 0.2s ease-out;
}
.contact-div{
    position: relative;
    margin-top: 350px;
    
}
.middle:hover{
    transform: scale(1.1);
    cursor: pointer;
    z-index: 10000;
}
</style>