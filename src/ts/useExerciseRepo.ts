import { ref } from 'vue'
import { ExerciseRepository } from './excercises'
import { addDumbbellExercises } from './dumbbellExercises'
import { addBarbellExercises } from './barbellExercises'
import { addBodyweightExercises } from './bodyweightExercises'

const repo = ref<ExerciseRepository | null>(null)

export function useExerciseRepository() {
  if (!repo.value) {
    repo.value = new ExerciseRepository()
    addDumbbellExercises(repo.value as ExerciseRepository)
    addBarbellExercises(repo.value as ExerciseRepository)
    addBodyweightExercises(repo.value as ExerciseRepository)
  }
  return {
    repo: repo.value,
  }
}
