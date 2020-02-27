<template>
  <div class="bui_list_item" :style="{ height: `${height}px` }">
    <div class="bui_wrap" :style="{transform: `translateY(${directionValue * interval}px)`}">
      <slot name="list"></slot>
    </div>
    <div class="bui_wrap" :style="{transform: `translateY(${directionValue * interval}px)`}">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QList',
  props: {
    height: {
      type: Number,
      default: 330
    },
    rate: {
      type: Number,
      default: 10
    },
    direction: {
      type: String,
      default: 'b2t',
      validator: value => {
        return ['b2t', 't2b'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      interval: 0,
      directionValue: -1
    }
  },
  mounted() {
    this.directionValue = this.direction === 'b2t' ? -1 : 1
    this.interval = this.height * -1
    setInterval(this.start, 100)
  },
  methods: {
    start() {
      if (this.interval >= this.height) {
        this.interval = 0
      } else {
        this.interval += 1
      }
    }
  }
}
</script>

<style>

</style>
