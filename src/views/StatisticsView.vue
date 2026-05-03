<script setup lang="ts">
import { computed } from 'vue'
import { getExerciseHistory, getLastExercises } from '../ts/lastExercises'
import { exerciseRepository } from '../ts/excerciselist'
import { ExerciseMuscleGroup } from '../ts/excercises'

const history = getExerciseHistory()
const lastWorkout = getLastExercises()

const stats = computed(() => {
  return Object.entries(history)
    .map(([id, sets]) => {
      const ex = exerciseRepository.findById(id)
      return {
        id,
        name: ex.name,
        sets,
        muscleGroup: ex.muscleGroup,
      }
    })
    .sort((a, b) => {
      if (b.sets !== a.sets) {
        return b.sets - a.sets
      }
      return a.name.localeCompare(b.name)
    })
})

const lastWorkoutNames = computed(() => {
  return lastWorkout.map((id) => {
    const ex = exerciseRepository.findById(id)
    return ex.name
  })
})

const muscleGroupStats = computed(() => {
  const groupTotals: Record<number, number> = {}
  for (const stat of stats.value) {
    groupTotals[stat.muscleGroup] = (groupTotals[stat.muscleGroup] || 0) + stat.sets
  }
  return Object.entries(groupTotals)
    .map(([group, sets]) => ({
      group: Number(group) as ExerciseMuscleGroup,
      sets,
    }))
    .sort((a, b) => b.sets - a.sets)
})

function muscleGroupName(group: ExerciseMuscleGroup): string {
  switch (group) {
    case ExerciseMuscleGroup.CHEST:
      return 'Chest'
    case ExerciseMuscleGroup.LEGS:
      return 'Legs'
    case ExerciseMuscleGroup.ARMS:
      return 'Arms'
    case ExerciseMuscleGroup.CORE:
      return 'Core'
    case ExerciseMuscleGroup.BACK:
      return 'Back'
    case ExerciseMuscleGroup.SHOULDERS:
      return 'Shoulders'
    default:
      return 'Other'
  }
}
</script>

<template>
  <div class="stats">
    <div class="top-nav">
      <router-link to="/" class="secondary-button">Back to Start Screen</router-link>
    </div>
    <h1>Statistics</h1>

    <div v-if="stats.length === 0 && lastWorkout.length === 0" class="empty">
      No workouts completed yet. Start a workout to track your progress!
    </div>

    <div v-else>
      <details v-if="stats.length > 0" class="section" open>
        <summary>All Time</summary>
        <div class="stats-list">
          <div v-for="stat in stats" :key="stat.id" class="stat-row">
            <span class="exercise-name">{{ stat.name }}</span>
            <span class="sets-count">{{ stat.sets }} sets</span>
          </div>
        </div>
      </details>

      <details v-if="muscleGroupStats.length > 0" class="section">
        <summary>By Body Region</summary>
        <div class="stats-list">
          <div v-for="mg in muscleGroupStats" :key="mg.group" class="stat-row">
            <span class="exercise-name">{{ muscleGroupName(mg.group) }}</span>
            <span class="sets-count">{{ mg.sets }} sets</span>
          </div>
        </div>
      </details>

      <details v-if="lastWorkout.length > 0" class="section">
        <summary>Last Workout</summary>
        <ul class="last-workout-list">
          <li v-for="name in lastWorkoutNames" :key="name">{{ name }}</li>
        </ul>
      </details>
    </div>
  </div>
</template>

<style scoped>
.stats {
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
h1 {
  margin-bottom: 1rem;
  color: #111;
}
.section {
  margin-bottom: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}
.section summary {
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  background: #f5f5f5;
  cursor: pointer;
  color: #111;
}
.section[open] summary {
  border-bottom: 1px solid #e0e0e0;
}
.last-workout-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.last-workout-list li {
  padding: 0.5rem 1rem;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}
.last-workout-list li:last-child {
  border-bottom: none;
}
.empty {
  color: #666;
  text-align: center;
  padding: 2rem;
}
.stats-list {
  display: flex;
  flex-direction: column;
}
.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f0f0f0;
}
.stat-row:last-child {
  border-bottom: none;
}
.exercise-name {
  font-weight: 500;
  color: #111;
  flex: 1;
}
.sets-count {
  color: #666;
  font-size: 0.95rem;
  min-width: 80px;
  text-align: right;
}
</style>
