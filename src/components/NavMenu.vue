<template>
    <div id="menu">
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/">主页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/greeting">问候</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/login">登录</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/project_list">项目列表</router-link></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "NavMenu",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    #menu{
        border: 0;
        /*position: fixed;*/
    }
</style>