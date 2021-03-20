<template>
    <div>
        <li>
            <h3>Boyle Celtic FC</h3>
            <h4>{{name}}</h4>
        </li>
        <base-button class='center'>Buy Now!</base-button>
    </div>
</template>

<script>
    export default{
        props: ['name']
    }
</script>


<style scoped>
div{
    background-color: #009B77;
    height: 200px;
    width: 300px;
    margin-top: 150px;
    position: relative;
    transition: all 0.2s ease-out;
}
li{
    margin: 1rem 0;
    border: 1px solid inherit;
    border-radius: 12px;
    padding: 1rem;
    list-style: none;
    color: #292a2c;
   
}
h3{
    font-size: 1.5rem;;
}
h3,
h4{
    margin: 0.5rem 0;
}
.center{
    text-align: center;
    margin: 0 auto;
    position: absolute;
    left: 43%;
    top: 70%;
    transform: translate(-50%, -50%);
}
div:hover{
    transform: scale(1.1);
    z-index: 100000;
    cursor: pointer;
}

</style>