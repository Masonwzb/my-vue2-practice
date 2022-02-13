<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { testFrontend } from './test/practice-one';

export default {
  name: 'App',

  created() {
    testFrontend();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
