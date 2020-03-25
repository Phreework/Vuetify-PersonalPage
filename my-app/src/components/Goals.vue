<template>
  <v-container id="goals" class="py-5" tag="section">
    <heading>Our Goals</heading>
    <v-row>
      <v-col v-for="(feature, i) in features" :key="i" class="d-flex" cols="12" sm="6" md="4">
        <v-card outlined max-width="100%">
          <v-img :src="feature.src" />
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
          title: 'Award-winning architecture',
          text: 'Every achievement begins with a vision. It is built on a foundation of creative concepts and dreams to become something bigger and better. At AlphaConstruction we build with those who follow a vision, not a path.',
          src: '/static/feature1.png'
        },
        {
          title: 'Relentless pursuit of your vision',
          text: 'Our commitment to excellence and continous improvement, to building lasting relationships with our clients, and to the team members who create your vision, are the guiding principles that assure successful outcomes on every project we build.',
          src: '/static/feature2.png'
        },
        {
          title: 'Your vision - Our mission',
          text: 'To build an everlasting environment of trust with our clients and team members that will foster customer loyalty by delivering superior service and quality projects.',
          src: '/static/feature3.png'
        }
      ]
    })
  }
</script>