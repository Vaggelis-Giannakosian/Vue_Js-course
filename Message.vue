<template>
    <article class="message">
        <div class="message-header" v-text="title"></div>
        <div class="message-body" v-text="body"></div>
    </article>
</template>


<script>

   export default {
       props: ['title', 'body']
   }

</script>