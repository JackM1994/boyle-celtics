<template>
    <div>
        <h2>{{title}}</h2>
        <h2>{{contact}}</h2>
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
</style>