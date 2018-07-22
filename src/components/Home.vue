<template>
    <v-container fill-height>
      <v-layout row align-center>
        <v-flex md6></v-flex>
        <v-flex md6 text-xs-right>
          <div class="display-3">Put do zdrave kože </div>
          <span class="subheading">Odgovotite na naredna pitanja</span>
          <v-btn outline @click="start()">Počnite</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
/* eslint-disable */
export default {
  name: "Home",
  methods: {
    start() {
      this.$router.push("stepper");
    }
  }
};
</script>
