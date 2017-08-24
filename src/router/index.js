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
      	path: '/home',
        component: resolve => require(['../components/common/index.vue'], resolve),
        children: [{
                path: '',
                component: resolve => require(['../components/page/home.vue'], resolve),
            },
            {
                path: '/function',
                component: resolve => require(['../components/page/function.vue'], resolve),
            },
            {
                path: '/information-management',
                component: resolve => require(['../components/page/information-management.vue'], resolve),
            },
            {
                path: '/order',
                component: resolve => require(['../components/page/order.vue'], resolve),
            },
            {
                path: '/repository',
                component: resolve => require(['../components/page/repository.vue'], resolve),
            },
            {
                path: '/customer-management',
                component: resolve => require(['../components/page/customer-management.vue'], resolve),
            },
            {
                path: '/monitor-report',
                component: resolve => require(['../components/page/monitor-report.vue'], resolve),
            },
            {
                path: '/settings',
                component: resolve => require(['../components/page/settings.vue'], resolve),
            },
            {
                path: '/help',
                component: resolve => require(['../components/page/help.vue'], resolve),
            }
        ]
    }
  ]
})
