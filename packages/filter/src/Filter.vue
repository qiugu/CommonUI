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
            v-model="item.checked"
            @change="(e) => handleChange(tag, e)"
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
  methods: {
    handleChange(tag, e) {
      this.isChecked[tag.name] = e.target.value
      console.log(e)
    }
  }
}
</script>
