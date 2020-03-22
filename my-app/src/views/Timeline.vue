<template>
  <div class="timeline">
    <h1 class="subtitle-1 grey--text">Timeline</h1>
    <v-container class="my-5">
      <v-card flat class="mx-10 lighten-4" v-for="event in events" :key="event.title">
        <v-layout wrap :class="`pa-3 event ${event.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">标题</div>
            <div>{{event.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">类型</div>
            <div>{{event.type}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">时间</div>
            <div>{{event.time}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="mr-8" align="right">
              <v-chip small :class="`${event.status} white--text caption my-2`">{{event.status}}</v-chip>
            </div>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <div class="caption grey--text">详情</div>
            <div>{{event.content}}</div>
          </v-flex>
        </v-layout>
        <v-divider class="mb-2"></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Timeline",
  data() {
    return {
      events: [
        {
          title: "创作一幅新的绘画作品",
          type: "美术",
          time: "2020-1-26",
          status: "complete",
          content:
            "电线杆是一种城市里随处可见的事物，在凌晨两点无人的大街上，电线杆又在想什么呢?围绕这样的想法，正在创作一幅绘画作品。"
        },
        {
          title: "新感觉俄罗斯方块游戏",
          type: "游戏",
          time: "2020-2-12",
          status: "overdue",
          content:
            "新感觉是一种现代艺术流派，强调通过全方位的感官描写，重新理解事物。以新感觉的手法为前提，我想对俄罗斯方块这一经典的游戏类型做一款从视听觉以及心理感受层面有所突破的创新性作品。"
        },
        {
          title: "三十天推书挑战！",
          type: "写作",
          time: "2020-3-4",
          status: "ongoing",
          content:
            "每天一个新的推荐书的主题，比如\"一本书名中带有季节的书\"，\"一本与成长有关的书\"，是只有对阅读量有自信的人才能玩的挑战诶！"
        }
      ]
    };
  }
};
</script>

<style>
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