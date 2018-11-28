<template>
  <header name="Header" class="header">
    <nav>
      <router-link :to="'home'" >
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
  .header {
    width: 100%;
    height: 0;
    margin-bottom: 5%;
  }
  .header-title {
    margin-left: 25%;
    margin-top: 1%;
  }
</style>
