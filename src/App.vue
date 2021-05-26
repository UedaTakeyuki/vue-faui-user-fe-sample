<template>
  <v-app>
    <Navbar titleStr="Demo App" :links="links">
    </Navbar>
    <Login/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {AccountRoutes, PurchaseRoutes} from 'vue-faui-user-fe/'
import {Navbar} from 'vuetify-nav'

import Login from '@/components/Login'
export default {
  name: 'App',
  components: { Navbar, Login },
  data: () => ({
        links: [
      { icon: 'home', text: 'Home', route: '/'},
      AccountRoutes.menuItem,
      PurchaseRoutes.menuItem,
    ]
  }),
  created(){
    AccountRoutes.init()
  }
};
</script>
