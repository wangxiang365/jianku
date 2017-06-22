<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item, index) in BanData">
      <a v-bind:href="item.Url">
        <img :src="item.ImagePath">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';//swiper组件
export default {
  props:["BanData"],
  data (){
    return{
      datas:{},
      banner:[],
      page:0,
      showText:false,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,//显示几个
        autoplay:2500,
        autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay。
        initialSlide:0,//默认从第几个显示
        //spaceBetween: 30,//banner左右间的间距
      }
    }
  },
  components: {
      swiper,
      swiperSlide,
  },
}
</script>

