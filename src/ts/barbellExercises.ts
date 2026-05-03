import { ExerciseMuscleGroup, ExerciseEquipment, ExerciseRepository } from './excercises'

export function addBarbellExercises(repo: ExerciseRepository) {
  repo.add({
    id: 'barbell-squat',
    name: 'Barbell Squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Step on the rack so that the barbell rests across the back of your shoulders',
      'Raise the barbell and get away from the rack',
      'Keep your back straight, torso upright, head up, and feet flat',
      'Bend your knees and lower yourself until your thighs are parallel to the ground',
      'Raise yourself using only the thigh power',
    ],
  })

  repo.add({
    id: 'barbell-front-squat',
    name: 'Barbell Front Squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Position the bar on your front shoulders with elbows high',
      'Keep your elbows tucked and core engaged',
      'Lower into a squat position, keeping your torso upright',
      'Drive through your heels to return to standing',
    ],
  })

  repo.add({
    id: 'barbell-hip-thrust',
    name: 'Barbell Hip Thrust',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Sit with your upper back against a bench and a barbell across your hips',
      'Drive through your heels and squeeze your glutes to lift your hips',
      'Pause at the top with your body in a straight line from shoulders to knees',
      'Lower back down with control',
    ],
  })

  repo.add({
    id: 'barbell-lunges',
    name: 'Barbell Lunges',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Hold the barbell on your upper back',
      'Step forward into a lunge position, lowering your back knee toward the ground',
      'Keep your front knee over your ankle',
      'Push back to the starting position and alternate legs',
    ],
  })

  repo.add({
    id: 'standing-barbell-calf-raise',
    name: 'Standing Barbell Calf Raise',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Stand with the barbell on your upper back',
      'Rise up onto your toes as high as possible',
      'Hold at the top for a moment',
      'Lower back down with control',
    ],
  })

  repo.add({
    id: 'bent-over-barbell-rows',
    name: 'Bent Over Barbell Rows',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Hinge at the hips with a slight knee bend, holding the barbell with an overhand grip',
      'Keep your back flat and pull the barbell to your lower chest',
      'Squeeze your shoulder blades together at the top',
      'Lower the barbell with control',
    ],
  })

  repo.add({
    id: 'deadlift',
    name: 'Deadlift',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Stand with feet hip-width apart, barbell over your mid-foot',
      'Hinge and grip the bar outside your knees',
      'Keep your back flat, chest up, and drive through your heels',
      'Stand up straight, then lower the bar back down with control',
    ],
  })

  repo.add({
    id: 'barbell-good-morning',
    name: 'Barbell Good Morning',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Position the barbell on your upper back like a squat',
      'With a slight knee bend, hinge forward from your hips',
      'Keep your back flat until you feel a stretch in your hamstrings',
      'Return to standing by extending your hips',
    ],
  })

  repo.add({
    id: 'landmine-row',
    name: 'Landmine Row',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Set up a barbell in a landmine attachment or corner',
      'Grab the barbell with one hand and hinge forward',
      'Pull the barbell to your hip, leading with your elbow',
      'Lower with control and repeat',
    ],
  })

  repo.add({
    id: 'barbell-bench-press',
    name: 'Barbell Bench Press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Lie on a bench with your feet flat on the floor',
      'Hold the barbell above your chest with arms extended',
      'Lower the barbell to your chest, keeping your elbows at 45 degrees',
      'Press the barbell back up to the starting position',
    ],
  })

  repo.add({
    id: 'incline-barbell-bench-press',
    name: 'Incline Barbell Bench Press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Set the bench to a 30-45 degree incline',
      'Lie back and grip the barbell with hands slightly wider than shoulder width',
      'Lower the barbell to your upper chest',
      'Press back up to the starting position',
    ],
  })

  repo.add({
    id: 'barbell-decline-press',
    name: 'Barbell Decline Press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Secure your feet on a decline bench',
      'Hold the barbell with arms extended above your feet',
      'Lower the barbell to your lower chest',
      'Press back up with control',
    ],
  })

  repo.add({
    id: 'close-grip-barbell-bench-press',
    name: 'Close-Grip Barbell Bench Press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Lie on the bench and grip the barbell with hands shoulder-width apart or closer',
      'Lower the barbell to your chest, keeping elbows close to your body',
      'Press back up, focusing on tricep engagement',
    ],
  })

  repo.add({
    id: 'overhead-barbell-triceps-extension',
    name: 'Overhead Barbell Triceps Extension',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Hold a barbell with both hands overhead, arms extended',
      'Lower the barbell behind your head by bending your elbows',
      'Keep your upper arms stationary',
      'Extend your arms back to the starting position',
    ],
  })

  repo.add({
    id: 'lying-barbell-triceps-extension',
    name: 'Lying Barbell Triceps Extension',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Lie on a bench holding a barbell with arms extended over your chest',
      'Lower the barbell toward your forehead by bending your elbows',
      'Keep your upper arms stationary',
      'Extend your arms back to the starting position',
    ],
  })

  repo.add({
    id: 'barbell-curl',
    name: 'Barbell Curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Stand holding a barbell with arms extended, palms facing forward',
      'Keep your elbows close to your sides',
      'Curl the barbell up toward your shoulders',
      'Lower with control',
    ],
  })

  repo.add({
    id: 'barbell-preacher-curl',
    name: 'Barbell Preacher Curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Set up at a preacher bench with arms over the pad',
      'Hold the barbell with arms extended',
      'Curl the barbell up toward your shoulders',
      'Lower with control, fully extending arms',
    ],
  })

  repo.add({
    id: 'barbell-reverse-curl',
    name: 'Barbell Reverse Curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Stand holding a barbell with arms extended, palms facing down',
      'Curl the barbell up while supinating your wrists',
      'Lower with control',
    ],
  })

  repo.add({
    id: 'barbell-overhead-press',
    name: 'Barbell Overhead Press',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Stand with feet shoulder-width apart, barbell at shoulder height',
      'Press the barbell overhead until arms are fully extended',
      'Lower the barbell back to shoulder height with control',
    ],
  })

  repo.add({
    id: 'barbell-upright-row',
    name: 'Barbell Upright Row',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Stand holding a barbell with arms extended in front of you',
      'Pull the barbell up toward your chin, leading with your elbows',
      'Keep your elbows higher than your hands',
      'Lower with control',
    ],
  })

  repo.add({
    id: 'barbell-shrug',
    name: 'Barbell Shrug',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Stand holding a barbell with arms at your sides',
      'Raise your shoulders straight up toward your ears',
      'Hold at the top for a moment',
      'Lower with control',
    ],
  })

  repo.add({
    id: 'barbell-rollout',
    name: 'Barbell Rollout',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Kneel on the floor holding a barbell with both hands',
      'Roll the barbell forward, extending your body',
      'Keep your core tight to prevent sagging',
      'Roll back to the starting position',
    ],
  })

  repo.add({
    id: 'landmine-twist',
    name: 'Landmine Twist',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Set up a barbell in a landmine attachment',
      'Hold the end of the barbell with both hands at chest height',
      'Rotate your torso to one side, then the other',
      'Keep your core engaged throughout',
    ],
  })

  repo.add({
    id: 'barbell-push-press',
    name: 'Barbell Push Press',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.BARBELL,
    description: [
      'Hold the barbell at shoulder height with a slight squat',
      'Dip slightly at the knees and drive upward',
      'Press the barbell overhead as you rise',
      'Lower the barbell back to shoulders with control',
    ],
  })
}
