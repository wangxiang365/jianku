<template>
<div class="Box">
    <!------------header------------>
    <div class="Index_header">
      <div class="Index_header_city">
        深圳<span class="fa fa-angle-down"></span>
      </div>
      <a href="#"><div class="Index_header_serch">搜索商品</div></a>
      <div class="Index_header_list">
        <a href="#"><img src="../../assets/images/Index_list.png"></a>
      </div>
      <div class="Index_header_mesage">
        <a href="#"><img src="../../assets/images/Message.png"></a>
      </div>
    </div>
    <div class="Index_header_d"></div>
    <!-- banner -->
    <Banner v-bind:BanData="datas.Banner.EntityList" v-if="datas.Banner"></Banner>
    <!---------Nav-------->
    <Navigation></Navigation>
    <!---------新闻-------->
    <div class="Index_news">
      <div class="Index_news_l"><img src="../../assets/images/news.png"></div>
      <div class="Index_news_line"></div>
      <div class="Index_news_r">
        <div style="height:.84rem;overflow:hidden;">
          <ul>
            <li><span></span><a href="#"> 买十送一优惠大活动</a></li>
            <li><span></span><a href="#">买十送一优惠大活动000000000000</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!---------大礼包-------->
    <div class="Spree">
      <img src="../../assets/images/Spree.png" class="Spree_bg">
      <div class="Spree_title">新手大礼包</div>
      <div class="Spree_t">
        <div class="Spree_t_l"><a href="#"><img src="../../assets/images/Spree1.png"></a></div>
        <div class="Spree_t_r">
          <div><a href="#"><img src="../../assets/images/Spree2.png"></a></div>
          <div><a href="#"><img src="../../assets/images/Spree3.png"></a></div>
        </div>
      </div>
      <div class="Spree_b"><a href="#"><img src="../../assets/images/Spree4.png"></a></div>
    </div>
  <!---------特色好货-------->
  <div class="I_tit">
    <div>
      <img src="../../assets/images/ts.png">
      特色好货
    </div>
  </div>
  <!--商品列表-->
  <div class="FeaturedBox">
    <div class="Featured">
      <ul class="Featured_top" v-if="datas.FeaturedGoods">
        <li v-for="(item,index) in (datas.FeaturedGoods.EntityList)">
          <a v-bind:href="item.Url">
            <img class="lazy" v-lazy="item.ImagePath">
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!---------机哥专区-------->
  <div class="I_tit">
    <div>
      <img src="../../assets/images/jg.png">
      机哥专区
    </div>
    <div class="I_tit_more" v-if="datas.BrotherMachine">
      <a v-bind:href="datas.BrotherMachine.MoreUrl"> 更多</a>
    </div>
  </div>
  <div class="Machine">
    <ul v-if="datas.BrotherMachine">
      <li v-for="(item,index) in datas.BrotherMachine.EntityList">
        <a v-bind:href="item.Url">
          <img class="lazy"  v-lazy="item.ImagePath">
          <div>{{item.Name}}</div>
        </a>
      </li>
    </ul>
  </div>
  <!---------猜你喜欢-------->
  <div class="I_tit">
    <div>
      <img src="../../assets/images/GuessLike.png">
      猜你喜欢
    </div>
  </div>
  <!---列表---->
  <div class="GuessLike">
    <ul v-if="datas.GuessLike">
      <li v-for="(item,index) in datas.GuessLike.EntityList">
        <a v-bind:href="item.Url">
          <img class="lazy"  v-lazy="item.ImagePath">
          <div class="GuessLikeList_des">{{item.Name}}</div>
          <div class="GuessLikeList_price">
            <p>￥{{item.Price}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>
<script type="es6">
  import Data from '../../Mock/Mock';//引入数据
  import $ from 'jquery';//引用jquery
  import Navigation from 'components/Common/Navigation';//Nav组件
  import Banner from 'components/Common/Banner';//banner组件
  import '../../assets/css/index.css';//index样式
  export default {
    data (){
    return{
      datas:{},
      page:0,
      showText:false,
    }
  },
  components: {
    Navigation,//导航组件
    Banner,//banner组件
  },
  mounted:function(){
    //请求数据
    this.GetData();
    document.title="首页";//设置title
  },
  deactivated (){//组件停用时销毁清除缓存(keep-alive)
    this.$destroy();
  },
  methods: {
    //处理特色好货高度问题
    CalculatedAltitude(){
      $(".Featured_top li:first-child").height(Math.floor($(".Featured_top li:first-child").height()))
      var h = $(".Featured_top li:first-child").height();
      if (h % 2 != 0) {
        h = h + 1
        $(".Featured_top li:nth-child(2)").height((h / 2))
        $(".Featured_top li:nth-child(3)").height((h / 2) - 1)
      } else {
        $(".Featured_top li:nth-child(2)").height((h / 2))
        $(".Featured_top li:nth-child(3)").height((h / 2))
      }
    },
    //获取总数据
    GetData(){
      var self=this;
      $.ajax({
        url: '/index',
        dataType:'json'
      }).done(function(data, status, xhr){
          self.datas=data;
          console.log(self.datas)
          self.$nextTick(function(){//
            self.CalculatedAltitude();
          });
      })
    },
  }
  }
</script>


