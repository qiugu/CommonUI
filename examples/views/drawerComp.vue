<template>
  <div>
    <q-drawer @open-drawer="handleOpen" @close-drawer="handleClose" :customContainerClass="containerClass">
      <div><button>在线客服1</button></div>
      <div><button>在线客服2</button></div>
      <div><button>在线客服3</button></div>
      <div><button>在线客服4</button></div>
    </q-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      containerClass: {
        width: '300px',
        height: '600px'
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