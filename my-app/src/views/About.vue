<template>
  <div>
    <heading>关于我</heading>
    <section class="white">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline']" class="mb-4">
              你好，我是Phree Soda！
              <br />我想要做很多有趣且有价值的产品。
            </h2>

            <p
              class="mb-5"
            >依托于互联网技术，我们可以将许多不同风格的艺术手法结合在一起，制作富媒体的产品。从视觉小说，音乐MV，到最近的VR游戏，互动电影，所有表达方式都在以令人惊叹的方式融合！而我是一个对技术广泛涉猎的游戏艺术家，希望能在这个有趣而富有挑战的时代，做富有价值和激情的工作！</p>
            <p
              class="mb-5"
            >如果你有成熟的企划，需要一名对程序，设计，艺术有着整全考量的专家，请与我联系；<br />如果你需要游戏开发的建议和帮助，也可与我联系，非常乐意提供一些无偿的咨询；<br />如果你需要开发辅助设计的工具，需要提供设计和开发，也请与我联系，在开发插件方面，我亦有多年经验。</p>

            <v-btn outlined color="primary" class="px-5" large @click="popContactCard">与我联系</v-btn>
          </v-col>
          <v-col cols="12" md="5" offset-md="1">
            <v-card class = "mt-10">
              <v-img src="../assets/about.jpg" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col v-for="(highlight, i) in highlights" :key="i" cols="12" md="4">
            <v-card class="mx-n3" color="transparent" flat>
              <v-card-title v-text="highlight.article" />
              <v-card-text>{{highlight.content}}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="white">
      <v-container>
        <v-row>
          <v-col v-for="([icon, number, name], i) in experiences" :key="i" cols="6" md="3">
            <div class="text-center">
              <v-icon size="64" class="mb-3" v-text="icon" />
              <div class="display-2 font-weight-bold mb-2" v-text="number" />
              <div class="text-uppercase" v-text="name" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  components: {
       Heading: () => import('@/components/Heading'),
  },
  methods:{
    popContactCard() {
      this.bus.$emit("isContactCardView", true);
    }
  },
  data: () => ({
    highlights: [
      {article:"游戏开发",content:"从事游戏开发行业，担任过数值策划，产品经理，主策划等职位。有多个独立游戏，APP游戏，微信小游戏上线产品。既对有艺术价值的独立企划感兴趣，也乐于参与有创新意识的商业项目。"},
      {article:"UI/UX设计",content:"学习UI/UX设计多年，并有多个小程序答题，电商类产品实践。对Material Design设计规范进行过系统的学习，崇尚简单，易用，美观的用户界面设计原则。"},
      {article:"Web应用全栈开发",content:"能熟练使用前端框架Vue，熟悉后端框架Express，Springboot，能使用MySQL，MongoDB等主流数据库，搭建过新闻网站，博客网站，能进行完整的全栈开发。"},
      {article:"视频及音乐制作",content:"学习小提琴及声乐十年以上，热爱音乐创作。视频是老本行，从小就喜欢拍东西，做微电影，大学专业也是这方面。喜欢做些有趣的调音鬼畜，也会对有意思的技术做教程视频。在b站上最高有视频达到40多万的播放量，未来也会做更多通过JS实现AE特效自动化的视频。"},
      {article:"剧本分镜写作",content:"热爱电影艺术以及电影化风格的游戏，在大学期间创作过数个微电影剧本，获得过省级微电影以及3D建模动画奖项。工作中也作为剧本策划创作过游戏剧本，目前也还在学习写作中。"},
      {article:"像素绘画",content:"学习绘画四年以上，除了普通的素描写生，对在游戏中经常使用的像素风格绘画情有独钟，游戏作品里的绘画均由自己完成。这也使我能更好的理解游戏开发团队中美术工作者们的问题和挑战，能更好的与绘画艺术家们交流。"}
    ],
    experiences: [
      ["mdi-gamepad", "100", "Game"],
      ["mdi-view-quilt", "90", "UI/UX"],
      ["mdi-dev-to", "95", "Coding"],
      ["mdi-account-music", "95", "Art"]
    ]
  })
};
</script>