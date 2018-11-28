<template>
    <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <generation :list="generationList" :title="generationTitle"></generation>
      <scene :list="sceneList" :title="sceneTitle"></scene>
      <history :list="historyList" :title="historyTitle"></history>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Generation from './components/Generation'
import Scene from './components/Scene'
import History from './components/History'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Generation,
    Scene,
    History
  },
  mounted () {
    this.getHomeInfo()
  },
  data () {
    return {
      swiperList: [],
      generationList: [],
      sceneList: [],
      historyList: [],
      generationTitle: '',
      sceneTitle: '',
      historyTitle: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/home.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.generationList = data.generationList
        this.sceneList = data.sceneList
        this.historyList = data.historyList
        this.generationTitle = data.generationTitle
        this.sceneTitle = data.sceneTitle
        this.historyTitle = data.historyTitle
      }
    }
  }
}
</script>

<style scoped>

</style>
