<template>
  <v-card class="mr-2" max-width="280">
    <v-img :src="imgUrl" height="200px"></v-img>

    <v-card-title>{{title}}</v-card-title>

    <v-card-subtitle>{{subTitle}}</v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn color="purple" text>Explore</v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "blogCard",
  props:{
      imgUrl:String,
      title:String,
      subTitle:String

  }
};
</script>