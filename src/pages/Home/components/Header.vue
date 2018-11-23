<template>
  <header class="header">
    <div class="navigator">
      <!-- 激活的菜单样式为  active 类 -->
      <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->
      <nav :class="active" @click.prevent>
        <!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->
            <a href="#" class="home nav-item" @click="makeActive('home')">
              Home
            </a>
            <a href="#" class="projects nav-item" @click="makeActive('projects')">
              Projects
            </a>
            <a href="#" class="services nav-item" @click="makeActive('services')">
              Services
            </a>
            <a href="#" class="contact nav-item" @click="makeActive('contact')">
              Contact
            </a>
      </nav>
      <!-- 以下 "active" 变量会根据当前选中的值来自动变换 -->
    </div>
    <p>您选择了 <b>{{active}} 菜单</b></p>
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

</style>
