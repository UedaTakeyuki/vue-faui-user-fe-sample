import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
//import * as firebaseui from 'firebaseui';

// vue-faui-user-fe2 from npm
import initialize from 'vue-faui-user-fe2/initializeCDN'
import fbinit from 'vue-faui-user-fe2/fbinitCDN'

Vue.config.productionTip = false

fbinit.fbinit()
/*
const firebaseConfig = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId,
  appId: process.env.VUE_APP_appId,
};
firebase.initializeApp(firebaseConfig);
/*
firebase.analytics();
*/
/*
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = firebaseui

console.log("this",this)
console.log("Vue.prototype.$firebase", Vue.prototype.$firebase)
console.log("Vue.prototype.$firebaseui", Vue.prototype.$firebaseui)
*/
Vue.mixin({
  computed: initialize.accountinit()
//  computed: AccountRoutes.init()
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
//AccountRoutes.init()