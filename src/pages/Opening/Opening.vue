<template>
  <div @click = "handleImageClick">
      <table cellspacing="0" cellpadding="0">
        <tr>
          <td class="opening-image-left">
            <transition
              name="fade"
              leave-active-class="animated fadeOutLeft"
            >
              <img class="img-content" src="/static/images/opening/1.jpg" v-if="show"/>
            </transition>
          </td>
          <td class="opening-image-right">
            <transition
              name="fade"
              leave-active-class="animated fadeOutRight"
            >
              <img class="img-content" src="/static/images/opening/2.jpg" v-if="show"/>
            </transition>
          </td>
        </tr>
      </table>
    <router-link :to="'/home'" style="display: none" >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Opening',
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleImageClick: function () {
      this.show = !this.show
      setTimeout(() => {
        this.$router.push('home')
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .img-content{
    width: 100%;
  }
  table{
    margin: 0 auto;
  }
</style>
