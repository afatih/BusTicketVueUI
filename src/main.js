import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

import {alert} from './_store/alert.module';
import {account} from './_store/account.module';
import {tour} from './_store/tour.module';

import {router} from './_helpers/router';


Vue.use(require('vue-moment'));


Vue.config.productionTip = false
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
      alert,
      account,
      tour
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
