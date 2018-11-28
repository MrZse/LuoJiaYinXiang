<template>
  <div>
    <div class="header">
      <p class="title">{{title}}</p>
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
  props: {
    list: Array,
    title: String
  },
  computed: {
    lines () {
      const lines = []
      this.list.forEach((item, index) => {
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
