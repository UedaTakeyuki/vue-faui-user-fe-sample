module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
// https://stackoverflow.com/questions/61452230/mixed-up-css-on-production-build-of-vue-cli
  css:{
    extract:false  
  },
  chainWebpack: (config) => {
    // https://qiita.com/uturned0/items/5fdf2d92548274fe56e3
    // https://rinoguchi.net/2020/05/vue-firebase-reduce-bundle-size.html
    // https://stackoverflow.com/questions/66179210/how-to-externalize-a-lib-with-vue-cli
    config.externals({
      firebase: 'firebase',
      'firebase/auth': 'firebase',
      firebaseui: 'firebaseui',
      vue: 'Vue',
      vuetify: 'Vuetify',
      'vuetify/lib': 'Vuetify',
      'vue-router': 'VueRouter',
    })
  }
}