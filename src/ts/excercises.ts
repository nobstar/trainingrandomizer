export enum ExerciseMuscleGroup {
  NONE,
  CHEST,
  LEGS,
  ARMS,
  CORE,
  BACK,
  SHOULDERS,
}

export enum ExerciseEquipment {
  BODYWEIGHT = 'BODYWEIGHT',
  DUMBBELL = 'DUMBBELL',
  BARBELL = 'BARBELL',
}

export class Exercise {
  id = ''
  name = ''
  muscleGroup = ExerciseMuscleGroup.NONE
  equipment: ExerciseEquipment = ExerciseEquipment.BODYWEIGHT
  description: string[] = []
}

class ExcerciseInPlan {
  excerciseId = ''
  sets = 0
}

export class ExerciseRepository {
  private exercises: Exercise[] = []

  findById(id: string): Exercise {
    const res = this.exercises.find((ex) => ex.id === id)
    if (!res) {
      throw new Error('Exercise not found: ' + id)
    }
    return res
  }

  add(exercise: Exercise) {
    this.exercises.push(exercise)
  }

  getRandomByMuscleGroup(
    muscleGroup: ExerciseMuscleGroup,
    hardFilter: (ex: Exercise) => boolean,
    softFilter: (ex: Exercise) => boolean,
  ): Exercise | null {
    const candidates = this.exercises.filter((ex) => ex.muscleGroup === muscleGroup)
    let pool = candidates.length > 0 ? candidates : this.exercises

    pool = pool.filter(hardFilter)

    if (pool.length === 0) {
      return null
    }

    const softPool = pool.filter(softFilter)
    if (softPool.length > 0) {
      pool = softPool
    }

    const idx = Math.floor(Math.random() * pool.length)
    return pool[idx]!
  }
}

export class ExercisePlan {
  id = ''
  excercises: ExcerciseInPlan[] = []

  add(exerciseId: string, sets: number) {
    this.excercises.push({
      excerciseId: exerciseId,
      sets: sets,
    })
  }
}

export enum ExercisePlanStatus {
  PENDING,
  SKIPPED,
  DONE,
}

class ExcerciseExecutionInstance {
  excerciseId = ''
  status = ExercisePlanStatus.PENDING
}

export class ExercisePlanInstance {
  exercisePlan: ExercisePlan
  date: Date
  repetitions: ExcerciseExecutionInstance[]
  currentRepetitionIndex = 0

  constructor(exercisePlan: ExercisePlan) {
    this.exercisePlan = exercisePlan
    this.date = new Date()
    this.repetitions = []
    exercisePlan.excercises.forEach((ex) => {
      for (let i = 0; i < ex.sets; i++) {
        this.repetitions.push({
          excerciseId: ex.excerciseId,
          status: ExercisePlanStatus.PENDING,
        })
      }
    })
  }

  currentExcercise(): ExcerciseExecutionInstance {
    return this.repetitions[this.currentRepetitionIndex]!
  }

  /** returns true if the exercise plan is completed */
  done(status: ExercisePlanStatus): boolean {
    this.currentExcercise().status = status
    this.currentRepetitionIndex++
    if (this.currentRepetitionIndex >= this.repetitions.length) {
      this.currentRepetitionIndex = 0
      return true
    }
    return false
  }
}
