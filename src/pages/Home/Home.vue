<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <generation></generation>
      <scene></scene>
      <history></history>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Generation from './components/Generation'
import Scene from './components/Scene'
import History from './components/History'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Generation,
    Scene,
    History
  }
}
</script>

<style scoped>

</style>
