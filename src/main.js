import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
//import {AccountRoutes} from 'vue-faui-user-fe/'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
};
/*
var firebaseConfig2 = {
  apiKey: "AIzaSyCafB0o9wo8LKbrzu0czh169AF62KonYW0",
  authDomain: "magiclabel-b4469.firebaseapp.com",
  databaseURL: "https://magiclabel-b4469.firebaseio.com",
  projectId: "magiclabel-b4469",
  storageBucket: "magiclabel-b4469.appspot.com",
  messagingSenderId: "341139430410",
  appId: "1:341139430410:web:97531f8a0ad1687d6053f3",
  measurementId: "G-QKHYZKW9T6"
};
firebase.initializeApp(firebaseConfig2);
firebase.analytics();
*/
Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig);
console.log("Vue.prototype.$firebase", Vue.prototype.$firebase)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
//AccountRoutes.init()