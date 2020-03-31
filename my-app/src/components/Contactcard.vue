<template>
  <div class="contact">
    <v-container>
      <v-snackbar
        v-model="isOpen"
        :color="success"
        :multi-line="true"
        :timeout="0"
        :top="true"
        :vertical="true"
      >
        <span>Email:phreework@gmail.com</span>
        <v-btn dark text @click="isOpen = false">Close</v-btn>
      </v-snackbar>
      <v-overlay :value="isOpen">
        <v-btn icon @click="isOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-overlay>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Contactcards",
  mounted: function() {
    this.bus.$on("isContactCardView", data => {
      this.isOpen = data;
    });
  },
  data() {
    return {
      isOpen:false
    };
  }
};
</script>
