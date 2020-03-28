<template>
  <section id="projects" class="pt-5 mb-n5">
    <heading>作品展示</heading>

    <v-slide-group v-model="model" show-arrows center-active mandatory>
      <v-slide-item v-for="(project, i) in projects" :key="i" v-slot:default="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-3"
          :img="project.img"
          height="300"
          width="300"
          flat
          @click="toggle"
        >
          <v-fade-transition>
            <v-overlay v-if="active" color="primary" absolute />
          </v-fade-transition>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" color="grey lighten-4" tile>
        <v-scroll-y-transition mode="out-in">
          <v-container :key="model" py-5 mx-auto>
            <v-row align="center" justify="center" class="fill-height">
              <v-col cols="12" md="6" class="text-left mb-4">
                <h3 class="headline mb-3">{{projects[model].article}}</h3>
                <p
                  class="mb-0"
                >{{projects[model].content}}</p>
              </v-col>
              <v-col cols="12" md="6">
                <v-card elevation="24">
                  <v-img :src="projects[model].img" height="300" />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-scroll-y-transition>
      </v-sheet>
    </v-expand-transition>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: "Projects",
    meta: [
      {
        name: "description",
        content: "Customized vue-cli templates for Vue and Vuetify"
      }
    ]
  },

  components: {
    Heading: () => import("@/components/Heading")
  },

  data: () => ({
    model: 0,
    projects: [
      {img:require("../assets/projects/project1.jpg"),article:"插件-Unity.UICollection",content:"基于Unity-UGUI的全能动画工具类，设计组件逻辑抽象类，把不同动画行为规范为行为接口，做面向接口的功能实现。使工具类中不同的动画行为拥有统一的增删逻辑，并能使用创建，完成，销毁等异步事件。非常适合用来实现复杂的UI表现效果。"},
      {img:require("../assets/projects/project2.png"),article:"教程-FxDesigner 教程",content:"Pixel Fx Designer是非常热门的像素特效制作工具。感兴趣请在b站搜索“phreesoda”，来查看基于该工具制作像素闪电，火球，能量波等常见效果的超详细讲解视频！"},
      {img:require("../assets/projects/project3.png"),article:"游戏-露营咖啡莫妮卡",content:"这是一个含有多种玩法的独立游戏，有视觉小说的叙事，有经营游戏的玩法，也有互动电影的交互，还有RPG的选择系统。游戏以经营为玩法核心，故事的两个主人公，在一家既经营户外用品，又贩制咖啡的奇特商店里打工。并且会随着剧情发展，做旅行计划。经营上的成功与否会对游戏进程和剧情造成影响。"},
      {img:require("../assets/projects/project4.png"),article:"开源-独立游戏开发手册",content:"独立游戏开发相关知识开源百科大全。迄今以运营三年，贡献了大量独立游戏开发资料。"},
      {img:require("../assets/projects/project5.png"),article:"游戏-新感觉俄罗斯方块",content:"新感觉是一种现代艺术流派，强调通过全方位的感官描写，重新理解事物。以新感觉的手法为前提，对俄罗斯方块这一经典的游戏类型做一款从视听觉以及心理感受层面有所突破的创新性作品。"},
      {img:require("../assets/projects/project6.jpg"),article:"工具-After Effects自动化工具",content:"用After Effects制作特效时，经常会碰到一些重复劳动。这套工具可以帮助你把这些重复性的打帧，调数值工作处理为自动化的流程，并提供了一种从分好图层的psd文件直接制作特效的实用模板可供调用。"},
    ],
  })
};
</script>

<style lang="sass">
#projects
  .v-slide-group__content
    justify-content: center
</style>
