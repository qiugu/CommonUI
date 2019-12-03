<template>
  <div>
    <q-drawer @open-drawer="handleOpen" @close-drawer="handleClose" :customContentClass="containerClass">
      <button>在线客服1</button>
      <button>在线客服2</button>
      <button>在线客服3</button>
      <button>在线客服4</button>
    </q-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      containerClass: {
        width: '300px'
      }
    }
  },
  methods: {
    handleOpen () {
      console.log('drawer opening')
    },
    handleClose () {
      console.log('drawer-close')
    }
  }
}
</script>

<style lang="scss" scooped>
</style>