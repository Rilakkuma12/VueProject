<!--展示给用户，相当于v-->
<template>
    <div id="app">

        <navMenu></navMenu>

    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--    <greeting></greeting>-->
        <login></login>
    </div>
</template>

<script>
  //导入子组件
  // import HelloWorld from './components/HelloWorld.vue'
  // import greeting from "./components/greeting"
  import login from "./components/Login"
  import navMenu from "./components/NavMenu"

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    // greeting,
    login, navMenu,

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
