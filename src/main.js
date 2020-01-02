import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

import {users} from './_store/users.module';
import {alert} from './_store/alert.module';
import {account} from './_store/account.module';

import {router} from './_helpers/router';


Vue.config.productionTip = false
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
      users,
      alert,
      account
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
