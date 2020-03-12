import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Total from '../views/Total.vue'
import Cert from '../views/Cert.vue'

Vue.use(VueRouter)

export default new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/cert/:id',
            name: 'cert',
            component: Cert
            // component: () => import ('../views/Cert.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 懒加载 会将js提取出去进行懒加载 至于页面中的资源无论使用哪种方式都是即时加载的
            component: About
        },
        {
            path: '/total/:none',
            name: 'total',
            component: Total
        }
    ]
})