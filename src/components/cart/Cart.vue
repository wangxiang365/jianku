<template>
  <div class="CartBox"  v-cloak>
      <!-- header-->
      <header class="clear">
          <div class="header_left" v-GoBack>
              <a href="javascript:" class="fa fa-angle-left"></a>
          </div>
          <div class="header_tit">购物车</div>
          <div class="header_right header_right_change" @click="Edit()">
            <span v-if="EditSte==false">编辑</span>
            <span v-if="EditSte==true">完成</span>
          </div>
      </header>
      <div class="header_d"></div>
      <!-- 购物车无商品-->
      <div class="shoppingcartNoData" style="display:none;">0

          <div><a href="/NewUI/Search/SearchGoods.html">去逛逛</a></div>
          <div>购物车暂无商品</div>
      </div>
      <!-- content-->
      <ul class="shoppingcart-ul" v-if="datas.ShoppingCart">
          <li v-for="(item,index) in datas.ShoppingCart.EntityList">
              <div class="shoppingcart-li-left clear">
                  <input class="shoppingcart-check CheckBox" data-id="" type="checkbox"  :value="index" v-model="checkArr" @click="SetNum(item,$event)"/>
                  <div class="shoppingcart_good" v-bind:style="{ background:item.ImagePath}">
                    Id:{{item.id}}
                     <!-- <a href="javascript:">
                          <img class="lazy"  v-lazy="item.ImagePath" alt="" />
                      </a>-->
                  </div>
              </div>
              <div class="shoppingcart-li-right">
                  <p class="shoppingcart-li-right-name">{{item.Name}}</p>
                  <div class="clear shoppingcart-li-right-pay">
                      <p class="shoppingcart-li-right-price">￥<span class="shoppingcart-li-right-price-money">{{item.Price}}</span></p>
                      <div class="shoppingcart-li-right-num">
                          <span class="Reduce"  @click="DecreaseCart(item)">-</span>
                          <span>{{item.cartNum}}</span>
                          <span class="Increase" @click="AddCart(item)">+</span>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
      <div style="height:1rem;"></div>
      <!--去结算-->
      <div class="shoppingcart-all shoppingcartSettlement SlideUpDefult " v-bind:class="{ SlideUp:!EditSte}">
          <input type="checkbox" id="Select" v-model="checkAllSte" @click="CheckAll"/><label for="Select"><span>全选</span></label>
          <div class="ShoppingCartNum">合计：<span class="ShoppingCartNum_sp">¥:<span class="ALLMoney">{{totalPrice()}}</span></span></div>
          <div class="ShoppingCartPayBtn  ShoppingCartPayBtn_dis" v-if="ChooseNum()<=0">去结算(<span class="SettNum">{{ChooseNum()}}</span>)</div>
          <div class="ShoppingCartPayBtn" v-if="ChooseNum()>0" @click="GoPay()">去结算(<span class="SettNum">{{ChooseNum()}}</span>)</div>
      </div>
      <!--购物车删除-->
      <div class="shoppingcart-all shoppingcartDel SlideUpDefult" v-bind:class="{ SlideUp: EditSte }">
          <input  type="checkbox" id="Select2" v-model="checkAllSte" @click="CheckAll"/><label for="Select2"><span>全选</span></label>
          <div class="shoppingcart-delete shoppingcart-delete-dis" v-if="ChooseNum()<=0">删除</div>
          <div class="shoppingcart-delete" v-if="ChooseNum()>0" @click="DelCart()">删除</div>
      </div>

  </div>
</template>

<script type="es6">
    import Vue from 'vue'
    import '../../assets/css/Cart.css';//index样式
    export default {
        data (){
            return{
                datas:[],
                page:0,
                showText:false,
                checkArr:[],//checkbox选中的集合
                checkAllSte:false,//全选按钮默认是否选中
                EditSte:false,
            }
        },
        mounted:function(){
            //请求数据
            this.GetData();
            document.title="购物车 ";//设置title
        },
        methods: {
            //获取总数据
            GetData(){
                var self=this;
                $.ajax({
                    url: '/Cart',
                    dataType:'json'
                }).done(function(data, status, xhr){
                    self.datas=data;
                    //console.log(self.datas)
                })
            },
            //添加购物车
            AddCart(pro){
                if (!pro.cartNum) {
                    Vue.set(pro, 'cartNum', 1);
                } else {
                    pro.cartNum++;
                }
                //console.log(this.selectGoods())
            },
            //删除购物车
            DecreaseCart(pro){
                if (pro.cartNum) {
                    pro.cartNum--;
                    pro.cartNum=pro.cartNum<1?1:pro.cartNum;
                }
            },
            //选中的商品
            selectGoods() {
                if(this.datas.ShoppingCart){
                    var Goods = [];
                    this.datas.ShoppingCart.EntityList.forEach(good=>{
                        if (good.cartNum) {
                            Goods.push(good);
                        }
                    })
                    return Goods;
                }
            },
            //总数量
            totalCount () {
                var count = 0;
                if(this.selectGoods()){
                    //console.log(this.selectGoods())
                    this.selectGoods().forEach(good => {
                        count += good.cartNum;
                    });
                }
                return count;
            },
          //计算总价
          totalPrice () {
            var total = 0;
            var GListndex = this.GListndex;
            if(this.selectGoods()){
              this.selectGoods().forEach(good=>{
                if (good.ChooseNums) {
                  total += good.Price * good.cartNum;
                }
              })
            }
            return total;
          },
          //checkbox勾选的个数
          SetNum(good,event){
            if (event.currentTarget.checked) {
              Vue.set(good, 'ChooseNums', 1);
            }else{
              Vue.set(good, 'ChooseNums', 0);
            }
            //每个checkbox点击时判断是否所有都点击
            if(this.checkArr.length === this.datas.ShoppingCart.EntityList.length) {
              this.checkAllSte = true
            }else {
              this.checkAllSte = false
            }
          },
          //选中的个数
          ChooseNum(){
            var Num=0;
            if(this.selectGoods()){
              this.selectGoods().forEach(good => {
                if(good.ChooseNums){
                  Num += good.ChooseNums;
                }
              });
              return Num;
            }
          },
          //全选
          CheckAll(event){
            var self=this;
              if(self.datas.ShoppingCart){
                  self.datas.ShoppingCart.EntityList.forEach((item,i) => {
                  if (event.currentTarget.checked){
                    Vue.set(item, 'ChooseNums', 1);
                    self.checkArr.push(i);
                  }else {
                    this.checkArr = []
                    Vue.set(item, 'ChooseNums', 0);
                  }
                })
            }
          },
          //编辑按钮点击
          Edit(){
            this.EditSte=!this.EditSte;
          },
          //结算、删除的数据
          PayDel(){
            var CartIds=[];//获取每个商品的Id
            var Nums=[];//获取每个商品的数量
            if(this.selectGoods()){
              this.selectGoods().forEach(good => {
                if(good.ChooseNums){
                  CartIds.push(good.id);
                  Nums.push(good.cartNum);
                }
              });
              CartIds = CartIds.join(',')
              Nums = Nums.join(',')
              var das="CartIds="+CartIds+"&"+"Nums="+Nums;
              return das;
            }
          },
          //去结算
          GoPay(){
            var slef=this;
            alert("根据ID提交订单"+this.PayDel());
            setInterval(function () {
              console.log(this.page)
            },1000)
          },
          //删除购物车
          DelCart(){
            alert("根据ID删除"+this.PayDel());
          },
        },
    }
</script>
<style>

</style>

