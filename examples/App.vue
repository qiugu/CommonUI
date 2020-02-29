<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body,#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

table {
  border: 1px solid #cccc;
  border-collapse: collapse;
  tr th,
  tr td {
    border: 1px solid #ccc;
    padding: 10px 15px;
  }
}
</style>
