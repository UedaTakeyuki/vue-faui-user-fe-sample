<template>
  <div class="home">
    <h1>Homepage</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    // refer https://stackoverflow.com/a/10855054/11073131
    var pjson = require('/package.json');
    console.log(pjson.name);
    console.log(pjson.version);
  }
};
</script>
