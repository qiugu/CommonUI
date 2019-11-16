<template>
  <div
    class="common-floating-container"
    ref="floating"
    :style="{ width, transform: `translate(${xDeg}px, ${yDeg}px)`, ...floatingBodyClass }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xDeg: 0,
      yDeg: 0,
      timer: null,
    };
  },
  props: {
    width: {
      type: String,
      default: '320px',
    },
    rate: {
      type: Number,
      default: 10,
    },
    interval: {
      type: Number,
      default: 60,
    },
    floatingBodyClass: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    this.initFloat();
    window.addEventListener('resize', this.resizeHandle);
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
    window.removeEventListener('resize', this.resizeHandle);
  },
  methods: {
    initFloat() {
      // max screen width
      const innerWidth = document.body.scrollWidth - this.$refs.floating.clientWidth;
      // max screen height
      const innerHeight = document.body.scrollHeight - this.$refs.floating.clientHeight;
      console.log(this.$refs.floating.clientHeight);
      // max value
      let maxValueX; let
        maxValueY;
      this.timer = setInterval(() => {
        // if xDeg reach maxValue, record the max value
        if (this.xDeg >= innerWidth) {
          maxValueX = innerWidth;
        }
        if (this.xDeg <= 0) {
          maxValueX = undefined;
        }
        maxValueX
          ? this.xDeg = this.xDeg - this.rate
          : this.xDeg = this.xDeg + this.rate;

        if (this.yDeg >= innerHeight) {
          maxValueY = innerHeight;
        }
        if (this.yDeg <= 0) {
          maxValueY = undefined;
        }
        maxValueY
          ? this.yDeg = this.yDeg - this.rate
          : this.yDeg = this.yDeg + this.rate;
      }, this.interval);
    },
    // resize window event
    resizeHandle() {
      this.timer && clearInterval(this.timer);
      this.initFloat();
    },
  },
};
</script>

<style lang="scss" scoped>
@import './floating.scss'
</style>
