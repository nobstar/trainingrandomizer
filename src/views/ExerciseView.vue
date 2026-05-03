<script setup lang="ts">
import RandomTraining from '@/components/RandomTraining.vue'
</script>

<template>
  <div class="exercise-view">
    <div class="top-nav">
      <router-link to="/" class="secondary-button">Back to Start Screen</router-link>
    </div>
    <RandomTraining />
  </div>
</template>

<style scoped>
.exercise-view {
  padding: 1rem;
  background: #fff;
  color: #111;
  min-height: 100vh;
}
.top-nav {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}
.top-nav a {
  width: 100%;
  max-width: 30em;
}
</style>
