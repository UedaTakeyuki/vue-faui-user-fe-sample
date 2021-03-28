<template>
  <div class="home">
    <h1>Homepage</h1>
    <AccountFront />
    <Payments />
    <ChangeEmail />
  </div>
</template>

<script>
import vfuf from "vue-faui-user-fe"
import {AccountFront, ChangeEmail, Payments} from "vue-faui-user-fe"
import {AccountRoutes} from "vue-faui-user-fe"

//var AccountFront = vfuf.AccountFront
//var Payments = vfuf.Payments
export default {
  components: {
    AccountFront,
    ChangeEmail,
    Payments
  },
  mounted(){
    console.log(AccountFront)
    console.log(vfuf)
    // refer https://stackoverflow.com/a/10855054/11073131
    var pjson = require('/package.json');
    console.log(pjson.name);
    console.log(pjson.version);
    console.log(AccountRoutes)
  }
};
</script>
