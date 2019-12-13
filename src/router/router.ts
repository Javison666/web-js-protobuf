export default [
	{
		path: '/',
		name: 'index',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/Home/index.vue'),
	},
	{
		path: '*',
		redirect: '/home'
	}
]
