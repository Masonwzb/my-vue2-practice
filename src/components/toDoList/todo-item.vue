<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  name: "todo-item",

  props: {
    title: String,
  }
}
</script>

<style scoped>

</style>