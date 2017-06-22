import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/home/index'
import tab from 'components/tab'
import content2 from 'components/content2'
import cart from 'components/cart/cart'
import pro from 'components/Product/Product'
import PerCenter from 'components/PerCenter/PerCenter'

Vue.use(Router)

export default new Router({
 /* mode:'history',*/
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      /*redirect: '/content2'*/
      meta:{
        title:"首页"
      }
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/content2',
      name: 'content2',
      component: content2,
      meta:{
        title:"个人中心"
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta:{
        title:"购物车"
      }
    },
    {
      path: '/pro',
      name: 'pro',
      component: pro,
      meta:{
        title:"产品中心"
      }
    },
    {
      path: '/PerCenter',
      name: 'PerCenter',
      component: PerCenter,
      meta:{
        title:"个人中心"
      }
    },
  ]
})
