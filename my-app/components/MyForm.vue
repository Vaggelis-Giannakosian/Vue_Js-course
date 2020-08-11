<template>
  <div>

    <input type="text" name="name" v-model="form.name"> <br> <br>
    <input type="text" name="description" v-model="form.description"><br> <br>
    <input type="number" name="number" v-model="form.number">


  </div>
</template>

<script>
  export default {
    name: "Form",
    data() {
      return {
        form: {}
      }
    }
  }
</script>

<style scoped>

</style>
