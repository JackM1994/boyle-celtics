<template>
    <div>
        <h2>{{title}}</h2>
        <h3>{{contact}}</h3>
        <section>
            <tr>
                <th><h4>{{address}}</h4></th>
                <th><section class='block'></section></th>
                <th><h4>{{clubContact}}</h4></th>
            </tr>
            <tr>
                <td><h6 class='left'>{{boyle}}</h6></td>
                <td class="middle"></td>
                <td><h6 class='right'>{{login}}</h6></td>
            </tr>
        </section>
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
    h3{
        color: #fff;
        margin-top: 10px;
    }
    h4,
    h6{
        color:#fff;
        margin-top: -28px;
    }
    h4,
    h6{
        font-size: 1.5rem;
       
       
    }
    h6{
        font-size: 1rem;
        margin: 10px;
        margin-top: -80px;
    }
    section{
        margin-top: 60px;
        display: table;
        width: 100%
    }
    td{
        width: 33.33%;
    }
    .block{
        background-color: #5ca08e;
        height: 240px;
        width: 8px;
        border-radius: 20px;
        margin:20px;
    }
    .left,
    .right{
        margin-top: -215px;
        text-align: center;
        margin-left: 5px;
    }
    .middle{
        width: 7%;
    }
    
</style>