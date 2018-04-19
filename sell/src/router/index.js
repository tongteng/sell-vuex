import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/page.vue'
import orderDetail from '@/components/orderDetail/page.vue'
import orderList from '@/components/orderList/page.vue'
import demo from '@/components/demo/page.vue'

Vue.use(Router)

console.log('router');

export default new Router({
  routes: [
    {
		path: '/',
		name: '首页',
		component: Index
	},
	{
		path: '/orderDetail',
		name: '订单详情',
		component: orderDetail
	},
	{
		path: '/orderList',
		name: '订单列表',
		component: orderList
	},
	{
		path: '/demo',
		name: '小测试',
		component: demo
	}
  ]
})
