import { ref } from 'vue'
import { ExerciseEquipment } from './excercises'

const LAST_EQUIPMENT_KEY = 'training_last_equipment'

function loadEquipment(): ExerciseEquipment[] {
  try {
    const stored = localStorage.getItem(LAST_EQUIPMENT_KEY)
    return stored ? JSON.parse(stored) : [ExerciseEquipment.DUMBBELL]
  } catch {
    return [ExerciseEquipment.DUMBBELL]
  }
}

function saveEquipment(equipment: ExerciseEquipment[]) {
  localStorage.setItem(LAST_EQUIPMENT_KEY, JSON.stringify(equipment))
}

const lastEquipment = ref<ExerciseEquipment[]>(loadEquipment())

export function useLastEquipment() {
  return {
    lastEquipment,
    saveEquipment,
  }
}
