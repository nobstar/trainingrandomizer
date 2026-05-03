<script setup lang="ts">
import { computed } from 'vue'
import { ExerciseEquipment } from '../ts/excercises'

const props = defineProps<{
  numExercises: number
  setsPerExercise: number
  equipment: ExerciseEquipment[]
}>()

const emit = defineEmits<{
  generate: []
  'update:numExercises': [value: number]
  'update:setsPerExercise': [value: number]
  'update:equipment': [value: ExerciseEquipment[]]
}>()

function toggleEquipment(eq: ExerciseEquipment) {
  const newEquipment = [...props.equipment]
  const idx = newEquipment.indexOf(eq)
  if (idx >= 0) {
    newEquipment.splice(idx, 1)
  } else {
    newEquipment.push(eq)
  }
  emit('update:equipment', newEquipment)
}

function isSelected(eq: ExerciseEquipment): boolean {
  return props.equipment.includes(eq)
}

const hasEquipment = computed(() => props.equipment.length > 0)
</script>

<template>
  <div class="input">
    <form class="controls-grid" @submit.prevent="emit('generate')">
      <label class="control">
        <span class="control-label">Number of exercises</span>
        <input
          type="number"
          :value="props.numExercises"
          @input="emit('update:numExercises', Number(($event.target as HTMLInputElement).value))"
          min="1"
          class="control-input"
        />
      </label>

      <label class="control">
        <span class="control-label">Sets per exercise</span>
        <input
          type="number"
          :value="props.setsPerExercise"
          @input="emit('update:setsPerExercise', Number(($event.target as HTMLInputElement).value))"
          min="1"
          class="control-input"
        />
      </label>

      <div class="control equipment-section">
        <span class="control-label">Equipment</span>
        <div class="equipment-checkboxes">
          <label class="checkbox-label">
            <input
              type="checkbox"
              :checked="isSelected(ExerciseEquipment.BODYWEIGHT)"
              @change="toggleEquipment(ExerciseEquipment.BODYWEIGHT)"
            />
            Bodyweight
          </label>
          <label class="checkbox-label">
            <input
              type="checkbox"
              :checked="isSelected(ExerciseEquipment.DUMBBELL)"
              @change="toggleEquipment(ExerciseEquipment.DUMBBELL)"
            />
            Dumbbell
          </label>
          <label class="checkbox-label">
            <input
              type="checkbox"
              :checked="isSelected(ExerciseEquipment.BARBELL)"
              @change="toggleEquipment(ExerciseEquipment.BARBELL)"
            />
            Barbell
          </label>
        </div>
      </div>

      <div class="actions">
        <button type="submit" class="primary-button" :disabled="!hasEquipment">Generate</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  align-items: end;
}
.control {
  display: flex;
  flex-direction: column;
}
.control-label {
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #333;
}
.control-input {
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid #d0d0d0;
  background: #fff;
}
.actions {
  display: flex;
  align-items: center;
}
.equipment-section {
  grid-column: 1 / -1;
}
.equipment-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 1rem;
}
.checkbox-label input {
  width: 24px;
  height: 24px;
  accent-color: #2f80ed;
}
</style>
