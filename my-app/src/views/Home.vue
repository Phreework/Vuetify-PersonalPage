<template>
  <div class="home">
    <h1 class="subtitle-1 grey--text">Home</h1>
    <v-container class="my-5">content</v-container>
  </div>
</template>



<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>