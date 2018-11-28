<template>
  <div class="detail">
    <home-header></home-header>
    <div class="header">
      <p class="title">{{title}}</p>
    </div>
    <div class="wrapper">
      <img  class="picture" :src="imgUrl"/>
    </div>
    <article class="text">
      {{article}}
    </article>
  </div>
</template>

<script>
import HomeHeader from '../Home/components/Header'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    HomeHeader
  },
  data () {
    return {
      imgUrl: '',
      title: '',
      article: ''
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/static/mock/detail' + this.$route.params.id + '.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret) {
        this.imgUrl = res.imgUrl
        this.title = res.title
        this.article = res.article
      }
    }
  }
}
</script>

<style scoped>
  .wrapper {
    margin: 0 auto;
    text-align: center;
    width: 70%;
    border:5px solid red;
  }
  .picture {
    width: 100%;
  }
  .text {
    font-size: 1.5rem;
    width: 70%;
    margin: 2rem auto;
  }
  .header
  {
    width:100%;
    margin-top: 3rem;
    background: #eee;
    text-indent: .5rem;
  }
  .title {
    margin-left: 8rem;
    line-height: 5rem;
  }
</style>
