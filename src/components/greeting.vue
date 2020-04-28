<template>
    <div id="msg">
        <!--插值表达式-->
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "greeting",
        data(){
            return{
                message: "Hello 大佬们",
                name: "buyu"
            }
        }
    }
</script>

<style scoped>
    .msg p{
        color: #42b983;
    }
</style>