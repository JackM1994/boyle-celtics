<template>
    <div>
        <h2>{{title}}</h2>
        <h3>{{contact}}</h3>
        <section>
            <h4>{{address}}</h4>
            <section class='block'></section>
            <h4>{{clubContact}}</h4>
        </section>
         <h6 class='left'>{{boyle}}</h6>
         <h6 class='right'>{{login}}</h6>
       
    </div>
</template>

<script>
    export default{
        props: ['title', 'contact', 'address', 'boyle', 'clubContact', 'login']
    }
</script>

<style scoped>
    div{
        background-color: #454B59;
        height: 500px;
        width: 920px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    h2,
    h3{
        font-size: 2rem;
        color: #5ca08e;
        text-align: center;
        margin-top: 30px;
        margin-bottom:20px;
        letter-spacing: 0.4px;
    }
    h3,
    h4,
    h6{
        color:#fff;
        margin-top: 5px;
    }
    h4,
    h6{
        font-size: 1.8rem;
       
       
    }
    h6{
        font-size: 1rem;
        margin: 10px;
        margin-top: -40px;
    }
    section{
        margin-top: 60px;
        display: flex;
        justify-content: space-evenly;
    }
    .block{
        background-color: #5ca08e;
        height: 240px;
        width: 8px;
        border-radius: 20px;
        margin:20px;
    }
    
</style>