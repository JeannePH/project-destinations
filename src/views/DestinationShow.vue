<script>
import sourceData from '../data.json'

export default {
  computed: {
    destinationId() {
      const id = parseInt(this.$route.params.id)
      console.log("destinationId:", id);
      return id;
    },
    destination() {
      const dest = sourceData.destinations.find(d => d.id === this.destinationId);
      console.log("Source Data:", sourceData);
      return dest;
    }
  }
}
;


/*
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import sourceData from '../data.json'

const route = useRoute();

const destinationId = computed(() => { return parseInt(this.$route.params.id)});

const destination = computed(() => {
  return sourceData.destinations.find(destination => destination.id === this.$destinationId.value)
})
*/

</script>

<template>
  <div v-if="destination">

    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="'/images/' + destination.image" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>
  </div>
  <div v-else>
    <h1>Hello Destination {{ $route.params.id }}</h1>
    <p>La destination n'existe pas dans les données.</p>

  </div>

</template>

<style scoped>

</style>