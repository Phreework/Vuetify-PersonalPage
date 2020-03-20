<template>
  <nav>
    <v-app-bar absolute color="primary" dark scroll-target="#scrolling-techniques-8">
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="white--text">苏打站台</span>
        <span class="white--text ma-2 font-weight-light">SodaStation</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey" class="ma-2">
        <span class="white--text">退出</span>
        <v-icon right class="white--text">mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer temporary app
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :right="right"
        :src="bg"
        dark>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-test-tube", text: "Test", route: "/test" },
        { icon: "mdi-post-outline", text: "essay", route: "/essay" },
        { icon: "mdi-information", text: "About", route: "/about" }
      ],
      color: 'primary',
        right: false,
        miniVariant: true,
        expandOnHover: true,
        background: false,
    };
  }
};
</script>