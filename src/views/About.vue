<template>
  <div class="about">
    <h1>This is an floating component</h1>
    <Floating
      :floatingBodyClass="floatingBodyClass"
      @enter="mounseenterHandle"
      @leave="mounseleaveHandle"
      @close="closeWindow"
    >
      <!-- <img src="../assets/logo.png" alt="logo"> -->
    </Floating>
  </div>
</template>

<script>
import Floating from '../../packages/floating/Floating.vue';

export default {
  components: { Floating },
  data() {
    return {
      floatingBodyClass: {
        backgroundImage: `url(${require('../assets/floating-bg.jpg')})`,
        backgroundSize: 'cover',
      },
    };
  },
  methods: {
    /* eslint-disable */
    mounseenterHandle(e) {
      console.log(e);
    },
    /* eslint-disable */
    mounseleaveHandle(e) {
      console.log(e);
    },
    closeWindow (e) {
      console.log(e)
    }
  }
};
</script>
