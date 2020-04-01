<template>
  <!-- <div class="contact">
    <v-container>
      <v-snackbar
        v-model="isOpen"
        :color="success"
        :multi-line="true"
        :timeout="0"
        :top="true"
        :vertical="true"
      >
        <span>Email:phreework@gmail.com</span>
        <v-btn dark text @click="isOpen = false">Close</v-btn>
      </v-snackbar>
      <v-overlay :value="isOpen">
        <v-btn icon @click="isOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-overlay>
    </v-container>
  </div>-->
  <div class="text-center">
    <v-container>
      <v-snackbar
        v-model="isShowInfo"
        :color="''"
        :multi-line="true"
        :timeout="0"
        :top="true"
        :vertical="true"
      >
        <span>{{tipInfo}}</span>
        <v-btn dark text @click="isShowInfo = false">Close</v-btn>
      </v-snackbar>
      <v-overlay :value="isShowInfo"></v-overlay>
    </v-container>
    <v-bottom-sheet v-model="isOpen">
      <v-list>
        <v-subheader>联系方式</v-subheader>
        <v-list-item
          class="copy"
          v-for="(tile,i) in tiles"
          :key="tile.title"
          :data-clipboard-text="tile.url"
          @click="copyClick(i)"
        >
          <v-list-item-avatar>
            <v-avatar size="32px">
              <img :src="tile.img" :alt="tile.title" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
          <v-list-item-action>
            <v-btn class="copy mr-2" text :data-clipboard-text="tile.url" @click="copyClick(i)">
              <v-icon small class="mr-2">mdi-email</v-icon>
              <span class="grey--text lighten-1">复制</span>
            </v-btn>
          </v-list-item-action>
          <v-list-item-action>
            <v-btn
              class="copy mr-2"
              text
              :data-clipboard-text="tile.url"
              @click.stop="jumpClick(i)"
            >
              <v-icon small class="mr-2">mdi-email</v-icon>
              <span class="grey--text lighten-1">跳转</span>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>
<script>
import ClipBoard from "clipboard";
export default {
  name: "Contactcards",
  mounted: function() {
    this.bus.$on("isContactCardView", data => {
      this.isOpen = data;
    });
  },
  methods: {
    copyClick(index) {
      this.isOpen = false;
      let clip = new ClipBoard(".copy");
      clip.on("success", () => {
        this.showInfo("复制" + this.tiles[index].title + "地址成功！");
        // 释放内存
        clip.destroy();
      });
      clip.on("error", () => {
        // 不支持复制
        this.showInfo(
          "浏览器不支持自动复制，可在此复制：\n" + this.tiles[index].title
        );
        // 释放内存
        clip.destroy();
      });
    },
    jumpClick(index) {
      this.isOpen = false;
      let title = this.tiles[index].title;
      let url = this.tiles[index].url;
      if (title == "Google Email") {
        this.showInfo(
          "该联系方式不可跳转，可复制邮箱地址：" +
            this.tiles[index].url
        );
      } else {
        window.open(url);
      }
    },
    showInfo(info) {
      this.tipInfo = info;
      this.isShowInfo = true;
    }
  },
  data() {
    return {
      isOpen: false,
      isShowInfo: false,
      tipInfo: "",
      tiles: [
        {
          img: require("../assets/contacts/email.png"),
          title: "Google Email",
          url: "phreework@gmail.com"
        },
        {
          img: require("../assets/contacts/bilibili.png"),
          title: "Bilibili",
          url:
            "https://space.bilibili.com/15047813?from=search&amp%3Bseid=11193698444244187734"
        },
        {
          img: require("../assets/contacts/twitter.png"),
          title: "Twitter",
          url: "https://twitter.com/Phree6"
        },
        {
          img: require("../assets/contacts/ins.png"),
          title: "Instagram",
          url: "https://www.instagram.com/phreework/"
        }
      ]
    };
  }
};
</script>
