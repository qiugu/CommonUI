## Floating组件
用于展示一些广告宣传功能

### 基本用法

:::demo
```html
<template>
  <div class="about"> 
    <q-floating
      floatingBodyClass="floatingBodyClass"
      @enter="mounseenterHandle"
      @leave="mounseleaveHandle"
      @close="closeWindow"
    >
      <img :src="src" alt="logo" style="width: 100%;">
    </q-floating>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require('../assets/images/floating-bg.jpg')
    }
  },
  methods: {
    mounseenterHandle(e) {
      console.log(e)
      console.log(__dirname)
    },
    mounseleaveHandle(e) {
      console.log(e)
    },
    closeWindow (e) {
      console.log(e)
    }
  }
};
</script>
```
:::

### 组件Props
属性|描述|类型
-|-|-
floatingBodyClass|悬浮窗的样式|string
interval|悬浮窗的移动间隔时间，单位为毫秒|number，默认为20
enter|输入移入浮窗的事件|function
leave|输入移出浮窗的事件|function
close|点击关闭浮窗的回调|function