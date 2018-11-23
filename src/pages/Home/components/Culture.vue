<template>
  <div class="food">
    <div class="title">
      文化珞珈
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of foodList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cultrue',
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
      }]
    }
  }
}
</script>

<style scoped>
  .food {
    padding: auto;
  }
  .title
  {
    width:80%;
    margin: auto;
    margin-top: 1rem;
    padding-left: 1rem;
    line-height: 5rem;
    background: #eee;
    text-indent: .5rem;

  }
  .item{
    overflow: hidden;
    display: flex;
    height: 10rem;
    padding-left: 13%;
  }
  .item-img{
    width: 10rem;
    height: 10rem;
    padding: 1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
  }
  .item-title{
    line-height: 2rem;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .item-desc{
    line-height: 1.5rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
