import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueLazyload from 'vue-lazyload';
import fastclick from 'fastclick'


Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

fastclick.attach(document.body);

import 'common/stylus/index.styl'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
