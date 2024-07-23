<script setup>

</script>

<template>
  <div id="nav">
    <router-link to="/test">Page de test</router-link>
    <router-link to="/documentation">Page de documentation</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="/panama">Panama</router-link>
  </div>
</template>

<style scoped>
#nav .vue-school-active-link{
  color: red;
  border-bottom: 2px solid red;
}
</style>