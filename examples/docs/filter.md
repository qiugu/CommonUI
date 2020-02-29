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