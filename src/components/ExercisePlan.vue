<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { ExercisePlan } from '../ts/excercises'
import { exerciseRepository } from '../ts/excerciselist'
import ExerciseDisplay from './ExerciseDisplay.vue'

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
      <ExerciseDisplay
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :description="item.description"
        :sets="item.sets"
      />
    </div>
    <slot />
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
</style>