import Vue from 'vue';
import Router from 'vue-router';
import routes from './router'
import NProgress from 'nprogress'

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.publicPath,
	routes,
});

router.afterEach((to, from) => {
	NProgress.done();
	window.scrollTo(0, 0)
})

router.beforeEach(async (to, from, next) => {
	NProgress.start();
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
	/* must call `next` */
})

export default router;
