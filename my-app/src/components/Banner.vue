<template>
  <v-img
    :height="$vuetify.breakpoint.xsOnly ? '35vh' : '80vh'"
    :gradient="$vuetify.breakpoint.smAndDown ?'to top, rgba(5, 5, 5, .80), rgba(5, 5, 5, .80)':'to top, rgba(255, 255, 255, .10), rgba(255, 255, 255, .0)'"
    src="../assets/banner.png"
  >
    <v-container
      fill-height
      fluid
      :px-12="$vuetify.breakpoint.mdAndUp"
    >
      <v-row align-center>
        <v-slide-x-transition appear>
          <v-col>
            <h1
              class="text-uppercase font-weight-bold mb-4 white--text"
              :class="[$vuetify.breakpoint.xsOnly ? 'display-1' : 'display-3']"
            >
              Hi, I'm PhreeSoda
            </h1>

            <div
              class="mb-4  white--text"
              :class="[$vuetify.breakpoint.xsOnly ? 'headline' : 'display-2 font-weight-light']"
            >
              游戏|音乐|绘画|写作
            </div>

            <v-responsive
              max-width="600"
              class="mb-5  white--text"
            >
              我对音乐，绘画，剧本写作抱有浓厚的兴趣，主要从事游戏与APP设计，热爱开源活动！欢迎查看我的文章和作品。
            </v-responsive>

            <v-btn
              large
              class="px-5"
              color="primary"
              @click="popContactCard"
            >
              与我合作
            </v-btn>
          </v-col>
        </v-slide-x-transition>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
  export default {
    computed: {
      breadcrumbs () {
        const home = { text: 'Home', to: '/' }

        switch (this.namespace) {
          case 'About': return [home, { text: 'About Me' }]
          case 'Contact': return [home, { text: 'Contact Me' }]
          case 'Work': return [home, { text: 'My Work' }]
          default: return []
        }
      },
      namespace () {
        return this.$route.name
      },
      title () {
        switch (this.namespace) {
          case 'About': return 'About Me'
          case 'Contact': return 'Contact Me'
          case 'Work': return 'My Work'
          default: return ''
        }
      }
    },
    methods:{
      popContactCard(){
        this.bus.$emit("isContactCardView",true);
      }
    }
  }
</script>