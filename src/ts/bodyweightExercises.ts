import { ExerciseMuscleGroup, ExerciseEquipment, ExerciseRepository } from './excercises'

export function addBodyweightExercises(repo: ExerciseRepository) {
  repo.add({
    id: 'air-squat',
    name: 'Air Squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Stand with feet shoulder-width apart. Lower your hips down and back like you are sitting in a chair.',
      'Go as low as you can without losing the natural curve of your lower back.',
      'Drive through the feet to return to standing. Think about pressing the floor away from you as you stand up. Keep your weight in your heels.',
      'Repeat the exercise. Make sure your chest stays tall and your core stays tight.',
    ],
  })

  repo.add({
    id: 'push-up',
    name: 'Push-Up',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Start in a plank position, your shoulders over your wrists. Create a straight line from your shoulders to heels, and engage your core.',
      'Bend your elbows back 45 degrees and slowly lower toward the ground.',
      'Press yourself back up while maintaining a strong plank form, then repeat.',
      'Make sure your elbows hit that 45-degree angle. Avoid sending them out to the sides like a goal post, which is rough on your shoulders.',
    ],
  })

  repo.add({
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Stand a little less than a leg length in front of the elevated surface.',
      'Place the top of your right foot on the bench behind you. Keep weight on the heel of your left foot on the floor.',
      'Bend your left knee and lower down until your back knee touches the floor or the front knee bends 90 degrees.',
      'Drive through the front left foot to stand back up, then repeat.',
      'Make sure to engage your core throughout the entire move and press through your front foot heel and big toe.',
    ],
  })

  repo.add({
    id: 'superman-pull',
    name: 'Superman Pull',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Lie face down on the floor with your arms extended out in front of you.',
      'Squeeze your upper back muscles to raise your arms and chest off the floor.',
      'Lift your feet and engage your glutes.',
      'Hold this position, then pull your elbows down by your sides to form a W-shape with your upper body and engage your lats.',
      'Punch your arms back out in front of you, then repeat.',
      'Make sure to engage your core and keep your shoulders down and away from your ears.',
    ],
  })

  repo.add({
    id: 'bird-dog',
    name: 'Bird Dog',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Start on your hands and knees, with your hands directly under your shoulders and knees under your hips.',
      'Extend your right arm forward and left leg back, keeping your spine neutral.',
      'Hold briefly, then return to the starting position.',
      'Repeat on the opposite side, extending your left arm and right leg.',
      'Keep your core engaged and back flat throughout the movement.',
    ],
  })

  repo.add({
    id: 'mountain-climber',
    name: 'Mountain Climber',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Start in a high plank position with your shoulders over your wrists.',
      'Drive one knee toward your chest while keeping the other leg straight.',
      'Quickly switch legs, pulling the other knee toward your chest.',
      'Keep your core tight and hips level throughout the movement.',
      'Continue alternating legs in a running motion.',
    ],
  })

  repo.add({
    id: 'pistol-squat',
    name: 'Pistol Squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Stand on one leg with your other leg extended forward off the ground.',
      'Extend your arms out in front of you for balance.',
      'Lower your body down by bending your standing knee and hip, keeping your non-working leg raised.',
      'Go as low as you can while maintaining balance.',
      'Drive through your heel to stand back up to the starting position.',
      'Repeat on the same leg, then switch legs.',
    ],
  })

  repo.add({
    id: 'plank-up-down',
    name: 'Plank Up-Down',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Start in a forearm plank position.',
      'Press one hand into the floor to extend your arm, then do the same with the other arm to come into a full plank.',
      'Alternate which arm leads the upward movement.',
      'Lower back down to your forearms one arm at a time.',
      'Keep your core engaged and hips stable throughout the movement.',
    ],
  })

  repo.add({
    id: 'alternating-side-lunge',
    name: 'Alternating Side Lunge',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Stand with feet together.',
      'Take a wide step to the right and shift your weight onto that leg.',
      'Bend your right knee and lower your hip down and back, keeping your left leg straight.',
      'Push through the right heel to return to standing.',
      'Alternate sides with each rep.',
    ],
  })

  repo.add({
    id: 'superman',
    name: 'Superman',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Lie face down on the floor with your arms extended past your ears.',
      'Squeeze your glutes and back muscles to lift your arms, chest, and thighs off the floor.',
      'Hold the top position for a moment, focusing on the squeeze in your back muscles.',
      'Lower back down with control.',
      'Keep your neck in a neutral position, looking slightly down.',
    ],
  })

  repo.add({
    id: 'v-up',
    name: 'V-Up',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Lie on your back with your arms extended past your ears.',
      'Engage your core and raise your legs and torso simultaneously.',
      'Reach your hands toward your toes to form a V-shape with your body.',
      'Lower back down with control while keeping your arms and legs straight.',
      'Repeat in a smooth, controlled motion.',
    ],
  })

  repo.add({
    id: 'burpee',
    name: 'Burpee',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.BODYWEIGHT,
    description: [
      'Stand with feet shoulder-width apart.',
      'Lower into a squat and place your hands on the floor.',
      'Jump your feet back to land in a high plank position.',
      'Perform a push-up, lowering your chest to the floor.',
      'Jump your feet forward to return to the squat position.',
      'Explosively jump up with your arms reaching overhead.',
      'Land softly and immediately go into the next rep.',
    ],
  })
}
