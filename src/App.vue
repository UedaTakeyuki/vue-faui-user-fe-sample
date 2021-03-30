<template>
  <v-app>
    <Navbar />
    <Login />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { Login } from 'vue-faui-user-fe/'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: { Navbar, Login },
  data: () => ({
    //
  }),
};
</script>
