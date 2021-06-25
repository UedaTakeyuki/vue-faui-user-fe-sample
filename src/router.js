import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ga from 'vue-ga'
//import {ChangeEmail} from "vue-faui-user-fe"
import { AccountRoutesCDN/*, PurchaseRoutes*/ } from 'vue-faui-user-fe2/accountCDN'

Vue.use(Router)

//export default new Router({
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      // account
    ...AccountRoutesCDN.routes,
//    ...PurchaseRoutes.routes,
/*
    {
      path: '/changeemail',
      name: 'changeemail',
      component: ChangeEmail
    }
*/
  ]
})

ga(router, 'UA-43410269-6');

export default router;