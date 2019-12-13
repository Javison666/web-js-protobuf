import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// 进度条
import 'nprogress/nprogress.css';
// 自定义全局样式
import '@/assets/style/global/index.scss';
import '@vue/ui/dist/vue-ui.css'

import PAGE_API from '@/apis/pageApi';
import HTTP_API from '@/apis/httpApi';

import VueUi from '@vue/ui'
import fn from '@/utils/fn.ts';
import Component from 'vue-class-component';
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

Vue.use(VueUi)
// prop全局
Vue.prototype.$fn = fn;
Vue.prototype.$PAGE_API = PAGE_API
Vue.prototype.$HTTP_API = HTTP_API

Vue.config.productionTip = false;

window.App = new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
