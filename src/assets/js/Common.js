import Vue from 'vue'
/**
 * Created by Administrator on 2017/2/21.
 */
(function (doc, win) {
  var docEl = doc.documentElement;
  //docEl.clientHeight
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function () {
    var clientWidth;
    var clientHeight = docEl.clientHeight;
    //alert(clientHeight)
    var clientWidth =docEl.clientWidth>750?750:docEl.clientWidth<=320?320:docEl.clientWidth;
    //clientWidth=clientWidth>=clientHeight?clientHeight:clientWidth;//当宽大于高时宽等于高
    if (!clientWidth) return;
    docEl.style.fontSize = (clientWidth / 750 * 100).toFixed(2) +"px";
  };
  recalc();
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
})(document, window);

//定义全局返回函数
Vue.directive("GoBack", {
  bind: function(el) {
    el.addEventListener("click", function() {
      window.history.back()
      //this.$router.back();
      //$router.back();
    });
  },
});

