<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { generateExercisePlanInstance } from '../ts/generator'
import { ExerciseMuscleGroup, ExercisePlanStatus } from '../ts/excercises'
import { getLastExercises, saveLastExercises, recordExerciseSets } from '../ts/lastExercises'
import ExercisePlan from './ExercisePlan.vue'
import ExerciseDisplay from './ExerciseDisplay.vue'
import RandomTrainingInputs from './RandomTrainingInputs.vue'
import { exerciseRepository } from '../ts/excerciselist'
import type { ExercisePlanInstance } from '../ts/excercises'

const router = useRouter()

const numExercises = ref<number>(8)
const setsPerExercise = ref<number>(2)

// Use all muscle groups except NONE by default
const defaultGroups = [
  ExerciseMuscleGroup.CHEST,
  ExerciseMuscleGroup.LEGS,
  ExerciseMuscleGroup.ARMS,
  ExerciseMuscleGroup.CORE,
  ExerciseMuscleGroup.BACK,
  ExerciseMuscleGroup.SHOULDERS,
]

const plan = ref<ExercisePlanInstance | null>(null)
const completed = ref(false)
const started = ref(false)

function onGenerate() {
  const lastExercises = getLastExercises()
  const spec = {
    sets: setsPerExercise.value,
    excercises: numExercises.value,
    exerciseMuscleGroups: defaultGroups,
    excludeIds: lastExercises,
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
  if (status === ExercisePlanStatus.DONE) {
    const currentRep = plan.value.repetitions[plan.value.currentRepetitionIndex - 1]
    if (currentRep) {
      recordExerciseSets(currentRep.excerciseId, 1)
    }
  }
  if (finished) {
    completed.value = true
  }
}

function closePlan() {
  plan.value = null
  completed.value = false
}

function finishAndSave() {
  if (plan.value) {
    const uniqueIds = [...new Set(plan.value.exercisePlan.excercises.map((e) => e.excerciseId))]
    saveLastExercises(uniqueIds)
  }
  closePlan()
  router.push('/')
}

function statusLabel(status: ExercisePlanStatus) {
  switch (status) {
    case ExercisePlanStatus.DONE:
      return 'Done'
    case ExercisePlanStatus.SKIPPED:
      return 'Skipped'
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

const totalSets = computed(() => plan.value?.repetitions.length ?? 0)
const completedSets = computed(
  () =>
    plan.value?.repetitions.filter(
      (r) => r.status !== ExercisePlanStatus.PENDING,
    ).length ?? 0,
)
</script>

<template>
  <RandomTrainingInputs
    v-if="!plan"
    v-model:num-exercises="numExercises"
    v-model:sets-per-exercise="setsPerExercise"
    @generate="onGenerate"
  />

  <div v-if="plan && !completed" class="plan">
    <div v-if="started" class="progress-header">
      <h3>{{ progressLabel }}</h3>
      <progress :value="completedSets" :max="totalSets"></progress>
    </div>
    <!-- show full plan summary before starting -->
    <ExercisePlan v-if="plan && !started" :plan="plan.exercisePlan">
      <div class="regenerate-wrapper">
        <button class="primary-button-red" @click="onGenerate">Regenerate</button>
      </div>
    </ExercisePlan>
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
            <div class="set-actions" :class="{ empty: !(s.isActive && s.status === ExercisePlanStatus.PENDING) }">
              <template v-if="s.isActive && s.status === ExercisePlanStatus.PENDING">
                <button class="primary-button-done" @click="markCurrent(ExercisePlanStatus.DONE)">
                  Done
                </button>
                <button class="primary-button-red" @click="markCurrent(ExercisePlanStatus.SKIPPED)">
                  Skipped
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="plan && !started" style="margin-top: 8px">
      <button class="primary-button" @click="startPlan">Start workout</button>
    </div>
  </div>

  <div v-if="plan && completed" class="plan">
    <h3>Plan complete</h3>
    <ExercisePlan :plan="plan.exercisePlan" />
    <button class="primary-button-green" @click="finishAndSave">Finish & Save</button>
  </div>
</template>

<style scoped>
.plan {
  margin-top: 1rem;
}
.regenerate-wrapper {
  margin-top: 8px;
}
.completion-actions {
  margin-top: 8px;
  display: flex;
  gap: 8px;
}
.progress-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.progress-header h3 {
  white-space: nowrap;
  margin: 0;
}
.progress-header progress {
  flex: 1;
  height: 16px;
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
  margin-top: 6px;
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
.set-actions.empty {
  display: none;
}
</style>
