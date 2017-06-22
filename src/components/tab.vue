<template>
  <div id="tab">
    <!--window.history.back()-->
    <div class="back" v-GoBack>返回</div>
    <span  @click="choose(0)" :class="{'active': selected==0}">已完成</span>
    <span  @click="choose(1)" :class="{'active': selected==1}">未完成</span>
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
    <div><router-link to="/content2">点击进入content2页面</router-link></div>
  </div>
</template>
<script>
  import wwc from 'components/wwc'
  import ywc from 'components/ywc'
  export default {
    data () {
      return {
        selected:0,
        currentView:'tab0',
        currentView:ywc,//默认显示组件
      }
    },
    methods:{
      goBack(){
        this.$route.back();//返回上一页
      },
      choose(index){
        this.selected = index;
        this.currentView = 'tab' + index;
        console.log("选中了tab"+ this.selected )
      }
    },
    components:{
      'tab0':ywc,
      'tab1':wwc
    }
  }
</script>
<style>
  .back{
    float: left;
    color: red;
    text-decoration: underline;
  }
  .active{ color:red;}
</style>
