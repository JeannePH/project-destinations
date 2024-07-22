<script setup>
import {ref} from 'vue';
import sourceData from '../data.json'

const destinations = ref(sourceData.destinations)
</script>

<template>
  <div>
    <h1>Toutes les destinations</h1>
  </div>

  <div class="container">
    <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
    >
      <h2>{{ destination.name }}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name"/>
    </router-link>
  </div>

  <div class="container">
    <div>
      <ul>
        <li v-for="destination in destinations" :key="destination.id">
          {{ destination.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>


</style>