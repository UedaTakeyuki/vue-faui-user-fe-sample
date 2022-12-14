<template>
  <v-app>
    <Navbar titleStr="Demo App" :links="links">
    </Navbar>
    <Login/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// vue-faui-user-fe2 from CDN
//import {AccountRoutesCDN as AccountRoutes/*, PurchaseRoutes , LoginCDN*/} from 'vue-faui-user-fe2/accountCDN'
import {AccountRoutes as AccountRoutes/*, PurchaseRoutes , LoginCDN*/} from 'vue-faui-user-fe2/account'
//import {/*AccountRoutes/*, PurchaseRoutes ,*/ LoginCDN as Login} from 'vue-faui-user-fe2/loginCDN'
import {/*AccountRoutes/*, PurchaseRoutes ,*/ Login as Login} from 'vue-faui-user-fe2/login'
import {Navbar} from 'vuetify-nav'
//import {Navbar} from 'vuetify-nav/src/build-entry.js'
//let AccountRoutes = AccountRoutesCDN
//let Login = LoginCDN
//import Login from '@/components/Login'
export default {
  name: 'App',
//  components: { Navbar, Login },
  components: { Navbar, Login },
  data: () => ({
        links: [
      { icon: 'home', text: 'Home', route: '/'},
      AccountRoutes.menuItem,
//      PurchaseRoutes.menuItem,
    ]
  }),
  created(){
    AccountRoutes.init()
  }
};
</script>
