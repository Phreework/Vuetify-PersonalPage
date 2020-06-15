<template>
  <div class="home">
    <banner/>
    <Project/>
    <goals/>

    
  </div>
</template>



<script>
import Banner from "../components/Banner.vue";
import Project from "../components/Projects.vue";
import Goals from "../components/Goals.vue";

export default {
  components:{
    Banner,
    Project,
    Goals
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

