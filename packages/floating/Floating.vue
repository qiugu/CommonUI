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
    <i aria-label="icon: close-circle" class="close-icon" @click="closeHandler">
      <svg
        viewBox="64 64 896 896"
        data-icon="close-circle"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        class
      >
        <path
          d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
        />
        <path
          d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
        />
      </svg>
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
      default: "320px"
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
    window.addEventListener("resize", this.resizeHandle);
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
    window.removeEventListener("resize", this.resizeHandle);
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
      this.$emit("enter", e);
    },
    mouseleave(e) {
      this.initFloat();
      this.$emit("leave", e);
    },
    // close window event
    closeHandler (e) {
      this.visible = false;
      this.timer && clearInterval(this.timer);
      this.$emit("close", e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./floating.scss";
</style>
