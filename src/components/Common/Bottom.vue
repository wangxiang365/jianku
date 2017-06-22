<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/" exact >
          <img src="../../assets/images/Home.png">
          <img src="../../assets/images/Home_active.png">
          <div>首页</div>
        </router-link>
      </li>
      <li>
        <router-link to="/pro">
          <img src="../../assets/images/Type.png">
          <img src="../../assets/images/Type_active.png">
          <div>产品分类</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/cart'}">
          <img src="../../assets/images/Cart.png">
          <img src="../../assets/images/Cart_active.png">
          <div>购物车</div>
        </router-link>
      </li>
      <li>
        <router-link to="/PerCenter">
          <img src="../../assets/images/PerCenter.png">
          <img src="../../assets/images/PerCenter_active.png">
          <div>个人中心</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
  .footer ul li a img:nth-child(1){
    display: inline-block;
  }
  .footer ul li a img:nth-child(2){
    display: none;
  }
  .footer ul li a.active  img:nth-child(1){
    display: none;
  }
  .footer ul li a.active img:nth-child(2){
    display: inline-block;
  }

  .footer{
    width:7.5rem;
    height:1.03rem;
    border-top:1px solid #a7a7a7;
    background:#fff;
    font-size:.22rem;
    font-family:"微软雅黑";
    position:fixed;
    bottom:0;
    z-index:2000;
  }
  .footer_d{
    height:1.03rem;
  }
  .footer ul{
    display:box;
    display:-webkit-box;
    display:-moz-box;
    display:-ms-box;
    display:-o-box;
    color:#353535;
  }
  .footer ul li{
    box-flex:1;
    -webkit-box-flex:1;
    -moz-box-flex:1;
    -ms-box-flex:1;
    -o-box-flex:1;
    text-align:center;
  }
  .footer ul li a{
    display:block;
  }
  .footer ul li img{
    width:.51rem;
    height:.51rem;
    margin-top:.11rem;
    margin-bottom:1px;
    vertical-align:top;
  }
  @media screen and (max-width: 320px) {
    .footer ul li img{
      margin-bottom:0px;
    }
  }
  @media screen and (min-width:321px) and (max-width:375px) {
    .footer ul li img{
      margin-bottom:2px;
    }
  }
</style>
