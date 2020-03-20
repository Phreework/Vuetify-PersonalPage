<template>

<div class="home">
  <v-app id="inspire">
    <v-content>

    </v-content>
  </v-app>
</div>
</template>



<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>