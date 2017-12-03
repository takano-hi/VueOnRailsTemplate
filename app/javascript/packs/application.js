import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from '../routes';
import store from '../store';
import App from '../app';

import '../assets/css/application';

Vue.use(VueRouter);
Vue.use(Vuex);

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#application',
    store: new Vuex.Store(store),
    router,
    render: (h) => h(App),
  });
});
