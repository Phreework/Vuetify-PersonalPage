<template>
  <div class="home">
    <banner/>
    <Project/>
    <goals/>
    <testimonials/>
    <Footer/>
  </div>
</template>



<script>
import Banner from "../components/Banner.vue";
import Project from "../components/Projects.vue";
import Goals from "../components/Goals.vue";
import Testimonials from "../components/Testimonials.vue";
import Footer from "../components/Footer.vue";
export default {
  components:{
    Banner,
    Project,
    Goals,
    Testimonials,
    Footer
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

