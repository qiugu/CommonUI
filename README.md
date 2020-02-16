# business-ui

## Installation
```
npm install business-ui --save
```

## Usage
```javascript
import Vue from 'vue'
import businessui from 'businessui'

Vue.use(businessui)
```

## Description
记录常用的一些原生vue业务组件，目前还在初级阶段，组件名字暂定，如果有小伙伴有疑问可以联系我，也可以加入我一起来写自己的组件库。

## Components
### floating

#### 组件Props
属性|描述|类型
-|-|-
floatingBodyClass|悬浮窗的样式|string
interval|悬浮窗的移动间隔时间，单位为毫秒|number，默认为20
enter|输入移入浮窗的事件|function
leave|输入移出浮窗的事件|function
close|点击关闭浮窗的回调|function

### drawer

#### 组件Props
属性|描述|默认
-|-|-
customContainerClass|抽屉的容器样式|object
open-drawer|打开抽屉的回调|function
close-drawer|关闭抽屉的回调|function

### filter
#### 组件Props
属性|描述|默认
-|-|-
searchData|需要进行筛选的条件数据|object
searchData.name|每项筛选的名称|string
searchData.type|每项筛选的类型，可以为单选或者多选|'radio' || 'checkbox'
searchData.tags|每项筛选的具体条目|array

#### tags中的属性
属性|描述|默认
-|-|-
name|筛选条目的名称，同radio和checkbox的name|string
label|筛选条目的显示名称|string
value|每项筛选的传值，注意同一tags中value值不能相等，必须为不同的值|string
select|每次选中一个条目，会返回选中的项，选中的项为该事件函数的参数|function

### Changelog
* 2019-11-24 浮窗组件添加关闭，鼠标移入移出回调功能
* 2019-11-26 初步修改项目结构，将实例项目独立出来
* 2019-12-01 新增抽屉组件，目前样式固定，抽屉打开关闭样式问题待解决
* 2019-12-03 修复抽屉组件按钮动画效果。自定义宽度时，动画不流畅的问题待修复
* 2019-12-21 修复抽屉组件自定义宽度动画问题。发布npm包，原名称已经注册，修改为businessui
* 2019-12-22 添加打包组件的配置文件
* 2019-12-28 demo示例修改
* 2020-01-01 添加eslint以及入口文件生成的脚本，入口文件缩进问题待修复
* 2020-01-11 添加filter组件，构造选中的数据功能待完成
* 2020-02-16 filter组件添加事件监听，返回选中的数组