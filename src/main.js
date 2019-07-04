import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$bus = new Vue();

let appView = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

store.dispatch('onInit', appView);
