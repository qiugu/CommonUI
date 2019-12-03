<template>
  <div class="drawer-container">
    <transition name="drawer-in-icon" mode="out-in">
      <span class="drawer-icon right" ref="rightBtn" v-show="drawerVisible" @click="showDrawer">
        <svg-icon icon-class="right" />
      </span>
    </transition>
    <transition name="drawer-out-icon" mode="out-in">
      <span class="drawer-icon left" ref="leftBtn" v-show="!drawerVisible" @click="showDrawer">
        <svg-icon icon-class="left" />
      </span>
    </transition>
    <transition name="drawer-content">
      <div
        class="drawer-content-wrapper"
        ref="content"
        :style="customContentClass"
        v-show="drawerVisible"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "QDrawer",
  data() {
    return {
      drawerVisible: false
    };
  },
  props: {
    customContentClass: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    drawerVisible: function(val) {
      val ? this.$emit("open-drawer") : this.$emit("close-drawer");
    }
  },
  mounted() {
    this.$refs.rightBtn.style.right = this.$refs.content.style.width || '134px'
  },
  methods: {
    showDrawer() {
      this.drawerVisible = !this.drawerVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Drawer.scss";
</style>
