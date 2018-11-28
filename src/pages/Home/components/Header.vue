<template>
  <header name="Header" class="header">
    <nav class="nav">
      <router-link :to="{ path: '/home'}" replace>
        <p class="header-title">
          主页
        </p>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      active: 'home'
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    }
  }
}
</script>

<style scoped>
  .nav {
    padding-bottom: 9.375%;
    width: 100%;
    background-image: url("http://i0.hdslb.com/bfs/archive/6c42c40ed54f4bb5ea491894aff693878afa6580.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
  .header-title {
    margin-left: 25%;
    margin-top: 0;
  }
</style>
