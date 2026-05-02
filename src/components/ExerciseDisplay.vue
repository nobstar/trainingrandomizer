<script setup lang="ts">
defineProps<{
  name: string
  description: string[]
  sets: number
}>()
</script>

<template>
  <div class="exercise">
    <div class="exercise-header">
      <div class="exercise-name">{{ name }}</div>
      <div class="exercise-sets-count">{{ sets }} sets</div>
    </div>
    <ol class="exercise-desc">
      <li v-for="(step, stepIdx) in description" :key="stepIdx">{{ step }}</li>
    </ol>
  </div>
</template>

<style scoped>
.exercise {
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: #ffffff;
  color: #111;
}
.exercise-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.exercise-name {
  font-weight: bold;
  color: #111;
}
.exercise-sets-count {
  color: #666;
  font-size: 0.9rem;
}
.exercise-desc {
  color: #333;
  font-size: 0.95rem;
  margin-bottom: 8px;
  padding-left: 1.2rem;
  margin-left: 0;
}
.exercise-desc li {
  margin-bottom: 4px;
}
</style>
