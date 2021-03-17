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
}
li{
    margin: 1rem 0;
    border: 1px solid #009B77;
    border-radius: 12px;
    padding: 1rem;
    list-style: none;
    color: #fff;
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
    left: 25%;
    top: 70%;
    transform: translate(-50%, -50%);
}

</style>