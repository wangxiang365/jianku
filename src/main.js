// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Common from 'assets/js/Common.js'//公共js
import 'assets/css/font-awesome.css'//字体图标
import 'assets/css/Common.css'//公共css
import infiniteScroll from 'vue-infinite-scroll'//无限加载
import VueLazyload from 'vue-lazyload'//图片懒加载
import Data from 'Mock/Mock';//引入接口数据
import $ from 'jquery';//引用jquery
Vue.use(infiniteScroll)
//图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
/*  error: 'dist/error.png',
  loading: 'dist/loading.gif',*/
  attempt: 1
})
//定义全局返回函数
Vue.directive("GoBack", {
  bind: function(el) {
    el.addEventListener("click", function() {
      //window.history.back()
      //router.back()
      router.go(-1)
    });
  },
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
/*router.push('/cart')*/
//路由跳转前判断
/*router.beforeEach(function (to,from,next) {
 if(to.path=="/cart"&&localStorage.ad==null) {
 //localStorage.str="adb";
 //console.log(localStorage.str)
 next({
 path: '/tab',
 //query: { redirect: to.fullPath }//参数
 })
 //router.push('/center')//等同于上面next跳转
 }else{
 next()
 }
 })*/

//路由进入之前改变页面title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
//路由跳转后
router.afterEach(function (to) {
  console.log('成功浏览到:'+to.path)
  console.log(to)
})


