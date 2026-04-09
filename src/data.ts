import { WorkoutPlan, DietPlan, MealAlternatives } from './types';

export const workoutPlans: WorkoutPlan[] = [
  {
    "id": "endurance-cardio-blast",
    "title": "Endurance & Cardio Blast",
    "goal": "endurance",
    "level": "intermediate",
    "gender": "both",
    "preference": "home",
    "description": "Boost your stamina and cardiovascular health with this high-energy endurance plan. Perfect for those looking to improve their heart health, burn calories, and build lasting stamina without needing a gym.",
    "image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Jumping Jacks","sets":3,"reps":"60 sec","day":"Monday"},
      {"name":"High Knees","sets":3,"reps":"45 sec","day":"Monday"},
      {"name":"Burpees","sets":3,"reps":"15","day":"Monday"},
      {"name":"Mountain Climbers","sets":3,"reps":"60 sec","day":"Monday"},
      {"name":"Rest / Light Stretching","sets":1,"reps":"15 min","day":"Tuesday"},
      {"name":"Jump Rope","sets":5,"reps":"3 min","day":"Wednesday"},
      {"name":"Squat Jumps","sets":4,"reps":"20","day":"Wednesday"},
      {"name":"Alternating Lunges","sets":4,"reps":"30","day":"Wednesday"},
      {"name":"Plank Jacks","sets":3,"reps":"45 sec","day":"Wednesday"},
      {"name":"Active Recovery (Brisk Walk)","sets":1,"reps":"45 min","day":"Thursday"},
      {"name":"Shadow Boxing","sets":4,"reps":"3 min","day":"Friday"},
      {"name":"Bicycle Crunches","sets":4,"reps":"40","day":"Friday"},
      {"name":"Skater Jumps","sets":4,"reps":"30","day":"Friday"},
      {"name":"Long Run / Jog","sets":1,"reps":"45-60 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "yoga-flexibility-flow",
    "title": "Yoga & Flexibility Flow",
    "goal": "general-fitness",
    "level": "beginner",
    "gender": "both",
    "preference": "home",
    "description": "Improve your mobility, reduce stress, and enhance your overall flexibility with this calming yoga and stretching routine. Ideal for beginners or as a recovery plan.",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Child's Pose","sets":1,"reps":"2 min","day":"Monday"},
      {"name":"Cat-Cow Stretch","sets":2,"reps":"10","day":"Monday"},
      {"name":"Downward-Facing Dog","sets":3,"reps":"1 min","day":"Monday"},
      {"name":"Cobra Pose","sets":2,"reps":"30 sec","day":"Monday"},
      {"name":"Sun Salutations","sets":5,"reps":"1 flow","day":"Tuesday"},
      {"name":"Warrior I & II","sets":2,"reps":"1 min/side","day":"Tuesday"},
      {"name":"Triangle Pose","sets":2,"reps":"45 sec/side","day":"Tuesday"},
      {"name":"Seated Forward Fold","sets":2,"reps":"2 min","day":"Wednesday"},
      {"name":"Pigeon Pose","sets":2,"reps":"1.5 min/side","day":"Wednesday"},
      {"name":"Supine Spinal Twist","sets":2,"reps":"1 min/side","day":"Wednesday"},
      {"name":"Rest / Meditation","sets":1,"reps":"15 min","day":"Thursday"},
      {"name":"Standing Forward Bend","sets":2,"reps":"1 min","day":"Friday"},
      {"name":"Lunge with Spinal Twist","sets":2,"reps":"1 min/side","day":"Friday"},
      {"name":"Bridge Pose","sets":3,"reps":"45 sec","day":"Friday"},
      {"name":"Full Body Flow (Combine moves)","sets":1,"reps":"30 min","day":"Saturday"},
      {"name":"Rest / Savasana","sets":1,"reps":"10 min","day":"Sunday"}
    ]
  },
  {
    "id": "advanced-hiit-fat-burner",
    "title": "Advanced HIIT Fat Burner",
    "goal": "fat-loss",
    "level": "advanced",
    "gender": "both",
    "preference": "home",
    "description": "A high-octane, sweat-inducing HIIT program designed to torch calories and melt fat. This advanced routine requires no equipment but demands maximum effort.",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Burpee Broad Jumps","sets":5,"reps":"45s work/15s rest","day":"Monday"},
      {"name":"Tuck Jumps","sets":5,"reps":"45s work/15s rest","day":"Monday"},
      {"name":"Plyo Push-ups","sets":5,"reps":"45s work/15s rest","day":"Monday"},
      {"name":"V-Ups","sets":5,"reps":"45s work/15s rest","day":"Monday"},
      {"name":"Active Recovery (Light Jog)","sets":1,"reps":"30 min","day":"Tuesday"},
      {"name":"Sprint Intervals","sets":10,"reps":"30s sprint/30s walk","day":"Wednesday"},
      {"name":"Jump Lunges","sets":4,"reps":"40s work/20s rest","day":"Wednesday"},
      {"name":"Commandos (Plank to Push-up)","sets":4,"reps":"40s work/20s rest","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Box Jumps (or Squat Jumps)","sets":5,"reps":"45s work/15s rest","day":"Friday"},
      {"name":"Spiderman Push-ups","sets":5,"reps":"45s work/15s rest","day":"Friday"},
      {"name":"Russian Twists","sets":5,"reps":"45s work/15s rest","day":"Friday"},
      {"name":"High Knees Sprint","sets":5,"reps":"45s work/15s rest","day":"Friday"},
      {"name":"Full Body Circuit (All exercises)","sets":1,"reps":"30 min AMRAP","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "ultimate-muscle-builder",
    "title": "Ultimate Muscle Builder",
    "goal": "muscle-gain",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "Pack on serious mass with this classic bodybuilding split. Focus on heavy compound lifts and targeted isolation work to maximize hypertrophy.",
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Barbell Bench Press","sets":4,"reps":"8-10","day":"Monday"},
      {"name":"Incline Dumbbell Press","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Cable Crossovers","sets":3,"reps":"12-15","day":"Monday"},
      {"name":"Triceps Pushdown","sets":4,"reps":"10-12","day":"Monday"},
      {"name":"Barbell Row","sets":4,"reps":"8-10","day":"Tuesday"},
      {"name":"Lat Pulldown","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Seated Cable Row","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Barbell Curls","sets":4,"reps":"10-12","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Barbell Squat","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Leg Press","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Leg Extensions","sets":3,"reps":"12-15","day":"Thursday"},
      {"name":"Calf Raises","sets":4,"reps":"15-20","day":"Thursday"},
      {"name":"Overhead Press","sets":4,"reps":"8-10","day":"Friday"},
      {"name":"Lateral Raises","sets":4,"reps":"12-15","day":"Friday"},
      {"name":"Front Raises","sets":3,"reps":"12-15","day":"Friday"},
      {"name":"Shrugs","sets":4,"reps":"12-15","day":"Friday"},
      {"name":"Rest / Active Recovery","sets":1,"reps":"30 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "best-weight-loss-workout",
    "title": "Best Workout Plan for Weight Loss",
    "goal": "fat-loss",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "The best workout plan for weight loss combines high-intensity interval training (HIIT) with strength training to maximize calorie burn and preserve lean muscle mass.",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Goblet Squat","sets":4,"reps":"12-15","day":"Monday"},
      {"name":"Dumbbell Bench Press","sets":4,"reps":"10-12","day":"Monday"},
      {"name":"Bent-Over Row","sets":4,"reps":"10-12","day":"Monday"},
      {"name":"Kettlebell Swings","sets":4,"reps":"20","day":"Monday"},
      {"name":"HIIT Treadmill Sprints","sets":8,"reps":"30s sprint/30s rest","day":"Tuesday"},
      {"name":"Plank","sets":3,"reps":"60 sec","day":"Tuesday"},
      {"name":"Romanian Deadlift","sets":4,"reps":"10-12","day":"Wednesday"},
      {"name":"Overhead Press","sets":4,"reps":"10-12","day":"Wednesday"},
      {"name":"Lat Pulldown","sets":4,"reps":"12-15","day":"Wednesday"},
      {"name":"Walking Lunges","sets":3,"reps":"15/leg","day":"Wednesday"},
      {"name":"Active Recovery (Light Walk/Cycle)","sets":1,"reps":"45 min","day":"Thursday"},
      {"name":"Leg Press","sets":4,"reps":"15","day":"Friday"},
      {"name":"Push-ups","sets":4,"reps":"To failure","day":"Friday"},
      {"name":"Seated Cable Row","sets":4,"reps":"12-15","day":"Friday"},
      {"name":"Mountain Climbers","sets":4,"reps":"45 sec","day":"Friday"},
      {"name":"Rowing Machine Intervals","sets":10,"reps":"1 min hard/1 min easy","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "gym-workout-muscle-gain",
    "title": "Gym Workout Plan for Muscle Gain",
    "goal": "muscle-gain",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "A comprehensive gym workout plan for muscle gain focusing on progressive overload, compound movements, and targeted isolation exercises for maximum hypertrophy.",
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Barbell Back Squat","sets":4,"reps":"6-8","day":"Monday"},
      {"name":"Leg Press","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Romanian Deadlift","sets":4,"reps":"8-10","day":"Monday"},
      {"name":"Leg Curl","sets":3,"reps":"12-15","day":"Monday"},
      {"name":"Calf Raise","sets":4,"reps":"15-20","day":"Monday"},
      {"name":"Barbell Bench Press","sets":4,"reps":"6-8","day":"Tuesday"},
      {"name":"Incline Dumbbell Press","sets":3,"reps":"8-10","day":"Tuesday"},
      {"name":"Overhead Press","sets":3,"reps":"8-10","day":"Tuesday"},
      {"name":"Lateral Raise","sets":4,"reps":"12-15","day":"Tuesday"},
      {"name":"Triceps Pushdown","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Pull-ups","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Barbell Row","sets":4,"reps":"6-8","day":"Thursday"},
      {"name":"Lat Pulldown","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Face Pulls","sets":3,"reps":"12-15","day":"Thursday"},
      {"name":"Barbell Curls","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Front Squat","sets":3,"reps":"8-10","day":"Friday"},
      {"name":"Bulgarian Split Squat","sets":3,"reps":"10-12/leg","day":"Friday"},
      {"name":"Dumbbell Bench Press","sets":3,"reps":"8-10","day":"Friday"},
      {"name":"Cable Crossovers","sets":3,"reps":"12-15","day":"Friday"},
      {"name":"Seated Cable Row","sets":3,"reps":"10-12","day":"Saturday"},
      {"name":"Dumbbell Pullover","sets":3,"reps":"12-15","day":"Saturday"},
      {"name":"Hammer Curls","sets":3,"reps":"10-12","day":"Saturday"},
      {"name":"Skull Crushers","sets":3,"reps":"10-12","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "beginner-1",
    "title": "Beginner Full-Body Plan",
    "goal": "muscle-gain",
    "level": "beginner",
    "gender": "both",
    "preference": "gym",
    "description": "Best for brand-new lifters, people returning after a break, and anyone who wants a simple full-body rhythm.",
    "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Goblet Squat","sets":3,"reps":"10","day":"Monday"},
      {"name":"Push-up or DB Bench","sets":3,"reps":"8-12","day":"Monday"},
      {"name":"Seated Row","sets":3,"reps":"10","day":"Monday"},
      {"name":"Romanian Deadlift","sets":3,"reps":"10","day":"Monday"},
      {"name":"Plank","sets":3,"reps":"30-45 sec","day":"Monday"},
      {"name":"20-30 min walk or cycle","sets":1,"reps":"20-30 min","day":"Tuesday"},
      {"name":"Hip, hamstring, thoracic, and shoulder mobility","sets":1,"reps":"10 min","day":"Tuesday"},
      {"name":"Leg Press or Split Squat","sets":3,"reps":"10","day":"Wednesday"},
      {"name":"DB Overhead Press","sets":3,"reps":"8-10","day":"Wednesday"},
      {"name":"Lat Pulldown","sets":3,"reps":"10","day":"Wednesday"},
      {"name":"Glute Bridge","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Dead Bug","sets":3,"reps":"10/side","day":"Wednesday"},
      {"name":"Optional easy cardio and light stretching","sets":1,"reps":"15-20 min","day":"Thursday"},
      {"name":"Trap-bar Deadlift","sets":3,"reps":"5-6","day":"Friday"},
      {"name":"Incline DB Press","sets":3,"reps":"8","day":"Friday"},
      {"name":"Cable Row","sets":3,"reps":"10","day":"Friday"},
      {"name":"Walking Lunge","sets":2,"reps":"12/leg","day":"Friday"},
      {"name":"Side Plank","sets":3,"reps":"20-30 sec/side","day":"Friday"},
      {"name":"15-25 min easy cardio","sets":1,"reps":"15-25 min","day":"Saturday"},
      {"name":"Optional Curls","sets":2,"reps":"12-15","day":"Saturday"},
      {"name":"Triceps Pressdowns","sets":2,"reps":"12-15","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "hypertrophy-1",
    "title": "Push/Pull/Legs Hypertrophy",
    "goal": "muscle-gain",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "Best for advanced beginners and intermediates who can recover from higher weekly volume.",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Barbell Bench Press","sets":4,"reps":"6-8","day":"Monday"},
      {"name":"Incline DB Press","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Seated OHP","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Lateral Raise","sets":4,"reps":"12-15","day":"Monday"},
      {"name":"Rope Pressdown","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Pull-up or Lat Pulldown","sets":4,"reps":"6-10","day":"Tuesday"},
      {"name":"Barbell Row","sets":4,"reps":"6-8","day":"Tuesday"},
      {"name":"Single-arm Cable Row","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Rear Delt Fly","sets":3,"reps":"15","day":"Tuesday"},
      {"name":"EZ-bar Curl","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Back Squat","sets":4,"reps":"6-8","day":"Wednesday"},
      {"name":"RDL","sets":4,"reps":"8-10","day":"Wednesday"},
      {"name":"Leg Press","sets":3,"reps":"10-12","day":"Wednesday"},
      {"name":"Leg Curl","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Calf Raise","sets":4,"reps":"12-15","day":"Wednesday"},
      {"name":"Incline DB Bench","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Machine Chest Press","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Arnold Press","sets":3,"reps":"10","day":"Thursday"},
      {"name":"Cable Fly","sets":3,"reps":"12-15","day":"Thursday"},
      {"name":"Overhead Triceps Extension","sets":3,"reps":"12","day":"Thursday"},
      {"name":"Chest-supported Row","sets":4,"reps":"8-10","day":"Friday"},
      {"name":"Neutral-grip Pulldown","sets":3,"reps":"10-12","day":"Friday"},
      {"name":"Face Pull","sets":3,"reps":"15","day":"Friday"},
      {"name":"Shrugs","sets":3,"reps":"12","day":"Friday"},
      {"name":"Hammer Curl","sets":3,"reps":"12","day":"Friday"},
      {"name":"Front Squat","sets":4,"reps":"5-8","day":"Saturday"},
      {"name":"Hip Thrust","sets":3,"reps":"8-10","day":"Saturday"},
      {"name":"Walking Lunge","sets":3,"reps":"12/leg","day":"Saturday"},
      {"name":"Leg Extension","sets":3,"reps":"15","day":"Saturday"},
      {"name":"Seated Calf Raise","sets":4,"reps":"15","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "strength-1",
    "title": "Strength / Powerlifting Plan",
    "goal": "strength",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Prioritizes squat, bench press, deadlift, and overhead press with controlled accessory work.",
    "image": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Back Squat","sets":5,"reps":"3","day":"Monday"},
      {"name":"Pause Squat","sets":3,"reps":"3","day":"Monday"},
      {"name":"RDL","sets":3,"reps":"6","day":"Monday"},
      {"name":"Leg Curl","sets":3,"reps":"8","day":"Monday"},
      {"name":"Plank","sets":3,"reps":"45 sec","day":"Monday"},
      {"name":"Bench Press","sets":5,"reps":"3","day":"Tuesday"},
      {"name":"Close-grip Bench","sets":3,"reps":"5","day":"Tuesday"},
      {"name":"Barbell Row","sets":4,"reps":"5","day":"Tuesday"},
      {"name":"Triceps Dip","sets":3,"reps":"6-8","day":"Tuesday"},
      {"name":"Face Pull","sets":3,"reps":"15","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Deadlift","sets":5,"reps":"2-3","day":"Thursday"},
      {"name":"Block Pull","sets":3,"reps":"3","day":"Thursday"},
      {"name":"Front Squat","sets":3,"reps":"5","day":"Thursday"},
      {"name":"Back Extension","sets":3,"reps":"10","day":"Thursday"},
      {"name":"Farmer Carry","sets":4,"reps":"30 m","day":"Thursday"},
      {"name":"Overhead Press","sets":5,"reps":"3","day":"Friday"},
      {"name":"Weighted Pull-up or Pulldown","sets":4,"reps":"5","day":"Friday"},
      {"name":"Incline Bench","sets":3,"reps":"5","day":"Friday"},
      {"name":"Chest-supported Row","sets":3,"reps":"8","day":"Friday"},
      {"name":"Lateral Raise","sets":3,"reps":"12","day":"Friday"},
      {"name":"Squat (Light Speed)","sets":6,"reps":"2","day":"Saturday"},
      {"name":"Bench (Light Speed)","sets":6,"reps":"2","day":"Saturday"},
      {"name":"Sled Push or Bike Sprint","sets":6,"reps":"10-15 sec","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "fat-loss-1",
    "title": "Fat-Loss & Conditioning",
    "goal": "fat-loss",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "Keeps strength work in the program so muscle is preserved while calories are burned.",
    "image": "https://images.unsplash.com/photo-1434596922112-19c563067271?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Squat","sets":4,"reps":"6","day":"Monday"},
      {"name":"DB Bench","sets":3,"reps":"8","day":"Monday"},
      {"name":"Row","sets":3,"reps":"8","day":"Monday"},
      {"name":"Walking Lunge","sets":3,"reps":"10/leg","day":"Monday"},
      {"name":"Plank","sets":3,"reps":"45 sec","day":"Monday"},
      {"name":"Bike or Rower Intervals","sets":10,"reps":"30 sec hard / 90 sec easy","day":"Tuesday"},
      {"name":"Mobility","sets":1,"reps":"10 min","day":"Tuesday"},
      {"name":"Push-up or Machine Press","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Pulldown","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"DB Shoulder Press","sets":3,"reps":"10","day":"Wednesday"},
      {"name":"Cable Wood Chop","sets":3,"reps":"12/side","day":"Wednesday"},
      {"name":"Curls","sets":2,"reps":"15","day":"Wednesday"},
      {"name":"Low-intensity Cardio","sets":1,"reps":"30-45 min","day":"Thursday"},
      {"name":"Deadlift","sets":3,"reps":"5","day":"Friday"},
      {"name":"Leg Press","sets":3,"reps":"12","day":"Friday"},
      {"name":"Kettlebell Swing","sets":3,"reps":"15","day":"Friday"},
      {"name":"Step-up","sets":3,"reps":"12/leg","day":"Friday"},
      {"name":"Mountain Climber","sets":3,"reps":"30 sec","day":"Friday"},
      {"name":"Goblet Squat (Circuit)","sets":4,"reps":"12","day":"Saturday"},
      {"name":"Push-up (Circuit)","sets":4,"reps":"10","day":"Saturday"},
      {"name":"Row (Circuit)","sets":4,"reps":"12","day":"Saturday"},
      {"name":"Sled Push (Circuit)","sets":4,"reps":"20 m","day":"Saturday"},
      {"name":"Jump Rope (Circuit)","sets":4,"reps":"45 sec","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "endurance-1",
    "title": "Endurance & Cardio Plan",
    "goal": "endurance",
    "level": "beginner",
    "gender": "both",
    "preference": "home",
    "description": "For runners, cyclists, rowers, and anyone who wants better aerobic capacity.",
    "image": "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Zone 2 Base Cardio","sets":1,"reps":"40-60 min","day":"Monday"},
      {"name":"Tempo Work","sets":1,"reps":"20-30 min hard","day":"Tuesday"},
      {"name":"Calf Raises","sets":3,"reps":"15","day":"Tuesday"},
      {"name":"Split Squat","sets":3,"reps":"8/leg","day":"Wednesday"},
      {"name":"Push-up","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Row","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Hip Hinge","sets":3,"reps":"10","day":"Wednesday"},
      {"name":"Side Plank","sets":3,"reps":"30 sec","day":"Wednesday"},
      {"name":"Intervals","sets":6,"reps":"3 min hard / 2 min easy","day":"Thursday"},
      {"name":"Recovery Cardio","sets":1,"reps":"25-35 min","day":"Friday"},
      {"name":"Long Session","sets":1,"reps":"60-90 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "athletic-1",
    "title": "Athletic Performance / Power Plan",
    "goal": "strength",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Designed for speed, jumping, acceleration, and full-body power.",
    "image": "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Hang Power Clean","sets":5,"reps":"3","day":"Monday"},
      {"name":"Box Jump","sets":4,"reps":"3","day":"Monday"},
      {"name":"Back Squat","sets":4,"reps":"4","day":"Monday"},
      {"name":"RDL","sets":3,"reps":"6","day":"Monday"},
      {"name":"Sled Push","sets":5,"reps":"20 m","day":"Monday"},
      {"name":"Acceleration Sprints","sets":6,"reps":"20 m","day":"Tuesday"},
      {"name":"Shuttle Runs","sets":5,"reps":"3","day":"Tuesday"},
      {"name":"Ladder Drills","sets":1,"reps":"10 min","day":"Tuesday"},
      {"name":"Core Anti-rotation","sets":3,"reps":"12/side","day":"Tuesday"},
      {"name":"Push Press","sets":5,"reps":"3","day":"Wednesday"},
      {"name":"Med-ball Chest Pass","sets":4,"reps":"5","day":"Wednesday"},
      {"name":"Weighted Pull-up","sets":4,"reps":"4-6","day":"Wednesday"},
      {"name":"DB Bench","sets":3,"reps":"6","day":"Wednesday"},
      {"name":"Face Pull","sets":3,"reps":"15","day":"Wednesday"},
      {"name":"Mobility, foam rolling, and 20 min easy bike","sets":1,"reps":"20 min","day":"Thursday"},
      {"name":"Trap-bar Deadlift","sets":4,"reps":"4","day":"Friday"},
      {"name":"Front Squat","sets":4,"reps":"4","day":"Friday"},
      {"name":"Incline Press","sets":3,"reps":"6","day":"Friday"},
      {"name":"Row","sets":3,"reps":"6-8","day":"Friday"},
      {"name":"Farmer Carry","sets":4,"reps":"25 m","day":"Friday"},
      {"name":"Broad Jump","sets":4,"reps":"3","day":"Saturday"},
      {"name":"Bounds","sets":3,"reps":"20 m","day":"Saturday"},
      {"name":"Sprint Intervals","sets":6,"reps":"15 sec","day":"Saturday"},
      {"name":"Jump Rope","sets":5,"reps":"1 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "home-1",
    "title": "Home / No-Equipment Plan",
    "goal": "fat-loss",
    "level": "beginner",
    "gender": "both",
    "preference": "home",
    "description": "Useful for travel, small spaces, or bodyweight-only training.",
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Air Squat","sets":4,"reps":"15","day":"Monday"},
      {"name":"Push-up","sets":4,"reps":"8-15","day":"Monday"},
      {"name":"Towel Row or Band Row","sets":4,"reps":"12","day":"Monday"},
      {"name":"Glute Bridge","sets":3,"reps":"20","day":"Monday"},
      {"name":"Plank","sets":3,"reps":"45 sec","day":"Monday"},
      {"name":"20-30 min brisk walk, stair climbing, or marching in place","sets":1,"reps":"20-30 min","day":"Tuesday"},
      {"name":"Hip and shoulder mobility","sets":1,"reps":"10 min","day":"Tuesday"},
      {"name":"Split Squat","sets":3,"reps":"12/leg","day":"Wednesday"},
      {"name":"Pike Push-up","sets":3,"reps":"8-12","day":"Wednesday"},
      {"name":"Reverse Snow Angel","sets":3,"reps":"15","day":"Wednesday"},
      {"name":"Hip Hinge Good Morning","sets":3,"reps":"20","day":"Wednesday"},
      {"name":"Dead Bug","sets":3,"reps":"12/side","day":"Wednesday"},
      {"name":"Mountain Climber (Circuit)","sets":4,"reps":"30 sec","day":"Thursday"},
      {"name":"Burpee (Circuit)","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"Hollow Hold (Circuit)","sets":4,"reps":"20 sec","day":"Thursday"},
      {"name":"High Knees (Circuit)","sets":4,"reps":"30 sec","day":"Thursday"},
      {"name":"Step-up","sets":3,"reps":"12/leg","day":"Friday"},
      {"name":"Incline Push-up","sets":3,"reps":"12","day":"Friday"},
      {"name":"Backpack Row","sets":3,"reps":"15","day":"Friday"},
      {"name":"Single-leg RDL","sets":3,"reps":"10/leg","day":"Friday"},
      {"name":"Side Plank","sets":3,"reps":"30 sec","day":"Friday"},
      {"name":"Biceps Curl with band or backpack","sets":3,"reps":"15","day":"Saturday"},
      {"name":"Triceps Extension","sets":3,"reps":"15","day":"Saturday"},
      {"name":"Reverse Crunch","sets":3,"reps":"15","day":"Saturday"},
      {"name":"Calf Raise","sets":4,"reps":"20","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "dumbbell-1",
    "title": "Dumbbell-Only Plan",
    "goal": "muscle-gain",
    "level": "intermediate",
    "gender": "both",
    "preference": "home",
    "description": "A compact gym or home dumbbell plan that still covers all major movement patterns.",
    "image": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"DB Bench Press","sets":4,"reps":"8-10","day":"Monday"},
      {"name":"One-arm Row","sets":4,"reps":"10/side","day":"Monday"},
      {"name":"DB Shoulder Press","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Lateral Raise","sets":3,"reps":"15","day":"Monday"},
      {"name":"Curls","sets":3,"reps":"12","day":"Monday"},
      {"name":"Goblet Squat","sets":4,"reps":"10","day":"Tuesday"},
      {"name":"DB Romanian Deadlift","sets":4,"reps":"10","day":"Tuesday"},
      {"name":"Reverse Lunge","sets":3,"reps":"10/leg","day":"Tuesday"},
      {"name":"Calf Raise","sets":4,"reps":"15","day":"Tuesday"},
      {"name":"Dead Bug","sets":3,"reps":"10/side","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Incline DB Press","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Chest-supported DB Row","sets":4,"reps":"10","day":"Thursday"},
      {"name":"Arnold Press","sets":3,"reps":"10","day":"Thursday"},
      {"name":"Rear Delt Fly","sets":3,"reps":"15","day":"Thursday"},
      {"name":"Triceps Extension","sets":3,"reps":"12","day":"Thursday"},
      {"name":"Bulgarian Split Squat","sets":4,"reps":"8-10/leg","day":"Friday"},
      {"name":"DB Hip Thrust","sets":3,"reps":"12","day":"Friday"},
      {"name":"Step-up","sets":3,"reps":"10/leg","day":"Friday"},
      {"name":"Suitcase Carry","sets":4,"reps":"30 m","day":"Friday"},
      {"name":"Plank","sets":3,"reps":"45 sec","day":"Friday"},
      {"name":"20-30 min walk or bike","sets":1,"reps":"20-30 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "kettlebell-1",
    "title": "Kettlebell Plan",
    "goal": "strength",
    "level": "intermediate",
    "gender": "both",
    "preference": "home",
    "description": "Excellent for conditioning, grip strength, and posterior-chain development.",
    "image": "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"KB Goblet Squat","sets":4,"reps":"10","day":"Monday"},
      {"name":"One-arm KB Press","sets":4,"reps":"8/side","day":"Monday"},
      {"name":"KB Row","sets":4,"reps":"10/side","day":"Monday"},
      {"name":"KB Swing","sets":5,"reps":"15","day":"Monday"},
      {"name":"EMOM 15: 15 swings, 8 push-ups, 10 goblet squats","sets":15,"reps":"1 min","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"KB Front Rack Reverse Lunge","sets":3,"reps":"10/leg","day":"Thursday"},
      {"name":"Single-leg RDL","sets":3,"reps":"10/leg","day":"Thursday"},
      {"name":"Suitcase Carry","sets":4,"reps":"30 m","day":"Thursday"},
      {"name":"Side Plank","sets":3,"reps":"30 sec","day":"Thursday"},
      {"name":"Clean and Press","sets":4,"reps":"5/side","day":"Friday"},
      {"name":"Floor Press","sets":3,"reps":"10","day":"Friday"},
      {"name":"Renegade Row","sets":3,"reps":"8/side","day":"Friday"},
      {"name":"Halos","sets":3,"reps":"12","day":"Friday"},
      {"name":"Crunch","sets":3,"reps":"15","day":"Friday"},
      {"name":"20 min easy walking","sets":1,"reps":"20 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "calisthenics-1",
    "title": "Calisthenics Plan",
    "goal": "muscle-gain",
    "level": "advanced",
    "gender": "both",
    "preference": "home",
    "description": "Bodyweight training for strength, control, and skill development.",
    "image": "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Push-up","sets":4,"reps":"10-20","day":"Monday"},
      {"name":"Pike Push-up","sets":4,"reps":"6-10","day":"Monday"},
      {"name":"Chair Dip","sets":3,"reps":"8-12","day":"Monday"},
      {"name":"Hollow Hold","sets":3,"reps":"20-30 sec","day":"Monday"},
      {"name":"Pull-up or Assisted Pull-up","sets":4,"reps":"4-8","day":"Tuesday"},
      {"name":"Inverted Row","sets":4,"reps":"8-12","day":"Tuesday"},
      {"name":"Scap Pull-up","sets":3,"reps":"8","day":"Tuesday"},
      {"name":"Hanging Knee Raise","sets":3,"reps":"12","day":"Tuesday"},
      {"name":"Squat","sets":4,"reps":"20","day":"Wednesday"},
      {"name":"Split Squat","sets":4,"reps":"12/leg","day":"Wednesday"},
      {"name":"Single-leg Hip Bridge","sets":3,"reps":"15/leg","day":"Wednesday"},
      {"name":"Wall Sit","sets":3,"reps":"45 sec","day":"Wednesday"},
      {"name":"10 rounds: 30 sec high knees, 30 sec rest","sets":10,"reps":"30 sec","day":"Thursday"},
      {"name":"Burpee","sets":3,"reps":"10","day":"Thursday"},
      {"name":"Mountain Climber","sets":3,"reps":"30 sec","day":"Thursday"},
      {"name":"Decline Push-up","sets":3,"reps":"10","day":"Friday"},
      {"name":"Chin-up","sets":3,"reps":"5-8","day":"Friday"},
      {"name":"Pistol Squat Progression","sets":3,"reps":"5/leg","day":"Friday"},
      {"name":"Plank","sets":3,"reps":"45 sec","day":"Friday"},
      {"name":"L-sit Tuck Hold","sets":3,"reps":"10-20 sec","day":"Friday"},
      {"name":"20 min stretching and joint prep","sets":1,"reps":"20 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "bodybuilder-1",
    "title": "Bodybuilder Bro Split",
    "goal": "muscle-gain",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "High-volume, body-part-focused plan for people who like direct exercise variety.",
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Bench Press","sets":4,"reps":"6-8","day":"Monday"},
      {"name":"Incline DB Press","sets":4,"reps":"8-10","day":"Monday"},
      {"name":"Pec Deck","sets":3,"reps":"12-15","day":"Monday"},
      {"name":"Cable Fly","sets":3,"reps":"15","day":"Monday"},
      {"name":"Push-up Burnout","sets":2,"reps":"Max","day":"Monday"},
      {"name":"Deadlift or Rack Pull","sets":3,"reps":"5","day":"Tuesday"},
      {"name":"Barbell Row","sets":4,"reps":"8","day":"Tuesday"},
      {"name":"Pulldown","sets":4,"reps":"10","day":"Tuesday"},
      {"name":"Seated Cable Row","sets":3,"reps":"12","day":"Tuesday"},
      {"name":"Rear Delt Fly","sets":3,"reps":"15","day":"Tuesday"},
      {"name":"Overhead Press","sets":4,"reps":"6-8","day":"Wednesday"},
      {"name":"Lateral Raise","sets":4,"reps":"15","day":"Wednesday"},
      {"name":"Rear Delt Fly","sets":4,"reps":"15","day":"Wednesday"},
      {"name":"Upright Row","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Shrugs","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Back Squat","sets":4,"reps":"6-8","day":"Thursday"},
      {"name":"Leg Press","sets":4,"reps":"10","day":"Thursday"},
      {"name":"RDL","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Leg Extension","sets":3,"reps":"15","day":"Thursday"},
      {"name":"Leg Curl","sets":3,"reps":"15","day":"Thursday"},
      {"name":"Calf Raise","sets":5,"reps":"15","day":"Thursday"},
      {"name":"EZ Curl","sets":4,"reps":"10","day":"Friday"},
      {"name":"Hammer Curl","sets":3,"reps":"12","day":"Friday"},
      {"name":"Skull Crusher","sets":4,"reps":"10","day":"Friday"},
      {"name":"Rope Pressdown","sets":3,"reps":"12","day":"Friday"},
      {"name":"Forearm Curl","sets":2,"reps":"15","day":"Friday"},
      {"name":"Cable Crunch","sets":4,"reps":"15","day":"Saturday"},
      {"name":"Hanging Leg Raise","sets":3,"reps":"12","day":"Saturday"},
      {"name":"Side Bend","sets":3,"reps":"15/side","day":"Saturday"},
      {"name":"Extra Delts or Calves","sets":3,"reps":"15","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "tactical-responder-1",
    "title": "Tactical & First Responder Fitness",
    "goal": "endurance",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "High-intensity functional training designed for military, police, and fire professionals focusing on load carriage and work capacity.",
    "image": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Heavy Sandbag Carry","sets":4,"reps":"50 meters","day":"Monday"},
      {"name":"Weighted Step-Ups","sets":4,"reps":"10/leg","day":"Monday"},
      {"name":"Sled Push","sets":5,"reps":"20 meters","day":"Monday"},
      {"name":"5k Ruck March (40lbs)","sets":1,"reps":"5 km","day":"Tuesday"},
      {"name":"Strict Pull-ups","sets":4,"reps":"Max","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Trap Bar Deadlift","sets":5,"reps":"5","day":"Thursday"},
      {"name":"Standing Overhead Press","sets":4,"reps":"6","day":"Thursday"},
      {"name":"Farmer's Walk","sets":4,"reps":"40 meters","day":"Thursday"},
      {"name":"400m Run Repeats","sets":6,"reps":"400m","day":"Friday"},
      {"name":"Heavy Kettlebell Swings","sets":4,"reps":"20","day":"Friday"},
      {"name":"10k Ruck March or Trail Run","sets":1,"reps":"10 km","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "postpartum-core-1",
    "title": "Postpartum Core Rebuilding",
    "goal": "strength",
    "level": "beginner",
    "gender": "female",
    "preference": "home",
    "description": "Gentle, progressive core and pelvic floor recovery for new mothers cleared for exercise by their physician.",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Diaphragmatic Breathing","sets":3,"reps":"10 breaths","day":"Monday"},
      {"name":"Pelvic Floor Contractions (Kegels)","sets":3,"reps":"10 holds","day":"Monday"},
      {"name":"Heel Slides","sets":3,"reps":"10/leg","day":"Monday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Tuesday"},
      {"name":"Glute Bridges","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Bird Dog (Modified)","sets":3,"reps":"8/side","day":"Wednesday"},
      {"name":"Clamshells","sets":3,"reps":"15/side","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Modified Side Plank","sets":3,"reps":"20 sec/side","day":"Friday"},
      {"name":"Wall Push-ups","sets":3,"reps":"12","day":"Friday"},
      {"name":"Band Pull-aparts","sets":3,"reps":"15","day":"Friday"},
      {"name":"Gentle Stroller Walk","sets":1,"reps":"20-30 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "active-aging-1",
    "title": "Active Aging & Senior Strength",
    "goal": "strength",
    "level": "beginner",
    "gender": "both",
    "preference": "home",
    "description": "Low-impact movements focused on balance, joint mobility, and bone density for older adults.",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Chair Squats (Sit-to-Stand)","sets":3,"reps":"10","day":"Monday"},
      {"name":"Wall Push-ups","sets":3,"reps":"10","day":"Monday"},
      {"name":"Seated Marching","sets":3,"reps":"20","day":"Monday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Tuesday"},
      {"name":"Single Leg Stand (hold chair)","sets":3,"reps":"30 sec/leg","day":"Wednesday"},
      {"name":"Seated Resistance Band Rows","sets":3,"reps":"12","day":"Wednesday"},
      {"name":"Heel-to-Toe Walk","sets":3,"reps":"10 steps","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Glute Bridges","sets":3,"reps":"10","day":"Friday"},
      {"name":"Calf Raises (hold chair)","sets":3,"reps":"15","day":"Friday"},
      {"name":"Arm Circles","sets":3,"reps":"15 forward/back","day":"Friday"},
      {"name":"Leisurely Walk","sets":1,"reps":"15-20 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "mma-conditioning-1",
    "title": "Combat Sports & MMA Conditioning",
    "goal": "endurance",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Explosive power, rotational core strength, and high-intensity conditioning for fighters and martial artists.",
    "image": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Medicine Ball Slams","sets":5,"reps":"10","day":"Monday"},
      {"name":"Rotational Med Ball Throws","sets":4,"reps":"8/side","day":"Monday"},
      {"name":"Box Jumps","sets":4,"reps":"5","day":"Monday"},
      {"name":"Heavy Bag Rounds","sets":5,"reps":"3 min","day":"Tuesday"},
      {"name":"Sprawls","sets":5,"reps":"10","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Zercher Squats","sets":4,"reps":"6","day":"Thursday"},
      {"name":"Weighted Pull-ups","sets":4,"reps":"6","day":"Thursday"},
      {"name":"Landmine Rotations","sets":3,"reps":"10/side","day":"Thursday"},
      {"name":"Airdyne Bike Sprints","sets":8,"reps":"20 sec on / 10 sec off","day":"Friday"},
      {"name":"Battle Ropes","sets":5,"reps":"30 sec","day":"Friday"},
      {"name":"Active Recovery (Shadowboxing)","sets":1,"reps":"30 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "strongman-1",
    "title": "Strongman & Odd-Object Training",
    "goal": "strength",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Functional brute strength focusing on heavy carries, sandbags, and awkward object lifting.",
    "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Log Press or Axle Press","sets":5,"reps":"3-5","day":"Monday"},
      {"name":"Heavy Farmer's Walk","sets":5,"reps":"15 meters","day":"Monday"},
      {"name":"Strict Dumbbell Press","sets":3,"reps":"8","day":"Monday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Tuesday"},
      {"name":"Heavy Deadlift","sets":5,"reps":"3","day":"Wednesday"},
      {"name":"Sandbag or Atlas Stone over Bar","sets":4,"reps":"5","day":"Wednesday"},
      {"name":"Pendlay Rows","sets":4,"reps":"6","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Yoke Walk","sets":4,"reps":"20 meters","day":"Friday"},
      {"name":"Heavy Sled Drag (Reverse)","sets":4,"reps":"20 meters","day":"Friday"},
      {"name":"Front Squat","sets":4,"reps":"5","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "hybrid-athlete-1",
    "title": "Hybrid Athlete / Marathon Prep",
    "goal": "endurance",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "A delicate balance of heavy compound lifting and long-distance running for the ultimate hybrid athlete.",
    "image": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Heavy Back Squat","sets":4,"reps":"5","day":"Monday"},
      {"name":"Romanian Deadlift","sets":3,"reps":"8","day":"Monday"},
      {"name":"Easy Zone 2 Run","sets":1,"reps":"3 miles","day":"Monday"},
      {"name":"Tempo Run","sets":1,"reps":"5 miles","day":"Tuesday"},
      {"name":"Core Plank","sets":3,"reps":"60 sec","day":"Tuesday"},
      {"name":"Bench Press","sets":4,"reps":"5","day":"Wednesday"},
      {"name":"Barbell Row","sets":4,"reps":"8","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Long Distance Run","sets":1,"reps":"10-15 miles","day":"Friday"},
      {"name":"Deadlift","sets":3,"reps":"5","day":"Saturday"},
      {"name":"Weighted Pull-ups","sets":3,"reps":"6","day":"Saturday"},
      {"name":"Bulgarian Split Squats","sets":3,"reps":"8/leg","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "desk-worker-1",
    "title": "Desk-Worker Posture Correction",
    "goal": "strength",
    "level": "beginner",
    "gender": "both",
    "preference": "home",
    "description": "Counteract the effects of sitting all day with upper back strengthening, hip flexor mobility, and glute activation.",
    "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Band Pull-aparts","sets":3,"reps":"15","day":"Monday"},
      {"name":"Couch Stretch","sets":2,"reps":"60 sec/leg","day":"Monday"},
      {"name":"Glute Bridges","sets":3,"reps":"15","day":"Monday"},
      {"name":"Thoracic Spine Extensions","sets":3,"reps":"10","day":"Tuesday"},
      {"name":"Bird Dog","sets":3,"reps":"10/side","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Face Pulls (Band or Cable)","sets":3,"reps":"15","day":"Thursday"},
      {"name":"Hip Flexor Lunge Stretch","sets":2,"reps":"45 sec/leg","day":"Thursday"},
      {"name":"Prone Y-T-W Raises","sets":3,"reps":"10 each","day":"Thursday"},
      {"name":"Dead Bug","sets":3,"reps":"12/side","day":"Friday"},
      {"name":"Wall Angels","sets":3,"reps":"12","day":"Friday"},
      {"name":"Brisk Walk & Audio Book","sets":1,"reps":"30 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "minimalist-15min-1",
    "title": "Minimalist 15-Minute Micro-Workouts",
    "goal": "fat-loss",
    "level": "intermediate",
    "gender": "both",
    "preference": "home",
    "description": "Daily ultra-short, high-intensity sessions for extremely busy individuals who only have 15 minutes to spare.",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Tabata Burpees (20s work / 10s rest)","sets":8,"reps":"20 sec","day":"Monday"},
      {"name":"Tabata Squat Jumps","sets":8,"reps":"20 sec","day":"Monday"},
      {"name":"EMOM 15: 15 Kettlebell Swings","sets":15,"reps":"15","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"AMRAP 15: 10 Push-ups, 15 Air Squats, 20 Sit-ups","sets":1,"reps":"15 min","day":"Thursday"},
      {"name":"100 Walking Lunges for Time","sets":1,"reps":"100","day":"Friday"},
      {"name":"Plank Accumulation","sets":1,"reps":"5 min total","day":"Friday"},
      {"name":"Sprint Intervals (10x 50m sprints)","sets":10,"reps":"50m","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "hotel-band-1",
    "title": "Hotel Room / Resistance Band Only",
    "goal": "muscle-gain",
    "level": "intermediate",
    "gender": "both",
    "preference": "home",
    "description": "Travel-friendly hypertrophy routine requiring zero free weights—just a set of loop resistance bands.",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Banded Push-ups","sets":4,"reps":"10-15","day":"Monday"},
      {"name":"Banded Overhead Press","sets":3,"reps":"12","day":"Monday"},
      {"name":"Banded Triceps Extensions","sets":3,"reps":"15","day":"Monday"},
      {"name":"Banded Seated Rows","sets":4,"reps":"15","day":"Tuesday"},
      {"name":"Banded Lat Pulldowns","sets":3,"reps":"12","day":"Tuesday"},
      {"name":"Banded Bicep Curls","sets":3,"reps":"15","day":"Tuesday"},
      {"name":"Banded Front Squats","sets":4,"reps":"15","day":"Wednesday"},
      {"name":"Banded Romanian Deadlifts","sets":4,"reps":"15","day":"Wednesday"},
      {"name":"Banded Glute Kickbacks","sets":3,"reps":"15/leg","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Band Thrusters","sets":4,"reps":"15","day":"Friday"},
      {"name":"Band Woodchoppers","sets":4,"reps":"12/side","day":"Friday"},
      {"name":"Banded Push-ups","sets":4,"reps":"Max","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "vertical-jump-1",
    "title": "Vertical Jump & Plyometric Explosiveness",
    "goal": "strength",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Focuses on fast-twitch muscle fibers, rate of force development, and jumping mechanics for athletes.",
    "image": "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Depth Jumps","sets":4,"reps":"5","day":"Monday"},
      {"name":"Pogo Hops","sets":3,"reps":"20","day":"Monday"},
      {"name":"Seated Box Jumps","sets":4,"reps":"5","day":"Monday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Tuesday"},
      {"name":"Trap Bar Jumps (Light Weight)","sets":4,"reps":"5","day":"Wednesday"},
      {"name":"Heavy Bulgarian Split Squats","sets":4,"reps":"6/leg","day":"Wednesday"},
      {"name":"Calf Raises (Explosive)","sets":4,"reps":"10","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Broad Jumps","sets":4,"reps":"5","day":"Friday"},
      {"name":"Heavy Quarter Squats","sets":4,"reps":"4","day":"Friday"},
      {"name":"Kettlebell Swings","sets":3,"reps":"12","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "prehab-joint-armor-1",
    "title": "Pre-hab & Joint Armor",
    "goal": "strength",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "Bulletproof your body with injury prevention techniques, tendon health focus, and unilateral stability.",
    "image": "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Nordic Hamstring Curls","sets":3,"reps":"5","day":"Monday"},
      {"name":"Tibialis Raises","sets":3,"reps":"20","day":"Monday"},
      {"name":"ATG Split Squats","sets":3,"reps":"10/leg","day":"Monday"},
      {"name":"Powell Raises","sets":3,"reps":"12/side","day":"Tuesday"},
      {"name":"Dumbbell External Rotations","sets":3,"reps":"15/side","day":"Tuesday"},
      {"name":"Scapular Pull-ups","sets":3,"reps":"10","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Jefferson Curls (Light Weight)","sets":3,"reps":"10","day":"Thursday"},
      {"name":"Copenhagen Planks","sets":3,"reps":"20 sec/side","day":"Thursday"},
      {"name":"McGill Big 3 Core Routine","sets":1,"reps":"10 min","day":"Thursday"},
      {"name":"Reverse Sled Drag","sets":4,"reps":"30 meters","day":"Friday"},
      {"name":"Wrist Extensions & Flexions","sets":3,"reps":"15","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "gymnastics-rings-1",
    "title": "Gymnastics Rings & Advanced Calisthenics",
    "goal": "strength",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Master bodyweight control with strict muscle-up progressions, levers, and intense ring stability work.",
    "image": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Ring Support Hold","sets":5,"reps":"20 sec","day":"Monday"},
      {"name":"Ring Push-ups","sets":4,"reps":"8-12","day":"Monday"},
      {"name":"Ring Dips","sets":4,"reps":"5-8","day":"Monday"},
      {"name":"False Grip Hangs","sets":4,"reps":"30 sec","day":"Tuesday"},
      {"name":"Ring Rows","sets":4,"reps":"10","day":"Tuesday"},
      {"name":"Strict Ring Pull-ups","sets":4,"reps":"6","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Skin the Cat","sets":4,"reps":"3","day":"Thursday"},
      {"name":"L-Sit on Rings","sets":4,"reps":"15 sec","day":"Thursday"},
      {"name":"Front Lever Tucks","sets":4,"reps":"20 sec","day":"Thursday"},
      {"name":"Muscle-up Transitions","sets":4,"reps":"5","day":"Friday"},
      {"name":"Ring Roll-outs","sets":3,"reps":"10","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "kettlebell-flow-1",
    "title": "Kettlebell Flow & Complex Mastery",
    "goal": "strength",
    "level": "advanced",
    "gender": "both",
    "preference": "home",
    "description": "Seamless transitions between kettlebell movements to build unilateral strength, coordination, and grip.",
    "image": "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Turkish Get-ups","sets":3,"reps":"3/side","day":"Monday"},
      {"name":"Kettlebell Halos","sets":3,"reps":"10/direction","day":"Monday"},
      {"name":"Single Arm Swings","sets":4,"reps":"15/side","day":"Monday"},
      {"name":"Kettlebell Cleans","sets":4,"reps":"10/side","day":"Tuesday"},
      {"name":"Strict KB Press","sets":4,"reps":"8/side","day":"Tuesday"},
      {"name":"KB Front Squats","sets":4,"reps":"10","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Kettlebell Snatches","sets":5,"reps":"10/side","day":"Thursday"},
      {"name":"Kettlebell Windmills","sets":3,"reps":"5/side","day":"Thursday"},
      {"name":"Farmer's Carry (Double KB)","sets":4,"reps":"40 meters","day":"Thursday"},
      {"name":"Flow: Swing -> Clean -> Squat -> Press","sets":5,"reps":"5 complexes/side","day":"Friday"},
      {"name":"Renegade Rows","sets":3,"reps":"8/side","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "functional-grid-metcon-1",
    "title": "Functional Grid & Metcon",
    "goal": "endurance",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "CrossFit-style metabolic conditioning featuring AMRAPs, EMOMs, and high heart rate functional movements.",
    "image": "https://images.unsplash.com/photo-1526506114861-f3c500078f4b?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"AMRAP 20: 10 Wall Balls, 30 Double Unders, 10 Box Jumps","sets":1,"reps":"20 min","day":"Monday"},
      {"name":"EMOM 15: Row, Burpees, Thrusters","sets":5,"reps":"15 min","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Chipper: 50 Pull-ups, 40 Push-ups, 30 Cleans, 20 Front Squats","sets":1,"reps":"For Time","day":"Thursday"},
      {"name":"Intervals: 3 Min Work / 1 Min Rest","sets":5,"reps":"3 min","day":"Friday"},
      {"name":"Hero WOD Style: Run, Pull-ups, Push-ups, Squats, Run","sets":1,"reps":"For Time","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "aquatic-pool-resistance-1",
    "title": "Aquatic & Pool Resistance Training",
    "goal": "endurance",
    "level": "beginner",
    "gender": "both",
    "preference": "gym",
    "description": "Low impact, highly effective water-resistance cardio and strength training perfect for recovery or joint issues.",
    "image": "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Water Jogging","sets":1,"reps":"20 min","day":"Monday"},
      {"name":"Pool Edge Dips","sets":3,"reps":"12","day":"Monday"},
      {"name":"Water High Knees","sets":3,"reps":"1 min","day":"Monday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Tuesday"},
      {"name":"Water Flutter Kicks","sets":4,"reps":"1 min","day":"Wednesday"},
      {"name":"Aqua Dumbbell Curls","sets":3,"reps":"15","day":"Wednesday"},
      {"name":"Aqua Dumbbell Lateral Raises","sets":3,"reps":"15","day":"Wednesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Thursday"},
      {"name":"Tread Water Intervals","sets":10,"reps":"1 min","day":"Friday"},
      {"name":"Pool Edge Push-ups","sets":3,"reps":"10","day":"Friday"},
      {"name":"Standing Water Twists","sets":3,"reps":"20/side","day":"Friday"},
      {"name":"Leisure Swim","sets":1,"reps":"20 min","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "fst-7-advanced-1",
    "title": "12-Week FST-7 Inspired Hypertrophy",
    "goal": "muscle-gain",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Inspired by Hany Rambod's FST-7 system. Focuses on stretching the fascia from the inside out by pumping maximum blood into the muscle with 7 sets at the end of the workout.",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Incline DB Press","sets":4,"reps":"8-10","day":"Monday"},
      {"name":"Flat Barbell Bench","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Incline DB Flyes","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Cable Crossover (FST-7)","sets":7,"reps":"10-12","day":"Monday"},
      {"name":"Barbell Curls","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Alternate DB Curls","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Cable Curls (FST-7)","sets":7,"reps":"10-12","day":"Monday"},
      {"name":"Pull-ups","sets":3,"reps":"Failure","day":"Tuesday"},
      {"name":"Barbell Rows","sets":4,"reps":"8-10","day":"Tuesday"},
      {"name":"Lat Pulldown","sets":3,"reps":"8-10","day":"Tuesday"},
      {"name":"Seated Cable Row","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Straight Arm Pulldown (FST-7)","sets":7,"reps":"10-12","day":"Tuesday"},
      {"name":"Hanging Leg Raises","sets":3,"reps":"15","day":"Tuesday"},
      {"name":"Cable Crunches","sets":3,"reps":"15","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Seated DB Press","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Front DB Raises","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Lateral Raises","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Machine Lateral Raises (FST-7)","sets":7,"reps":"10-12","day":"Thursday"},
      {"name":"Close-Grip Bench Press","sets":3,"reps":"8-10","day":"Thursday"},
      {"name":"Overhead Triceps Extension","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Triceps Pushdown (FST-7)","sets":7,"reps":"10-12","day":"Thursday"},
      {"name":"Squats","sets":4,"reps":"8-10","day":"Friday"},
      {"name":"Leg Press","sets":3,"reps":"10-12","day":"Friday"},
      {"name":"Walking Lunges","sets":3,"reps":"12/leg","day":"Friday"},
      {"name":"Leg Extensions (FST-7)","sets":7,"reps":"10-12","day":"Friday"},
      {"name":"Lying Leg Curls","sets":3,"reps":"10-12","day":"Friday"},
      {"name":"Seated Leg Curls (FST-7)","sets":7,"reps":"10-12","day":"Friday"},
      {"name":"Standing Calf Raises","sets":4,"reps":"15","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "superhero-bulk-1",
    "title": "Superhero Bulking Program",
    "goal": "muscle-gain",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Inspired by Hollywood superhero transformations (like Henry Cavill and Chris Hemsworth). Combines heavy powerlifting with high-volume bodybuilding.",
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Bench Press","sets":5,"reps":"5","day":"Monday"},
      {"name":"Weighted Pull-ups","sets":5,"reps":"5","day":"Monday"},
      {"name":"Overhead Press","sets":4,"reps":"6","day":"Monday"},
      {"name":"Barbell Row","sets":4,"reps":"6","day":"Monday"},
      {"name":"Barbell Curl","sets":3,"reps":"8","day":"Monday"},
      {"name":"Skullcrushers","sets":3,"reps":"8","day":"Monday"},
      {"name":"Back Squat","sets":5,"reps":"5","day":"Tuesday"},
      {"name":"Deadlift","sets":1,"reps":"5","day":"Tuesday"},
      {"name":"Leg Press","sets":4,"reps":"8","day":"Tuesday"},
      {"name":"Leg Curl","sets":4,"reps":"8","day":"Tuesday"},
      {"name":"Calf Raise","sets":4,"reps":"10","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Incline DB Press","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Flat Bench Press","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Lat Pulldown","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Seated Cable Row","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Face Pulls","sets":3,"reps":"15","day":"Thursday"},
      {"name":"Front Squat","sets":4,"reps":"8-10","day":"Friday"},
      {"name":"Romanian Deadlift","sets":4,"reps":"8-10","day":"Friday"},
      {"name":"DB Shoulder Press","sets":4,"reps":"8-10","day":"Friday"},
      {"name":"Lateral Raises","sets":4,"reps":"12-15","day":"Friday"},
      {"name":"Leg Extension","sets":3,"reps":"12-15","day":"Friday"},
      {"name":"Leg Curl","sets":3,"reps":"12-15","day":"Friday"},
      {"name":"DB Curls","sets":4,"reps":"10-12","day":"Saturday"},
      {"name":"Triceps Pushdowns","sets":4,"reps":"10-12","day":"Saturday"},
      {"name":"Hammer Curls","sets":3,"reps":"10-12","day":"Saturday"},
      {"name":"Overhead Extension","sets":3,"reps":"10-12","day":"Saturday"},
      {"name":"Planks","sets":3,"reps":"60 sec","day":"Saturday"},
      {"name":"Russian Twists","sets":3,"reps":"20","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "phul-1",
    "title": "PHUL (Power Hypertrophy Upper Lower)",
    "goal": "strength",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "A highly popular 4-day split that focuses on building raw strength on power days and muscle mass on hypertrophy days.",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Barbell Bench Press","sets":4,"reps":"3-5","day":"Monday"},
      {"name":"Incline DB Bench Press","sets":3,"reps":"6-10","day":"Monday"},
      {"name":"Bent Over Row","sets":4,"reps":"3-5","day":"Monday"},
      {"name":"Lat Pulldown","sets":3,"reps":"6-10","day":"Monday"},
      {"name":"Overhead Press","sets":3,"reps":"5-8","day":"Monday"},
      {"name":"Barbell Curl","sets":3,"reps":"6-10","day":"Monday"},
      {"name":"Skullcrusher","sets":3,"reps":"6-10","day":"Monday"},
      {"name":"Squat","sets":4,"reps":"3-5","day":"Tuesday"},
      {"name":"Deadlift","sets":4,"reps":"3-5","day":"Tuesday"},
      {"name":"Leg Press","sets":5,"reps":"10-15","day":"Tuesday"},
      {"name":"Leg Curl","sets":4,"reps":"10-15","day":"Tuesday"},
      {"name":"Calf Raise","sets":4,"reps":"15","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Incline Barbell Bench Press","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"Flat Machine Chest Press","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"Seated Cable Row","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"One Arm DB Row","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"DB Lateral Raise","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"Seated Incline DB Curl","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"Cable Tricep Extension","sets":4,"reps":"8-12","day":"Thursday"},
      {"name":"Front Squat","sets":4,"reps":"8-12","day":"Friday"},
      {"name":"Barbell Lunge","sets":4,"reps":"8-12","day":"Friday"},
      {"name":"Leg Extension","sets":4,"reps":"10-15","day":"Friday"},
      {"name":"Leg Curl","sets":4,"reps":"10-15","day":"Friday"},
      {"name":"Seated Calf Raise","sets":4,"reps":"15","day":"Friday"},
      {"name":"Calf Press","sets":4,"reps":"15","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "upper-lower-4day",
    "title": "Upper/Lower 4-Day Split",
    "goal": "muscle-gain",
    "level": "intermediate",
    "gender": "both",
    "preference": "gym",
    "description": "A classic intermediate routine hitting every muscle group twice a week for optimal protein synthesis and muscle growth.",
    "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Bench Press","sets":4,"reps":"6-8","day":"Monday"},
      {"name":"Barbell Row","sets":4,"reps":"6-8","day":"Monday"},
      {"name":"Overhead Press","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Lat Pulldown","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Bicep Curls","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Triceps Pushdown","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Squats","sets":4,"reps":"6-8","day":"Tuesday"},
      {"name":"Romanian Deadlift","sets":4,"reps":"8-10","day":"Tuesday"},
      {"name":"Leg Press","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Leg Curls","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Calf Raises","sets":4,"reps":"12-15","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Incline DB Press","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"Seated Cable Row","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"DB Lateral Raise","sets":3,"reps":"12-15","day":"Thursday"},
      {"name":"Pull-ups","sets":3,"reps":"8-10","day":"Thursday"},
      {"name":"Hammer Curls","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Overhead Triceps Extension","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Deadlift","sets":3,"reps":"5","day":"Friday"},
      {"name":"Front Squats","sets":3,"reps":"8-10","day":"Friday"},
      {"name":"Walking Lunges","sets":3,"reps":"10/leg","day":"Friday"},
      {"name":"Leg Extensions","sets":3,"reps":"12-15","day":"Friday"},
      {"name":"Seated Calf Raises","sets":4,"reps":"15","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "ppl-6day-1",
    "title": "Push Pull Legs (PPL) 6-Day Split",
    "goal": "muscle-gain",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "A highly effective 6-day split targeting every muscle group twice a week. Ideal for advanced lifters looking to maximize hypertrophy and strength.",
    "image": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Barbell Bench Press","sets":4,"reps":"5-8","day":"Monday"},
      {"name":"Overhead Press","sets":3,"reps":"8-10","day":"Monday"},
      {"name":"Incline DB Press","sets":3,"reps":"8-12","day":"Monday"},
      {"name":"Lateral Raises","sets":4,"reps":"12-15","day":"Monday"},
      {"name":"Triceps Pushdown","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Overhead Triceps Extension","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Deadlift","sets":1,"reps":"5","day":"Tuesday"},
      {"name":"Barbell Row","sets":4,"reps":"5-8","day":"Tuesday"},
      {"name":"Lat Pulldown","sets":3,"reps":"8-10","day":"Tuesday"},
      {"name":"Face Pulls","sets":3,"reps":"12-15","day":"Tuesday"},
      {"name":"Barbell Curls","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Hammer Curls","sets":3,"reps":"10-12","day":"Tuesday"},
      {"name":"Squats","sets":4,"reps":"5-8","day":"Wednesday"},
      {"name":"Leg Press","sets":3,"reps":"10-12","day":"Wednesday"},
      {"name":"Leg Extensions","sets":3,"reps":"12-15","day":"Wednesday"},
      {"name":"Leg Curls","sets":3,"reps":"12-15","day":"Wednesday"},
      {"name":"Standing Calf Raises","sets":4,"reps":"12-15","day":"Wednesday"},
      {"name":"Incline Barbell Bench Press","sets":4,"reps":"8-10","day":"Thursday"},
      {"name":"DB Shoulder Press","sets":3,"reps":"8-10","day":"Thursday"},
      {"name":"Flat DB Flyes","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Lateral Raises","sets":4,"reps":"12-15","day":"Thursday"},
      {"name":"Skullcrushers","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Triceps Pushdown","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Pull-ups","sets":4,"reps":"8-10","day":"Friday"},
      {"name":"Seated Cable Row","sets":3,"reps":"8-10","day":"Friday"},
      {"name":"One-Arm DB Row","sets":3,"reps":"10-12","day":"Friday"},
      {"name":"Reverse Pec Deck","sets":3,"reps":"12-15","day":"Friday"},
      {"name":"Preacher Curls","sets":3,"reps":"10-12","day":"Friday"},
      {"name":"DB Curls","sets":3,"reps":"10-12","day":"Friday"},
      {"name":"Front Squats","sets":4,"reps":"8-10","day":"Saturday"},
      {"name":"Romanian Deadlift","sets":4,"reps":"8-10","day":"Saturday"},
      {"name":"Walking Lunges","sets":3,"reps":"10/leg","day":"Saturday"},
      {"name":"Leg Curls","sets":3,"reps":"12-15","day":"Saturday"},
      {"name":"Seated Calf Raises","sets":4,"reps":"15","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  },
  {
    "id": "gvt-advanced-1",
    "title": "German Volume Training (GVT)",
    "goal": "muscle-gain",
    "level": "advanced",
    "gender": "both",
    "preference": "gym",
    "description": "Also known as the 10x10 routine. An intense, high-volume program designed to pack on muscle mass quickly by targeting motor units with extensive repetition.",
    "image": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=60&w=600&auto=format&fit=crop&fm=webp",
    "exercises": [
      {"name":"Bench Press","sets":10,"reps":"10","day":"Monday"},
      {"name":"Lat Pulldown","sets":10,"reps":"10","day":"Monday"},
      {"name":"Incline DB Flyes","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"One-Arm DB Row","sets":3,"reps":"10-12","day":"Monday"},
      {"name":"Squats","sets":10,"reps":"10","day":"Tuesday"},
      {"name":"Lying Leg Curls","sets":10,"reps":"10","day":"Tuesday"},
      {"name":"Calf Raises","sets":3,"reps":"15-20","day":"Tuesday"},
      {"name":"Hanging Leg Raises","sets":3,"reps":"15-20","day":"Tuesday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Wednesday"},
      {"name":"Overhead Press","sets":10,"reps":"10","day":"Thursday"},
      {"name":"Barbell Curls","sets":10,"reps":"10","day":"Thursday"},
      {"name":"Triceps Pushdown","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Hammer Curls","sets":3,"reps":"10-12","day":"Thursday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Friday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Saturday"},
      {"name":"Rest","sets":0,"reps":"0","day":"Sunday"}
    ]
  }
];

export const mealAlternatives: MealAlternatives = {
  vegetarian: {
    breakfast: [
      'Oatmeal with berries and almond butter',
      'Paneer bhurji (scrambled paneer) with spinach and whole-grain toast',
      'Greek yogurt parfait with granola and honey',
      'Protein smoothie with banana and spinach',
      'Avocado toast with grilled paneer and hemp seeds',
      'Protein pancakes made with oats and whey'
    ],
    lunch: [
      'Quinoa salad with chickpeas and roasted veggies',
      'Lentil soup with a side of steamed broccoli',
      'Black bean burritos with cheese, guacamole, and salsa',
      'Paneer or halloumi wrap with beans and rice',
      'Whole wheat pasta salad with chickpeas and vegetables'
    ],
    dinner: [
      'Lentil soup with a side of steamed broccoli',
      'Tofu stir-fry with mixed vegetables and brown rice',
      'Hearty vegetable and lentil stew with crusty bread',
      'Sweet potato and black bean enchiladas',
      'Vegetable stir-fry with tofu and brown rice'
    ],
    snacks: [
      'Greek yogurt or a handful of almonds',
      'Protein shake and peanut butter on apple slices',
      'Cottage cheese with pineapple chunks',
      'Rice cakes with almond butter',
      'Carrot sticks with hummus'
    ]
  },
  vegan: {
    breakfast: [
      'Tofu scramble with bell peppers and onions',
      'High-protein vegan smoothie bowl with hemp seeds and oats',
      'Tofu scramble with hash browns and avocado',
      'Smoothie with bananas, oats, spinach, and plant protein',
      'Oatmeal with berries and peanut butter'
    ],
    lunch: [
      'Large mixed salad with tempeh and light tahini dressing',
      'Seitan stir-fry with quinoa and mixed vegetables',
      'Lentil pasta with marinara sauce and vegan meatballs',
      'Quinoa and roasted vegetable bowl with tahini',
      'Chickpea salad sandwich on whole grain bread'
    ],
    dinner: [
      'Zucchini noodles with lentil bolognese',
      'Black bean and sweet potato chili with avocado',
      'Tempeh tacos with corn tortillas, beans, and salsa',
      'Lentil shepherd\'s pie with sweet potato topping',
      'Vegan curry with chickpeas and spinach'
    ],
    snacks: [
      'Edamame and a small handful of walnuts',
      'Roasted chickpeas and a vegan protein shake',
      'Peanut butter on rice cakes',
      'Dates stuffed with peanut butter',
      'Carrot sticks with hummus'
    ]
  },
  'non-vegetarian': {
    breakfast: [
      'Egg white omelet with spinach and mushrooms',
      '4 whole eggs, 2 slices whole-wheat toast, and avocado',
      'Oatmeal with whole milk, protein powder, and peanut butter',
      'Bagel with cream cheese and smoked salmon',
      'Scrambled eggs with spinach and a slice of toast'
    ],
    lunch: [
      'Grilled chicken breast with mixed greens and balsamic',
      'Chicken breast, large portion of white rice, and broccoli',
      'Ground beef and rice bowl with cheese and hot sauce',
      'Turkey and cheese sandwich on whole grain bread with fruit',
      'Tuna salad sandwich on whole wheat bread'
    ],
    dinner: [
      'Baked cod with roasted asparagus and quinoa',
      'Sirloin steak, sweet potato mash, and green beans',
      'Chicken thighs with roasted potatoes and carrots',
      'Chicken and rice stir-fry with plenty of vegetables',
      'Baked salmon with quinoa and steamed broccoli'
    ],
    snacks: [
      'Protein shake and a small apple',
      'Mass gainer shake or whey protein with oats',
      'Protein shake and a banana',
      'Beef jerky and mixed nuts',
      'Greek yogurt with berries'
    ]
  },
  keto: {
    breakfast: [
      'Scrambled eggs with avocado and bacon',
      '6-egg omelet with cheese, spinach, and sausage',
      'Eggs cooked in butter with bacon and avocado',
      'Bulletproof coffee (coffee with MCT oil and butter)',
      'Keto pancakes with sugar-free syrup'
    ],
    lunch: [
      'Chicken salad with mayo over lettuce leaves',
      'Double bacon cheeseburger (no bun) with a side salad',
      'Tuna salad with heavy mayo and celery',
      'Large spinach salad with salmon, avocado, and olive oil',
      'Avocado stuffed with chicken salad'
    ],
    dinner: [
      'Steak with garlic butter and roasted cauliflower',
      'Ribeye steak with asparagus cooked in butter',
      'Fatty cut of steak with creamed spinach',
      'Chicken thighs with roasted zucchini and butter',
      'Pork chops with roasted asparagus'
    ],
    snacks: [
      'Macadamia nuts and string cheese',
      'Almonds, pork rinds, and keto protein shake',
      'Cheese crisps and macadamia nuts',
      'Pecans, walnuts, and keto-friendly electrolyte drinks',
      'Handful of almonds and a cheese stick'
    ]
  },
  paleo: {
    breakfast: [
      'Sweet potato hash with fried eggs',
      'Large portion of scrambled eggs with ground turkey and sweet potato',
      'Steak and eggs with a side of berries',
      'Sweet potato hash with eggs and bacon',
      'Paleo friendly banana pancakes'
    ],
    lunch: [
      'Turkey meatballs with zucchini ribbons',
      'Grilled chicken thighs with a large mixed salad and olive oil',
      'Large chicken salad with avocado and olive oil dressing',
      'Chicken salad with olive oil and a large side of fruit',
      'Bison burgers (no bun) with sweet potato fries'
    ],
    dinner: [
      'Grilled salmon with roasted Brussels sprouts',
      'Pork chops with roasted butternut squash and broccoli',
      'Bison burgers (no bun) with sweet potato fries',
      'Baked salmon with roasted root vegetables',
      'Grilled chicken skewers with roasted vegetables'
    ],
    snacks: [
      'Hard-boiled eggs and carrot sticks',
      'Beef jerky, mixed nuts, and fresh fruit',
      'Almond butter with apple slices',
      'Dried fruit and nut mix',
      'Fresh figs or dates'
    ]
  },
  mediterranean: {
    breakfast: [
      'Greek yogurt with honey and walnuts',
      'Greek yogurt topped with abundant nuts, seeds, and honey',
      'Whole grain toast with smashed avocado and poached eggs',
      'Oatmeal with Greek yogurt, berries, and walnuts',
      'Greek yogurt with honey and mixed nuts'
    ],
    lunch: [
      'Greek salad with grilled chicken and olive oil',
      'Large portion of whole-wheat pasta with chicken and pesto',
      'Quinoa bowl with grilled chicken, feta, and kalamata olives',
      'Whole wheat pita stuffed with falafel, hummus, and veggies',
      'Tuna salad with olive oil, lemon, and whole grain crackers'
    ],
    dinner: [
      'Baked tilapia with tomatoes, olives, and feta',
      'Baked salmon with a generous serving of quinoa and roasted veg',
      'Shrimp scampi with whole wheat pasta and olive oil',
      'Grilled fish with couscous and a side salad',
      'Grilled chicken skewers with tzatziki and a Greek salad'
    ],
    snacks: [
      'Hummus with cucumber slices',
      'Hummus with whole-grain pita bread',
      'Mixed nuts and a piece of fruit',
      'Fresh fruit and a handful of almonds',
      'Greek olives and feta cheese'
    ]
  },
  'intermittent-fasting': {
    breakfast: [
      'Black coffee or green tea (Fasting Window)',
      'Black coffee (Fasting Window)',
      'Water and black coffee (Fasting Window)',
      'Black coffee (Train fasted if adapted)',
      'Black coffee or tea (Fasting Window)'
    ],
    lunch: [
      'First Meal (12 PM): Grilled chicken wrap with avocado',
      'First Meal (12 PM): Huge portion of chicken, rice, and avocado',
      'First Meal (1 PM): Large ground beef and rice bowl',
      'First Meal (Post-workout): Large bowl of oats, fruit, and protein',
      'First Meal (12 PM): Large salad with grilled chicken and avocado'
    ],
    dinner: [
      'Last Meal (7 PM): Salmon with sweet potato and greens',
      'Last Meal (8 PM): Steak, potatoes, and a large protein shake',
      'Last Meal (8 PM): Chicken pasta bake',
      'Last Meal: Huge portion of pasta with chicken and veggies',
      'Last Meal (8 PM): Salmon, quinoa, and roasted vegetables'
    ],
    snacks: [
      'Protein shake (during eating window)',
      'Dense calorie shake between lunch and dinner',
      'Protein shake and fruit before training',
      'High-carb snacks during the eating window',
      'Greek yogurt or fruit during the eating window'
    ]
  },
  'indian-vegetarian': {
    breakfast: [
      'Paneer paratha with Greek yogurt',
      'Moong dal chilla with mint chutney',
      'Vegetable Poha with roasted peanuts',
      'Besan Chilla with curd',
      'Oats Upma with plenty of vegetables'
    ],
    lunch: [
      'Dal Tadka with Brown Rice and Salad',
      'Paneer Bhurji with 2 Chapatis',
      'Mixed Vegetable Sabzi with 1 Chapati and Dal',
      'Rajma Chawal (Kidney beans with rice) and Salad',
      'Chole (Chickpeas) with 1 Chapati and Curd'
    ],
    dinner: [
      'Soya Chunk Curry with Quinoa',
      'Grilled Tofu with sautéed vegetables',
      'Palak Paneer with 1 Chapati',
      'Lauki (Bottle Gourd) Sabzi with Dal and 1 Chapati',
      'Baingan Bharta with 1 Chapati and Curd'
    ],
    snacks: [
      'Roasted Chana (Chickpeas)',
      'Buttermilk (Chaas)',
      'Sprouts Salad',
      'Handful of Walnuts and Almonds',
      'Makhana (Fox nuts) roasted in olive oil'
    ]
  },
  'indian-non-vegetarian': {
    breakfast: [
      'Egg white omelette with spinach',
      'Boiled eggs (3) with whole wheat toast',
      'Chicken Keema with 1 Chapati',
      'Egg Bhurji with 2 slices of brown bread',
      'Masala Omelette with 2 slices of whole wheat bread'
    ],
    lunch: [
      'Chicken Curry with Brown Rice and Salad',
      'Grilled Fish with steamed vegetables and 1 Chapati',
      'Chicken Breast (150g) with a large bowl of Salad',
      'Mutton Curry (lean cuts) with 2 Chapatis',
      'Egg Curry with Brown Rice and Salad'
    ],
    dinner: [
      'Baked Fish with Broccoli and Cauliflower',
      'Chicken Stir-fry with plenty of vegetables',
      'Grilled Chicken Breast with sautéed beans',
      'Fish Curry with a small portion of Brown Rice',
      'Chicken Soup with plenty of vegetables'
    ],
    snacks: [
      'Boiled Egg (1)',
      'Chicken Salad with lemon dressing',
      'Roasted Chana',
      'Protein Shake with water',
      'Handful of Almonds'
    ]
  }
};

export const dietPlans: DietPlan[] = [
  {
    "id": "7-day-vegetarian-diet",
    "title": "7-Day Vegetarian Diet Plan for Muscle Gain",
    "goal": "muscle-gain",
    "type": "vegetarian",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Protein smoothie with whey/plant protein, oats, banana, and peanut butter",
      "lunch": "Large bowl of lentil dal, brown rice, and mixed vegetable curry with a side of paneer/tofu",
      "dinner": "Whole wheat roti, chickpea (chana) masala, and a large spinach salad",
      "snacks": "Greek yogurt with mixed nuts, or roasted edamame"
    }
  },
  {
    "id": "wl-veg",
    "title": "Lean Green Machine",
    "goal": "weight-loss",
    "type": "vegetarian",
    "calorieGuidance": "1800-2000 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Oatmeal with berries and almond butter",
      "lunch": "Quinoa salad with chickpeas and roasted veggies",
      "dinner": "Lentil soup with a side of steamed broccoli",
      "snacks": "Greek yogurt or a handful of almonds"
    }
  },
  {
    "id": "wl-nonveg",
    "title": "Shredded Omnivore",
    "goal": "weight-loss",
    "type": "non-vegetarian",
    "calorieGuidance": "1800-2000 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Egg white omelet with spinach and mushrooms",
      "lunch": "Grilled chicken breast with mixed greens and balsamic",
      "dinner": "Baked cod with roasted asparagus and quinoa",
      "snacks": "Protein shake and a small apple"
    }
  },
  {
    "id": "wl-vegan",
    "title": "Plant-Based Shred",
    "goal": "weight-loss",
    "type": "vegan",
    "calorieGuidance": "1800-2000 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Tofu scramble with bell peppers and onions",
      "lunch": "Large mixed salad with tempeh and light tahini dressing",
      "dinner": "Zucchini noodles with lentil bolognese",
      "snacks": "Edamame and a small handful of walnuts"
    }
  },
  {
    "id": "wl-keto",
    "title": "Keto Fat Burner",
    "goal": "weight-loss",
    "type": "keto",
    "calorieGuidance": "1800-2000 kcal",
    "macros": {
      "protein": "25%",
      "carbs": "5%",
      "fats": "70%"
    },
    "meals": {
      "breakfast": "Scrambled eggs with avocado and bacon",
      "lunch": "Chicken salad with mayo over lettuce leaves",
      "dinner": "Steak with garlic butter and roasted cauliflower",
      "snacks": "Macadamia nuts and string cheese"
    }
  },
  {
    "id": "wl-paleo",
    "title": "Primal Lean",
    "goal": "weight-loss",
    "type": "paleo",
    "calorieGuidance": "1800-2000 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Sweet potato hash with fried eggs",
      "lunch": "Turkey meatballs with zucchini ribbons",
      "dinner": "Grilled salmon with roasted Brussels sprouts",
      "snacks": "Hard-boiled eggs and carrot sticks"
    }
  },
  {
    "id": "wl-med",
    "title": "Mediterranean Slim",
    "goal": "weight-loss",
    "type": "mediterranean",
    "calorieGuidance": "1800-2000 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Greek yogurt with honey and walnuts",
      "lunch": "Greek salad with grilled chicken and olive oil",
      "dinner": "Baked tilapia with tomatoes, olives, and feta",
      "snacks": "Hummus with cucumber slices"
    }
  },
  {
    "id": "wl-if",
    "title": "Fasting Fat Loss (16:8)",
    "goal": "weight-loss",
    "type": "intermittent-fasting",
    "calorieGuidance": "1800-2000 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Black coffee or green tea (Fasting Window)",
      "lunch": "First Meal (12 PM): Grilled chicken wrap with avocado",
      "dinner": "Last Meal (7 PM): Salmon with sweet potato and greens",
      "snacks": "Protein shake (during eating window)"
    }
  },
  {
    "id": "mb-veg",
    "title": "Vegetarian Mass Builder",
    "goal": "muscle-building",
    "type": "vegetarian",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Large bowl of oats with whey protein, peanut butter, and banana",
      "lunch": "Paneer or halloumi wrap with beans and rice",
      "dinner": "Lentil and chickpea curry with brown rice and naan",
      "snacks": "Cottage cheese with pineapple and mixed nuts"
    }
  },
  {
    "id": "mb-nonveg",
    "title": "Protein Powerhouse",
    "goal": "muscle-building",
    "type": "non-vegetarian",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "4 whole eggs, 2 slices whole-wheat toast, and avocado",
      "lunch": "Chicken breast, large portion of white rice, and broccoli",
      "dinner": "Sirloin steak, sweet potato mash, and green beans",
      "snacks": "Mass gainer shake or whey protein with oats"
    }
  },
  {
    "id": "mb-vegan",
    "title": "Vegan Muscle Maker",
    "goal": "muscle-building",
    "type": "vegan",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "High-protein vegan smoothie bowl with hemp seeds and oats",
      "lunch": "Seitan stir-fry with quinoa and mixed vegetables",
      "dinner": "Black bean and sweet potato chili with avocado",
      "snacks": "Roasted chickpeas and a vegan protein shake"
    }
  },
  {
    "id": "mb-keto",
    "title": "Keto Bulk",
    "goal": "muscle-building",
    "type": "keto",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "5%",
      "fats": "65%"
    },
    "meals": {
      "breakfast": "6-egg omelet with cheese, spinach, and sausage",
      "lunch": "Double bacon cheeseburger (no bun) with a side salad",
      "dinner": "Ribeye steak with asparagus cooked in butter",
      "snacks": "Almonds, pork rinds, and keto protein shake"
    }
  },
  {
    "id": "mb-paleo",
    "title": "Primal Mass",
    "goal": "muscle-building",
    "type": "paleo",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Large portion of scrambled eggs with ground turkey and sweet potato",
      "lunch": "Grilled chicken thighs with a large mixed salad and olive oil",
      "dinner": "Pork chops with roasted butternut squash and broccoli",
      "snacks": "Beef jerky, mixed nuts, and fresh fruit"
    }
  },
  {
    "id": "mb-med",
    "title": "Mediterranean Muscle",
    "goal": "muscle-building",
    "type": "mediterranean",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Greek yogurt topped with abundant nuts, seeds, and honey",
      "lunch": "Large portion of whole-wheat pasta with chicken and pesto",
      "dinner": "Baked salmon with a generous serving of quinoa and roasted veg",
      "snacks": "Hummus with whole-grain pita bread"
    }
  },
  {
    "id": "mb-if",
    "title": "Fasting Muscle (16:8)",
    "goal": "muscle-building",
    "type": "intermittent-fasting",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Black coffee (Fasting Window)",
      "lunch": "First Meal (12 PM): Huge portion of chicken, rice, and avocado",
      "dinner": "Last Meal (8 PM): Steak, potatoes, and a large protein shake",
      "snacks": "Dense calorie shake between lunch and dinner"
    }
  },
  {
    "id": "str-veg",
    "title": "Vegetarian Power",
    "goal": "strength",
    "type": "vegetarian",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Protein pancakes made with oats and whey, topped with syrup",
      "lunch": "Black bean burritos with cheese, guacamole, and salsa",
      "dinner": "Hearty vegetable and lentil stew with crusty bread",
      "snacks": "Greek yogurt with granola"
    }
  },
  {
    "id": "str-nonveg",
    "title": "Powerlifter Fuel",
    "goal": "strength",
    "type": "non-vegetarian",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Oatmeal with whole milk, protein powder, and peanut butter",
      "lunch": "Ground beef and rice bowl with cheese and hot sauce",
      "dinner": "Chicken thighs with roasted potatoes and carrots",
      "snacks": "Protein shake and a banana"
    }
  },
  {
    "id": "str-vegan",
    "title": "Plant Power",
    "goal": "strength",
    "type": "vegan",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Tofu scramble with hash browns and avocado",
      "lunch": "Lentil pasta with marinara sauce and vegan meatballs",
      "dinner": "Tempeh tacos with corn tortillas, beans, and salsa",
      "snacks": "Peanut butter on rice cakes"
    }
  },
  {
    "id": "str-keto",
    "title": "Keto Strength",
    "goal": "strength",
    "type": "keto",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "5%",
      "fats": "65%"
    },
    "meals": {
      "breakfast": "Eggs cooked in butter with bacon and avocado",
      "lunch": "Tuna salad with heavy mayo and celery",
      "dinner": "Fatty cut of steak with creamed spinach",
      "snacks": "Cheese crisps and macadamia nuts"
    }
  },
  {
    "id": "str-paleo",
    "title": "Caveman Strength",
    "goal": "strength",
    "type": "paleo",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Steak and eggs with a side of berries",
      "lunch": "Large chicken salad with avocado and olive oil dressing",
      "dinner": "Bison burgers (no bun) with sweet potato fries",
      "snacks": "Almond butter with apple slices"
    }
  },
  {
    "id": "str-med",
    "title": "Mediterranean Power",
    "goal": "strength",
    "type": "mediterranean",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Whole grain toast with smashed avocado and poached eggs",
      "lunch": "Quinoa bowl with grilled chicken, feta, and kalamata olives",
      "dinner": "Shrimp scampi with whole wheat pasta and olive oil",
      "snacks": "Mixed nuts and a piece of fruit"
    }
  },
  {
    "id": "str-if",
    "title": "Fasting Strength (16:8)",
    "goal": "strength",
    "type": "intermittent-fasting",
    "calorieGuidance": "2500-2800 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Water and black coffee (Fasting Window)",
      "lunch": "First Meal (1 PM): Large ground beef and rice bowl",
      "dinner": "Last Meal (8 PM): Chicken pasta bake",
      "snacks": "Protein shake and fruit before training"
    }
  },
  {
    "id": "end-veg",
    "title": "Vegetarian Engine",
    "goal": "endurance",
    "type": "vegetarian",
    "calorieGuidance": "2400-3000 kcal (varies by training volume)",
    "macros": {
      "protein": "20%",
      "carbs": "55%",
      "fats": "25%"
    },
    "meals": {
      "breakfast": "Large bowl of oatmeal with fruit, chia seeds, and honey",
      "lunch": "Whole wheat pasta salad with chickpeas and vegetables",
      "dinner": "Sweet potato and black bean enchiladas",
      "snacks": "Energy gels (during training), bananas, and trail mix"
    }
  },
  {
    "id": "end-nonveg",
    "title": "Endurance Omnivore",
    "goal": "endurance",
    "type": "non-vegetarian",
    "calorieGuidance": "2400-3000 kcal (varies by training volume)",
    "macros": {
      "protein": "20%",
      "carbs": "55%",
      "fats": "25%"
    },
    "meals": {
      "breakfast": "Bagel with cream cheese and smoked salmon",
      "lunch": "Turkey and cheese sandwich on whole grain bread with fruit",
      "dinner": "Chicken and rice stir-fry with plenty of vegetables",
      "snacks": "Granola bars, fruit, and sports drinks (during training)"
    }
  },
  {
    "id": "end-vegan",
    "title": "Plant-Based Engine",
    "goal": "endurance",
    "type": "vegan",
    "calorieGuidance": "2400-3000 kcal (varies by training volume)",
    "macros": {
      "protein": "20%",
      "carbs": "55%",
      "fats": "25%"
    },
    "meals": {
      "breakfast": "Smoothie with bananas, oats, spinach, and plant protein",
      "lunch": "Quinoa and roasted vegetable bowl with tahini",
      "dinner": "Lentil shepherd's pie with sweet potato topping",
      "snacks": "Dates stuffed with peanut butter"
    }
  },
  {
    "id": "end-keto",
    "title": "Fat-Adapted Endurance",
    "goal": "endurance",
    "type": "keto",
    "calorieGuidance": "2400-3000 kcal (varies by training volume)",
    "macros": {
      "protein": "20%",
      "carbs": "5%",
      "fats": "75%"
    },
    "meals": {
      "breakfast": "Bulletproof coffee (coffee with MCT oil and butter)",
      "lunch": "Large spinach salad with salmon, avocado, and olive oil",
      "dinner": "Chicken thighs with roasted zucchini and butter",
      "snacks": "Pecans, walnuts, and keto-friendly electrolyte drinks"
    }
  },
  {
    "id": "end-paleo",
    "title": "Primal Stamina",
    "goal": "endurance",
    "type": "paleo",
    "calorieGuidance": "2400-3000 kcal (varies by training volume)",
    "macros": {
      "protein": "20%",
      "carbs": "55%",
      "fats": "25%"
    },
    "meals": {
      "breakfast": "Sweet potato hash with eggs and bacon",
      "lunch": "Chicken salad with olive oil and a large side of fruit",
      "dinner": "Baked salmon with roasted root vegetables",
      "snacks": "Dried fruit and nut mix"
    }
  },
  {
    "id": "end-med",
    "title": "Mediterranean Stamina",
    "goal": "endurance",
    "type": "mediterranean",
    "calorieGuidance": "2400-3000 kcal (varies by training volume)",
    "macros": {
      "protein": "20%",
      "carbs": "55%",
      "fats": "25%"
    },
    "meals": {
      "breakfast": "Oatmeal with Greek yogurt, berries, and walnuts",
      "lunch": "Whole wheat pita stuffed with falafel, hummus, and veggies",
      "dinner": "Grilled fish with couscous and a side salad",
      "snacks": "Fresh fruit and a handful of almonds"
    }
  },
  {
    "id": "end-if",
    "title": "Fasted Endurance",
    "goal": "endurance",
    "type": "intermittent-fasting",
    "calorieGuidance": "2400-3000 kcal (varies by training volume)",
    "macros": {
      "protein": "20%",
      "carbs": "55%",
      "fats": "25%"
    },
    "meals": {
      "breakfast": "Black coffee (Train fasted if adapted)",
      "lunch": "First Meal (Post-workout): Large bowl of oats, fruit, and protein",
      "dinner": "Last Meal: Huge portion of pasta with chicken and veggies",
      "snacks": "High-carb snacks during the eating window"
    }
  },
  {
    "id": "gf-veg",
    "title": "Balanced Vegetarian",
    "goal": "general-fitness",
    "type": "vegetarian",
    "calorieGuidance": "2000-2400 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "40%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Avocado toast on whole grain bread with grilled paneer and seeds",
      "lunch": "Lentil soup with a side salad and vinaigrette",
      "dinner": "Vegetable stir-fry with tofu and brown rice",
      "snacks": "Apple slices with almond butter"
    }
  },
  {
    "id": "gf-nonveg",
    "title": "Balanced Omnivore",
    "goal": "general-fitness",
    "type": "non-vegetarian",
    "calorieGuidance": "2000-2400 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "40%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Scrambled eggs with spinach and a slice of toast",
      "lunch": "Grilled chicken salad with mixed greens and olive oil",
      "dinner": "Baked salmon with quinoa and steamed broccoli",
      "snacks": "Greek yogurt with berries"
    }
  },
  {
    "id": "gf-vegan",
    "title": "Balanced Vegan",
    "goal": "general-fitness",
    "type": "vegan",
    "calorieGuidance": "2000-2400 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "40%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Oatmeal made with almond milk, topped with chia seeds and fruit",
      "lunch": "Chickpea salad sandwich on whole grain bread",
      "dinner": "Vegan chili with mixed beans and a side of cornbread",
      "snacks": "Carrot sticks with hummus"
    }
  },
  {
    "id": "gf-keto",
    "title": "Keto Lifestyle",
    "goal": "general-fitness",
    "type": "keto",
    "calorieGuidance": "2000-2400 kcal",
    "macros": {
      "protein": "25%",
      "carbs": "5%",
      "fats": "70%"
    },
    "meals": {
      "breakfast": "Eggs and bacon with a side of avocado",
      "lunch": "Caesar salad with grilled chicken (no croutons)",
      "dinner": "Pork chops with roasted asparagus",
      "snacks": "Handful of almonds and a cheese stick"
    }
  },
  {
    "id": "gf-paleo",
    "title": "Paleo Lifestyle",
    "goal": "general-fitness",
    "type": "paleo",
    "calorieGuidance": "2000-2400 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "40%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Veggie omelet cooked in coconut oil",
      "lunch": "Large salad with leftover grilled meat and olive oil",
      "dinner": "Steak with roasted sweet potatoes and green beans",
      "snacks": "Fresh fruit and a handful of walnuts"
    }
  },
  {
    "id": "gf-med",
    "title": "Mediterranean Lifestyle",
    "goal": "general-fitness",
    "type": "mediterranean",
    "calorieGuidance": "2000-2400 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "40%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Greek yogurt with honey and mixed nuts",
      "lunch": "Tuna salad with olive oil, lemon, and whole grain crackers",
      "dinner": "Grilled chicken skewers with tzatziki and a Greek salad",
      "snacks": "Fresh figs or dates"
    }
  },
  {
    "id": "gf-if",
    "title": "Intermittent Fasting (16:8)",
    "goal": "general-fitness",
    "type": "intermittent-fasting",
    "calorieGuidance": "2000-2400 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "40%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Black coffee or tea (Fasting Window)",
      "lunch": "First Meal (12 PM): Large salad with grilled chicken and avocado",
      "dinner": "Last Meal (8 PM): Salmon, quinoa, and roasted vegetables",
      "snacks": "Greek yogurt or fruit during the eating window"
    }
  },
  {
    "id": "ind-veg-gain",
    "title": "Indian Vegetarian Muscle Gain",
    "goal": "muscle-gain",
    "type": "indian-vegetarian",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Paneer paratha (2) with Greek yogurt and a handful of almonds",
      "lunch": "Large bowl of Dal Tadka, Paneer Bhurji, 3 Chapatis, and Brown Rice",
      "dinner": "Soya Chunk Curry with Quinoa or 2 Chapatis and a large bowl of Curd",
      "snacks": "Roasted Chana, Protein Shake with milk, and a Banana"
    }
  },
  {
    "id": "ind-nonveg-gain",
    "title": "Indian Non-Veg Muscle Gain",
    "goal": "muscle-gain",
    "type": "indian-non-vegetarian",
    "calorieGuidance": "2800-3200 kcal",
    "macros": {
      "protein": "30%",
      "carbs": "50%",
      "fats": "20%"
    },
    "meals": {
      "breakfast": "Omelette (3 eggs) with 2 slices of whole wheat bread and a glass of milk",
      "lunch": "Chicken Curry (200g), 3 Chapatis, Brown Rice, and a side of Salad",
      "dinner": "Grilled Fish or Mutton Curry with 2 Chapatis and steamed vegetables",
      "snacks": "Boiled Eggs (2), Protein Shake, and Peanut Butter on Toast"
    }
  },
  {
    "id": "ind-veg-loss",
    "title": "Indian Vegetarian Fat Loss",
    "goal": "fat-loss",
    "type": "indian-vegetarian",
    "calorieGuidance": "1500-1800 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Moong Dal Chilla (2) with mint chutney and a small bowl of Curd",
      "lunch": "1 Chapati, a large bowl of mixed vegetable Sabzi, and a bowl of Dal",
      "dinner": "Grilled Tofu with sautéed vegetables and a small portion of Brown Rice",
      "snacks": "Buttermilk (Chaas), a handful of Walnuts, and Green Tea"
    }
  },
  {
    "id": "ind-nonveg-loss",
    "title": "Indian Non-Veg Fat Loss",
    "goal": "fat-loss",
    "type": "indian-non-vegetarian",
    "calorieGuidance": "1500-1800 kcal",
    "macros": {
      "protein": "40%",
      "carbs": "30%",
      "fats": "30%"
    },
    "meals": {
      "breakfast": "Egg White Omelette (4 whites) with spinach and mushrooms",
      "lunch": "Grilled Chicken Breast (150g) with a large bowl of Salad and 1 Chapati",
      "dinner": "Baked Fish with steamed Broccoli and Cauliflower",
      "snacks": "Boiled Egg (1), Sprouts Salad, and Black Coffee"
    }
  }
];

export const supplements = [
  {
    id: 'whey-protein',
    name: 'Whey Protein',
    category: 'Protein',
    benefits: 'Muscle repair and growth, high bioavailability.',
    usage: '1 scoop post-workout or as a snack.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'creatine',
    name: 'Creatine Monohydrate',
    category: 'Performance',
    benefits: 'Increased strength, power output, and muscle volume.',
    usage: '3-5g daily, anytime.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'bcaa',
    name: 'BCAAs',
    category: 'Recovery',
    benefits: 'Reduced muscle soreness and fatigue during workouts.',
    usage: '5-10g during workout.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'multivitamin',
    name: 'Multivitamin',
    category: 'Vitamins & Minerals',
    benefits: 'Fills nutritional gaps, supports immune function and overall health.',
    usage: '1 serving daily with a meal.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3',
    category: 'Vitamins & Minerals',
    benefits: 'Supports bone health, immune system, and testosterone production.',
    usage: '2,000-5,000 IU daily, preferably with a fat-containing meal.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'omega-3',
    name: 'Omega-3 Fish Oil',
    category: 'Health & Wellness',
    benefits: 'Reduces inflammation, supports heart and brain health, aids joint recovery.',
    usage: '1-3g of combined EPA/DHA daily with meals.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'magnesium',
    name: 'Magnesium',
    category: 'Vitamins & Minerals',
    benefits: 'Improves sleep quality, muscle function, and reduces cramping.',
    usage: '200-400mg before bed.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1550573104-4f9646515f99?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'zinc',
    name: 'Zinc',
    category: 'Vitamins & Minerals',
    benefits: 'Supports immune function, hormone production, and cellular repair.',
    usage: '15-30mg daily with food.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1584017947486-5c9c2e787dce?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'pre-workout',
    name: 'Pre-Workout',
    category: 'Performance',
    benefits: 'Enhances energy, focus, and blood flow during training.',
    usage: '1 scoop 20-30 minutes before training.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    category: 'Vitamins & Minerals',
    benefits: 'Potent antioxidant, supports collagen synthesis and immune defense.',
    usage: '500-1000mg daily.',
    type: 'both',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=60&w=600&auto=format&fit=crop&fm=webp'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    transformation: 'Lost 30 lbs in 6 months',
    quote: 'IronCore changed my life. The personalized plans were exactly what I needed.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=600&auto=format&fit=crop&fm=webp'
  },
  {
    id: 2,
    name: 'Sarah Miller',
    transformation: 'Gained 10 lbs of muscle',
    quote: 'The diet plans are so easy to follow, even for a busy professional like me.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=60&w=600&auto=format&fit=crop&fm=webp'
  }
];

export const blogPosts = [
  {
    "id": 1,
    "title": "The Ultimate Guide to Progressive Overload: How to Keep Growing",
    "seoTitle": "Progressive Overload: Guide to Muscle Growth",
    "seoDescription": "Master progressive overload to break plateaus, build muscle, and increase strength. Learn 5 proven methods to continuously challenge your body and grow.",
    "slug": "the-ultimate-guide-to-progressive-overload-how-to-keep-growing",
    "content": "\n# The Ultimate Guide to Progressive Overload: How to Keep Growing\n\nIf you've been hitting the gym consistently but your progress has stalled, you've likely hit a plateau. The secret to breaking through and continuing to build muscle and strength isn't a magic supplement or a secret exercise—it's a fundamental principle of exercise science known as **progressive overload**.\n\nIn this comprehensive guide, we will break down exactly what progressive overload is, why it's the most critical component of any [muscle gain workout plan](/workouts), and how you can implement it effectively to ensure continuous growth.\n\n## What is Progressive Overload?\n\nProgressive overload is the gradual increase of stress placed upon the body during exercise training. The human body is incredibly adaptive. When you lift a certain weight for a specific number of repetitions, your muscles experience micro-tears. During the recovery process, your body repairs these tears, making the muscle fibers thicker and stronger to handle that specific stress better next time.\n\nHowever, if you continue to lift the exact same weight for the exact same number of reps week after week, your body has no reason to adapt further. You will stop growing. To force continuous adaptation (muscle growth and strength gains), you must continually challenge your body beyond its current capacity.\n\n## The Mechanisms of Muscle Hypertrophy\n\nTo understand why progressive overload works, we need to look at the three primary mechanisms of muscle hypertrophy (growth):\n\n1. **Mechanical Tension:** This is the primary driver of muscle growth. It refers to the amount of force generated by the muscle fibers against resistance. Lifting heavier weights increases mechanical tension.\n2. **Metabolic Stress:** This is the \"pump\" or the burning sensation you feel during high-rep sets. It's caused by the buildup of metabolites like lactate.\n3. **Muscle Damage:** The micro-tears mentioned earlier. While some damage is necessary, too much can impede recovery.\n\nProgressive overload primarily targets mechanical tension, but it can also be used to increase metabolic stress.\n\n## 5 Ways to Implement Progressive Overload\n\nMany people mistakenly believe that progressive overload only means adding more weight to the bar. While increasing weight is the most straightforward method, it's not the only one. Here are five ways to progressively overload your muscles:\n\n### 1. Increase the Resistance (Weight)\nThis is the classic method. If you squatted 200 lbs for 3 sets of 8 reps last week, try squatting 205 lbs for 3 sets of 8 reps this week. \n\n**Pro Tip:** Use micro-plates (1.25 lbs or 2.5 lbs) to make small, sustainable jumps rather than trying to add 10 lbs every week.\n\n### 2. Increase the Volume (Reps or Sets)\nIf you can't increase the weight, increase the amount of work you do with the same weight. \n*   **Reps:** If you did 200 lbs for 3 sets of 8, try to do 3 sets of 9 next week.\n*   **Sets:** If you did 200 lbs for 3 sets of 8, try to do 4 sets of 8 next week.\n\n### 3. Decrease the Rest Time\nBy reducing the rest time between sets while lifting the same weight for the same reps, you force your muscles to recover faster and increase metabolic stress. If you rested 90 seconds last week, try resting 75 seconds this week.\n\n### 4. Improve Your Technique and Range of Motion\nLifting the same weight for the same reps but with better form, deeper squats, or a more controlled eccentric (lowering) phase is a form of progressive overload. You are making the muscle do more work by eliminating momentum.\n\n### 5. Increase Frequency\nTraining a muscle group more frequently (e.g., twice a week instead of once) increases the total weekly volume and stimulus for growth. Check out our [muscle group guide](/muscle-groups) to learn how to structure your split.\n\n## Tracking Your Progress: The Key to Success\n\nYou cannot progressively overload if you don't know what you did last week. Tracking your workouts is non-negotiable. \n\nWhether you use a notebook, an app, or a spreadsheet, you must record:\n*   The exercise\n*   The weight used\n*   The number of sets and reps completed\n*   How difficult it felt (RPE - Rate of Perceived Exertion)\n\nBefore you start your next workout, review your previous numbers and set a specific goal to beat them in at least one way (weight, reps, or sets).\n\n## Common Mistakes to Avoid\n\n1. **Sacrificing Form for Weight:** This is the fastest way to get injured. Never increase the weight if you cannot maintain proper technique.\n2. **Overloading Too Quickly:** Trying to add too much weight too fast will lead to burnout, plateauing, and potential injury. Aim for slow, steady progress.\n3. **Ignoring Recovery:** Progressive overload provides the stimulus for growth, but the actual growth happens during recovery. Ensure you are following a proper [muscle building diet](/diets), getting enough sleep, and considering [supplements for recovery](/blog/top-5-supplements-for-muscle-recovery-backed-by-science).\n\n## Conclusion\n\nProgressive overload is the undisputed king of muscle growth and strength development. By systematically challenging your body with increased weight, volume, or intensity, you force it to adapt and grow. Combine this principle with a structured [gym workout plan](/workouts) and adequate nutrition, and you will unlock your true physical potential. Stop guessing in the gym, start tracking, and start growing.\n    ",
    "author": "Dr. Marcus Thorne, Exercise Physiologist",
    "date": "2024-04-05",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": 2,
    "title": "Top 5 Supplements for Muscle Recovery (Backed by Science)",
    "seoTitle": "Top 5 Muscle Recovery Supplements",
    "seoDescription": "Discover the top 5 science-backed supplements for muscle recovery. Learn how whey protein, creatine, and magnesium reduce soreness and accelerate repair.",
    "slug": "top-5-supplements-for-muscle-recovery-backed-by-science",
    "content": "\n# Top 5 Supplements for Muscle Recovery (Backed by Science)\n\nYou've crushed your [workout](/workouts), pushed through the burn, and applied progressive overload. But the truth is, you don't build muscle in the gym—you build it while you recover. \n\nWhile a solid [diet plan](/diets) and 7-9 hours of quality sleep are the foundation of recovery, the right fitness supplements can provide the extra edge needed to reduce soreness, accelerate tissue repair, and get you back to training at full capacity sooner.\n\nIn this guide, we break down the top 5 scientifically backed supplements for muscle recovery.\n\n## 1. Whey Protein Isolate\n\n**The Science:** Muscle protein synthesis (MPS) is the process by which your body repairs and builds new muscle tissue. To maximize MPS, your body needs a rapid influx of essential amino acids, particularly leucine, immediately following a workout.\n\nWhey protein isolate is a fast-digesting, highly bioavailable protein source that spikes blood amino acid levels quickly, kickstarting the recovery process.\n\n**How to Use It:** Consume 25-30 grams of whey protein within 30-60 minutes after your workout. It's also an excellent, convenient option to hit your daily protein targets if you are struggling to eat enough whole foods.\n\n## 2. Creatine Monohydrate\n\n**The Science:** Creatine is arguably the most researched and proven sports supplement in history. While primarily known for increasing strength and power output by replenishing ATP stores, creatine also plays a significant role in recovery.\n\nCreatine supplementation has been shown to reduce muscle cell damage and inflammation following exhaustive exercise. It also draws water into the muscle cells (intracellular hydration), which promotes an anabolic environment conducive to repair.\n\n**How to Use It:** Take 3-5 grams daily. Timing doesn't matter as much as consistency. You do not need to \"load\" creatine; a steady daily dose will saturate your muscles within a few weeks.\n\n## 3. Omega-3 Fish Oil (EPA & DHA)\n\n**The Science:** Intense training causes micro-trauma to muscle fibers, leading to inflammation. While acute inflammation is a necessary part of the healing process, chronic or excessive inflammation can delay recovery and cause prolonged Delayed Onset Muscle Soreness (DOMS).\n\nOmega-3 fatty acids, specifically EPA and DHA found in fish oil, possess potent anti-inflammatory properties. Studies have shown that Omega-3 supplementation can significantly reduce post-workout muscle soreness and improve range of motion during the recovery period.\n\n**How to Use It:** Aim for 2-3 grams of combined EPA and DHA daily. Take it with a meal that contains dietary fat to enhance absorption.\n\n## 4. Magnesium\n\n**The Science:** Magnesium is an essential mineral involved in over 300 biochemical reactions in the body, including muscle contraction, nerve function, and protein synthesis. \n\nAthletes lose magnesium through sweat, and a deficiency can lead to muscle cramps, spasms, and impaired recovery. Furthermore, magnesium plays a crucial role in regulating the central nervous system and promoting deep, restorative sleep—the most critical time for muscle repair.\n\n**How to Use It:** Take 200-400mg of a highly bioavailable form of magnesium (like Magnesium Glycinate or Magnesium Citrate) 30-60 minutes before bed to improve sleep quality and support muscle relaxation.\n\n## 5. Tart Cherry Juice Extract\n\n**The Science:** Tart cherries are rich in anthocyanins, which are powerful antioxidants and anti-inflammatory compounds. \n\nNumerous studies on endurance athletes and weightlifters have demonstrated that supplementing with tart cherry juice or extract significantly reduces muscle pain, minimizes strength loss after intense training, and accelerates the recovery of muscle function.\n\n**How to Use It:** Consume the equivalent of 50-100mg of anthocyanins (usually found in 1-2 capsules of tart cherry extract or 8-12 oz of juice) daily, particularly during periods of high-volume or high-intensity training.\n\n## The Bottom Line\n\nSupplements are exactly that—supplementary. They will not fix a poor diet or a lack of sleep. However, when combined with a structured [hypertrophy training program](/workouts) and a balanced [macronutrient diet](/diets), these five supplements can significantly enhance your body's ability to recover, adapt, and grow. \n\nFor a complete list of recommended products, check out our full [Fitness Supplements Guide](/supplements).\n    ",
    "author": "Sarah Jenkins, Sports Nutritionist",
    "date": "2024-04-02",
    "image": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": 3,
    "title": "How to Meal Prep for a Keto Diet on a Budget",
    "seoTitle": "Budget Keto Diet Meal Prep Guide",
    "seoDescription": "Learn how to meal prep for a keto diet on a budget. Discover cheap, high-fat foods, money-saving tips, and a sample low-carb menu for effective fat loss.",
    "slug": "how-to-meal-prep-for-a-keto-diet-on-a-budget",
    "content": "\n# How to Meal Prep for a Keto Diet on a Budget\n\nThe Ketogenic (Keto) diet—a high-fat, very low-carb, and moderate-protein nutritional approach—has gained massive popularity for its effectiveness in promoting fat loss and providing sustained energy. \n\nHowever, a common misconception is that following a keto diet is expensive. While premium cuts of grass-fed steak and specialty keto snacks can drain your wallet, building a highly effective, budget-friendly keto [diet plan](/diets) is entirely possible with smart meal prepping.\n\nIn this guide, we will show you how to meal prep for a keto diet without breaking the bank, ensuring you hit your macros and your financial goals.\n\n## The Core Principles of Budget Keto\n\nTo succeed on a budget, you need to focus on whole, unprocessed foods and avoid the \"keto tax\" associated with branded, pre-packaged low-carb snacks.\n\n### 1. Buy in Bulk\nPurchasing your staple proteins and fats in bulk is the easiest way to reduce your cost per meal. Look for family packs of meat, large tubs of oils, and bulk bags of nuts or seeds.\n\n### 2. Choose Cheaper Cuts of Meat\nOn a standard diet, lean cuts like chicken breast are prized. On keto, fat is your friend. Cheaper, fattier cuts of meat are actually *better* for your macros.\n*   **Instead of Chicken Breast:** Buy chicken thighs or drumsticks (bone-in, skin-on).\n*   **Instead of Ribeye:** Buy ground beef (80/20 or 73/27), chuck roast, or pork shoulder.\n\n### 3. Embrace Eggs\nEggs are the ultimate budget keto superfood. They have a perfect ratio of fat to protein, are incredibly versatile, and cost pennies per serving.\n\n### 4. Shop Seasonal and Frozen Vegetables\nLow-carb vegetables are essential for micronutrients and fiber. Buying vegetables that are in season is cheaper. Alternatively, frozen vegetables (like broccoli, cauliflower, and spinach) are picked at peak ripeness, flash-frozen, and are often significantly cheaper than fresh options.\n\n## A Sample Budget Keto Meal Prep Menu\n\nHere is a simple, cost-effective meal prep strategy for a week of keto eating.\n\n### Breakfast: Crustless Spinach and Feta Quiche\n**Ingredients:** Eggs, heavy cream, frozen spinach (thawed and drained), feta cheese, salt, and pepper.\n**Prep:** Whisk the eggs and cream, stir in the spinach and cheese, pour into a greased baking dish, and bake until set. Cut into squares for easy grab-and-go breakfasts.\n**Why it works:** Eggs and frozen spinach are incredibly cheap, and this provides a massive dose of healthy fats and protein to start your day.\n\n### Lunch: Loaded Chicken Thigh Salad\n**Ingredients:** Bone-in, skin-on chicken thighs, romaine lettuce, olive oil, vinegar, hard-boiled eggs, and sunflower seeds.\n**Prep:** Roast a large batch of chicken thighs at the beginning of the week. Shred the meat and portion it over greens. Dress with a simple homemade olive oil vinaigrette.\n**Why it works:** Chicken thighs are budget-friendly, and making your own dressing from bulk olive oil saves money compared to store-bought keto dressings.\n\n### Dinner: Ground Beef and Cabbage Stir-Fry (Crack Slaw)\n**Ingredients:** 80/20 ground beef, shredded cabbage (buy a whole head, not the pre-shredded bags), soy sauce (or coconut aminos), garlic, ginger, and sesame oil.\n**Prep:** Brown the beef, add the shredded cabbage and aromatics, and cook until tender. \n**Why it works:** Ground beef and cabbage are two of the cheapest ingredients in the supermarket. This meal is incredibly filling and perfectly aligns with keto macros.\n\n### Snacks (If Needed)\n*   Hard-boiled eggs\n*   Pork rinds (very cheap and high in fat/protein)\n*   Almonds or walnuts (bought in bulk)\n\n## Essential Tools for Meal Prepping\n\nTo make this sustainable, invest in a few basic tools:\n1.  **A Food Scale:** Essential for accurately tracking your macros and ensuring you stay in ketosis.\n2.  **Glass Storage Containers:** They last longer, don't stain, and are microwave-safe.\n3.  **A Slow Cooker or Instant Pot:** Perfect for turning cheap, tough cuts of meat (like pork shoulder) into tender, delicious meals.\n\n## Conclusion\n\nFollowing a keto [weight loss diet plan](/diets) doesn't require a massive grocery budget. By prioritizing cheap, fatty cuts of meat, utilizing eggs, buying frozen vegetables, and dedicating a few hours on Sunday to meal prep, you can achieve your fat loss goals while keeping your finances intact. \n\nPair your budget keto diet with a solid [home workout plan](/workouts) or gym routine, and you'll be well on your way to a leaner, healthier you.\n    ",
    "author": "Chef David Chen",
    "date": "2024-03-28",
    "image": "https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": 4,
    "title": "Gym vs. Home Workouts: Which is Better for Fat Loss?",
    "seoTitle": "Gym vs Home Workouts for Fat Loss",
    "seoDescription": "Gym vs home workouts: which is better for fat loss? Compare the pros and cons of bodyweight circuits and heavy lifting to find the best routine for you.",
    "slug": "gym-vs-home-workouts-which-is-better-for-fat-loss",
    "content": "\n# Gym vs. Home Workouts: Which is Better for Fat Loss?\n\nWhen embarking on a fat loss journey, one of the first decisions you have to make is where you are going to train. Do you need to invest in a gym membership, or can you achieve your dream physique from the comfort of your living room?\n\nThe debate between gym workouts and home workouts is ongoing. In this article, we will break down the pros and cons of each, how they impact fat loss, and help you decide which [workout plan](/workouts) is best for your specific goals.\n\n## The Science of Fat Loss\n\nBefore comparing the two environments, we must establish how fat loss actually works. Fat loss is dictated by the laws of thermodynamics: you must be in a caloric deficit. This means you need to burn more calories than you consume.\n\nExercise aids fat loss in two primary ways:\n1.  **Increasing Caloric Expenditure:** Burning calories during the workout itself.\n2.  **Building/Preserving Muscle Mass:** Muscle is metabolically active tissue. The more muscle you have, the more calories you burn at rest. \n\nTherefore, the \"best\" environment for fat loss is the one that allows you to consistently burn calories and apply [progressive overload](/blog/the-ultimate-guide-to-progressive-overload-how-to-keep-growing) to build or maintain muscle, while adhering to a strict [diet plan](/diets).\n\n## The Case for Gym Workouts\n\n### Pros:\n*   **Access to Heavy Resistance:** The gym provides barbells, dumbbells, and machines. This makes it incredibly easy to apply progressive overload and build muscle, which elevates your resting metabolic rate.\n*   **Variety of Equipment:** From stair climbers to rowing machines, gyms offer endless options for high-intensity interval training (HIIT) and steady-state cardio, keeping your routines fresh.\n*   **Environment and Focus:** Going to a dedicated space can help you mentally shift into \"workout mode,\" reducing distractions compared to being at home.\n\n### Cons:\n*   **Time and Convenience:** Commuting to the gym, waiting for equipment, and commuting home takes time—a major barrier for busy individuals.\n*   **Cost:** Gym memberships and initiation fees can be expensive.\n*   **Intimidation:** For beginners, the gym environment can sometimes feel overwhelming.\n\n## The Case for Home Workouts\n\n### Pros:\n*   **Ultimate Convenience:** Your commute is zero minutes. You can work out at 5 AM or midnight, making consistency (the most critical factor in fat loss) much easier to achieve.\n*   **Cost-Effective:** Bodyweight exercises are free. Even investing in a few resistance bands or adjustable dumbbells is cheaper than a year-long gym membership.\n*   **Privacy:** You can train in your living room without worrying about who is watching, allowing you to focus entirely on your effort.\n\n### Cons:\n*   **Limited Progressive Overload:** Once you can easily do 50 push-ups or bodyweight squats, it becomes difficult to continue challenging the muscles without heavy weights. You may build endurance, but muscle growth (hypertrophy) will stall.\n*   **Distractions:** The couch, the TV, and chores are all within arm's reach, requiring high discipline.\n*   **Space Constraints:** Not everyone has the room for dynamic movements or large equipment.\n\n## Which is Better for Fat Loss?\n\nThe truth is, **your body doesn't know where it is; it only knows tension and effort.**\n\nIf your primary goal is pure fat loss and cardiovascular health, a high-intensity **home workout plan** utilizing bodyweight circuits, burpees, and jump rope can be incredibly effective at burning calories and creating a deficit.\n\nHowever, if your goal is body recomposition—losing fat *while* building a sculpted, muscular physique—a **gym workout plan** is generally superior. The access to heavy weights allows you to stimulate muscle growth much more effectively than bodyweight exercises alone.\n\n## The Verdict: Consistency is King\n\nThe \"better\" option is the one you will actually stick to. \n\nIf you hate the gym commute and know you'll skip days, a home workout is better. If you lack motivation at home and need the energy of a weight room, the gym is better.\n\n**The Ultimate Strategy:** Combine them. Use the gym 3 days a week for heavy strength training to build muscle, and do 2 days of high-intensity cardio or bodyweight circuits at home to maximize calorie burn. \n\nRegardless of where you train, remember that you cannot out-train a bad diet. Ensure your [macronutrient diet plan](/diets) is dialed in, consider adding [recovery supplements](/supplements) to your routine, and stay consistent. The results will follow.\n    ",
    "author": "Coach Alex Rivera",
    "date": "2024-03-25",
    "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": 5,
    "title": "The Ultimate Push Pull Legs (PPL) Split for Maximum Hypertrophy",
    "seoTitle": "PPL Split Routine for Muscle Growth",
    "seoDescription": "Maximize hypertrophy with the ultimate Push Pull Legs (PPL) split. Get a complete 6-day workout routine to optimize training frequency and muscle recovery.",
    "slug": "the-ultimate-push-pull-legs-ppl-split-for-maximum-hypertrophy",
    "content": "\n# The Ultimate Push Pull Legs (PPL) Split for Maximum Hypertrophy\n\nWhen it comes to structuring a [workout plan](/workouts) for muscle growth, few routines are as universally praised and effective as the Push Pull Legs (PPL) split. Whether you are an intermediate lifter looking to break a plateau or an advanced bodybuilder preparing for a show, the PPL split offers the perfect balance of volume, frequency, and recovery.\n\nIn this comprehensive guide, we will break down exactly what the PPL split is, why it's so effective for hypertrophy, and how to structure your own routine for maximum gains.\n\n## What is the Push Pull Legs (PPL) Split?\n\nThe PPL split divides your training into three distinct categories based on movement patterns and the [muscle groups](/muscle-groups) involved:\n\n1. **Push Day:** Focuses on the upper body pushing muscles. This includes the chest, shoulders (anterior and lateral deltoids), and triceps.\n2. **Pull Day:** Focuses on the upper body pulling muscles. This includes the entire back (lats, rhomboids, traps), the rear deltoids, and the biceps.\n3. **Leg Day:** Focuses on the entire lower body, including the quadriceps, hamstrings, glutes, and calves.\n\n## Why the PPL Split is Highly Effective\n\n### 1. Optimal Training Frequency\nMuscle protein synthesis (the process of building muscle) remains elevated for roughly 36 to 48 hours after a workout. If you only train a muscle group once a week (like a traditional \"bro split\"), you are missing out on potential growth days. \n\nThe PPL split is typically run 6 days a week (Push, Pull, Legs, Push, Pull, Legs, Rest). This means you hit every muscle group twice a week, doubling your opportunities for growth while still allowing adequate recovery time between sessions.\n\n### 2. Synergistic Muscle Grouping\nBy grouping muscles based on their biomechanical function, you prevent overlap and overtraining. For example, when you perform a heavy bench press on Push day, your triceps and front delts are heavily involved. By training them all on the same day, you give them a full 48-72 hours to recover before they are hit again.\n\n### 3. Flexibility and Customization\nThe PPL split is highly adaptable. If a 6-day routine is too demanding, it can easily be modified into a 3-day routine (Push, Pull, Legs, Rest, Rest, Rest, Rest) or a rotating 5-day routine.\n\n## A Sample 6-Day PPL Routine\n\nHere is a highly effective, hypertrophy-focused PPL routine. Remember to apply the principles of [progressive overload](/blog/the-ultimate-guide-to-progressive-overload-how-to-keep-growing) to ensure continuous growth.\n\n### Workout 1: Push (Chest, Shoulders, Triceps)\n*   **Barbell Bench Press:** 4 sets of 5-8 reps\n*   **Incline Dumbbell Press:** 3 sets of 8-12 reps\n*   **Overhead Press (Seated or Standing):** 3 sets of 8-10 reps\n*   **Lateral Raises:** 4 sets of 12-15 reps\n*   **Tricep Rope Pushdowns:** 3 sets of 10-15 reps\n*   **Overhead Tricep Extension:** 3 sets of 10-15 reps\n\n### Workout 2: Pull (Back, Biceps, Rear Delts)\n*   **Barbell Rows:** 4 sets of 6-8 reps\n*   **Lat Pulldowns or Pull-ups:** 3 sets of 8-12 reps\n*   **Seated Cable Rows:** 3 sets of 10-12 reps\n*   **Face Pulls (Rear Delts):** 3 sets of 15-20 reps\n*   **Barbell Bicep Curls:** 3 sets of 8-12 reps\n*   **Hammer Curls:** 3 sets of 10-15 reps\n\n### Workout 3: Legs (Quads, Hamstrings, Calves)\n*   **Barbell Squats:** 4 sets of 5-8 reps\n*   **Romanian Deadlifts (RDLs):** 3 sets of 8-12 reps\n*   **Leg Press:** 3 sets of 10-12 reps\n*   **Leg Curls:** 3 sets of 12-15 reps\n*   **Standing Calf Raises:** 4 sets of 15-20 reps\n\n*Repeat the cycle for Workouts 4, 5, and 6, then take a full rest day.*\n\n## Nutrition and Recovery on a PPL Split\n\nA 6-day PPL split is highly demanding on the central nervous system and muscular system. You cannot out-train a poor diet or lack of sleep. \n\nTo maximize your results on this split:\n1. **Eat in a Caloric Surplus:** To build muscle, you need to consume more calories than you burn. Follow a structured [muscle building diet plan](/diets) to ensure you are getting enough protein and carbohydrates.\n2. **Prioritize Protein:** Aim for 0.8 to 1 gram of protein per pound of body weight. Consider a [whey protein supplement](/supplements) to hit your targets easily.\n3. **Sleep:** Aim for 7-9 hours of quality sleep per night. This is when your body releases growth hormone and repairs the tissue damaged during your workouts.\n\n## Conclusion\n\nThe Push Pull Legs split is a time-tested, scientifically sound approach to building muscle and strength. By organizing your training around movement patterns, you optimize frequency, volume, and recovery. Start with the sample routine above, track your lifts, eat for growth, and watch your physique transform.\n    ",
    "author": "Coach Ethan Vance",
    "date": "2024-04-10",
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": 6,
    "title": "Macronutrients Explained: How to Calculate Your Macros for Fat Loss",
    "seoTitle": "How to Calculate Macros for Fat Loss",
    "seoDescription": "Understand macronutrients and learn how to calculate your macros for fat loss. Balance protein, carbs, and fats to achieve a lean, strong physique.",
    "slug": "macronutrients-explained-how-to-calculate-your-macros-for-fat-loss",
    "content": "\n# Macronutrients Explained: How to Calculate Your Macros for Fat Loss\n\nWhen you decide it's time to lose weight and get lean, the sheer volume of nutritional advice can be overwhelming. Keto, Paleo, intermittent fasting, low-fat, low-carb—which one is the best? \n\nThe truth is, all successful [weight loss diets](/diets) work on the exact same underlying principle: a caloric deficit. However, while calories dictate *how much* weight you lose, your **macronutrients** (macros) dictate *what kind* of weight you lose (fat vs. muscle) and how you feel during the process.\n\nIn this guide, we will break down what macronutrients are, why they matter, and how to calculate your specific macro targets for optimal fat loss.\n\n## What Are Macronutrients?\n\nMacronutrients are the three primary categories of nutrients that provide your body with energy (calories). They are:\n\n### 1. Protein (4 calories per gram)\nProtein is the building block of your body. It is responsible for repairing and building muscle tissue, producing enzymes and hormones, and supporting immune function. \n*   **Why it matters for fat loss:** Protein is highly satiating (keeps you full) and has a high thermic effect (your body burns more calories digesting protein than carbs or fats). Most importantly, consuming adequate protein while in a caloric deficit ensures that you lose body fat, not hard-earned muscle mass.\n*   **Sources:** Chicken, beef, fish, eggs, tofu, and [protein supplements](/supplements).\n\n### 2. Carbohydrates (4 calories per gram)\nCarbohydrates are your body's preferred and most efficient energy source, especially for high-intensity activities like lifting weights or sprinting.\n*   **Why it matters for fat loss:** While low-carb diets are popular, carbs are not the enemy. They fuel your [gym workouts](/workouts) and help replenish glycogen stores. The key is choosing complex, fiber-rich carbohydrates that provide sustained energy rather than refined sugars that spike insulin.\n*   **Sources:** Oats, rice, potatoes, fruits, and vegetables.\n\n### 3. Fats (9 calories per gram)\nDietary fats are essential for hormone production (including testosterone), brain function, and the absorption of fat-soluble vitamins (A, D, E, and K).\n*   **Why it matters for fat loss:** Fats are calorie-dense, meaning they must be monitored closely in a fat-loss phase. However, dropping your fat intake too low can crash your hormone levels and leave you feeling lethargic.\n*   **Sources:** Avocados, nuts, seeds, olive oil, and fatty fish (or [Omega-3 supplements](/supplements)).\n\n## How to Calculate Your Macros for Fat Loss\n\nFollow these 4 steps to determine your ideal macronutrient breakdown for fat loss.\n\n### Step 1: Calculate Your Maintenance Calories (TDEE)\nYour Total Daily Energy Expenditure (TDEE) is the number of calories your body burns in a 24-hour period. You can find numerous free TDEE calculators online. You will need to input your age, gender, height, weight, and activity level.\n\n*Example: Let's say your TDEE is 2,500 calories.*\n\n### Step 2: Set Your Caloric Deficit\nTo lose fat, you must eat fewer calories than your TDEE. A safe and sustainable deficit is typically 20% below maintenance, or roughly 500 calories per day. This yields about 1 pound of fat loss per week.\n\n*Example: 2,500 (TDEE) - 500 = 2,000 calories per day.*\n\n### Step 3: Set Your Protein Target\nWhen in a caloric deficit, protein requirements increase to prevent muscle breakdown. A standard recommendation is 1 gram of protein per pound of body weight.\n\n*Example: If you weigh 180 lbs, your target is 180g of protein.*\n*(180g x 4 calories = 720 calories from protein).*\n\n### Step 4: Set Your Fat Target\nFat should generally make up 20-30% of your total daily calories to support healthy hormone function. Let's use 25%.\n\n*Example: 25% of 2,000 calories = 500 calories.*\n*(500 calories / 9 calories per gram = 55g of fat).*\n\n### Step 5: Fill the Rest with Carbohydrates\nThe remaining calories in your budget will come from carbohydrates.\n\n*Example:*\n*   *Total Calories: 2,000*\n*   *Protein Calories: 720*\n*   *Fat Calories: 500*\n*   *Remaining Calories for Carbs: 2,000 - 720 - 500 = 780 calories.*\n*(780 calories / 4 calories per gram = 195g of carbs).*\n\n**Final Macro Profile for our 180 lb example:**\n*   **Calories:** 2,000\n*   **Protein:** 180g\n*   **Fats:** 55g\n*   **Carbs:** 195g\n\n## Tracking and Adjusting\n\nOnce you have your numbers, use a food tracking app to log your meals. Hit your protein target every single day, stay under your total calorie limit, and let the carbs and fats fluctuate slightly based on your preferences.\n\nRemember, your metabolism will adapt as you lose weight. If your weight loss stalls for more than two weeks, you may need to recalculate your TDEE and adjust your macros slightly downwards. \n\nBy understanding and tracking your macronutrients, you take the guesswork out of dieting and guarantee that your hard work in the gym translates to a leaner, stronger physique.\n    ",
    "author": "Dr. Maya Patel, RD",
    "date": "2024-04-12",
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": 7,
    "title": "The Science of Sleep: Why Rest is Your Most Powerful Performance Enhancer",
    "seoTitle": "Sleep: The Ultimate Muscle Recovery",
    "seoDescription": "Discover the science of sleep for athletic performance. Learn how 7-9 hours of rest boosts HGH, testosterone, and muscle recovery while reducing fat storage.",
    "slug": "the-science-of-sleep-why-rest-is-your-most-powerful-performance-enhancer",
    "content": "\n# The Science of Sleep: Why Rest is Your Most Powerful Performance Enhancer\n\nIn the pursuit of a better physique, we obsess over the details. We meticulously track our macros on our [diet plans](/diets), we debate the optimal volume for our [workout routines](/workouts), and we spend hundreds of dollars on the latest [fitness supplements](/supplements). \n\nYet, the most potent, scientifically proven performance enhancer and recovery tool is completely free, and most of us are neglecting it: **Sleep**.\n\nIf you are sleeping less than 7 hours a night, you are actively sabotaging your muscle growth, fat loss, and overall health. In this article, we dive into the science of sleep and why it is the ultimate foundation of fitness.\n\n## The Hormonal Impact of Sleep\n\nYour body operates on a circadian rhythm, a 24-hour internal clock that regulates the sleep-wake cycle and the release of critical hormones. When you cut your sleep short, you disrupt this delicate hormonal balance.\n\n### 1. Human Growth Hormone (HGH) and Muscle Repair\nThe vast majority of your body's Human Growth Hormone (HGH) is released during the deepest stages of sleep (Slow-Wave Sleep). HGH is essential for tissue repair, muscle growth, and recovery from the micro-trauma induced by heavy lifting. \n\nIf you are consistently getting 5-6 hours of sleep, you are missing out on the peak window of HGH release, severely blunting your body's ability to recover and build muscle.\n\n### 2. Testosterone Production\nTestosterone is a highly anabolic hormone crucial for muscle mass, strength, and energy levels in both men and women. Studies have shown that restricting sleep to 5 hours a night for just one week can reduce testosterone levels by 10-15%. This is the equivalent of aging 10 to 15 years hormonally.\n\n### 3. Cortisol and Fat Storage\nCortisol is a stress hormone. While acute spikes in cortisol are normal (like during a workout), chronically elevated cortisol levels lead to muscle breakdown and increased fat storage, particularly visceral fat around the abdomen. Sleep deprivation is a major physical stressor that keeps cortisol levels artificially high throughout the day.\n\n## Sleep and Central Nervous System (CNS) Recovery\n\nHeavy compound movements like squats and deadlifts don't just tax your muscles; they heavily tax your Central Nervous System (CNS). Your CNS is responsible for recruiting muscle fibers and generating force. \n\nWhen your CNS is fatigued, your strength plummets, your coordination suffers, and your risk of injury skyrockets. Sleep is the only time your CNS can fully power down, clear out metabolic waste products from the brain, and restore its capacity to generate maximum force for your next workout.\n\n## 5 Actionable Tips to Optimize Your Sleep\n\nKnowing that sleep is important is one thing; actually getting quality sleep is another. Here is a protocol to improve your sleep hygiene:\n\n### 1. Maintain a Consistent Sleep Schedule\nGo to bed and wake up at the exact same time every day, even on weekends. This anchors your circadian rhythm and makes falling asleep much easier.\n\n### 2. Optimize Your Sleep Environment\nYour bedroom should be a cave: cool, dark, and quiet. Aim for a room temperature around 65°F (18°C). Invest in blackout curtains and consider using a white noise machine to drown out disruptive sounds.\n\n### 3. Limit Blue Light Exposure Before Bed\nThe blue light emitted by smartphones, tablets, and TVs suppresses the production of melatonin, the hormone that signals to your body that it's time to sleep. Turn off all screens at least 60 minutes before bed. Read a book or listen to a podcast instead.\n\n### 4. Watch Your Caffeine Intake\nCaffeine has a half-life of roughly 5-6 hours. This means if you consume a pre-workout drink at 4 PM, half of that caffeine is still in your system at 10 PM. Limit caffeine consumption to the morning and early afternoon.\n\n### 5. Consider Strategic Supplementation\nWhile supplements shouldn't replace good sleep habits, they can help. [Magnesium](/supplements) is a powerful mineral that helps calm the central nervous system and relax muscle tissue. Taking 200-400mg of Magnesium Glycinate 30 minutes before bed can significantly improve sleep depth and quality.\n\n## Conclusion\n\nYou can have the perfect training program and a flawless diet, but if you are chronically sleep-deprived, you are building a house on a crumbling foundation. Treat your sleep with the same dedication and discipline that you apply to your workouts. Aim for 7-9 hours of quality rest every night, and watch your performance, recovery, and physique transform.\n    ",
    "author": "Dr. Julian Hayes, Sleep Specialist",
    "date": "2024-04-15",
    "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop"
  },
  {
    "id": 8,
    "title": "The Ultimate Guide to Hydration for Athletic Performance and Recovery",
    "seoTitle": "Hydration for Athletic Performance",
    "seoDescription": "Improve athletic performance and speed up recovery with proper hydration. Learn how water and electrolytes prevent cramps, regulate heat, and aid muscle repair.",
    "slug": "ultimate-guide-to-hydration-athletic-performance-recovery",
    "content": "\n# The Ultimate Guide to Hydration for Athletic Performance and Recovery\n\nWhen we think about improving athletic performance and speeding up recovery, we often focus on [protein intake](/diets), [progressive overload](/blog/the-ultimate-guide-to-progressive-overload-how-to-keep-growing), and [supplements](/supplements). However, one of the most critical and frequently overlooked factors is **hydration**.\n\nWater makes up about 60% of your body weight and is involved in almost every bodily function. Even a slight drop in hydration levels can significantly impair your physical and cognitive performance. In this guide, we'll explore why hydration is essential for athletes and provide practical tips to ensure you stay optimally hydrated.\n\n## Why Hydration Matters for Performance\n\n### 1. Temperature Regulation\nDuring intense [workouts](/workouts), your body generates a massive amount of heat. Sweating is your body's primary cooling mechanism. If you are dehydrated, your blood volume decreases, making it harder for your body to dissipate heat. This leads to an increased core temperature, faster fatigue, and a higher risk of heat exhaustion.\n\n### 2. Cardiovascular Strain\nAs you lose water through sweat, your blood becomes thicker. This forces your heart to work harder to pump oxygen and nutrients to your working muscles. A higher heart rate at a given intensity means you will tire out much faster than if you were fully hydrated.\n\n### 3. Muscle Function and Cramping\nWater and electrolytes (like sodium, potassium, and magnesium) are crucial for muscle contractions. Dehydration disrupts this balance, leading to decreased strength, reduced endurance, and an increased likelihood of painful muscle cramps.\n\n## Hydration and Recovery\n\nHydration isn't just about what happens during your workout; it's equally important for what happens after.\n\n### 1. Nutrient Delivery and Waste Removal\nWater is the transport system of your body. It delivers essential nutrients (like amino acids from your post-workout meal) to your muscle cells for repair. It also helps flush out metabolic waste products, such as lactic acid, reducing muscle soreness and stiffness.\n\n### 2. Joint Lubrication\nYour joints are cushioned by synovial fluid, which is primarily made of water. Staying hydrated ensures your joints remain lubricated, reducing friction and the risk of injury, especially during heavy lifting.\n\n## Practical Tips for Staying Hydrated\n\nSo, how much water do you actually need, and how can you ensure you're getting enough? Here are some practical tips:\n\n### 1. Establish a Baseline\nThe old rule of \"eight glasses a day\" is a myth. A better baseline is to drink half your body weight in ounces of water daily. For example, a 200 lb athlete should aim for at least 100 ounces of water per day, *before* factoring in exercise.\n\n### 2. Hydrate Before, During, and After Exercise\n*   **Before:** Drink 16-20 ounces of water 2-3 hours before your workout, and another 8 ounces 20-30 minutes before you start.\n*   **During:** Aim for 7-10 ounces every 10-20 minutes during exercise.\n*   **After:** Weigh yourself before and after a heavy sweat session. Drink 16-24 ounces of fluid for every pound of body weight lost.\n\n### 3. Don't Forget Electrolytes\nIf you are sweating heavily for more than an hour, plain water isn't enough. You need to replace the electrolytes lost in sweat. Consider adding an electrolyte powder to your water or consuming a sports drink to maintain the delicate balance of sodium and potassium.\n\n### 4. Monitor Your Urine\nThe simplest way to gauge your hydration status is to check the color of your urine. It should be a pale, straw-like yellow. If it's dark yellow or amber, you are dehydrated and need to drink more water immediately. If it's completely clear, you may be over-hydrating.\n\n## Conclusion\n\nHydration is the unsung hero of athletic performance and recovery. By prioritizing your fluid intake and paying attention to your body's signals, you can train harder, recover faster, and unlock your full physical potential. Grab your water bottle and make hydration a non-negotiable part of your fitness routine!\n    ",
    "author": "Dr. Sarah Jenkins, Sports Nutritionist",
    "date": "2024-04-18",
    "image": "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=800&auto=format&fit=crop"
  }
];
