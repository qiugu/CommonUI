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
  width: 100%;
  border: 1px solid #cccc;
  border-collapse: collapse;
  tr th,
  tr td {
    border: 1px solid #ccc;
    padding: 10px 15px;
    text-align: center;
  }
}

.hljs {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: solid 1px #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}
</style>
