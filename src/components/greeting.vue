<template>
    <div id="msg">
        <!--插值表达式-->
        <p>{{message}}</p>
        <el-image
                style="width: 100px; height: 100px"
                :src="url">
        </el-image>
    </div>
</template>

<script>
    import {dogs} from '../api/api';
    export default {
        name: "greeting",
        data(){
            return{
                message: "Hello 大佬们",
                name: "buyu",
                url: ""
            }
        },
        mounted(){
            dogs()
                .then(response=>{
                    console.log(response.data);
                    this.url = response.data.message
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }


</script>

<style scoped>
    .msg p{
        color: #42b983;
    }
</style>