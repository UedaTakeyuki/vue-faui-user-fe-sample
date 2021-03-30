<template>
  <v-app>
    <Navbar />
    <Login/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {AccountRoutes} from 'vue-faui-user-fe/'

//import "firebaseui/dist/firebaseui.css";
//import firebase from "firebase/app";

//import { Login } from 'vue-faui-user-fe/'
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
export default {
  name: 'App',
  components: { Navbar, Login },
  data: () => ({
//    firebase: firebase,
    //
  }),
  created(){
    AccountRoutes.init()
  }
};
</script>
