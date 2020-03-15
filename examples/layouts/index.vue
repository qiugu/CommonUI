<template>
  <div class="layouts">
    <div class="navbar">
      <div>
        <img src="../assets/images/logo.png" alt="logo" class="logo">
        <span>BUSINESSUI</span>
      </div>
      <div>
        <a href="https://github.com/qiugu/CommonUI" target="_blank">GITHUB</a>
      </div>
    </div>
    <div class="main-container">
      <div class="sidebar">
        <h2 class="component-title">组件</h2>
        <ul>
          <li v-for="(item, index) in navs" :key="index" :class="{ 'active': item.url === $route.name }">
            <router-link :to="{ name: item.url }">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: '安装', url: 'home' },
        { name: '浮窗', url: 'floating' },
        { name: '抽屉', url: 'drawer' },
        { name: '筛选', url: 'filter' },
        { name: '列表', url: 'list' }
      ]
    }
  }
}
</script>
