<template>
  <div class="wrapper">
    <div class="swiper">
      <swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for="item of list" v-bind:key="item.id">
            <div><img class="swiper-image" :src="item.imgUrl"></div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        paginationClickable: true,
        autoplay: 2500
      }
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .swiper{
    display: block;
    margin: 0 auto;
    position: relative;
    text-align: center;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 33%;
    background: #eee
  }
  .swiper-image{
    width: 100%;
  }
</style>
