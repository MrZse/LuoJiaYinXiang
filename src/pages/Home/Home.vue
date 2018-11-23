<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <food></food>
      <scene></scene>
      <culture></culture>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Food from './components/Food'
import Scene from './components/Scene'
import Culture from './components/Culture'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Food,
    Scene,
    Culture
  }
}
</script>

<style scoped>

</style>
