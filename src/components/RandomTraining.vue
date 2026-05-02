<script setup lang="ts">
import { ref, computed } from 'vue'
import { generateExercisePlanInstance } from '../ts/generator'
import { ExerciseMuscleGroup, ExercisePlanStatus } from '../ts/excercises'
import ExercisePlan from './ExercisePlan.vue'
import ExerciseDisplay from './ExerciseDisplay.vue'
import { exerciseRepository } from '../ts/excerciselist'
import type { ExercisePlanInstance } from '../ts/excercises'

const numExercises = ref<number>(8)
const setsPerExercise = ref<number>(2)

// Use all muscle groups except NONE by default
const defaultGroups = [
  ExerciseMuscleGroup.CHEST,
  ExerciseMuscleGroup.LEGS,
  ExerciseMuscleGroup.ARMS,
  ExerciseMuscleGroup.STOMACH,
  ExerciseMuscleGroup.BACK,
  ExerciseMuscleGroup.SHOULDERS,
]

const plan = ref<ExercisePlanInstance | null>(null)
const completed = ref(false)
const started = ref(false)

function onGenerate() {
  const spec = {
    sets: setsPerExercise.value,
    excercises: numExercises.value,
    exerciseMuscleGroups: defaultGroups,
  }
  plan.value = generateExercisePlanInstance(spec)
  started.value = false
  completed.value = false
}

function startPlan() {
  started.value = true
}

function markCurrent(status: ExercisePlanStatus) {
  if (!plan.value) return
  const finished = plan.value.done(status)
  if (finished) {
    completed.value = true
  }
}

function closePlan() {
  plan.value = null
  completed.value = false
}

function statusLabel(status: ExercisePlanStatus) {
  switch (status) {
    case ExercisePlanStatus.DONE:
      return 'Done'
    case ExercisePlanStatus.SKIPPED:
      return 'Skipped'
    case ExercisePlanStatus.PARTIAL:
      return 'Partial'
    default:
      return 'Pending'
  }
}

const currentExercise = computed(() => {
  if (!plan.value) return null
  const curIdx = plan.value.currentRepetitionIndex
  const curRep = plan.value.repetitions[curIdx]
  if (!curRep) return null
  const ex = exerciseRepository.findById(curRep.excerciseId)

  // gather repetitions for this exercise in order
  const reps = plan.value.repetitions
    .map((r, idx) => ({ repetitionIndex: idx, excerciseId: r.excerciseId, status: r.status }))
    .filter((r) => r.excerciseId === curRep.excerciseId)
    .map((r, i) => ({
      status: r.status as ExercisePlanStatus,
      idx: r.repetitionIndex,
      setNumber: i + 1,
      isActive: r.repetitionIndex === curIdx,
    }))

  return {
    id: ex.id,
    name: ex.name,
    description: ex.description,
    sets: reps,
  }
})

const progressLabel = computed(() => {
  if (!plan.value || !currentExercise.value) return ''
  const order = plan.value.exercisePlan.excercises.map((e) => e.excerciseId)
  const uniqueIds: string[] = []
  for (const id of order) {
    if (!uniqueIds.includes(id)) uniqueIds.push(id)
  }
  const idx = uniqueIds.indexOf(currentExercise.value.id)
  return `Exercise ${idx + 1} / ${uniqueIds.length}`
})
</script>

<template>
  <div class="input" v-if="!plan">
    <form class="controls-grid" @submit.prevent="onGenerate">
      <label class="control">
        <span class="control-label">Number of exercises</span>
        <input type="number" v-model.number="numExercises" min="1" class="control-input" />
      </label>

      <label class="control">
        <span class="control-label">Sets per exercise</span>
        <input type="number" v-model.number="setsPerExercise" min="1" class="control-input" />
      </label>

      <div class="actions">
        <button type="submit" class="btn-exercise btn-default-color">Generate</button>
      </div>
    </form>
  </div>

  <div v-if="plan && !completed" class="plan">
    <h3 v-if="started">{{ progressLabel }}</h3>
    <h3 v-else>Plan ready</h3>
    <!-- show full plan summary before starting -->
    <ExercisePlan v-if="plan && !started" :plan="plan.exercisePlan" />
    <div class="exercise-list">
      <div v-if="started && currentExercise" :key="currentExercise.id">
        <ExerciseDisplay
          :name="currentExercise.name"
          :description="currentExercise.description"
          :sets="currentExercise.sets.length"
        />

        <div class="set-list">
          <div
            class="set-row"
            v-for="(s, sidx) in currentExercise.sets"
            :key="sidx"
            :class="{ disabled: !s.isActive }"
          >
            <div class="set-label">
              Set {{ s.setNumber }}
              <span class="status-inline">{{ statusLabel(s.status) }}</span>
            </div>
            <div class="set-actions">
              <template v-if="s.isActive && s.status === ExercisePlanStatus.PENDING">
                <button class="btn-exercise btn-done" @click="markCurrent(ExercisePlanStatus.DONE)">
                  Done
                </button>
                <button
                  class="btn-exercise btn-skip"
                  @click="markCurrent(ExercisePlanStatus.SKIPPED)"
                >
                  Skipped
                </button>
                <button
                  class="btn-exercise btn-partial"
                  @click="markCurrent(ExercisePlanStatus.PARTIAL)"
                >
                  Partial
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="plan && !started" style="margin-top: 8px">
      <button class="btn-exercise btn-default-color" @click="startPlan">Start</button>
    </div>
  </div>

  <div v-if="plan && completed" class="plan">
    <h3>Plan complete</h3>
    <ExercisePlan :plan="plan.exercisePlan" />
    <div style="margin-top: 8px">
      <button class="btn-exercise btn-default-color" @click="closePlan">Close</button>
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
.set-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.set-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  background: #fafafa;
}
.set-row.disabled {
  opacity: 0.55;
  pointer-events: none;
}
.set-label {
  font-weight: 600;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.status-inline {
  font-weight: 400;
  color: #444;
  font-size: 0.85rem;
}
.set-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Ensure modifier buttons use dark text when their backgrounds are light */
.btn-done,
.btn-skip,
.btn-partial {
  color: #111;
}

/* Input grid styles */
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

.btn-default-color {
  background: #2f80ed;
}

.btn-exercise {
  padding: 12px 18px;
  font-size: 1rem;
  border-radius: 10px;
  background: #2f80ed;
  color: #fff;
  border: none;
  cursor: pointer;
}

.btn-done {
  background: #8ee0a3;
}
.btn-skip {
  background: #f0c070;
}
.btn-partial {
  background: #92b7ff;
}
</style>
