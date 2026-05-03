<script setup lang="ts">
const props = defineProps<{
  numExercises: number
  setsPerExercise: number
}>()

const emit = defineEmits<{
  generate: []
  'update:numExercises': [value: number]
  'update:setsPerExercise': [value: number]
}>()
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

      <div class="actions">
        <button type="submit" class="primary-button">Generate</button>
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
</style>
