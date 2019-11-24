# common-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### 项目描述
记录工作中常用的一些原生vue组件，不受UI框架限制，业务组件比较多，如果组件有什么不了解可以联系我

### 组件
#### floating组件
属性|描述|默认
-|-|-
floatingBodyClass|悬浮窗的融资样式|默认为{}
interval|悬浮窗的移动间隔时间，单位为毫秒|默认为20
enter|输入移入浮窗的事件|function
leave|输入移出浮窗的事件|function
close|点击关闭浮窗的回调|function

### Changelog
* 2019-11-24 浮窗组件添加关闭，鼠标移入移出回调功能