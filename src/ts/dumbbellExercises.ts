import { ExerciseMuscleGroup, ExerciseEquipment, ExerciseRepository } from './excercises'

export function addDumbbellExercises(repo: ExerciseRepository) {
  repo.add({
    id: 'dumbbell-bent-over-row',
    name: 'Dumbbell bent-over row',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Using dumbbells engages the same target muscles as the barbell variety, while preventing the stronger side of your body doing more than its share of the work',
      'Start with your core braced, your back straight and your shoulder blades retracted',
      'Bend your knees slightly and lean forwards from the hips',
      'Let the weights hang at knee level',
      'Pull the dumbbells up to your lower sternum, pulling your shoulder blades to allow the weights to come up to your hips, then lower slowly to the start',
    ],
  })

  repo.add({
    id: 'dumbbell-reverse-grip-bent-over-row',
    name: 'Dumbbell reverse-grip bent-over row',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand with your core braced, your back straight and your shoulder blades retracted, gripping a set of dumbbells with your palms facing away from you, then bend your knees slightly and lean forward from the hips',
      'Pull the dumbbells up to your rib cage',
      'Hold, then lower under control',
    ],
  })

  repo.add({
    id: 'single-arm-dumbbell-row',
    name: 'Single-arm dumbbell row',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Position your right knee and right hand flat on a bench (or support your right arm on your right knee, leg slightly bent), with your left leg slightly bent and pushed out behind you',
      'Hold a dumbbell in your left hand with your arm hanging straight down',
      'With a natural arch in your back and core braced, lift the weight towards your hip, leading with the elbow',
      'Wait at the top before returning to the start',
      'Repeat on the other side',
    ],
  })

  repo.add({
    id: 'single-arm-dumbbell-gorilla-row',
    name: 'Single-arm dumbbell gorilla row',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Position your dumbbell on the floor, standing just behind it and to one side',
      'Bend your knees slightly, hinge forward from your hips and reach down and grasp the dumbbell',
      'Brace your core and make sure your lower back is slightly arched and not rounded',
      'Row the weight up and back toward your hip. Lead with your elbow and keep your wrist straight. Make sure your hips and shoulders remain level and don\u2019t twist',
      'Drop the weight back to the floor and repeat',
      'On completing your set, repeat on the other side',
    ],
  })

  repo.add({
    id: 'dumbbell-reverse-flye',
    name: 'Dumbbell reverse flye',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Holding a pair of dumbbells, and with your feet shoulder-width apart, bend forward at your hips until your torso is nearly parallel to the floor',
      'Let the dumbbells hang straight down from your shoulders, your palms facing each other, with your arms slightly bent',
      'Then, keeping your back flat and your torso still, raise your arms straight out to your sides until they\u2019re in line with your body. Don\u2019t change the bend in your elbows',
      'Wait, then gradually return to the starting position',
    ],
  })

  repo.add({
    id: 'dumbbell-renegade-row',
    name: 'Dumbbell renegade row',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Begin in a press-up position with your feet shoulder-width apart and a dumbbell in each hand',
      'Brace your core to keep your hips static and do a single-arm row, drawing the weight towards your armpit',
      'Alternate sides with each rep',
    ],
  })

  repo.add({
    id: 'dumbbell-deadlift',
    name: 'Dumbbell deadlift',
    muscleGroup: ExerciseMuscleGroup.BACK,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Grip a dumbbell in each hand and stand with your feet about hip-width apart',
      'Inhale and lightly brace your core',
      'Lower the dumbbells close to the floor by leaning forward and bending your knees',
      'Reverse the motion and return to a standing position. Exhale on the way up',
    ],
  })

  repo.add({
    id: 'dumbbell-shoulder-press',
    name: 'Dumbbell shoulder press',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'With your feet shoulder-width apart, grip a dumbbell in each hand at shoulder height',
      'Keep your chest upright and your core muscles braced',
      'Press the weights directly upwards, keeping your core braced, until your arms are extended overhead',
      'Lower and repeat',
    ],
  })

  repo.add({
    id: 'seated-dumbbell-shoulder-press',
    name: 'Seated dumbbell shoulder press',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Sit with your back against the upright section of a bench, holding a pair of dumbbells at your shoulders',
      'Press them slowly overhead, allowing your arms to rotate naturally',
      'Hold at the top, then lower under control',
    ],
  })

  repo.add({
    id: 'dumbbell-arnold-press',
    name: 'Dumbbell Arnold press',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Begin at the top position of a biceps curl, with your elbows by your torso',
      'Allow your palms to rotate as you press the dumbbells overhead, finishing with your palms facing forward',
      'Reverse the motion as you lower the dumbbells',
    ],
  })

  repo.add({
    id: 'dumbbell-lateral-raise',
    name: 'Dumbbell lateral raise',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand tall with your abs braced and feet close but not together, holding a light dumbbell in each hand by your sides with your palms facing one another',
      'Keeping a slight bend in your elbows, raise the weights out to the sides making sure you use your muscles and not momentum',
      'Stop just below shoulder height, then drop',
    ],
  })

  repo.add({
    id: 'dumbbell-front-raise',
    name: 'Dumbbell front raise',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand tall with your abs braced and feet apart, holding a light dumbbell in each hand by your sides with your palms facing one another',
      'Keeping a slight bend in your elbows, raise the weights in front of you using your muscles and not momentum',
      'Stop at shoulder height, wait for a second, then slowly return to the start',
    ],
  })

  repo.add({
    id: 'single-arm-dumbbell-shoulder-press',
    name: 'Single-arm dumbbell shoulder press',
    muscleGroup: ExerciseMuscleGroup.SHOULDERS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand tall with your chest up and core braced, gripping a dumbbell at shoulder height',
      'Press it overhead, wait briefly, then lower',
    ],
  })

  repo.add({
    id: 'dumbbell-bench-press',
    name: 'Dumbbell bench press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie on a bench with your feet on the floor directly underneath your knees',
      'Hold the dumbbells above your chest, then drop them to your chest',
      'Drive your feet hard into the floor and push the dumbbells back strongly to the start position',
    ],
  })

  repo.add({
    id: 'incline-dumbbell-bench-press',
    name: 'Incline dumbbell bench press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie on a bench set at an angle, holding a dumbbell in each hand at chest level',
      'Keep your feet flat on the floor and your back against the bench',
      'Press the weight directly above your head but don\u2019t lock out your elbows at the top',
      'Gradually lower the weights back to chest level',
    ],
  })

  repo.add({
    id: 'decline-dumbbell-bench-press',
    name: 'Decline dumbbell bench press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie on a bench set at an angle, holding a dumbbell in each hand at chest-level. (If your gym doesn\u2019t have a decline bench, prop a weight plate under a regular bench)',
      'Keep your feet flat on the floor and your back against the bench',
      'Press the weight directly above your head but don\u2019t lock out your elbows at the top',
      'Gradually lower the weights back to chest level',
    ],
  })

  repo.add({
    id: 'dumbbell-floor-press',
    name: 'Dumbbell floor press',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie on the floor with knees bent, feet flat. Grip dumbbells at chest level',
      'Press dumbbells up, extending your arms without fully locking out',
      'Lower the dumbbells back down with control, stopping just before your elbows touch the floor',
      'Maintain core engagement and a flat back, and control your breathing throughout',
    ],
  })

  repo.add({
    id: 'dumbbell-flye',
    name: 'Dumbbell flye',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie on a flat bench gripping a dumbbell in each hand directly above your chest with your palms facing each other',
      'Keeping a slight bend in your elbows, gradually lower the weights to the sides as far as is comfortable, feeling the stretch in your chest',
      'Squeeze your chest to reverse the movement and raise the weights back to the top',
    ],
  })

  repo.add({
    id: 'incline-dumbbell-flye',
    name: 'Incline dumbbell flye',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Adjust an incline bench to around 30-45 degrees, and lie back with dumbbells above your chest',
      'Lower dumbbells out to the sides in a wide arc motion, feeling the stretch in your chest',
      'Bring the dumbbells back up, squeezing your chest muscles at the top',
      'Maintain core engagement, controlled breathing, and concentrate on muscle contraction throughout the movement',
    ],
  })

  repo.add({
    id: 'dumbbell-pull-over',
    name: 'Dumbbell pull-over',
    muscleGroup: ExerciseMuscleGroup.CHEST,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie on a bench with only your upper back and shoulders supported',
      'Grip a dumbbell with both hands above your chest, arms slightly bent',
      'Lower the dumbbell back and over your head in a controlled arc motion',
      'Return the dumbbell back up to the starting position using your chest and triceps',
    ],
  })

  repo.add({
    id: 'dumbbell-goblet-squat',
    name: 'Dumbbell goblet squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Grip a dumbbell at chest height with both hands \u2013 like a goblet \u2013 then squat down until your elbows brush the insides of your knees',
      'Keep your weight on your mid foot as you stand up',
    ],
  })

  repo.add({
    id: 'dumbbell-squat',
    name: 'Dumbbell squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Grip a dumbbell in each hand by your sides and squat down, keeping your chest up, until your hip crease is below the level of your knees',
      'Drive back up through your heels',
    ],
  })

  repo.add({
    id: 'dumbbell-lunge',
    name: 'Dumbbell lunge',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Holding a dumbbell in each hand, take one step forwards and drop your body until both knees are bent at 90 degrees',
      'Push off your front foot to reverse the movement',
    ],
  })

  repo.add({
    id: 'dumbbell-reverse-lunge',
    name: 'Dumbbell reverse lunge',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Hold a dumbbell in each hand',
      'Take a controlled step back with one leg, dropping your back knee towards the ground while keeping your front knee in line with your toes',
      'Push off your rear foot to reverse the movement',
    ],
  })

  repo.add({
    id: 'dumbbell-side-lunge',
    name: 'Dumbbell side lunge',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Holding a dumbbell in each hand, take one step sideways and drop your body until one of your knees is bent at a right angle, feeling a slight stretch in your groin',
      'Push off your foot to reverse the movement',
    ],
  })

  repo.add({
    id: 'dumbbell-split-squat',
    name: 'Dumbbell split squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Begin in a split stance, with one foot in front of the other, holding a dumbbell in each hand',
      'Lean slightly forward, over your lead leg',
      'Bend both legs until your trailing knee touches the floor',
      'Straighten both legs to return to the start, then go straight into the next rep',
    ],
  })

  repo.add({
    id: 'dumbbell-bulgarian-split-squat',
    name: 'Dumbbell Bulgarian split squat',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Begin by standing a few feet in front of a bench or elevated surface with a dumbbell in each hand',
      'Place one foot behind you on the bench, ensuring the top of your foot is resting on the surface',
      'Drop your body by bending your front knee and lowering your back knee towards the floor',
      'Drive through the heel of your front foot to return to the starting position',
    ],
  })

  repo.add({
    id: 'dumbbell-romanian-deadlift',
    name: 'Dumbbell Romanian deadlift',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand tall with feet shoulder-width apart, gripping a dumbbell in each hand',
      'Keeping your legs straight, hinge from the hips and lower the weights down the fronts of your shins until you feel a good stretch in your hamstrings',
      'Reverse the motion to the start and squeeze your glutes',
    ],
  })

  repo.add({
    id: 'dumbbell-single-leg-romanian-deadlift',
    name: 'Dumbbell single-leg Romanian deadlift',
    muscleGroup: ExerciseMuscleGroup.LEGS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand with a dumbbell in each hand, palms facing your body, and feet hip-width apart',
      'Shift your weight onto one leg while keeping a slight bend in the knee of the supporting leg',
      'Hinge at the hips and gradually lower the dumbbells towards the ground while simultaneously lifting the non-supporting leg straight back behind you',
      'Keep your back flat, chest up, and core engaged as you lower the dumbbells towards the ground',
      'Lower the dumbbells until you feel a stretch in your hamstrings, then push through the heel of the supporting leg to return to the starting position',
    ],
  })

  repo.add({
    id: 'dumbbell-biceps-curl',
    name: 'Dumbbell biceps curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand tall with your shoulders back and feet close together, gripping a pair of dumbbells with palms facing in',
      'Keeping your elbows tucked in to your sides, curl the dumbbells up towards your chest, stopping just before your forearms reach vertical',
      'Lower under control to return to the start position',
    ],
  })

  repo.add({
    id: 'alternating-dumbbell-biceps-curl',
    name: 'Alternating dumbbell biceps curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand tall with your shoulders back and feet close together, gripping a pair of dumbbells with your palms facing forward',
      'Keeping your elbows tucked in to your sides, curl one dumbbell up towards your chest, then drop it and raise the other',
    ],
  })

  repo.add({
    id: 'dumbbell-hammer-curl',
    name: 'Dumbbell hammer curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Stand tall with your shoulders back and feet close together, gripping a pair of dumbbells with your palms facing your sides',
      'Keeping your elbows tucked in to your sides, curl the dumbbells up towards your chest, stopping just before your forearms reach vertical',
      'Lower under control to return to the start position',
      'As with biceps curls, perform alternating hammer curls at the end of your sets to squeeze out some extra muscle-pumping reps',
    ],
  })

  repo.add({
    id: 'dumbbell-zottman-curl',
    name: 'Dumbbell zottman curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Hold a dumbbell in each arm and curl them up to chest height',
      'Rotate your palms to face downwards before you lower, shifting the focus to your forearms',
    ],
  })

  repo.add({
    id: 'dumbbell-incline-biceps-curl',
    name: 'Dumbbell incline biceps curl',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Sit on a bench set to an incline between 30 and 45 degrees, holding a dumbbell in each hand',
      'Keeping your back flat against the bench and your elbows close to your sides, curl both dumbbells up to shoulder height',
      'Squeeze your biceps at the top of the motion, then gradually return the start',
    ],
  })

  repo.add({
    id: 'dumbbell-triceps-extension',
    name: 'Dumbbell triceps extension',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Sit on a bench and grip a dumbbell with both hands, grasping it by the upper end. Extend your arms fully above your head, keeping your elbows close to your ears',
      'Keep your core engaged and your back straight. Maintain an upright posture without arching your back',
      'Slowly lower the dumbbell behind your head by bending your elbows, keeping your upper arms stationary. Lower the weight until your forearms touch your biceps',
      'Press the dumbbell back up to the starting position by straightening your arms. Focus on squeezing your triceps at the top of the movement without locking out your elbows',
    ],
  })

  repo.add({
    id: 'dumbbell-skullcrusher',
    name: 'Dumbbell skullcrusher',
    muscleGroup: ExerciseMuscleGroup.ARMS,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie flat on a bench, holding dumbbells with arms extended straight up and palms facing each other',
      'Keep your upper arms stationary and elbows pointed up, then gradually lower dumbbells towards your forehead',
      'Extend elbows to press the dumbbells back up, focusing on contracting the triceps',
      'Engage your core to maintain stability, and avoid moving your upper arms or shoulders',
    ],
  })

  repo.add({
    id: 'dumbbell-renegade-row',
    name: 'Dumbbell renegade row',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Begin in a press-up position, but with feet set slightly wider for balance, holding the handles of a pair of dumbbells',
      'Row one dumbbell up to your hip, put it down, then row the other',
      'Try to stay parallel to the floor \u2013 don\u2019t twist',
    ],
  })

  repo.add({
    id: 'dumbbell-push-up-to-renegade-row',
    name: 'Dumbbell push-up to renegade row',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Begin in a push-up position, holding the handles of a pair of dumbbells',
      'Do a push-up',
      'At the top of the motion, row one dumbbell upwards and then the other, so that your thumb touches your armpit',
      'Try to stay parallel to the floor \u2013 don\u2019t twist',
    ],
  })

  repo.add({
    id: 'dumbbell-halo',
    name: 'Dumbbell halo',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Holding a dumbbell in both hands, move it around your head in smooth circles, engaging your core as you circle it around',
      'After one complete circle, reverse directions',
    ],
  })

  repo.add({
    id: 'dumbbell-russian-twist',
    name: 'Dumbbell Russian twist',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Sit on the floor with your knees bent and feet slightly raised, gripping a dumbbell in front of you',
      'Twist to one side, wait, and then twist to the other',
      'That\u2019s 1 rep',
    ],
  })

  repo.add({
    id: 'dumbbell-crunch',
    name: 'Dumbbell crunch',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Lie flat on your back with knees bent and a dumbbell held at chest level',
      'Contract your abs to lift your shoulders off the floor and curl your chest towards your knees',
      'Wait at the top of the motion and squeeze your abs, then lower gradually to the start',
    ],
  })

  repo.add({
    id: 'dumbbell-side-bend',
    name: 'Dumbbell side bend',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Hold a heavy dumbbell in one hand and bend your torso towards your weighted hand',
      'Wait when you feel a stretch up your opposite side, then straighten up without leaning forwards or back',
    ],
  })

  repo.add({
    id: 'dumbbell-crunch-reach',
    name: 'Dumbbell crunch reach',
    muscleGroup: ExerciseMuscleGroup.CORE,
    equipment: ExerciseEquipment.DUMBBELL,
    description: [
      'Begin by lying on your back on a mat with your knees bent and feet flat on the floor',
      'Hold a dumbbell in each hand, extending your arms straight up towards the ceiling',
      'Before starting the movement, engage your core muscles by drawing your navel towards your spine',
      'As you exhale, lift your head, shoulders, and upper back off the floor',
      'At the top of the motion, focus on squeezing your abdominal muscles to maximize the contraction. Hold this position briefly to feel the engagement in your core',
      'Gradually lower your head, shoulders, and upper back back to the starting position while inhaling. Your arms with the dumbbells should lower back towards the floor as well',
    ],
  })
}
