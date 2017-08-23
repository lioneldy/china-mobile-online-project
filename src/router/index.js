import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: resolve => require(['../components/common/login.vue'], resolve),
    },
    {
      	path: '/index',
        component: resolve => require(['../components/common/index.vue'], resolve),
    }
  ]
})
