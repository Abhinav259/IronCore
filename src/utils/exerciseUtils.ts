export interface ExerciseDetails {
  muscle: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  equipment: string;
  tips: string;
  image: string;
  alt: string;
}

export const getExerciseDetails = (name: string): ExerciseDetails => {
  const n = name.toLowerCase();
  
  if (n.includes('burpee')) return { 
    muscle: 'Full Body, Cardiovascular', 
    primaryMuscle: 'Full Body',
    secondaryMuscles: ['Cardiovascular System', 'Core', 'Shoulders', 'Quadriceps'],
    equipment: 'Bodyweight', 
    tips: 'Drop into a squat, kick your feet back into a plank, perform a push-up, jump your feet back in, and explode upwards.', 
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp&fm=webp',
    alt: 'Person performing explosive burpees'
  };
  if (n.includes('crunch') || n.includes('sit-up') || n.includes('sit up')) return { 
    muscle: 'Abs', 
    primaryMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Obliques'],
    equipment: 'Bodyweight / Mat', 
    tips: 'Curl your upper body towards your knees while keeping your lower back pressed into the floor. Squeeze your abs at the top.', 
    image: 'https://images.unsplash.com/photo-1566241142559-40e1bfc26ebc?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing abdominal crunches'
  };
  if (n.includes('clean and press') || n.includes('hang power clean')) return { 
    muscle: 'Full Body, Explosive Power', 
    primaryMuscle: 'Full Body (Explosive)',
    secondaryMuscles: ['Quadriceps', 'Glutes', 'Shoulders', 'Back'],
    equipment: 'Barbell / Dumbbells', 
    tips: 'Explode through your hips to clean the weight to your shoulders, then press it overhead. Maintain a stable core.', 
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Athlete performing a clean and press'
  };
  if (n.includes('thruster')) return { 
    muscle: 'Full Body, Cardiovascular', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Shoulders', 'Glutes', 'Core'],
    equipment: 'Barbell / Dumbbells / Kettlebells', 
    tips: 'Combine a front squat with an overhead press in one fluid motion. Use the momentum from the squat to drive the weight up.', 
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Athlete performing thrusters'
  };
  if (n.includes('turkish get-up')) return { 
    muscle: 'Full Body, Stability, Core', 
    primaryMuscle: 'Core',
    secondaryMuscles: ['Shoulders', 'Hips', 'Stabilizers'],
    equipment: 'Kettlebell / Dumbbell', 
    tips: 'Move slowly and maintain eye contact with the weight at all times. Focus on stability through each phase of the movement.', 
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a Turkish get-up'
  };
  if (n.includes('box jump')) return { 
    muscle: 'Legs, Explosive Power', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Calves'],
    equipment: 'Plyo Box', 
    tips: 'Jump onto the box and land softly with your knees slightly bent. Step down carefully rather than jumping back.', 
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Athlete performing a box jump'
  };
  if (n.includes('medicine ball slam') || n.includes('med ball slam')) return { 
    muscle: 'Core, Shoulders, Full Body', 
    primaryMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Shoulders', 'Latissimus Dorsi'],
    equipment: 'Medicine Ball', 
    tips: 'Lift the ball overhead and slam it into the ground as hard as possible using your core. Catch it on the bounce if safe.', 
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing medicine ball slams'
  };
  if (n.includes('battle rope')) return { 
    muscle: 'Shoulders, Arms, Core, Cardiovascular', 
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Biceps Brachii', 'Triceps Brachii', 'Core'],
    equipment: 'Battle Ropes', 
    tips: 'Create waves with the ropes by moving your arms up and down or in circles. Maintain a slight bend in your knees.', 
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person using battle ropes'
  };
  if (n.includes('barbell back squat') || n.includes('back squat')) return { 
    muscle: 'Quadriceps, Glutes, Hamstrings', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Hamstrings', 'Adductors'],
    equipment: 'Barbell, Squat Rack', 
    tips: 'Drive through your mid-foot. Keep your core braced and your spine neutral throughout the movement.', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a deep barbell back squat'
  };
  if (n.includes('incline dumbbell press') || n.includes('incline db press')) return { 
    muscle: 'Upper Chest, Triceps, Anterior Deltoids', 
    primaryMuscle: 'Pectoralis Major (Clavicular Head)',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids'],
    equipment: 'Dumbbells, Incline Bench', 
    tips: 'Set the bench to a 30-45 degree angle. Press the dumbbells up while keeping your elbows at a 45-degree angle.', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing an incline dumbbell press'
  };
  if (n.includes('lateral raise')) return { 
    muscle: 'Side Deltoids', 
    primaryMuscle: 'Lateral Deltoids',
    secondaryMuscles: ['Anterior Deltoids', 'Trapezius'],
    equipment: 'Dumbbells / Cable', 
    tips: 'Raise the dumbbells to your sides until they are level with your shoulders. Keep a slight bend in your elbows.', 
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing dumbbell lateral raises'
  };
  if (n.includes('triceps pushdown') || n.includes('rope pressdown')) return { 
    muscle: 'Triceps', 
    primaryMuscle: 'Triceps Brachii',
    secondaryMuscles: [],
    equipment: 'Cable Machine', 
    tips: 'Keep your elbows fixed at your sides. Fully extend your arms to engage the triceps.', 
    image: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing triceps rope pushdowns'
  };
  if (n.includes('pull-up') || n.includes('pull up')) return { 
    muscle: 'Back, Biceps', 
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps Brachii', 'Rhomboids', 'Trapezius'],
    equipment: 'Pull-up Bar', 
    tips: 'Pull yourself up until your chin is over the bar. Focus on using your lats and squeezing your shoulder blades.', 
    image: 'https://images.unsplash.com/photo-1526506114861-f3c500078f4b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing pull-ups'
  };
  if (n.includes('barbell curl') || n.includes('ez-bar curl')) return { 
    muscle: 'Biceps', 
    primaryMuscle: 'Biceps Brachii',
    secondaryMuscles: ['Brachialis', 'Brachioradialis'],
    equipment: 'Barbell / EZ-Bar', 
    tips: 'Keep your elbows fixed at your sides. Squeeze your biceps at the top of the curl.', 
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing barbell bicep curls'
  };
  if (n.includes('front squat')) return { 
    muscle: 'Quadriceps, Glutes, Core', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Core', 'Upper Back'],
    equipment: 'Barbell, Squat Rack', 
    tips: 'Rest the bar on your front deltoids. Keep your elbows high and your torso upright throughout the movement.', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a front squat with a barbell'
  };
  if (n.includes('bulgarian split squat')) return { 
    muscle: 'Quadriceps, Glutes, Hamstrings', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Hamstrings'],
    equipment: 'Dumbbells, Bench', 
    tips: 'Place one foot behind you on a bench. Lower your hips until your front thigh is parallel to the floor.', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing Bulgarian split squats'
  };
  if (n.includes('cable crossover') || n.includes('cable fly')) return { 
    muscle: 'Chest', 
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Anterior Deltoids'],
    equipment: 'Cable Machine', 
    tips: 'Keep a slight bend in your elbows. Bring your hands together in front of your chest, squeezing your pecs.', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing cable crossovers'
  };
  if (n.includes('dumbbell pullover')) return { 
    muscle: 'Chest, Lats', 
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Latissimus Dorsi', 'Triceps Brachii'],
    equipment: 'Dumbbell, Bench', 
    tips: 'Lie across a bench with your upper back supported. Lower the dumbbell behind your head while keeping your arms relatively straight.', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a dumbbell pullover'
  };
  if (n.includes('hammer curl')) return { 
    muscle: 'Biceps, Forearms', 
    primaryMuscle: 'Brachialis',
    secondaryMuscles: ['Biceps Brachii', 'Brachioradialis'],
    equipment: 'Dumbbells', 
    tips: 'Hold the dumbbells with a neutral grip (palms facing each other). Curl the weights while keeping your elbows fixed.', 
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing dumbbell hammer curls'
  };
  if (n.includes('skull crusher') || n.includes('overhead triceps extension')) return { 
    muscle: 'Triceps', 
    primaryMuscle: 'Triceps Brachii',
    secondaryMuscles: [],
    equipment: 'Barbell / Dumbbells / Cable', 
    tips: 'Lower the weight towards your forehead or behind your head. Extend your arms fully to engage the triceps.', 
    image: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing triceps skull crushers'
  };
  if (n.includes('goblet squat')) return { 
    muscle: 'Quadriceps, Glutes, Core', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Core'],
    equipment: 'Kettlebell / Dumbbell', 
    tips: 'Hold the weight against your chest. Squat down until your elbows touch the inside of your knees, keeping your chest up.', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a goblet squat with a kettlebell'
  };
  if (n.includes('treadmill sprint') || n.includes('hiit treadmill')) return { 
    muscle: 'Full Body, Cardiovascular', 
    primaryMuscle: 'Cardiovascular System',
    secondaryMuscles: ['Quadriceps', 'Hamstrings', 'Calves'],
    equipment: 'Treadmill', 
    tips: 'Sprint at a high intensity for the specified duration, then recover at a slow walk or complete rest.', 
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person sprinting on a treadmill'
  };
  if (n.includes('overhead press') || n.includes('ohp') || n.includes('shoulder press')) return { 
    muscle: 'Shoulders, Triceps', 
    primaryMuscle: 'Deltoids',
    secondaryMuscles: ['Triceps Brachii', 'Upper Trapezius'],
    equipment: 'Barbell / Dumbbells', 
    tips: 'Press the weight overhead in a straight line. Keep your core tight and avoid arching your lower back.', 
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing an overhead shoulder press with dumbbells'
  };
  if (n.includes('leg press')) return { 
    muscle: 'Quadriceps, Glutes, Hamstrings', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Hamstrings'],
    equipment: 'Leg Press Machine', 
    tips: 'Place your feet shoulder-width apart on the platform. Lower the weight until your knees are at a 90-degree angle, then drive back up.', 
    image: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person using a leg press machine'
  };
  if (n.includes('seated cable row') || n.includes('seated row')) return { 
    muscle: 'Back, Biceps', 
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Rhomboids', 'Trapezius', 'Biceps Brachii'],
    equipment: 'Cable Machine', 
    tips: 'Sit with your feet on the platforms and a slight bend in your knees. Pull the handle towards your abdomen, squeezing your shoulder blades.', 
    image: 'https://images.unsplash.com/photo-1526506114861-f3c500078f4b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a seated cable row'
  };
  if (n.includes('mountain climber')) return { 
    muscle: 'Core, Full Body, Cardiovascular', 
    primaryMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Shoulders', 'Quadriceps', 'Hip Flexors'],
    equipment: 'Bodyweight', 
    tips: 'Start in a plank position. Alternately drive your knees towards your chest as quickly as possible while maintaining a flat back.', 
    image: 'https://images.unsplash.com/photo-1566241142559-40e1bfc26ebc?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing mountain climbers'
  };
  if (n.includes('dumbbell bench press')) return { 
    muscle: 'Chest, Triceps, Anterior Deltoids', 
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids'],
    equipment: 'Dumbbells, Bench', 
    tips: 'Lower the dumbbells to the sides of your chest. Press them back up while keeping your elbows at a 45-degree angle.', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a dumbbell bench press on a flat bench'
  };
  if (n.includes('bent-over row') || n.includes('barbell row')) return { 
    muscle: 'Back, Biceps, Rear Delts', 
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Rhomboids', 'Trapezius', 'Biceps Brachii'],
    equipment: 'Barbell / Dumbbells', 
    tips: 'Hinge at the hips and keep your back flat. Pull the weight towards your lower ribs, squeezing your shoulder blades.', 
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a bent-over barbell row with proper form'
  };
  if (n.includes('kettlebell swing')) return { 
    muscle: 'Glutes, Hamstrings, Core', 
    primaryMuscle: 'Gluteus Maximus',
    secondaryMuscles: ['Hamstrings', 'Core', 'Erector Spinae'],
    equipment: 'Kettlebell', 
    tips: 'Hinge at the hips and explode forward. The movement should be driven by your hips, not your arms.', 
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing explosive kettlebell swings'
  };
  if (n.includes('romanian deadlift') || n.includes('rdl')) return { 
    muscle: 'Hamstrings, Glutes, Lower Back', 
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Gluteus Maximus', 'Erector Spinae'],
    equipment: 'Barbell / Dumbbells', 
    tips: 'Lower the weight by hinging at the hips while keeping your legs relatively straight. Feel the stretch in your hamstrings.', 
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a Romanian deadlift with a barbell'
  };
  if (n.includes('lat pulldown')) return { 
    muscle: 'Back, Biceps', 
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Biceps Brachii', 'Rhomboids'],
    equipment: 'Cable Machine', 
    tips: 'Pull the bar down to your upper chest while leaning slightly back. Focus on using your lats rather than your arms.', 
    image: 'https://images.unsplash.com/photo-1526506114861-f3c500078f4b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a wide-grip lat pulldown on a machine'
  };
  if (n.includes('walking lunge')) return { 
    muscle: 'Quadriceps, Glutes, Hamstrings', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Hamstrings'],
    equipment: 'Bodyweight / Dumbbells', 
    tips: 'Take a large step forward and lower your hips until both knees are bent at a 90-degree angle. Keep your torso upright.', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing walking lunges in a gym'
  };
  
  // Specific overrides first to prevent incorrect matching
  if (n.includes('leg curl')) return { 
    muscle: 'Hamstrings', 
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Gastrocnemius'],
    equipment: 'Machine', 
    tips: 'Keep your hips pressed firmly against the pad. Squeeze your hamstrings at the top and control the weight on the way down.', 
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing lying leg curls on a machine to target hamstrings'
  };
  if (n.includes('leg extension')) return { 
    muscle: 'Quadriceps', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: [],
    equipment: 'Machine', 
    tips: 'Align your knees with the machine pivot point. Extend fully and squeeze your quads at the top.', 
    image: 'https://images.unsplash.com/photo-1591940742878-13aba4b7a35e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing leg extensions on a machine to target quadriceps'
  };
  if (n.includes('calf raise')) return { 
    muscle: 'Calves', 
    primaryMuscle: 'Gastrocnemius',
    secondaryMuscles: ['Soleus'],
    equipment: 'Bodyweight / Machine', 
    tips: 'Push through the balls of your feet. Pause at the top for a peak contraction and stretch fully at the bottom.', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Close up of a person performing standing calf raises'
  };
  if (n.includes('back extension')) return { 
    muscle: 'Lower Back, Hamstrings, Glutes', 
    primaryMuscle: 'Erector Spinae',
    secondaryMuscles: ['Gluteus Maximus', 'Hamstrings'],
    equipment: 'Machine / Bodyweight', 
    tips: 'Hinge at the hips and avoid hyperextending your lower back at the top. Keep a neutral spine throughout.', 
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing back extensions on a hyperextension bench'
  };
  if (n.includes('chest press') || n.includes('machine press') || n.includes('floor press') || n.includes('incline press')) return { 
    muscle: 'Chest, Triceps, Anterior Deltoids', 
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids'],
    equipment: 'Machine / Barbell / Dumbbells', 
    tips: 'Keep your shoulder blades retracted and chest up. Drive the weight up while keeping your elbows at a 45-degree angle.', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a chest press on a machine'
  };
  if (n.includes('incline bench') || n.includes('close-grip bench') || n.includes('bench press') || n.includes('bench (light speed)')) return { 
    muscle: 'Chest, Triceps, Anterior Deltoids', 
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids'],
    equipment: 'Barbell/Dumbbells, Bench', 
    tips: 'Maintain five points of contact: head, shoulders, glutes, and both feet. Touch the bar to your mid-chest and drive up.', 
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a barbell bench press'
  };
  if (n.includes('sled push')) return { 
    muscle: 'Full Body, Legs, Conditioning', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Hamstrings', 'Calves', 'Core'],
    equipment: 'Sled', 
    tips: 'Keep your body at a 45-degree angle. Drive through the balls of your feet and maintain a rigid core.', 
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a heavy sled push for conditioning'
  };
  if (n.includes('ladder drills') || n.includes('bounds') || n.includes('high knees')) return { 
    muscle: 'Legs, Agility, Conditioning', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Calves', 'Hamstrings', 'Glutes'],
    equipment: 'Agility Ladder / Bodyweight', 
    tips: 'Stay light on your feet. Focus on quick ground contact and coordinated arm movement.', 
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Athlete performing agility ladder drills'
  };
  if (n.includes('push press')) return { 
    muscle: 'Shoulders, Triceps, Legs', 
    primaryMuscle: 'Deltoids',
    secondaryMuscles: ['Triceps Brachii', 'Quadriceps', 'Glutes'],
    equipment: 'Barbell/Dumbbells', 
    tips: 'Dip slightly at the knees and use that momentum to drive the weight overhead. Lock out at the top.', 
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a barbell push press'
  };
  if (n.includes('rear delt fly')) return { 
    muscle: 'Rear Deltoids, Rhomboids', 
    primaryMuscle: 'Posterior Deltoids',
    secondaryMuscles: ['Rhomboids', 'Trapezius'],
    equipment: 'Dumbbells / Machine', 
    tips: 'Keep a slight bend in your elbows. Focus on pulling with your rear delts and squeezing your shoulder blades.', 
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing rear delt flyes with dumbbells'
  };
  if (n.includes('clean') || n.includes('snatch') || n.includes('jerk')) return { 
    muscle: 'Full Body, Explosive Power', 
    primaryMuscle: 'Full Body (Explosive)',
    secondaryMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Shoulders', 'Back'],
    equipment: 'Barbell / Dumbbells / Kettlebell', 
    tips: 'Explode through your hips. Keep the bar close to your body and catch it in a stable position.', 
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Athlete performing an explosive barbell clean'
  };
  
  // Chest & Push
  if (n.includes('bench') || n.includes('chest') || n.includes('push-up') || n.includes('push up') || n.includes('dip') || n.includes('fly')) return { 
    muscle: 'Chest, Triceps, Anterior Deltoids', 
    primaryMuscle: 'Pectoralis Major',
    secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids'],
    equipment: 'Barbell/Dumbbells, Bench, Bodyweight', 
    tips: 'Control the descent. For push-ups, keep your body in a straight line from head to heels.', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing push-ups with proper form'
  };
  
  // Legs & Squats
  if (n.includes('squat') || n.includes('leg press') || n.includes('lunge') || n.includes('step-up') || n.includes('step up') || n.includes('pistol') || n.includes('wall sit')) return { 
    muscle: 'Quadriceps, Glutes, Hamstrings', 
    primaryMuscle: 'Quadriceps',
    secondaryMuscles: ['Gluteus Maximus', 'Hamstrings', 'Adductors'],
    equipment: 'Barbell, Squat Rack / Machine / Dumbbells', 
    tips: 'Drive through your mid-foot. Keep your core braced and your spine neutral throughout the movement.', 
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a deep barbell back squat'
  };
  
  // Posterior Chain & Deadlifts
  if (n.includes('deadlift') || n.includes('rdl') || n.includes('hip thrust') || n.includes('glute bridge') || n.includes('hip hinge') || n.includes('good morning')) return { 
    muscle: 'Hamstrings, Glutes, Lower Back', 
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Gluteus Maximus', 'Erector Spinae', 'Trapezius'],
    equipment: 'Barbell, Plates, Bodyweight', 
    tips: 'Hinge at the hips. Keep the weight close to your shins and maintain a flat back.', 
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a conventional barbell deadlift'
  };
  
  // Back & Pull
  if (n.includes('row') || n.includes('pull') || n.includes('lat') || n.includes('shrug') || n.includes('face pull') || n.includes('chin-up') || n.includes('inverted row')) return { 
    muscle: 'Latissimus Dorsi, Rhomboids, Biceps, Traps', 
    primaryMuscle: 'Latissimus Dorsi',
    secondaryMuscles: ['Rhomboids', 'Trapezius', 'Biceps Brachii'],
    equipment: 'Barbell/Dumbbells/Cable', 
    tips: 'Initiate the movement by pulling your shoulder blades back. Avoid using excessive momentum.', 
    image: 'https://images.unsplash.com/photo-1526506114861-f3c500078f4b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing pull-ups to target the back muscles'
  };
  
  // Shoulders & Press
  if (n.includes('press') || n.includes('shoulder') || n.includes('ohp') || n.includes('lateral raise') || n.includes('arnold') || n.includes('upright row')) return { 
    muscle: 'Deltoids, Triceps', 
    primaryMuscle: 'Deltoids',
    secondaryMuscles: ['Triceps Brachii', 'Upper Trapezius'],
    equipment: 'Barbell/Dumbbells', 
    tips: 'Press the weight in a straight line. Keep your core tight to stabilize your torso.', 
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing an overhead shoulder press with dumbbells'
  };
  
  // Arms (Biceps & Triceps)
  if (n.includes('curl')) return { 
    muscle: 'Biceps', 
    primaryMuscle: 'Biceps Brachii',
    secondaryMuscles: ['Brachialis', 'Brachioradialis'],
    equipment: 'Dumbbells/Barbell/Cable', 
    tips: 'Keep your elbows fixed at your sides. Squeeze your biceps at the top of the curl.', 
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing standing bicep curls with dumbbells'
  };
  if (n.includes('extension') || n.includes('pressdown') || n.includes('skull crusher') || n.includes('triceps dip')) return { 
    muscle: 'Triceps', 
    primaryMuscle: 'Triceps Brachii',
    secondaryMuscles: [],
    equipment: 'Machine/Cable/Dumbbells', 
    tips: 'Fully extend your arms to engage the triceps. Control the weight on the return phase.', 
    image: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing triceps rope pushdowns'
  };
  
  // Core, Abs & Recovery
  if (n.includes('plank') || n.includes('crunch') || n.includes('twist') || n.includes('raise') || n.includes('dead bug') || n.includes('wood chop') || n.includes('hollow') || n.includes('sit') || n.includes('bend') || n.includes('breathing') || n.includes('kegel') || n.includes('pelvic') || n.includes('mcgill') || n.includes('bird dog') || n.includes('renegade row')) return { 
    muscle: 'Core, Abs, Obliques, Pelvic Floor', 
    primaryMuscle: 'Rectus Abdominis',
    secondaryMuscles: ['Obliques', 'Transverse Abdominis', 'Erector Spinae'],
    equipment: 'Bodyweight / Mat / Cable', 
    tips: 'Focus on quality over quantity. Keep your core engaged and avoid arching your back.', 
    image: 'https://images.unsplash.com/photo-1566241142559-40e1bfc26ebc?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a forearm plank for core stability'
  };
  
  // Cardio, Conditioning & Mobility
  if (n.includes('burpee') || n.includes('climber') || n.includes('swing') || n.includes('jump') || n.includes('sled') || n.includes('sprint') || n.includes('run') || n.includes('emom') || n.includes('tabata') || n.includes('amrap') || n.includes('wod') || n.includes('chipper') || n.includes('thruster') || n.includes('battle rope') || n.includes('sprawl') || n.includes('shadowboxing') || n.includes('heavy bag')) return { 
    muscle: 'Full Body, Core, Cardiovascular', 
    primaryMuscle: 'Full Body',
    secondaryMuscles: ['Cardiovascular System', 'Core'],
    equipment: 'Bodyweight / Kettlebell / Sled', 
    tips: 'Maintain a steady pace. Focus on explosive movements while keeping your core tight.', 
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Athlete performing high-intensity interval training'
  };
  if (n.includes('walk') || n.includes('cycle') || n.includes('cardio') || n.includes('bike') || n.includes('rower') || n.includes('intervals') || n.includes('tempo') || n.includes('session') || n.includes('march') || n.includes('jog') || n.includes('ruck') || n.includes('trail run')) return { 
    muscle: 'Cardiovascular System', 
    primaryMuscle: 'Cardiovascular System',
    secondaryMuscles: ['Legs'],
    equipment: 'Treadmill / Bike / Rower / Bodyweight', 
    tips: 'Focus on consistent breathing. Stay within your target heart rate for maximum benefit.', 
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person running outdoors for cardiovascular health'
  };
  if (n.includes('mobility') || n.includes('stretch') || n.includes('angel') || n.includes('y-t-w') || n.includes('halo') || n.includes('get-up') || n.includes('foam roll') || n.includes('joint prep')) return { 
    muscle: 'Full Body Mobility, Posture', 
    primaryMuscle: 'Full Body (Mobility)',
    secondaryMuscles: ['Joints', 'Connective Tissue'],
    equipment: 'Bodyweight / Mat / Band', 
    tips: 'Move slowly and mindfully. Focus on increasing your range of motion over time.', 
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing dynamic stretching for mobility'
  };
  if (n.includes('carry') || n.includes('yoke') || n.includes('sandbag') || n.includes('stone') || n.includes('log') || n.includes('axle') || n.includes('suitcase carry')) return { 
    muscle: 'Core, Forearms, Traps, Full Body (Strongman)', 
    primaryMuscle: 'Core',
    secondaryMuscles: ['Forearms', 'Trapezius', 'Glutes', 'Legs'],
    equipment: 'Odd Objects / Heavy Weights', 
    tips: 'Keep your posture upright. Brace your core and take small, controlled steps.', 
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person performing a heavy carry exercise'
  };
  if (n.includes('ring') || n.includes('muscle-up') || n.includes('skin the cat') || n.includes('lever') || n.includes('hang') || n.includes('false grip')) return { 
    muscle: 'Upper Body, Core, Stabilizers', 
    primaryMuscle: 'Upper Body',
    secondaryMuscles: ['Core', 'Stabilizers'],
    equipment: 'Gymnastics Rings / Pull-up Bar', 
    tips: 'Maintain a hollow body position. Focus on stability and control throughout the movement.', 
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Athlete performing gymnastics ring exercises'
  };
  if (n.includes('water') || n.includes('pool') || n.includes('swim') || n.includes('aqua')) return { 
    muscle: 'Full Body, Cardiovascular (Low Impact)', 
    primaryMuscle: 'Full Body',
    secondaryMuscles: ['Cardiovascular System'],
    equipment: 'Pool / Aqua Dumbbells', 
    tips: 'Use the water resistance to your advantage. Focus on smooth, controlled movements.', 
    image: 'https://images.unsplash.com/photo-1530549387634-e797ca996236?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person swimming in a pool for low-impact exercise'
  };
  
  return {
    muscle: 'Targeted Muscle Groups',
    primaryMuscle: 'Targeted Muscle',
    secondaryMuscles: [],
    equipment: 'Standard Gym Equipment',
    tips: 'Maintain proper form, control the eccentric portion of the movement, and breathe properly.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=60&w=600&auto=format&fit=crop&fm=webp',
    alt: 'Person exercising in a gym setting'
  };
};

export const exerciseVideoIds: Record<string, string> = {
  'goblet squat': 'MeIiIdhvXT4',
  'dumbbell bench press': 'vm1JASnvZf0',
  'bent-over row': '6TSz9Z87z9M',
  'kettlebell swings': 'sSESeQAnnyQ',
  'hiit treadmill sprints': '6S_p78Y8iX0',
  'plank': 'pSHjTRCQxIw',
  'romanian deadlift': 'JCXUYuzwKAw',
  'overhead press': '2yjwXTZQDDI',
  'lat pulldown': 'CAwf7n6Luuc',
  'walking lunges': 'D7KaRcUTQeE',
  'leg press': 'IZxyjW7MPJQ',
  'push-ups': 'IODxDxX7oi4',
  'seated cable row': 'GZbfZ033f74',
  'mountain climbers': 'nmwgirgXLYM',
  'barbell back squat': 'SW_C1A-rejs',
  'leg curl': '1Tq3QdAU06U',
  'calf raise': 'gwLzBJYoWlI',
  'barbell bench press': 'rT7DgDICPdmc',
  'incline dumbbell press': '8iPEnn-ltC8',
  'lateral raise': '3VcKaXpzqRo',
  'triceps pushdown': '2-LAMcpzOuU',
  'pull-ups': 'eGo4IYlbE5g',
  'barbell row': '9efgcAjQW7E',
  'face pulls': 'V8dZ39y8z1M',
  'barbell curls': 'ykJmrZ5v0BA',
  'front squat': 'VfBOBwVfS8Y',
  'bulgarian split squat': '2C-uNgKwPLE',
  'cable crossovers': 'W7_p0fW_8Xo',
  'dumbbell pullover': '5n3mJJZ8v0k',
  'hammer curls': 'zC3nLlEvin4',
  'skull crushers': 'd_KZxPaiu1M',
  'deadlift': 'op9kVnSso6Q',
  'burpees': 'dZfeV7UAx18',
  'clean and press': '6tQc9F_30S4',
  'thrusters': 'L219ltL15zk',
  'man makers': 'g_m0_9X_9Xo',
  'turkish get-ups': '066em79W_9Xo',
  'kettlebell halos': '9X_9X_9X_9Xo'
};
