## Filter组件

### 基本用法
::: demo
```html
<template>
  <div class="filter">
    <q-filter :searchData="searchData" @select="selecedData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: [
        {
          name: '类型',
          type: 'radio',
          tags: [
            {
              name: 'computer',
              label: '不限',
              value: '0'
            },
            {
              name: 'computer',
              label: '台式机',
              value: '1'
            },
            {
              name: 'computer',
              label: '笔记本',
              value: '2'
            },
            {
              name: 'computer',
              label: '一体机',
              value: '3'
            }
          ]
        },
        {
          name: '品牌',
          type: 'checkbox',
          tags: [
            {
              name: 'brand1',
              label: '联想',
              value: '4'
            },
            {
              name: 'brand2',
              label: '华硕',
              value: '5'
            },
            {
              name: 'brand3',
              label: '戴尔',
              value: '6'
            },
            {
              name: 'brand4',
              label: '微星',
              value: '7'
            },
            {
              name: 'brand5',
              label: '神舟',
              value: '8'
            },
            {
              name: 'brand6',
              label: '苹果',
              value: '9'
            }
          ]
        },
        {
          name: '价格',
          type: 'radio',
          tags: [
            {
              name: 'price',
              label: '不限',
              value: '13'
            },
            {
              name: 'price',
              label: '4000元以下',
              value: '10'
            },
            {
              name: 'price',
              label: '8000元以下',
              value: '11'
            },
            {
              name: 'price',
              label: '12000元以下',
              value: '12'
            }
          ]
        },
        {
          name: '内存',
          type: 'radio',
          tags: [
            {
              name: 'memory',
              label: '不限',
              value: '19'
            },
            {
              name: 'memory',
              label: '4G',
              value: '14'
            },
            {
              name: 'memory',
              label: '8G',
              value: '15'
            },
            {
              name: 'memory',
              label: '16G',
              value: '16'
            },
            {
              name: 'memory',
              label: '32G',
              value: '17'
            },
            {
              name: 'memory',
              label: '64G',
              value: '18'
            }
          ]
        },
        {
          name: '硬盘',
          type: 'radio',
          tags: [
            {
              name: 'disk',
              label: '不限',
              value: '19'
            },
            {
              name: 'disk',
              label: '512G',
              value: '20'
            },
            {
              name: 'disk',
              label: '1T',
              value: '21'
            },
            {
              name: 'disk',
              label: '2T',
              value: '22'
            },
            {
              name: 'disk',
              label: '3T',
              value: '23'
            },
            {
              name: 'disk',
              label: '4T',
              value: '24'
            }
          ]
        }
      ]
    }
  },
  methods: {
    selecedData(data) {
      console.log(data)
    }
  }
}
</script>
```
:::

### Props
属性|描述|默认
-|-|-
searchData|需要进行筛选的条件数据|object
searchData.name|每项筛选的名称|string
searchData.type|每项筛选的类型，可以为单选或者多选|'radio' || 'checkbox'
searchData.tags|每项筛选的具体条目|array

### tags中的属性
属性|描述|默认
-|-|-
name|筛选条目的名称，同radio和checkbox的name|string
label|筛选条目的显示名称|string
value|每项筛选的传值，注意同一tags中value值不能相等，必须为不同的值|string
select|每次选中一个条目，会返回选中的项，选中的项为该事件函数的参数|function