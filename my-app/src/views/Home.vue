<template>
  <div class="home">
    <banner/>
    <Project/>
    <goals/>
    <Footer/>
  </div>
</template>



<script>
import Banner from "../components/Banner.vue";
import Project from "../components/Projects.vue";
import Goals from "../components/Goals.vue";
import Footer from "../components/Footer.vue";
export default {
  components:{
    Banner,
    Project,
    Goals,
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

