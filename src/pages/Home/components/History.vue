<template>
  <div>
    <div class="header">
      <p class="title">历史根脉</p>
    </div>
    <ul v-for="(line,index) of lines" :key="index">
      <li v-for="item of line" :key="item.id">
        <router-link :to="'/detail/' + item.id" class="item border-bottom" >
          <div class="item-content">
            <img class="item-img" :src="item.imgUrl"/>
            <p class="item-title">{{item.title}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      foodList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_200x200_d86753f0.jpg',
        title: '知音号游船',
        desc: '在知音号上,你将获得时光穿梭般的真实体验!'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg',
        title: '武汉欢乐谷',
        desc: '欢乐谷2期,七大亲子互动设备邀你嗨翻全家'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_200x200_366b12f8.jpg',
        title: '云雾山',
        desc: '西陵胜地、楚北名区、陂西陲障、汉地祖山'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_200x200_366b12f8.jpg',
        title: '云雾山',
        desc: '西陵胜地、楚北名区、陂西陲障、汉地祖山'
      }]
    }
  },
  computed: {
    lines () {
      const lines = []
      this.foodList.forEach((item, index) => {
        const line = Math.floor(index / 3)
        if (!lines[line]) {
          lines[line] = []
        }
        lines[line].push(item)
      })
      return lines
    }
  }
}
</script>

<style scoped>
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
  ul {
    list-style: none;
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
  .item {
    color:black;
    text-decoration: none;
  }
  .item p:active {
    color:red;
  }
  .item-content {
    margin-left: 4rem;
    width: 100%;
    text-align: center;
  }
  .item-img{
    margin: 0 auto;
    width: 14rem;
    height: 10rem;
    padding: 1rem;
  }
  .item-title {
    margin-top: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
