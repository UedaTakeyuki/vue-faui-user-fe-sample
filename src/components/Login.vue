<template>
  <div>
  <EmailVerificationRequest/>
  <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script>
/* eslint-disable no-console */

//import firebase from "firebase";
//import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui';
import EmailVerificationRequest from '@/components/EmailVerificationRequest.vue'

import "firebase/firestore";
//import axios from 'axios';

export default {
//  props: ['firebase'],
  components: {
    EmailVerificationRequest
  },
  data: function () {
    return {
//      is_login: false,
    }
  },
  methods: {
    path_to_types_with_id: function(id){
      return "/types/" + id;
    },
  },
  mounted() {
    console.log("login firebase:", this.firebase)
    let ui = firebaseui.auth.AuthUI.getInstance();
    let uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID, 
                      /* firebase.auth.FacebookAuthProvider.PROVIDER_ID */
                     ],
//      signInOptions: [this.firebase.auth.EmailAuthProvider.PROVIDER_ID],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // set user globals
        this.$isLogin = true;
        this.$displayName = user.displayName
        this.$user_email  = user.email
        this.$user_id     = user.uid

      } else {
        if (!ui) {
          ui = new firebaseui.auth.AuthUI(this.$firebase.auth());
          ui.start("#firebaseui-auth-container", uiConfig);
        }
      }
    });
  },
}
</script>
