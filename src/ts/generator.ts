import { exerciseRepository } from './excerciselist'
import { ExercisePlan, ExercisePlanInstance, type ExerciseMuscleGroup } from './excercises'

export type GenerationSpec = {
  sets: number
  excercises: number
  exerciseMuscleGroups: ExerciseMuscleGroup[]
  excludeIds?: string[]
}

export function generateExercisePlan(spec: GenerationSpec): ExercisePlan {
  const repo = exerciseRepository
  const plan = new ExercisePlan()
  const muscleGroupsShuffled = spec.exerciseMuscleGroups
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const selectedIds = new Set<string>()
  const excludeIds = new Set(spec.excludeIds ?? [])

  // Try to fill the plan with unique exercises. If we cannot find any new
  // exercise during a full pass over the muscle groups, fail because there
  // aren't enough unique exercises to satisfy the request.
  while (plan.excercises.length < spec.excercises) {
    for (const muscleGroup of muscleGroupsShuffled) {
      const ex = repo.getRandomByMuscleGroup(
        muscleGroup,
        (e) => !selectedIds.has(e.id) && !excludeIds.has(e.id),
      )
      plan.add(ex.id, spec.sets)
      selectedIds.add(ex.id)
      if (plan.excercises.length >= spec.excercises) {
        break
      }
    }
  }

  return plan
}

export function generateExercisePlanInstance(spec: GenerationSpec): ExercisePlanInstance {
  const plan = generateExercisePlan(spec)
  const instance = new ExercisePlanInstance(plan)
  return instance
}
