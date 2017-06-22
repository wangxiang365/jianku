<template>
  <div style="font-size: 30px; color: red;">
    <div class="back" v-GoBack>返回</div>
    我是内容页2
  </div>
</template>
<script>
  export default {
    goBack(){
      this.$router.back();//返回上一页
    },
  }
</script>
<style>
</style>
