<!--展示给用户，相当于v-->
<template>
    <div id="app">
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
        <!-- 展示路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
  //导入子组件
  // import HelloWorld from './components/HelloWorld.vue'
  // import greeting from "./components/greeting"
  // import login from "./components/Login"
  // import navMenu from "./components/NavMenu"

export default {
    name: 'App',
    components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    // greeting,
    // login, navMenu,

    },
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

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    #menu{
        /*position: fixed;*/
        float: top;
        position: relative;
        top: 0;
    }
</style>
