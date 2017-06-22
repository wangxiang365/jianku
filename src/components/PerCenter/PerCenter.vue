<template>
  <div class="PerCenterBox">
    <div class="user-information">
      <div class="user-set">
        <a href="/newui/setup/index.html">
          <img src="../../assets/images/user-set.png" alt="">
        </a>
        <a style="display:inline-block;position:relative;" href="../Message/index.html?typeid=0">
          <img src="../../assets/images/Message.png" alt="">
          <div class="user_msg" style="display: none;" id="msgCount"></div>
        </a>
      </div>
      <div class="user-head clear">
        <div>
          <a href="/newui/MyInformation/MyInformation.html">
            <img id="HeadImgUrl" src="../../assets/images/User.png">
          </a>
        </div>
        <div class="user-head-name">
          <p><span id="NickName">夏忆</span><span class="user-apply-name">普通用户</span></p>
          <p>余额： <span id="TotalBlance">0</span></p>
          <p>积分： <span id="TotalPoints">9900</span></p>
          <input id="UserType" name="UserType" type="hidden" value="0">
          <input id="IsDeposit" name="IsDeposit" type="hidden" value="0">
          <input id="ApplyUserType" name="ApplyUserType" type="hidden" value="0">
          <input id="Status" name="Status" type="hidden" value="0">
        </div>
      </div>
      <div class="user-adderss">
        <a href="/NewUI/Address/index.html">地址管理 <i class="fa fa-angle-right"></i></a>
      </div>
    </div>
    <!--------Middle菜单------>
    <div class="user-order">
      <div class="user-order-title">
        <a href="/NewUI/Order/AllOrders.html">我的订单</a>
        <a href="/NewUI/Order/AllOrders.html">全部订单 <i class="fa fa-angle-right"></i></a>
      </div>

      <ul class="user-order-state clear">
        <li>
          <a href="/NewUI/Order/TBPaid.html">
            <div class="user-state1">
              <img src="../../assets/images/user-nopay.png" alt="">
              <div class="user_num" id="list1Count">1</div>
            </div>
            <p>待付款</p>
          </a>
        </li>
        <li>
          <a href="/NewUI/Order/TBShipped.html">
            <div class="user-state2">
              <img src="../../assets/images/user-nosend.png" alt="">
              <div class="user_num" style="display: none;" id="list2Count"></div>
            </div>
            <p>待发货</p>
          </a>
        </li>
        <li>
          <a href="/NewUI/Order/ReceiptGoods.html">
            <div class="user-state3">
              <img src="../../assets/images/user-noreceive.png" alt="">
              <div class="user_num" style="display: none;" id="list3Count"></div>
            </div>
            <p>待收货</p>
          </a>
        </li>
        <li>
          <a href="/NewUI/Order/TBRefund.html">
            <div class="user-state4">
              <img src="../../assets/images/refund.png" alt="">
              <div class="user_num" style="display: none;" id="list4Count"></div>
            </div>
            <p>待退款</p>
          </a>
        </li>
        <li>
          <a href="/NewUI/Order/TBEvaluate.html">
            <div class="user-state4">
              <img src="../../assets/images/user-noevaluate.png" alt="">
              <div class="user_num" style="display: none;" id="list5Count"></div>
            </div>
            <p>待评价</p>
          </a>
        </li>
      </ul>
    </div>
    <!-----九宫格菜单----->
    <ul class="user-list clear">
      <li>
        <span class="user_num" style="display: none; top: 0.2rem;right: 0.3rem;">0</span>
        <a href="../IntegralMall/IntegralMall.html">
          <div class="user-c1">
            <img src="../../assets/images/user-c1.png" alt="">
          </div>
          <p>积分商城</p>
        </a>
      </li>
      <li>
        <a href="../MyBalance/MyBalance.html">
          <div class="user-c2">
            <img src="../../assets/images/user-c2.png" alt="">
          </div>
          <p>账号余额</p>
        </a>
      </li>
      <li>
        <a href="../MyReservation/MyReservation.html">
          <div class="user-c3">
            <img src="../../assets/images/user-c3.png" alt="">
          </div>
          <p>我的预约</p>
          <div class="user_num_yy" style="display:none;" id="list_num"></div>
        </a>
      </li>
      <li>
        <a href="BigData.html">
          <div class="user-c14">
            <img src="../../assets/images/BuyData.png" alt="">
          </div>
          <p>我的大数据</p>
        </a>
      </li>
      <li>
        <a href="../CodeShare/CodeShare.html">
          <div class="user-c5">
            <img src="../../assets/images/user-c5.png" alt="">
          </div>
          <p>推荐有奖</p>
        </a>
      </li>
      <li id="WXGS" onclick="apply(2)">
        <a href="#">
          <div class="user-c6">
            <img src="../../assets/images/user-c6.png" alt="">
          </div>
          <p>成为维修高手</p>
        </a>
        <img style="display: none;" class="user-apply-icon" src="../../assets/images/user-apply-icon.png" alt="">

      </li>
      <li id="JG" onclick="apply(1)">
        <a href="#">
          <div class="user-c7">
            <img src="../../assets/images/user-c7.png" alt="">
          </div>
          <p>成为机哥</p>
        </a>
        <img style="display: none;" class="user-apply-icon" src="../../assets/images/user-apply-icon.png" alt="">
      </li>
      <li id="SXD" onclick="apply(4)">
        <a href="#">
          <div class="user-c8">
            <img src="../../assets/images/user-c8.png" alt="">
          </div>
          <p>成为代理商</p>
        </a>
        <img style="display: none;" class="user-apply-icon" src="../../assets/images/user-apply-icon.png" alt="">

      </li>
      <li>
        <a href="../SecondMarket/SecondMarket.html">
          <div class="user-c9">
            <img src="../../assets/images/user-c9.png" alt="">
          </div>
          <p>二手市场</p>
        </a>
      </li>
      <li>
        <a href="/NewUI/Collection/Collection.html">
          <div class="user-c10">
            <img src="../../assets/images/user-10.png" alt="">
          </div>
          <p>我的收藏</p>
        </a>
      </li>
      <li>
        <a href="/NewUI/User/cash.html">
          <div class="user-c11">
            <img src="../../assets/images/user-c11.png" alt="">
          </div>

          <p>我的现金券</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="es6">
  import '../../assets/css/PerCenter.css';//样式
  export default {
    created() {
      document.title="个人中心";//设置title
    }
  }
</script>
<style>

</style>
