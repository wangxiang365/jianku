<template>
  <div id="tab">
    <!--window.history.back()-->
    <div @click="goBack" class="back">返回</div>
<!--    <router-link  @click="choose(0)">已完成</router-link>
    <router-link  @click="choose(1)">未完成</router-link>-->
    <span  @click="choose(0)">已完成</span>
    <span  @click="choose(1)">未完成</span>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!--<router-view></router-view>-->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
  </div>
</template>

<script>
  import wwc from 'components/wwc'
  import ywc from 'components/ywc'
  export default {
    data () {
      return {
        selected:0,
        currentView:'rank_tab_0'
      }
    },
    methods:{
      goBack(){
        this.$router.back();//返回上一页
      },
      choose(index){
        this.selected = index;
        this.currentView = 'rank_tab_' + index;
      }
    },
    components:{
      'rank_tab_0':ywc, 
      'rank_tab_1':wwc
    }
  }
</script>
<style>
  .back{
    float: left;
    color: red;
    text-decoration: underline;
  }
</style>
