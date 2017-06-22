<template>
  <div id="app">
    <!--$route.path=='/'||$route.path=='/cart'||$route.path=='/pro'||$route.path=='/center'-->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <div class="FooterHei"></div>
    <Bottom v-if="FilterUrl"></Bottom>
  </div>
</template>

<script>
  import Bottom from 'components/Common/Bottom'
  export default {
    data (){
      return{
        Url:['/','/cart','/pro','/PerCenter',]
      }
    },
    name: 'app',
    components:{
      Bottom,
    },
    computed: {
      FilterUrl () {
        var Url=this.Url
        for(var i=0;i<Url.length;i++){
          if(Url[i].indexOf(this.$route.path)>-1){
            return true;
          }
        }
      }
    }
  }
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #353535;
}
.router-link-active{
  color: red;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
