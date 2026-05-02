import { ExerciseMuscleGroup, ExerciseRepository } from './excercises'

export const exerciseRepository = new ExerciseRepository()

exerciseRepository.add({
  id: 'dumbbell-bent-over-row',
  name: 'Dumbbell bent-over row',
  muscleGroup: ExerciseMuscleGroup.BACK,
  description:
    '1. Using dumbbells involves the same target muscles as the barbell variety, while preventing the stronger side of your body doing more than its share of the work 2. Start with your core braced, your back straight and your shoulder blades retracted 3. Bend your knees slightly and lean forwards from the hips 4. Let the weights hang at knee level 5. Pull the dumbbells up to your lower sternum, retracting your shoulder blades to allow the weights to come up to your hips, then lower slowly to the start',
})

exerciseRepository.add({
  id: 'dumbbell-reverse-grip-bent-over-row',
  name: 'Dumbbell reverse-grip bent-over row',
  muscleGroup: ExerciseMuscleGroup.BACK,
  description:
    '1. Stand with your core braced, your back straight and your shoulder blades retracted, holding a set of dumbbells with your palms facing away from you, then bend your knees slightly and lean forward from the hips 2. Pull the dumbbells up to your rib cage 3. Pause, then lower under control',
})

exerciseRepository.add({
  id: 'single-arm-dumbbell-row',
  name: 'Single-arm dumbbell row',
  muscleGroup: ExerciseMuscleGroup.BACK,
  description:
    '1. Place your right knee and right hand flat on a bench (or support your right arm on your right knee, leg slightly bent), with your left leg slightly bent and pushed out behind you 2. Hold a dumbbell in your left hand with your arm hanging straight down 3. With a natural arch in your back and core braced, lift the weight towards your hip, leading with the elbow 4. Pause at the top before returning to the start&nbsp; 5. Repeat on the other side',
})

exerciseRepository.add({
  id: 'single-arm-dumbbell-gorilla-row',
  name: 'Single-arm dumbbell gorilla row',
  muscleGroup: ExerciseMuscleGroup.BACK,
  description:
    '1. Place your dumbbell on the floor, standing just behind it and to one side 2. Bend your knees slightly, hinge forward from your hips and reach down and grasp the dumbbell 3. Brace your core and make sure your lower back is slightly arched and not rounded 4. Row the weight up and back toward your hip. Lead with your elbow and keep your wrist straight. Make sure your hips and shoulders remain level and don’t twist 5. Lower the weight back to the floor and repeat 6. On completing your set, repeat on the other side',
})

exerciseRepository.add({
  id: 'dumbbell-reverse-flye',
  name: 'Dumbbell reverse flye',
  muscleGroup: ExerciseMuscleGroup.BACK,
  description:
    '1. Holding a pair of dumbbells, and with your feet shoulder-width apart, bend forward at your hips until your torso is nearly parallel to the floor 2. Let the dumbbells hang straight down from your shoulders, your palms facing each other, with your arms slightly bent 3. Then, keeping your back flat and your torso still, raise your arms straight out to your sides until they’re in line with your body. Don’t change the bend in your elbows 4. Pause, then slowly return to the starting position',
})

exerciseRepository.add({
  id: 'dumbbell-renegade-row',
  name: 'Dumbbell renegade row',
  muscleGroup: ExerciseMuscleGroup.BACK,
  description:
    '1. Start in a press-up position with your feet shoulder-width apart and a dumbbell in each hand 2. Brace your core to keep your hips static and do a single-arm row, drawing the weight towards your armpit 3. Alternate sides with each rep',
})

exerciseRepository.add({
  id: 'dumbbell-deadlift',
  name: 'Dumbbell deadlift',
  muscleGroup: ExerciseMuscleGroup.BACK,
  description:
    '1. Hold a dumbbell in each hand and stand with your feet about hip-width apart 2. Inhale and lightly brace your core 3. Lower the dumbbells close to the floor by leaning forward and bending your knees 4. Reverse the movement and return to a standing position. Exhale on the way up',
})

exerciseRepository.add({
  id: 'dumbbell-shoulder-press',
  name: 'Dumbbell shoulder press',
  muscleGroup: ExerciseMuscleGroup.SHOULDERS,
  description:
    '1. With your feet shoulder-width apart, hold a dumbbell in each hand at shoulder height 2. Keep your chest upright and your core muscles braced 3. Press the weights directly upwards, keeping your core braced, until your arms are extended overhead 4. Lower and repeat',
})

exerciseRepository.add({
  id: 'seated-dumbbell-shoulder-press',
  name: 'Seated dumbbell shoulder press',
  muscleGroup: ExerciseMuscleGroup.SHOULDERS,
  description:
    '1. Sit with your back against the upright part of a bench, holding a pair of dumbbells at your shoulders 2. Press them slowly overhead, allowing your arms to rotate naturally 3. Pause at the top, then lower under control',
})

exerciseRepository.add({
  id: 'dumbbell-arnold-press',
  name: 'Dumbbell Arnold press',
  muscleGroup: ExerciseMuscleGroup.SHOULDERS,
  description:
    '1. Start at the top position of a biceps curl, with your elbows by your torso 2. Allow your palms to rotate as you press the dumbbells overhead, finishing with your palms facing forward 3. Reverse the movement as you lower the dumbbells',
})

exerciseRepository.add({
  id: 'dumbbell-lateral-raise',
  name: 'Dumbbell lateral raise',
  muscleGroup: ExerciseMuscleGroup.SHOULDERS,
  description:
    '1. Stand tall with your abs braced and feet close but not together, holding a light dumbbell in each hand by your sides with your palms facing one another 2. Keeping a slight bend in your elbows, raise the weights out to the sides making sure you use your muscles and not momentum 3. Stop just below shoulder height, then lower',
})

exerciseRepository.add({
  id: 'dumbbell-front-raise',
  name: 'Dumbbell front raise',
  muscleGroup: ExerciseMuscleGroup.SHOULDERS,
  description:
    '1. Stand tall with your abs braced and feet apart, holding a light dumbbell in each hand by your sides with your palms facing one another 2. Keeping a slight bend in your elbows, raise the weights in front of you using your muscles and not momentum 3. Stop at shoulder height, pause for a second, then slowly return to the start',
})

exerciseRepository.add({
  id: 'single-arm-dumbbell-shoulder-press',
  name: 'Single-arm dumbbell shoulder press',
  muscleGroup: ExerciseMuscleGroup.SHOULDERS,
  description:
    '1. Stand tall with your chest up and core braced, holding a dumbbell at shoulder height 2. Press it overhead, pause briefly, then lower',
})

exerciseRepository.add({
  id: 'dumbbell-bench-press',
  name: 'Dumbbell bench press',
  muscleGroup: ExerciseMuscleGroup.CHEST,
  description:
    '1. Lie on a bench with your feet on the floor directly underneath your knees 2. Hold the dumbbells above your chest, then lower them to your chest 3. Drive your feet hard into the floor and push the dumbbells back strongly to the start position',
})

exerciseRepository.add({
  id: 'incline-dumbbell-bench-press',
  name: 'Incline dumbbell bench press',
  muscleGroup: ExerciseMuscleGroup.CHEST,
  description:
    '1. Lie on a bench set at an angle, holding a dumbbell in each hand at chest level 2. Keep your feet flat on the floor and your back against the bench 3. Press the weight directly above your head but don’t lock out your elbows at the top 4. Slowly lower the weights back to chest level',
})

exerciseRepository.add({
  id: 'decline-dumbbell-bench-press',
  name: 'Decline dumbbell bench press',
  muscleGroup: ExerciseMuscleGroup.CHEST,
  description:
    '1. Lie on a bench set at an angle, holding a dumbbell in each hand at chest-level. (If your gym doesn’t have a decline bench, prop a weight plate under a regular bench) 2. Keep your feet flat on the floor and your back against the bench 3. Press the weight directly above your head but don’t lock out your elbows at the top 4. Slowly lower the weights back to chest level',
})

exerciseRepository.add({
  id: 'dumbbell-floor-press',
  name: 'Dumbbell floor press',
  muscleGroup: ExerciseMuscleGroup.CHEST,
  description:
    '1. Lie on the floor with knees bent, feet flat. Hold dumbbells at chest level 2. Press dumbbells up, extending your arms without fully locking out 3. Lower the dumbbells back down with control, stopping just before your elbows touch the floor 4. Maintain core engagement and a flat back, and control your breathing throughout',
})

exerciseRepository.add({
  id: 'dumbbell-flye',
  name: 'Dumbbell flye',
  muscleGroup: ExerciseMuscleGroup.CHEST,
  description:
    '1. Lie on a flat bench holding a dumbbell in each hand directly above your chest with your palms facing each other 2. Keeping a slight bend in your elbows, slowly lower the weights to the sides as far as is comfortable, feeling the stretch in your chest 3. Squeeze your chest to reverse the movement and raise the weights back to the top',
})

exerciseRepository.add({
  id: 'incline-dumbbell-flye',
  name: 'Incline dumbbell flye',
  muscleGroup: ExerciseMuscleGroup.CHEST,
  description:
    '1. Adjust an incline bench to around 30-45 degrees, and lie back with dumbbells above your chest 2. Lower dumbbells out to the sides in a wide arc motion, feeling the stretch in your chest 3. Bring the dumbbells back up, squeezing your chest muscles at the top 4. Maintain core engagement, controlled breathing, and focus on muscle contraction throughout the movement',
})

exerciseRepository.add({
  id: 'dumbbell-pull-over',
  name: 'Dumbbell pull-over',
  muscleGroup: ExerciseMuscleGroup.CHEST,
  description:
    '1. Lie on a bench with only your upper back and shoulders supported 2. Hold a dumbbell with both hands above your chest, arms slightly bent 3. Lower the dumbbell back and over your head in a controlled arc motion 4. Bring the dumbbell back up to the starting position using your chest and triceps',
})

exerciseRepository.add({
  id: 'dumbbell-goblet-squat',
  name: 'Dumbbell goblet squat',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Hold a dumbbell at chest height with both hands – like a goblet – then squat down until your elbows brush the insides of your knees 2. Keep your weight on your mid foot as you stand up',
})

exerciseRepository.add({
  id: 'dumbbell-squat',
  name: 'Dumbbell squat',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Hold a dumbbell in each hand by your sides and squat down, keeping your chest up, until your hip crease is below the level of your knees 2. Drive back up through your heels',
})

exerciseRepository.add({
  id: 'dumbbell-lunge',
  name: 'Dumbbell lunge',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Holding a dumbbell in each hand, take one step forwards and lower your body until both knees are bent at 90 degrees 2. Push off your front foot to reverse the movement',
})

exerciseRepository.add({
  id: 'dumbbell-reverse-lunge',
  name: 'Dumbbell reverse lunge',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Hold a dumbbell in each hand 2. Take a controlled step back with one leg, lowering your back knee towards the ground while keeping your front knee in line with your toes 3. Push off your rear foot to reverse the movement',
})

exerciseRepository.add({
  id: 'dumbbell-side-lunge',
  name: 'Dumbbell side lunge',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Holding a dumbbell in each hand, take one step sideways and lower your body until one of your knees is bent at a right angle, feeling a slight stretch in your groin 2. Push off your foot to reverse the movement',
})

exerciseRepository.add({
  id: 'dumbbell-split-squat',
  name: 'Dumbbell split squat',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Start in a split stance, with one foot in front of the other, holding a dumbbell in each hand 2. Lean slightly forward, over your lead leg 3. Bend both legs until your trailing knee touches the floor 4. Straighten both legs to return to the start, then go straight into the next rep',
})

exerciseRepository.add({
  id: 'dumbbell-bulgarian-split-squat',
  name: 'Dumbbell Bulgarian split squat',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Start by standing a few feet in front of a bench or elevated surface with a dumbbell in each hand 2. Place one foot behind you on the bench, ensuring the top of your foot is resting on the surface 3. Lower your body by bending your front knee and lowering your back knee towards the floor 4. Drive through the heel of your front foot to return to the starting position',
})

exerciseRepository.add({
  id: 'dumbbell-romanian-deadlift',
  name: 'Dumbbell Romanian deadlift',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Stand tall with feet shoulder-width apart, holding a dumbbell in each hand 2. Keeping your legs straight, hinge from the hips and lower the weights down the fronts of your shins until you feel a good stretch in your hamstrings 3. Reverse the move to the start and squeeze your glutes',
})

exerciseRepository.add({
  id: 'dumbbell-single-leg-romanian-deadlift',
  name: 'Dumbbell single-leg Romanian deadlift',
  muscleGroup: ExerciseMuscleGroup.LEGS,
  description:
    '1. Stand with a dumbbell in each hand, palms facing your body, and feet hip-width apart 2. Shift your weight onto one leg while keeping a slight bend in the knee of the supporting leg 3. Hinge at the hips and slowly lower the dumbbells towards the ground while simultaneously lifting the non-supporting leg straight back behind you 4. Keep your back flat, chest up, and core engaged as you lower the dumbbells towards the ground 5. Lower the dumbbells until you feel a stretch in your hamstrings, then push through the heel of the supporting leg to return to the starting position',
})

exerciseRepository.add({
  id: 'dumbbell-biceps-curl',
  name: 'Dumbbell biceps curl',
  muscleGroup: ExerciseMuscleGroup.ARMS,
  description:
    '1. Stand tall with your shoulders back and feet close together, holding a pair of dumbbells with palms facing in 2. Keeping your elbows tucked in to your sides, curl the dumbbells up towards your chest, stopping just before your forearms reach vertical 3. Lower under control to return to the start position',
})

exerciseRepository.add({
  id: 'alternating-dumbbell-biceps-curl',
  name: 'Alternating dumbbell biceps curl',
  muscleGroup: ExerciseMuscleGroup.ARMS,
  description:
    '1. Stand tall with your shoulders back and feet close together, holding a pair of dumbbells with your palms facing forward 2. Keeping your elbows tucked in to your sides, curl one dumbbell up towards your chest, then lower it and raise the other',
})

exerciseRepository.add({
  id: 'dumbbell-hammer-curl',
  name: 'Dumbbell hammer curl',
  muscleGroup: ExerciseMuscleGroup.ARMS,
  description:
    '1. Stand tall with your shoulders back and feet close together, holding a pair of dumbbells with your palms facing your sides 2. Keeping your elbows tucked in to your sides, curl the dumbbells up towards your chest, stopping just before your forearms reach vertical 3. Lower under control to return to the start position 4. As with biceps curls, perform alternating hammer curls at the end of your sets to squeeze out some extra muscle-pumping reps',
})

exerciseRepository.add({
  id: 'dumbbell-zottman-curl',
  name: 'Dumbbell zottman curl',
  muscleGroup: ExerciseMuscleGroup.ARMS,
  description:
    '1. Hold a dumbbell in each arm and curl them up to chest height 2. Twist your palms to face downwards before you lower, shifting the focus to your forearms',
})

exerciseRepository.add({
  id: 'dumbbell-incline-biceps-curl',
  name: 'Dumbbell incline biceps curl',
  muscleGroup: ExerciseMuscleGroup.ARMS,
  description:
    '1. Sit on a bench set to an incline between 30 and 45 degrees, holding a dumbbell in each hand 2. Keeping your back flat against the bench and your elbows close to your sides, curl both dumbbells up to shoulder height 3. Squeeze your biceps at the top of the move, then slowly return the start',
})

exerciseRepository.add({
  id: 'dumbbell-triceps-extension',
  name: 'Dumbbell triceps extension',
  muscleGroup: ExerciseMuscleGroup.ARMS,
  description:
    '1. Sit on a bench and hold a dumbbell with both hands, grasping it by the upper end. Extend your arms fully above your head, keeping your elbows close to your ears 2. Keep your core engaged and your back straight. Maintain an upright posture without arching your back 3. Slowly lower the dumbbell behind your head by bending your elbows, keeping your upper arms stationary. Lower the weight until your forearms touch your biceps 4. Press the dumbbell back up to the starting position by straightening your arms. Focus on squeezing your triceps at the top of the movement without locking out your elbows',
})

exerciseRepository.add({
  id: 'dumbbell-skullcrusher',
  name: 'Dumbbell skullcrusher',
  muscleGroup: ExerciseMuscleGroup.ARMS,
  description:
    '1. Lie flat on a bench, holding dumbbells with arms extended straight up and palms facing each other 2. Keep your upper arms stationary and elbows pointed up, then slowly lower dumbbells towards your forehead 3. Extend elbows to press the dumbbells back up, focusing on contracting the triceps 4. Engage your core to maintain stability, and avoid moving your upper arms or shoulders',
})

exerciseRepository.add({
  id: 'dumbbell-renegade-row',
  name: 'Dumbbell renegade row',
  muscleGroup: ExerciseMuscleGroup.STOMACH,
  description:
    '1. Start in a press-up position, but with feet set slightly wider for balance, holding the handles of a pair of dumbbells 2. Row one dumbbell up to your hip, put it down, then row the other 3. Try to stay parallel to the floor – don’t twist',
})

exerciseRepository.add({
  id: 'dumbbell-push-up-to-renegade-row',
  name: 'Dumbbell push-up to renegade row',
  muscleGroup: ExerciseMuscleGroup.STOMACH,
  description:
    '1. Start in a push-up position, holding the handles of a pair of dumbbells 2. Do a push-up 3. At the top of the move, row one dumbbell upwards and then the other, so that your thumb touches your armpit 4. Try to stay parallel to the floor – don’t twist',
})

exerciseRepository.add({
  id: 'dumbbell-halo',
  name: 'Dumbbell halo',
  muscleGroup: ExerciseMuscleGroup.STOMACH,
  description:
    '1. Holding a dumbbell in both hands, move it around your head in smooth circles, engaging your core as you circle it around 2. After one complete circle, reverse directions',
})

exerciseRepository.add({
  id: 'dumbbell-russian-twist',
  name: 'Dumbbell Russian twist',
  muscleGroup: ExerciseMuscleGroup.STOMACH,
  description:
    '1. Sit on the floor with your knees bent and feet slightly raised, holding a dumbbell in front of you 2. Twist to one side, pause, and then twist to the other 3. That’s 1 rep',
})

exerciseRepository.add({
  id: 'dumbbell-crunch',
  name: 'Dumbbell crunch',
  muscleGroup: ExerciseMuscleGroup.STOMACH,
  description:
    '1. Lie flat on your back with knees bent and a dumbbell held at chest level 2. Contract your abs to lift your shoulders off the floor and curl your chest towards your knees 3. Pause at the top of the move and squeeze your abs, then lower slowly to the start',
})

exerciseRepository.add({
  id: 'dumbbell-side-bend',
  name: 'Dumbbell side bend',
  muscleGroup: ExerciseMuscleGroup.STOMACH,
  description:
    '1. Hold a heavy dumbbell in one hand and bend your torso towards your weighted hand 2. Pause when you feel a stretch up your opposite side, then straighten up without leaning forwards or back',
})

exerciseRepository.add({
  id: 'dumbbell-crunch-reach',
  name: 'Dumbbell crunch reach',
  muscleGroup: ExerciseMuscleGroup.STOMACH,
  description:
    '1. Start by lying on your back on a mat with your knees bent and feet flat on the floor 2. Hold a dumbbell in each hand, extending your arms straight up towards the ceiling 3. Before starting the movement, engage your core muscles by drawing your navel towards your spine 4. As you exhale, lift your head, shoulders, and upper back off the floor 5. At the top of the movement, focus on squeezing your abdominal muscles to maximize the contraction. Hold this position briefly to feel the engagement in your core 6. Slowly lower your head, shoulders, and upper back back to the starting position while inhaling. Your arms with the dumbbells should lower back towards the floor as well',
})
