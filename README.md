# business-ui

## Installation
```
npm install business-ui --save
```

### Usage
```javascript
import Vue from 'vue'
import businessui from 'businessui'

Vue.use(businessui)
```

### Description
记录常用的一些原生vue业务组件，目前还在初级阶段，组件名字暂定，如果有小伙伴有疑问可以联系我，也可以加入我一起来写自己的组件库。

### Components
#### floating
属性|描述|类型
-|-|-
floatingBodyClass|悬浮窗的样式|string
interval|悬浮窗的移动间隔时间，单位为毫秒|number，默认为20
enter|输入移入浮窗的事件|function
leave|输入移出浮窗的事件|function
close|点击关闭浮窗的回调|function

#### drawer
属性|描述|默认
-|-|-
customContainerClass|抽屉的容器样式|object
open-drawer|打开抽屉的回调|function
close-drawer|关闭抽屉的回调|function

### Changelog
* 2019-11-24 浮窗组件添加关闭，鼠标移入移出回调功能
* 2019-11-26 初步修改项目结构，将实例项目独立出来
* 2019-12-01 新增抽屉组件，目前样式固定，抽屉打开关闭样式问题待解决
* 2019-12-03 修复抽屉组件按钮动画效果。自定义宽度时，动画不流畅的问题待修复
* 2019-12-21 修复抽屉组件自定义宽度动画问题。发布npm包，原名称已经注册，修改为businessui
* 2019-12-22 添加打包组件的配置文件
