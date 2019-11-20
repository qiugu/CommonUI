<template>
  <div class="about">
    <h1>This is an floating component</h1>
    <Floating
      :floatingBodyClass="{ background: 'red' }"
      @enter="mounseenterHandle"
      @leave="mounseleaveHandle">
      <img src="../assets/logo.png" alt="logo">
    </Floating>
  </div>
</template>

<script>
import Floating from '../../packages/floating/Floating.vue';

export default {
  components: { Floating },
  methods: {
    /* eslint-disable */
    mounseenterHandle(e) {
      console.log(e);
    },
    /* eslint-disable */
    mounseleaveHandle(e) {
      console.log(e);
    },
  },
};
</script>
