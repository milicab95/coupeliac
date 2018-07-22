<template>
  <v-app>
    <v-content>
           <v-jumbotron
    dark
    :gradient="gradient"
    :src="img"
    height="100%"
  >
      <router-view/>
           </v-jumbotron>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      img: require('@/assets/image.jpg'),
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>
<style>
.v-jumbotron 
    .v-jumbotron__image{
      left: 20%;
      position: fixed;
  }
</style>