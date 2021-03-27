<template>
  <div class="home">
    <h1>Homepage</h1>
    <AccountFront />
    <Payments />
  </div>
</template>

<script>
import vfuf from "vue-faui-user-fe"
var AccountFront = vfuf.AccountFront
var Payments = vfuf.Payments
export default {
  components: {
    AccountFront,
    Payments
  },
  mounted(){
    console.log(AccountFront)
    console.log(vfuf)
  }
};
</script>
