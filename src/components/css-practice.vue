<template>
  <div class="container">
    <div class="aside"></div>
    <div class="main"></div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "css-practice"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

.container {
  height: 100px;
}

.aside {
  width: 300px;
  height: 100%;
  float: left;
  background: indianred;
}

.main {
  overflow: hidden;
  height: 100%;
  background: #42b983;
}

</style>