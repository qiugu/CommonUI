<template>
  <div class="about">
    <h1>This is an floating component</h1>
    <q-floating
      floatingBodyClass="floatingBodyClass"
      @enter="mounseenterHandle"
      @leave="mounseleaveHandle"
      @close="closeWindow"
    >
      <!-- <img src="../assets/logo.png" alt="logo"> -->
    </q-floating>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
<style lang="scss" scoped>
.floatingBodyClass {
  background: url(../assets/floating-bg.jpg);
  background-size: cover;
}
</style>
