<template>
    <div class="home">
        <img class="boyle-logo" src="../images/boyle-logo.png" />
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
.boyle-logo{
    position: absolute;
    top: 3%;
    left: 39%;
}

.home{
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


.main-header{
    margin-top: 90px;
    position: absolute;
    left: 20%;
   
}
.box-container{
    margin-top: 120px;
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