
<template>
  <div class="blog">
    <heading>我的文章</heading>
    <v-container id="goals" class="py-5" tag="section">
      <v-row class="my-5">
        <v-btn small text color="grey" @click="changeToNewView()">
          <v-icon left small>mdi-timeline-clock</v-icon>
          <span class="caption text-lowercase">最新文章</span>
        </v-btn>
        <v-btn small text color="grey" @click="changeToAllView()">
          <v-icon left small>mdi-card-text</v-icon>
          <span class="caption text-lowercase">全部文章</span>
        </v-btn>
      </v-row>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" class="d-flex" cols="12" sm="6" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 8 : 2"
              class="mx-auto"
              width="365"
              height="390"
              @click="navToArticlePage(feature.name)"
            >
              <v-img :src="feature.url"  max-height="200" :aspect-ratio="365/350"/>
              <v-btn v-for="(tag, j) in feature.tagList" :key="j" text color="red" @click.stop>
                <span>{{tag}}</span>
              </v-btn>
              <v-divider class="mx-4"></v-divider>
              <v-card-title
                class="align-start font-weight-bold"
                style="min-height: 44px;"
                v-text="feature.name"
              />
              <v-card-subtitle class="pb-5 pt-3" v-text="feature.summary" />
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

export default {

  data() {
    return {
      features: [
        // {
        //   title: "最近在看的一本书——《雪国》",
        //   text:
        //     "川端康成是我很喜欢的日本文豪，川端康成的写作风格属于新感觉派，主张以人的感官代入去描写现实世界，通俗的讲，就是给现实世界加了一层滤镜～无论对景物的视觉描写，还是对环境的听觉描写，都是为了让读者能够切实的代入角色的心境，读起来更触动人心。",
        //   src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        // },
        // {
        //   title: "书名里有颜色的一本书——《蓝色骇客》",
        //   text:
        //     "推理小说是通俗小说中非常受欢迎的一个门类，我本人也在有一段时间里狂热且系统的读过推理小说，总计可能不下百本。而要论我读过的推理小说中，情节最连贯紧张，让人不得不一口气读完的，便是这本杰夫里·迪弗的《蓝色骇客》。",
        //   src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        // },
        // {
        //   title: "书名里有数字的一本书——《第一哲学沉思集》",
        //   text: "提到笛卡尔，大部分人都会想到笛卡尔坐标系，知道他是一位伟大的数学家。其实，笛卡尔同样是一位野心勃勃的哲学家，而《第一哲学沉思录》是其最重要的作品。 笛卡尔在科学领域的造诣强而有力，也因此塑造了他相当强势而骄傲的性格。",
        //   src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        // },
        // {
        //   title: "旅行记录——常州",
        //   text:
        //     "Every achievement begins with a vision. It is built on a foundation of creative concepts and dreams to become something bigger and better. At AlphaConstruction we build with those who follow a vision, not a path.",
        //   src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        // },
        // {
        //   title: "Relentless pursuit of your vision",
        //   text:
        //     "Our commitment to excellence and continous improvement, to building lasting relationships with our clients, and to the team members who create your vision, are the guiding principles that assure successful outcomes on every project we build.",
        //   src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        // },
        // {
        //   title: "Your vision - Our mission",
        //   text:
        //     "To build an everlasting environment of trust with our clients and team members that will foster customer loyalty by delivering superior service and quality projects.",
        //   src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        // }
      ]
    };
  },

  methods: {
    changeToAllView(){
      if (this.features)
        this.features.reverse();
    },
    changeToNewView(){
      if (this.features)
        this.features.reverse();
    },
    navToArticlePage(name) {
      this.$router.push({
        path: "/article", //或者路径跳转path: '/addCreditCards',
        query: { name }
      });
    },
    getEssayListData() {
      this.axios
        .get(this.baseUrl + "/getEssayList")
        .then(response => {
          this.features = response.data;
          this.features.reverse();
          //console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.getEssayListData();
  }
};
</script>

<style scoped>
.v-container {
  margin-left: 100px;
  margin-right: 100px;
}
</style>