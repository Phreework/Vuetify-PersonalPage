<template>
  <div class="timeline">
    <h1 class="subtitle-1 grey--text">Timeline</h1>
    <v-container class="my-5">
      <v-skeleton-loader v-if="loading" class="mx-auto my-5" height="200" type="card"></v-skeleton-loader>
      <v-skeleton-loader v-if="loading" class="mx-auto my-5" height="200" type="card"></v-skeleton-loader>
      <v-skeleton-loader v-if="loading" class="mx-auto my-5" height="200" type="card"></v-skeleton-loader>
      <v-card class="mx-10 lighten-4" v-for="event in events" :key="event.title">
        <v-layout v-if="!loading" wrap :class="`pa-3 event ${event.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">标题</div>
            <div>{{event.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">类型</div>
            <div>{{event.type}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">时间</div>
            <div>{{event.time}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="mr-8" align="right">
              <v-chip small :class="`${event.status} white--text caption my-2`">{{event.status}}</v-chip>
            </div>
          </v-flex>
          <v-flex xs12 sm12 md12>
            <div class="caption grey--text">详情</div>
            <div>{{event.content}}</div>
          </v-flex>
        </v-layout>
<vboilerplate></vboilerplate>
        <v-divider class="mb-2"></v-divider>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Timeline",

  data() {
    return {
      events: null,
      loading: true
    };
  },
  methods: {
    getEventsData() {
      var url = "http://localhost:3000";

      axios
        .get(url + "/searchTimeLine")
        .then(response => {
          console.log(response);
          console.log("events", this.events);
          this.events = response.data;
          this.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.getEventsData();
  }
};
</script>

<style>
.event.complete {
  border-left: 4px solid #3cd1c2;
}
.event.ongoing {
  border-left: 4px solid orange;
}
.event.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>