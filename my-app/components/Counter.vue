<template>
  <div>
    <h2>The count is: {{ count }}</h2>

    <p>
      <button @click="count++">Increment</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Counter",
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style scoped>

</style>
