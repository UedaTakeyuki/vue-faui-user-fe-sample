<template>
  <v-app>
    <Navbar titleStr="毛呂山" :links="links">
    </Navbar>
<!--    <Navbar /> -->
    <Login/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {AccountRoutes, PurchaseRoutes} from 'vue-faui-user-fe/'
import {Navbar} from 'vuetify-nav'

//import "firebaseui/dist/firebaseui.css";
//import firebase from "firebase/app";

//import { Login } from 'vue-faui-user-fe/'
//import Navbar from '@/components/Navbar'
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
//    firebase: firebase,
    //
  }),
  created(){
    AccountRoutes.init()
  }
};
</script>
