<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>SodaStation</span>
        <span class="mx-2 grey--text text--darken-2">苏打站台</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-for="media in myMedias" :key="media.id" @click.stop="toDeail(media)" :data="media">
        <v-avatar size="30">
          <img :src="media.src" />
        </v-avatar>
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
      <v-layout column align-center>
        <v-flex class="mt-5 text-center">
          <v-avatar size="80">
            <img src="../assets/images.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">PhreeSoda个人站</p>
        </v-flex>
        <v-flex class="mt-3 mb-3">
          <v-btn slot="activator">
            <v-icon small class="mr-2">mdi-email</v-icon>
            <span>获取联系方式</span>
          </v-btn>
        </v-flex>
      </v-layout>

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
      myMedias:[
        {src:require("../assets/bilibili.png"),url:"https://space.bilibili.com/15047813?from=search&amp%3Bseid=11193698444244187734"},
        {src:require("../assets/email.png"),url:"http://www.baidu.com"},
        {src:require("../assets/twitter.png"),url:"https://twitter.com/Phree6"},
        {src:require("../assets/ins.png"),url:"https://www.instagram.com/phreework/"},

      ],
      color: "primary",
      right: false,
      miniVariant: false,
      expandOnHover: false,
      background: false
    };
  },
  methods: {
    toDeail(data) {
      window.open(data.url);
    }
  }
};
</script>