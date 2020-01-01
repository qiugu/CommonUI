<template>
  <div
    v-if="visible"
    class="common-floating-container"
    :class="floatingBodyClass"
    @mouseenter="mounseenter"
    @mouseleave="mouseleave"
    ref="floating"
    :style="{ width, transform: `translate(${xDeg}px, ${yDeg}px)` }"
  >
    <i aria-label="icon: close-circle" @click="closeHandler">
      <svg-icon icon-class="close" class="close-icon" />
    </i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'QFloating',
  data() {
    return {
      xDeg: 0,
      yDeg: 0,
      timer: null,
      visible: true
    };
  },
  props: {
    width: {
      type: String,
      default: '320px'
    },
    rate: {
      type: Number,
      default: 1
    },
    interval: {
      type: Number,
      default: 20
    },
    floatingBodyClass: {
      type: String,
      default: ''
    }
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
      const innerWidth = window.innerWidth - this.$refs.floating.clientWidth;
      // max screen height
      const innerHeight = window.innerHeight - this.$refs.floating.clientHeight;
      // max value
      let maxValueX;
      let maxValueY;
      this.timer = setInterval(() => {
        // if xDeg reach maxValue, record the max value
        if (this.xDeg >= innerWidth) {
          maxValueX = innerWidth;
        }
        if (this.xDeg <= 0) {
          maxValueX = undefined;
        }
        maxValueX
          ? (this.xDeg = this.xDeg - this.rate)
          : (this.xDeg = this.xDeg + this.rate);

        if (this.yDeg >= innerHeight) {
          maxValueY = innerHeight;
        }
        if (this.yDeg <= 0) {
          maxValueY = undefined;
        }
        maxValueY
          ? (this.yDeg = this.yDeg - this.rate)
          : (this.yDeg = this.yDeg + this.rate);
      }, this.interval);
    },
    // resize window event
    resizeHandle() {
      this.timer && clearInterval(this.timer);
      this.initFloat();
    },
    // mounseenter event
    mounseenter(e) {
      this.timer && clearInterval(this.timer);
      this.$emit('enter', e);
    },
    mouseleave(e) {
      this.initFloat();
      this.$emit('leave', e);
    },
    // close window event
    closeHandler(e) {
      this.visible = false;
      this.timer && clearInterval(this.timer);
      this.$emit('close', e);
    }
  }
};
</script>
