<template>
  <div class="layouts">
    <div class="navbar">
      <img src="../assets/logo.png" alt="logo" class="logo">
      <span>BUSINESSUI</span>
    </div>
    <div class="main-container">
      <div class="sidebar">
        <h2>组件</h2>
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
  data () {
    return {
      navs: [
        { name: '主页', url: 'home' },
        { name: '浮窗', url: 'floating' },
        { name: '抽屉', url: 'drawer' },
        { name: '筛选', url: 'filter' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.layouts {
  height: 100%;
  .navbar {
    width: 1140px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    border-bottom: 1px solid #dcdfe6;
    & > .logo {
      width: 38px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    }
    & > span {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .main-container {
    display: flex;
    width: 1140px;
    height: calc(100% - 80px);
    margin: 0 auto;
    .sidebar {
      width: 240px;
      height: 100%;
      overflow-y: auto;
      ul {
        padding: 0;
        list-style: none;
        li {
          height: 40px;
          line-height: 40px;
          &.active > a {
            color: #409eff;
          }
          a {
            color: #444;
            text-decoration: none;
          }
        }
      }
    }
    .content {
      flex: 1;
      padding: 20px 0;
    }
  }
}
</style>