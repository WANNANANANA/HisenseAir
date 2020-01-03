import Vue from 'vue'
import VueRouter from 'vue-router'
// import Cert from '../views/Cert.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/cert/:id',
      name: 'cert',
      component: () => import('../views/Cert.vue')
      // component: Cert
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // 懒加载
      component: About
    }
  ]
})
