<template>
  <div>
    <heading>个人时间线</heading>
    <v-row class="my-5 mx-10">
      <v-btn small text color="grey" @click="changeToLineView()">
        <v-icon left small>mdi-timeline-clock</v-icon>
        <span class="caption text-lowercase">线状布局</span>
      </v-btn>
      <v-btn small text color="grey" @click="changeToCardView()">
        <v-icon left small>mdi-card-text</v-icon>
        <span class="caption text-lowercase">卡片布局</span>
      </v-btn>
    </v-row>
    <v-timeline v-if="isLineView" align-top :dense="$vuetify.breakpoint.smAndDown" class="mx-10">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="getColor(item.type)"
        :icon="getIcon(item.type)"
        fill-dot
      >
        <template v-slot:opposite>
          <span :class="`headline font-weight-bold black--text`" v-text="item.time"></span>
        </template>
        <v-card :color="getColor(item.type)" dark>
          <v-card-title class="title">{{item.title}}</v-card-title>
          <v-card-text class="white text--primary">
            <p>{{item.content}}</p>
            <v-chip
              :color="getColor(item.type)"
              :class="`${item.type} white--text caption mr-2`"
            >{{item.type}}</v-chip>
            <v-chip :class="`${item.status} white--text caption mr-2`">{{item.status}}</v-chip>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-container v-if="!isLineView" class="my-5">
      <v-skeleton-loader v-if="loading" class="mx-auto my-5" height="200" type="card"></v-skeleton-loader>
      <v-skeleton-loader v-if="loading" class="mx-auto my-5" height="200" type="card"></v-skeleton-loader>
      <v-skeleton-loader v-if="loading" class="mx-auto my-5" height="200" type="card"></v-skeleton-loader>
      <v-card class="mx-10 lighten-4" v-for="item in items" :key="item.title">
        <v-layout v-if="!loading" wrap :class="`pa-3 event ${item.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">标题</div>
            <div>{{item.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">类型</div>
            <div>{{item.type}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">时间</div>
            <div>{{item.time}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="mr-8" align="right">
              <v-chip small :class="`${item.status} white--text caption my-2`">{{item.status}}</v-chip>
            </div>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <div class="caption grey--text">详情</div>
            <div>{{item.content}}</div>
          </v-flex>
        </v-layout>
        <v-divider class="mb-2"></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {
    Heading: () => import("@/components/Heading")
  },
  data: () => ({
    loading: true,
    isLineView: true,
    tags: [
      { name: "美术", icon: "mdi-brush", color: "yellow darken-4" },
      { name: "写作", icon: "mdi-typewriter", color: "blue-grey darken-1" },
      { name: "游戏", icon: "mdi-gamepad-square", color: "pink accent-4" },
      { name: "开发", icon: "mdi-hammer-wrench", color: "teal darken-3" },
      { name: "作曲", icon: "mdi-music", color: "red accent-3" },
      { name: "剪辑", icon: "mdi-video", color: "blue accent-3" }
    ],
    items: [
      // {
      //   title: "三十天推书挑战！",
      //   type: "写作",
      //   time: "2020-3-4",
      //   status: "进行中",
      //   color: "green lighten-1",
      //   icon: "mdi-airballoon",
      //   content:
      //     '每天一个新的推荐书的主题，比如"一本书名中带有季节的书"，"一本与成长有关的书"，是只有对阅读量有自信的人才能玩的挑战诶！'
      // },
      // {
      //   title: "新感觉俄罗斯方块游戏",
      //   type: "游戏",
      //   time: "2020-2-12",
      //   status: "放置中",
      //   color: "purple darken-1",
      //   icon: "mdi-book-variant",
      //   content:
      //     "新感觉是一种现代艺术流派，强调通过全方位的感官描写，重新理解事物。以新感觉的手法为前提，我想对俄罗斯方块这一经典的游戏类型做一款从视听觉以及心理感受层面有所突破的创新性作品。"
      // },
      // {
      //   title: "创作一幅新的绘画作品",
      //   type: "美术",
      //   time: "2020-1-26",
      //   status: "已完成",
      //   color: "red lighten-2",
      //   icon: "mdi-star",
      //   content:
      //     "电线杆是一种城市里随处可见的事物，在凌晨两点无人的大街上，电线杆又在想什么呢?围绕这样的想法，正在创作一幅绘画作品。"
      // }
    ]
  }),
  methods: {
    changeToLineView() {
      this.isLineView = true;
    },
    changeToCardView() {
      this.isLineView = false;
    },
    getColor(tagname) {
      let color = this.tags[this.tags.length - 1].color;
      for (let i = 0; i < this.tags.length; i++) {
        if (tagname == this.tags[i].name) {
          color = this.tags[i].color;
          return color;
        }
      }
      return color;
    },
    getIcon(tagname) {
      let icon = this.tags[this.tags.length - 1].icon;
      for (let i = 0; i < this.tags.length; i++) {
        if (tagname == this.tags[i].name) {
          icon = this.tags[i].icon;
          return icon;
        }
      }
      return icon;
    },
    getItemsData() {
      this.axios
        .get(this.baseUrl + "/searchTimeLine")
        .then(response => {
          console.log(response);
          this.items = response.data;
          for (let i = 0; i < this.items.length; i++) {
            this.items[i].time = this.items[i].time.slice(0, 10);
          }
          this.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.getItemsData();
  }
};
</script>
<style scoped>
.event.complete {
  border-left: 4px solid #3cd1c2;
}
.event.ongoing {
  border-left: 4px solid orange;
}
.event.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>