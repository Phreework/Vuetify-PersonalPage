<template>
  <v-container id="goals" class="py-5" tag="section">
    <heading>个人理念</heading>
    <v-row>
      <v-col v-for="(feature, i) in features" :key="i" class="d-flex" cols="12" sm="6" md="4">
        <v-card outlined max-width="100%">
          <v-img :src="feature.src" max-height="200"/>
          <v-card-title class="align-start" style="min-height: 88px;" v-text="feature.title" />
          <v-card-text class="pb-5 pt-3" v-text="feature.text" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    components: {
      Heading: () => import('@/components/Heading'),
    },
    data: () => ({
      features: [
        {
          title: '独立精神',
          text: '独立精神是独立游戏，独立音乐，独立电影，独立出版物等一切有态度艺术作品的共有理念。落实到今天音像制品产业的现实问题，作品可以盈利，但不应为盈利做内容妥协；可以有经验借鉴，但不应以复制为目标；可以面向大众，但不可抛弃创作者自我的表达。',
          src: require('../assets/goals/goals1.jpg')
        },
        {
          title: '整全思维',
          text: '整全是一种指向多视角思考的理念。互联网技术引起了一场盛况空前的创作革命，我们将颜料滴入音箱，将合成器接入显示屏，一切艺术手法，技术方法都在融合交汇，然后产生全新的产品。而对于独立制作人，同时掌握艺术和技术，就有了全面控制自己作品的能力，我们需要自己做主。',
          src: require('../assets/goals/goals2.jpg')
        },
        {
          title: '诗与思',
          text: '今时有太多的拼贴和复制，唯有倾注更多诗意，才有可能创作出富有新意的内容；今日有太多的谬理和佯见，唯有不停下思考，方有可能产出拥有灵魂的作品。',
          src: require('../assets/goals/goals3.jpg')
        }
      ]
    })
  }
</script>