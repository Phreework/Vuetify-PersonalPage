<template>
  <v-container id="testimonials" class="py-5" tag="section">
    <heading>Testimonials</heading>

    <v-row>
      <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="12" md="6">
        <testimonial :testimonial="testimonial" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    components: {
      Heading: () => import('@/components/Heading'),
      testimonial:()=> import('@/components/Testimonial')
    },

    data: () => ({
      testimonials: [
        {
          blurb: 'Leverage agile frameworks to provide a robust synopsis for high level over Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          person: 'Nancy Swanson',
          title: 'President, Springfield Country Club'
        },
        {
          blurb: 'Leverage agile frameworks to provide a robust synopsis for high level over Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          person: 'Jason Schraiber',
          title: 'Mayor, Boca Raton'
        }
      ]
    })
  }
</script>