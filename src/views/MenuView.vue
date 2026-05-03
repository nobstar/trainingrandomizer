<script setup lang="ts"></script>

<template>
  <div class="menu">
    <h1>Training Randomizer</h1>
    <nav>
      <router-link to="/exercise" class="primary-button">Start Workout</router-link>
      <router-link to="/stats" class="primary-button">Statistics</router-link>
    </nav>
  </div>
</template>

<style scoped>
.menu {
  padding: 1rem;
  background: #fff;
  color: #111;
  min-height: 100vh;
}
h1 {
  margin-bottom: 2rem;
  text-align: center;
  color: #111;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
nav a {
  display: block;
}
</style>
