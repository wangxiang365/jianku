<template>
  <div class="ProductBox">
    <!---------header--------->
    <header>
      <div class="header_left" v-GoBack>
        <span class="fa fa-angle-left"></span>
      </div>
      <a href="Search.html"><input type="text" id="keywords" placeholder="商品关键字查找" class="header_serch header_serchDefult" readonly=""></a>
      <div class="header_right"></div>
    </header>
    <div class="header_d"></div>
    <!---------Nav--------->
    <div class="SerchGoodsNav">
      <!----导航----->
      <ul class="SerchGoodsNavUL">
        <li class="" v-for="(item,index) in TypeName"  @click="NavTap(index)">
          <a href="javascript:">
            <span id="brandName">{{item.name}}</span>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <!----------菜单下拉--------->
      <!---品牌--->
      <div class="NavdropChild" v-show="Indexs==0">
        <ul id="brandList" v-if="TypeData.Brand">
          <li :id="item.id" v-for="(item,index) in TypeData.Brand.EntityList" v-bind:class="{active:IsActiveSteOne==index}" @click="IsActive('IsActiveSteOne',index)" v-bind:data="IsActiveSteOne">{{item.Name}}</li>
        </ul>
      </div>
      <!---机型--->
      <div class="NavdropChild" v-show="Indexs==1">
        <ul id="modelList" v-if="TypeData.Model">
          <li :id="item.id" v-for="(item,index) in TypeData.Model.EntityList" v-bind:class="{active:IsActiveSteTwo==index}" @click="IsActive('IsActiveSteTwo',index)" v-bind:data="IsActiveSteTwo">{{item.Name}}</li>
        </ul>
      </div>
      <!---分类--->
      <div class="NavdropChild" v-show="Indexs==2">
        <ul id="TwoPlatList" v-if="TypeData.classification">
          <li :id="item.id" v-for="(item,index) in TypeData.classification.EntityList" v-bind:class="{active:IsActiveSteThree==index}" @click="IsActive('IsActiveSteThree',index)">{{item.Name}}</li>
        </ul>
      </div>
      <!---子分类--->
      <div class="NavdropChild" v-show="Indexs==3">
        <ul id="ClassificationList" v-if="TypeData.Subcategory">
          <li :id="item.id" v-for="(item,index) in TypeData.Subcategory.EntityList" v-bind:class="{active:IsActiveSteFour==index}" @click="IsActive('IsActiveSteFour',index)">{{item.Name}}</li>
        </ul>
      </div>
    </div>
    <div class="SerchBg" v-show="Indexs!=-1"@click="CloseBg()"></div>
    <div class="SerchDataNum" v-if="ListData">现有数据{{ListData.length}}条</div>
    <!---------列表--------->
    <div class="SerchList" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" infinite-scroll-immediate-check="false"  ref="SerchListr">
      <ul id="GoodsListText" v-if="ListData">
        <li v-for="(item,index) in ListData">
          <div class="SerchList_l" v-bind:style="{ background:item.ImagePath}">
            Id:{{item.id}}
          <!--  <a href="javascript:">
              <img :src="item.ImagePath">
            </a>-->
          </div>
          <div class="SerchList_r">
            <a href="javascript:" class="SerchList_r_tit">{{item.Name}}</a>
            <div class="SerchList_r_num">
              <span>销售价:<i class="p_f_s">￥{{item.SellingPrice}}</i></span>
            </div>
            <div class="SerchList_r_money">批发价:<i class="p_f_s">￥{{item.TradePrice}}</i>(<span>{{item.Batch}}</span>个起)</div>
            <div class="SerchList_r_stock">库存:<span>{{item.Stock}}</span>件</div>
          </div>
          <div class="BuyBtn">
            <a href="javascript:">立即购买</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
  import '../../assets/css/Product.css';//样式
  export default {
    data(){
      return{
        busy:false,
        Cover:false,//是否是点击状态
        pageIndex:1,//当前页数
        totalPage:-1,//总页数
        TypeData:[],//所有分类的数据
        ListData:[],//所有列表的数据
        Indexs:-1,
        IsActiveSteOne:-1,//下拉列表是否是选择状态
        IsActiveSteTwo:-1,//下拉列表是否是选择状态
        IsActiveSteThree:-1,//下拉列表是否是选择状态
        IsActiveSteFour:-1,//下拉列表是否是选择状态
        TypeName:[
          {
            name:"品牌"
          },
          {
            name:"机型"
          },
          {
            name:"分类"
          },
          {
            name:"子分类"
          },
        ]
      }
    },
    mounted:function(){
      this.$nextTick(()=>{//数据渲染完成后
        this.GetData();//获取分类数据
        this.GetListData();//获取列表数据
        document.title="产品中心";//设置title
      });
    },
    methods:{
      //下拉列表点击背景
      IsActive(el,index){
        if(el=="IsActiveSteOne"){
          this.IsActiveSteOne=index;
        }if(el=="IsActiveSteTwo"){
          this.IsActiveSteTwo=index;
        }if(el=="IsActiveSteThree"){
          this.IsActiveSteThree=index;
        }if(el=="IsActiveSteFour"){
          this.IsActiveSteFour=index;
        }
        this.Cover=true;//改变点击状态
        this.pageIndex = 1;//重置当前页数
        this.Indexs=-1;//关闭背景层
        this.$refs.SerchListr.scrollTop=0;//列表点击滚动到顶部
        this.GetListData();
      },
      //获取总数据
      GetData(){
        var self=this;
        $.ajax({
          url: '/TypeData',
          dataType:'json'
        }).done(function(data, status, xhr){
          self.TypeData=data;
          console.log(self.TypeData)
        })
      },
      GetListData(){
        var self=this;
        $.ajax({
          url: '/ProductList',
          dataType:'json'
        }).done(function(data, status, xhr){
          self.busy = false;//加载状态
          console.log(self.busy)
          if(self.Cover){//如果是Nav点击 清空覆盖原来数据
            self.ListData=data.ProductList.EntityList;//总数据赋值
          }else{
            self.ListData=self.ListData.concat(data.ProductList.EntityList);//总数据赋值
          }
          self.totalPage=data.ProductList.totalPage;//总页数
          self.pageIndex++;//当前页数
        })
      },
      //分类Nav点击
      NavTap(index){
        this.Indexs=index;
      },
      //关闭背景层
      CloseBg(){
        this.Indexs=-1;
      },
      //无限滚动
      loadMore() {
        this.busy = true;//加载状态
        this.Cover=false;//改变点击状态
        if (this.pageIndex > this.totalPage) {
          return;
        }//最后页隐藏loading*/
        this.GetListData()//分页数据
      },
    }
  }
</script>
<style>

</style>
