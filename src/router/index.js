import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/é', component: Unicode }
    ]
  })

  