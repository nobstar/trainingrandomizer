import { useExerciseRepository } from './useExerciseRepo'
import {
  ExercisePlan,
  ExercisePlanInstance,
  type ExerciseMuscleGroup,
  type ExerciseEquipment,
} from './excercises'

export type GenerationSpec = {
  sets: number
  excercises: number
  exerciseMuscleGroups: ExerciseMuscleGroup[]
  equipment?: ExerciseEquipment[]
  excludeIds?: string[]
}

export function generateExercisePlan(spec: GenerationSpec): ExercisePlan {
  const { repo } = useExerciseRepository()
  const plan = new ExercisePlan()
  const muscleGroupsShuffled = spec.exerciseMuscleGroups
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const selectedIds = new Set<string>()
  const equipmentSet = new Set(spec.equipment ?? [])
  const excludeIds = new Set(spec.excludeIds ?? [])

  const hardFilter = (e: { id: string; equipment: ExerciseEquipment }) => {
    if (selectedIds.has(e.id)) {
      return false
    }
    if (equipmentSet.size > 0 && !equipmentSet.has(e.equipment)) {
      return false
    }
    return true
  }

  const softFilter = (e: { id: string }) => !excludeIds.has(e.id)

  while (plan.excercises.length < spec.excercises) {
    let addedThisRound = 0
    for (const muscleGroup of muscleGroupsShuffled) {
      const ex = repo.getRandomByMuscleGroup(muscleGroup, hardFilter, softFilter)
      if (!ex) {
        continue
      }
      plan.add(ex.id, spec.sets)
      selectedIds.add(ex.id)
      addedThisRound++
      if (plan.excercises.length >= spec.excercises) {
        break
      }
    }
    if (addedThisRound === 0) {
      break
    }
  }

  return plan
}

export function generateExercisePlanInstance(spec: GenerationSpec): ExercisePlanInstance {
  const plan = generateExercisePlan(spec)
  const instance = new ExercisePlanInstance(plan)
  return instance
}
