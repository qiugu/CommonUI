<template>
  <svg :class="svgClass" :style="{ fontSize: `${fontSize}px` }" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    fontSize: {
      type: Number,
      default: 25
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'bui_icon' + this.className
      } else {
        return 'bui_icon'
      }
    }
  }
}
</script>

<style scoped>
.bui_icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
