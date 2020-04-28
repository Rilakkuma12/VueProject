import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import greeting from '../components/greeting'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import ProjectList from '../components/ProjectList'
import NavMenu from '../components/NavMenu'

// 创建路由
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: HelloWorld, name:'helloworld'},
      { path: '/greeting', component: greeting, name:'greeting'},
      { path: '/login', component: Login, name:'login'},
      { path: '/project_list', component: ProjectList, name:'project_list'},
      { path: '/nav_menu', component: NavMenu, name:'nav_menu'}
    ]
  })

  // 导出路由
  export default router;