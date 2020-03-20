<template>
  <nav>
    <v-app-bar absolute
      color="primary"
      dark
      scroll-target="#scrolling-techniques-8">
      <v-app-bar-nav-icon class="grey--text" @click="changeLeftNavView"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="white--text">苏打站台</span>
        <span class="white--text ma-2 font-weight-light">SodaStation</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey" class="ma-2 ">
        <span class="white--text">退出</span>
        <v-icon right class="white--text" >mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    
  </nav>
</template>
<script>
import bus from '../bus.js'
export default {  
    name:'topNav',
    data(){
      return{
      isDrawLeftNav:false
      }
    },
    methods:{
      changeLeftNavView:function(){
        this.isDrawLeftNav = !this.isDrawLeftNav
        bus.$emit("isDrawLeftNav",this.isDrawLeftNav);
      }
    }
}
</script>