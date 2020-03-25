<template>
<div>
  <heading>Timeline</heading>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mx-10">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <template v-slot:opposite>
        <span :class="`headline font-weight-bold black--text`" v-text="item.time"></span>
      </template>
      <v-card :color="item.color" dark>
        <v-card-title class="title">{{item.title}}</v-card-title>
        <v-card-text class="white text--primary">
          <p>{{item.content}}</p>
          <v-chip :color="item.color" :class="`${item.type} white--text caption mr-2`">{{item.type}}</v-chip>
          <v-chip :class="`${item.status} white--text caption mr-2`">{{item.status}}</v-chip>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>
<script>
export default {
  components:{
     Heading: () => import('@/components/Heading'),
  },
  data: () => ({
    items: [
      {
        title: "三十天推书挑战！",
        type: "写作",
        time: "2020-3-4",
        status: "进行中",
        color: "green lighten-1",
        icon: "mdi-airballoon",
        content:
          '每天一个新的推荐书的主题，比如"一本书名中带有季节的书"，"一本与成长有关的书"，是只有对阅读量有自信的人才能玩的挑战诶！'
      },
      {
        title: "新感觉俄罗斯方块游戏",
        type: "游戏",
        time: "2020-2-12",
        status: "放置中",
        color: "purple darken-1",
        icon: "mdi-book-variant",
        content:
          "新感觉是一种现代艺术流派，强调通过全方位的感官描写，重新理解事物。以新感觉的手法为前提，我想对俄罗斯方块这一经典的游戏类型做一款从视听觉以及心理感受层面有所突破的创新性作品。"
      },
      {
        title: "创作一幅新的绘画作品",
        type: "美术",
        time: "2020-1-26",
        status: "已完成",
        color: "red lighten-2",
        icon: "mdi-star",
        content:
          "电线杆是一种城市里随处可见的事物，在凌晨两点无人的大街上，电线杆又在想什么呢?围绕这样的想法，正在创作一幅绘画作品。"
      }
    ]
  })
};
</script>