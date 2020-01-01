<template>
  <div class="screen">
    <div v-for="(item, index) in searchData" :key="index" class="screen-type">
      <strong :style="{ marginRight: '20px' }">{{ item.name }}</strong>
      <template v-for=" tag in item.tags">
        <label :key="tag.value">
          <input
            :value="tag.value"
            :key="tag.value"
            :type="type"
            :name="tag.type"
            @change="(checked) => handleChange(tag, checked)"
          />
          <span :class="{ 'is-checked': isChecked }">{{ tag.label }}</span>
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QFilter',
  data() {
    return {}
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
    handleChange() {}
  }
}
</script>
