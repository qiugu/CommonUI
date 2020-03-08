## Drawer组件

### 基本用法
```html
<template>
  <div>
    <h1 style="color: #273849">This is a drawer component</h1>
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
  data() {
    return {
      containerClass: {
        width: '300px',
        height: '600px'
      }
    }
  },
  methods: {
    handleOpen() {
      console.log('drawer opening')
    },
    handleClose() {
      console.log('drawer-close')
    }
  }
}
</script>
```

### 组件Props
属性|描述|默认
-|-|-
customContainerClass|抽屉的容器样式|object
open-drawer|打开抽屉的回调|function
close-drawer|关闭抽屉的回调|function