<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { ExercisePlan } from '../ts/excercises'
import { exerciseRepository } from '../ts/excerciselist'

const props = defineProps({
  plan: { type: Object as PropType<ExercisePlan>, required: true },
})

const items = computed(() => {
  return props.plan.excercises.map((e) => {
    const ex = exerciseRepository.findById(e.excerciseId)
    return {
      id: ex.id,
      name: ex.name,
      description: ex.description,
      sets: e.sets,
    }
  })
})
</script>

<template>
  <div class="plan">
    <h3>Exercise Plan</h3>
    <div class="exercise-list">
      <div class="exercise" v-for="(item, idx) in items" :key="item.id">
        <div class="exercise-header">
          <div class="exercise-name">{{ item.name }}</div>
          <div class="exercise-sets-count">{{ item.sets }} sets</div>
        </div>
        <div class="exercise-desc">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plan {
  margin-top: 1rem;
}
.exercise-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
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
  font-weight: 700;
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
}
</style>
