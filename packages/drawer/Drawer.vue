
<template>
  <div class="drawer-container">
    <transition name="drawer-in-icon" mode="out-in">
      <span class="drawer-icon right" v-show="drawerVisible" @click="showDrawer">
        <svg-icon icon-class="right"/>
      </span>
    </transition>
    <transition name="drawer-out-icon" mode="out-in">
      <span class="drawer-icon left" v-show="!drawerVisible" @click="showDrawer">
        <svg-icon icon-class="left"/>
      </span>
    </transition>
    <transition name="drawer-content">
      <div class="drawer-content-wrapper" :class="customContentClass" v-show="drawerVisible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'QDrawer',
  data () {
    return {
      drawerVisible: false
    }
  },
  props: {
    customContentClass: {
      type: String,
      default: ''
    }
  },
  watch: {
    drawerVisible: function (val) {
      val
        ? this.$emit('open-drawer')
        : this.$emit('close-drawer')
    }
  },
  methods: {
    showDrawer () {
      this.drawerVisible = !this.drawerVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Drawer.scss';
</style>
