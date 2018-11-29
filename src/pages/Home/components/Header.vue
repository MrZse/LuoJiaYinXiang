<template>
  <header name="Header" class="header">
    <nav class="nav">
      <router-link :to="{ path: '/home'}" replace class="link">
        <div class="wrapper">
          <img src="/static/images/icon.png" class="icon">
          <p class="header-title">
            主&emsp;页
          </p>
          <img src="/static/images/title.png" class="title">
        </div>
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
    height: 100%;
    background-image: url("/static/images/header-bg.jpg");
    background-size: cover;
  }
  .wrapper {
    display: flex;
  }
  .header-title {
    margin-left: 2rem;
    margin-top: 2rem;
    color: white;
    flex: 3;
    font-size: 2rem;
  }
  .link {
    text-decoration: none;
  }
  .title,
  .icon {
    height: 10rem;
    flex: 0.5;
  }
  .icon{
    padding-left: 2rem;
  }
  .title {
    padding-right: 2rem;
  }
</style>
