<!--展示给用户，相当于v-->
<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/greeting">问候</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/project_list">项目列表</router-link></li>
        <li><router-link to="/menu">菜单栏</router-link></li>
      </ul>
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
</style>
