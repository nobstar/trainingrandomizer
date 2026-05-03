const LAST_EXERCISES_KEY = 'training_last_exercises'
const EXERCISE_HISTORY_KEY = 'training_exercise_history'

export function getLastExercises(): string[] {
  try {
    const stored = localStorage.getItem(LAST_EXERCISES_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveLastExercises(ids: string[]) {
  localStorage.setItem(LAST_EXERCISES_KEY, JSON.stringify(ids))
}

type ExerciseHistory = Record<string, number>

export function getExerciseHistory(): ExerciseHistory {
  try {
    const stored = localStorage.getItem(EXERCISE_HISTORY_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export function recordExerciseSets(exerciseId: string, sets: number) {
  const history = getExerciseHistory()
  history[exerciseId] = (history[exerciseId] || 0) + sets
  localStorage.setItem(EXERCISE_HISTORY_KEY, JSON.stringify(history))
}
