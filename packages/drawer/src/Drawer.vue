<template>
  <div
    class="bui_drawer_container"
    ref="container"
    :style="customContainerClass"
  >
    <transition
      name="drawer-in-icon"
      mode="out-in"
    >
      <span
        class="bui_drawer_icon right"
        ref="rightBtn"
        @click="showDrawer"
        :style="{ right: `${offsetRight}px` }"
        v-show="drawerVisible"
      >
        <svg-icon icon-class="right" />
      </span>
    </transition>
    <transition
      name="drawer-out-icon"
      mode="out-in"
    >
      <span
        class="bui_drawer_icon left"
        ref="leftBtn"
        @click="showDrawer"
        :style="{ right: `${offsetLeft}px` }"
        v-show="!drawerVisible"
      >
        <svg-icon icon-class="left" />
      </span>
    </transition>
    <transition name="drawer-content">
      <div
        class="bui_drawer_content_wrapper"
        v-show="drawerVisible"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'QDrawer',
  data() {
    return {
      drawerVisible: false,
      offsetLeft: 0,
      offsetRight: 130,
      styleWidth: 0
    };
  },
  props: {
    customContainerClass: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    drawerVisible: function(val) {
      if (val) {
        this.$emit('open-drawer')
        this.$refs.rightBtn.style.right = this.styleWidth || 130
      } else {
        this.$emit('close-drawer')
      }
    }
  },
  mounted() {
    this.styleWidth = window.getComputedStyle(this.$refs.container).width
  },
  methods: {
    showDrawer() {
      this.drawerVisible = !this.drawerVisible
    }
  }
};
</script>
