<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>苏打站台</span>
        <span>SodaStation</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey" class="ma-2">
        <span>退出</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      dark
    >
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
        { icon: "mdi-home", text: "Home", route: "/home" },
        { icon: "mdi-post-outline", text: "Blog", route: "/blog" },
        { icon: "mdi-projector", text: "Gallery", route: "/gallery" },
        { icon: "mdi-test-tube", text: "Test", route: "/test" },
        { icon: "mdi-timeline-text", text: "Timeline", route: "/timeline" },
        { icon: "mdi-information", text: "About", route: "/about" }
      ],
      color: "primary",
      right: false,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  }
};
</script>