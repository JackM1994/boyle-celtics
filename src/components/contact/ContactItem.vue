<template>
    <div>
        <h2>{{title}}</h2>
        <h3>{{contact}}</h3>
    </div>
</template>

<script>
    export default{
        props: ['title', 'contact']
    }
</script>

<style scoped>
    div{
        background-color: #454B59;
        height: 300px;
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
    h3{
        color:#fff;
        margin-top: 5px;
    }
    
</style>