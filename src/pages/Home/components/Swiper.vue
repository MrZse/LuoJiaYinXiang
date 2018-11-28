<template>
  <div class="wrapper">
    <div class="swiper">
      <swiper :options="swiperOption" v-if="list.length">
        <swiper-slide v-for="item of list" v-bind:key="item.id">
          <router-link :to="'/detail/' + item.id">
            <div><img class="swiper-image" :src="item.imgUrl"></div>
            <div class="item-view"><p class="title-content">{{item.title}}</p></div>
          </router-link>
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
    margin-top: 2rem;
  }
  .swiper{
    display: block;
    margin: 0 auto;
    position: relative;
    text-align: center;
    overflow: hidden;
    width: 80%;
    height: 0;
    padding-bottom: 40%;
    background: #eee
  }
  .swiper-image{
    width: 100%;
  }
  .item-view{
    position: absolute;
    left: 5%;
    top: 0;
    margin:0;
    background: rgba(0,0,0,.5);
    width: 25%;
    margin-bottom: 0;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
  }
  .title-content {
    color: white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
