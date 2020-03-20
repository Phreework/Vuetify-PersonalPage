<template>
<nav>
  <v-navigation-drawer app v-model="drawer" class="primary">
    <v-list>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>  
        <v-list-item-content>
          <v-list-item-title class="white--text">
              {{link.text}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </nav>
</template>
<script>
import bus from "../bus.js";
export default {
  name: "leftNav",
  data() {
    return {
      drawer: false,
      links:[
          {icon:'mdi-test-tube', text:'Test',route:'/test'},
          {icon:'mdi-post-outline', text:'essay',route:'/essay'},
          {icon:'mdi-information', text:'About',route:'/about'},
      ]
    };
  },
  mounted: function() {
    bus.$on("isDrawLeftNav", data => {
      this.drawer = data;
    });
  }
};
</script>