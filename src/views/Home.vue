<template>
  <div class="home">
    <h1>Homepage</h1>
    <AccountFront />
  </div>
</template>

<script>
import { AccountFront } from "vue-faui-user-fe"
import { AccountRoutes, PurchaseRoutes } from "vue-faui-user-fe"
export default {
  components: {AccountFront},
  mounted(){
    // refer https://stackoverflow.com/a/10855054/11073131
    var pjson = require('/package.json');
    console.log(pjson.name);
    console.log(pjson.version);
    console.log(AccountRoutes)
    console.log(PurchaseRoutes)
    console.log(this)
  }
};
</script>
