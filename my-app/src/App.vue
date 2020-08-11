<template>
  <div id="app">

    <message>Hello there!</message>
    <counter></counter>
    <my-form></my-form>


  </div>
</template>

<script>

  import Message from "../components/Message";
  import Counter from "../components/Counter";
  import MyForm from "../components/MyForm";
  export default {
    name: 'app',
    components:{Message,Counter,MyForm},
    data() {
      return {}
    }
  }
</script>

<style lang="scss">

</style>
