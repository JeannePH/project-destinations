<script setup>
import {ref} from 'vue';
import sourceData from '../data.json'
import TestProps from "../components/TestProps.vue";

const destinations = ref(sourceData.destinations)

const subTitle = "Lorem ipsum dolor sit amet";
</script>

<template>
  <TestProps :sub-title="subTitle"/>
  <div class="home">
    <h1>Page de test</h1>
  </div>

  <div class="destinations">
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