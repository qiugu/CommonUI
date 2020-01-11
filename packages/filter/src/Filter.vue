<template>
  <div class="qbs-filter">
    <div v-for="(item, index) in searchData" :key="index" class="filter-type">
      <strong :style="{ marginRight: '20px' }">{{ item.name }}</strong>
      <template v-for=" tag in item.tags">
        <label :key="tag.value" class="filter-label" :class="{ 'is-checked': tag.value === isChecked[tag.name] }">
          <input
            class="selects"
            :value="tag.value"
            :key="tag.value"
            :type="item.type"
            :name="tag.name"
            @change="(e) => handleChange(tag, e, item.type)"
          />
          <span>{{ tag.label }}</span>
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QFilter',
  data() {
    return {
      isChecked: {}
    }
  },
  props: {
    searchData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    // 初始化选中的条件
    this.searchData.forEach(item => {
      this.$set(this.isChecked, item.tags[0].name, item.tags[0].value)
    })
  },
  methods: {
    handleChange(tag, e, type) {
      // TODO 判断每项的类型，需要优化
      if (type === 'checkbox') {
        if (!this.isChecked[tag.name]) {
          this.$set(this.isChecked, tag.name, e.target.value)
        } else {
          this.$delete(this.isChecked, tag.name)
        }
      } else {
        this.$set(this.isChecked, tag.name, e.target.value)
      }
      // const selectData = []
      // this.searchData.forEach((item, index) => {
      //   item.tags.forEach(tag => {
      //     for (const key in this.isChecked) {
      //       if (tag.name === key) {
      //         selectData.push(tag)
      //       }
      //     }
      //   })
      // })
      // console.log(selectData)
    }
  }
}
</script>
