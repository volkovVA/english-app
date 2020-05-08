import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebaseConfig from './config/firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('AUTO_LOGIN_USER', user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
