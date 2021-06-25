<template>
  <v-app>
    <Navbar titleStr="Demo App" :links="links">
    </Navbar>
    <LoginCDN ref="login"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {AccountRoutesCDN/*, PurchaseRoutes , LoginCDN*/} from 'vue-faui-user-fe2/accountCDN'
import {/*AccountRoutes/*, PurchaseRoutes ,*/ LoginCDN} from 'vue-faui-user-fe2/loginCDN'
import {Navbar} from 'vuetify-nav'
//import {Navbar} from 'vuetify-nav/src/build-entry.js'

//import Login from '@/components/Login'
export default {
  name: 'App',
  components: { Navbar, LoginCDN },
  data: () => ({
        links: [
      { icon: 'home', text: 'Home', route: '/'},
      AccountRoutesCDN.menuItem,
//      PurchaseRoutes.menuItem,
    ]
  }),
  created(){
    AccountRoutesCDN.init()
  }
};
</script>
