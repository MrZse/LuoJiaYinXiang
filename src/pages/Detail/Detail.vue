<template>
  <div class="detail">
    <home-header></home-header>
    <div class="header">
      <p class="title">{{title}}</p>
    </div>
    <div class="wrapper" id="imgwrapper">
      <img  class="picture" :src="imgUrl"/>
    </div>
    <article class="text" v-for="(item,index) of article" :key="index">
      <p>&emsp;&emsp;{{item.content}}</p>
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
      article: []
    }
  },
  mounted () {
    this.getDetailInfo()
    var wrapper = document.getElementById('imgwrapper')
    if (this.$route.params.id < 2000) {
      wrapper.style.width = '40%'
    } else {
      wrapper.style.width = '61.8%'
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/static/mock/detail' + this.$route.params.id + '.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      console.log(res)
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
    margin: auto;
    text-align: center;
    width: 61.8%;
  }
  .picture {
    width: 100%;
  }
  .text {
    font-size: 1.5rem;
    width: 61.8%;
    margin: 2rem auto;
  }
  .header
  {
    width:100%;
    margin-top: 0;
    background: url("/static/images/full-bloom.png");
    background-size: contain;
    text-indent: .5rem;
  }
  .title {
    margin-left: 8rem;
    line-height: 5rem;
    margin-top: 0;
  }
</style>
