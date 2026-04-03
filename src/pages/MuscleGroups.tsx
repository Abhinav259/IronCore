import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, Dumbbell, Activity, Target, Zap, Shield, Flame, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { getExerciseDetails } from '../utils/exerciseUtils';
import { ExerciseModal } from '../components/ExerciseModal';

const muscleGroupsData = [
  {
    id: 'chest',
    title: 'Chest',
    description: 'Build a powerful, thick chest with pressing and fly movements.',
    level: 'Beginner / Intermediate',
    popular: true,
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    alt: 'Athlete performing a heavy barbell bench press',
    exercises: ['Bench Press', 'Incline Dumbbell Press', 'Decline Bench Press', 'Push-ups', 'Cable Crossovers', 'Dips', 'Dumbbell Flyes', 'Machine Chest Press', 'Pec Deck Flyes', 'Floor Press', 'Svend Press'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'back',
    title: 'Back',
    description: 'Develop a wide, thick back for a V-taper physique.',
    level: 'Intermediate',
    popular: true,
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1526506114861-f3c500078f4b?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing wide-grip pull-ups for back development',
    exercises: ['Pull-ups', 'Chin-ups', 'Barbell Rows', 'Dumbbell Rows', 'Lat Pulldowns', 'T-Bar Rows', 'Seated Cable Rows', 'Deadlifts', 'Straight-Arm Pulldowns', 'Inverted Rows', 'Meadows Row', 'Renegade Row'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'shoulders',
    title: 'Shoulders',
    description: 'Sculpt 3D delts for broader shoulders and better posture.',
    level: 'Intermediate',
    popular: true,
    icon: Target,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing overhead dumbbell shoulder presses',
    exercises: ['Overhead Press', 'Dumbbell Shoulder Press', 'Push Press', 'Lateral Raises', 'Cable Lateral Raises', 'Front Raises', 'Reverse Pec Deck', 'Face Pulls', 'Arnold Press', 'Upright Rows', 'Machine Shoulder Press'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Dumbbell-Only Plan']
  },
  {
    id: 'biceps',
    title: 'Biceps',
    description: 'Grow your arm peaks with targeted curling variations.',
    level: 'Beginner',
    popular: true,
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80',
    alt: 'Close up of bicep curls with dumbbells',
    exercises: ['Barbell Curls', 'EZ-Bar Curls', 'Dumbbell Curls', 'Hammer Curls', 'Preacher Curls', 'Incline Dumbbell Curls', 'Cable Curls', 'Concentration Curls', 'Reverse Curls', 'Zottman Curls', 'Spider Curls', 'Drag Curls'],
    relatedPlans: ['Bodybuilder Bro Split', 'Dumbbell-Only Plan']
  },
  {
    id: 'triceps',
    title: 'Triceps',
    description: 'Add mass to the back of your arms for thicker sleeves.',
    level: 'Beginner',
    popular: true,
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing triceps rope pushdowns',
    exercises: ['Triceps Pushdowns', 'Rope Pushdowns', 'Skull Crushers', 'Overhead Extensions', 'Close-Grip Bench Press', 'Dips', 'Triceps Kickbacks', 'Diamond Push-ups', 'JM Press', 'Tate Press', 'Machine Triceps Extension'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'forearms',
    title: 'Forearms',
    description: 'Improve grip strength and lower arm vascularity.',
    level: 'Intermediate',
    popular: false,
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    alt: 'Athlete with developed forearms holding a barbell',
    exercises: ['Wrist Curls', 'Reverse Wrist Curls', 'Reverse Curls', 'Zottman Curls', 'Farmers Walk', 'Dead Hangs', 'Plate Pinches', 'Towel Pull-ups', 'Fat Gripz Holds', 'Wrist Rollers'],
    relatedPlans: ['Strongman & Odd-Object Training', 'Bodybuilder Bro Split']
  },
  {
    id: 'abs-core',
    title: 'Abs / Core',
    description: 'Strengthen your midsection for stability and a shredded six-pack.',
    level: 'Beginner / Advanced',
    popular: true,
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1566241142559-40e1bfc26ebc?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing a forearm plank for core strength',
    exercises: ['Crunches', 'Bicycle Crunches', 'Planks', 'Hanging Leg Raises', 'Russian Twists', 'Cable Crunches', 'Ab Wheel Rollouts', 'Dead Bugs', 'Hollow Body Holds', 'Woodchoppers', 'V-Ups', 'Mountain Climbers', 'Flutter Kicks'],
    relatedPlans: ['Fat-Loss & Conditioning', 'Calisthenics Plan']
  },
  {
    id: 'quads',
    title: 'Quads',
    description: 'Build massive front thighs with deep knee flexion exercises.',
    level: 'Intermediate / Advanced',
    popular: true,
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing a deep barbell back squat',
    exercises: ['Back Squats', 'Front Squats', 'Goblet Squats', 'Hack Squats', 'Leg Press', 'Lunges', 'Bulgarian Split Squats', 'Step-Ups', 'Leg Extensions', 'Sissy Squats', 'Pistol Squats'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Strength / Powerlifting Plan']
  },
  {
    id: 'hamstrings',
    title: 'Hamstrings',
    description: 'Develop the back of your legs for power and knee health.',
    level: 'Intermediate',
    popular: false,
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing lying leg curls for hamstrings',
    exercises: ['Romanian Deadlifts', 'Stiff-Legged Deadlifts', 'Lying Leg Curls', 'Seated Leg Curls', 'Nordic Hamstring Curls', 'Good Mornings', 'Glute-Ham Raises', 'Kettlebell Swings', 'Swiss Ball Leg Curls', 'Sumo Deadlifts'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Strength / Powerlifting Plan']
  },
  {
    id: 'glutes',
    title: 'Glutes',
    description: 'Target your body\'s largest muscle for explosive power and shape.',
    level: 'Beginner / Intermediate',
    popular: true,
    icon: Target,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    alt: 'Athlete performing kettlebell swings for glute power',
    exercises: ['Hip Thrusts', 'Glute Bridges', 'Walking Lunges', 'Bulgarian Split Squats', 'Sumo Squats', 'Step-Ups', 'Cable Kickbacks', 'Kettlebell Swings', 'Frog Pumps', 'Curtsy Lunges', 'Reverse Hyperextensions'],
    relatedPlans: ['Fat-Loss & Conditioning', 'Postpartum Core Rebuilding']
  },
  {
    id: 'calves',
    title: 'Calves',
    description: 'Grow stubborn lower leg muscles with high-rep isolation.',
    level: 'Beginner',
    popular: false,
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    alt: 'Close up of a person performing standing calf raises',
    exercises: ['Standing Calf Raises', 'Seated Calf Raises', 'Single-Leg Calf Raises', 'Donkey Calf Raises', 'Jump Rope', 'Toe Presses on Leg Press', 'Farmer\'s Walk on Toes', 'Box Jumps', 'Tibialis Raises'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'upper-back',
    title: 'Upper Back',
    description: 'Enhance posture and shoulder health with targeted pulling.',
    level: 'Intermediate',
    popular: false,
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing rear delt flyes for upper back development',
    exercises: ['Face Pulls', 'Rear Delt Flyes', 'Chest-Supported Rows', 'Band Pull-Aparts', 'Y-T-W Raises', 'Shrugs', 'Upright Rows', 'Meadows Row', 'T-Bar Rows', 'Inverted Rows'],
    relatedPlans: ['Desk-Worker Posture Correction', 'Pre-hab & Joint Armor']
  },
  {
    id: 'lower-back',
    title: 'Lower Back',
    description: 'Build a bulletproof posterior chain and prevent injuries.',
    level: 'Intermediate',
    popular: false,
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing a conventional barbell deadlift',
    exercises: ['Back Extensions', 'Deadlifts', 'Good Mornings', 'Bird Dogs', 'Superman Holds', 'Reverse Hyperextensions', 'Romanian Deadlifts', 'Rack Pulls', 'Glute-Ham Raises'],
    relatedPlans: ['Strength / Powerlifting Plan', 'Desk-Worker Posture Correction']
  },
  {
    id: 'lats',
    title: 'Lats',
    description: 'Create the illusion of a smaller waist with wide lats.',
    level: 'Intermediate',
    popular: false,
    icon: Target,
    image: 'https://images.unsplash.com/photo-1526506114861-f3c500078f4b?auto=format&fit=crop&w=800&q=80',
    alt: 'Person performing wide-grip lat pulldowns',
    exercises: ['Wide-Grip Pull-ups', 'Chin-ups', 'Straight-Arm Pulldowns', 'Lat Pulldowns', 'V-Bar Pulldowns', 'Dumbbell Pullovers', 'Single-Arm Cable Rows', 'Underhand Yates Row', 'Meadows Row', 'Renegade Row'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'traps',
    title: 'Traps',
    description: 'Build a thick neck and upper back for a powerful look.',
    level: 'Intermediate',
    popular: false,
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    alt: 'Athlete performing heavy barbell shrugs',
    exercises: ['Barbell Shrugs', 'Dumbbell Shrugs', 'Farmer\'s Walks', 'Upright Rows', 'Rack Pulls', 'Face Pulls', 'Snatch-Grip High Pulls', 'Overhead Shrugs', 'Trap Bar Deadlifts', 'Power Cleans'],
    relatedPlans: ['Strongman & Odd-Object Training', 'Bodybuilder Bro Split']
  },
  {
    id: 'full-body',
    title: 'Full Body',
    description: 'Maximize calorie burn and overall strength with compound movements.',
    level: 'Advanced',
    popular: true,
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    alt: 'Athlete performing a full-body functional movement',
    exercises: ['Burpees', 'Clean and Press', 'Thrusters', 'Kettlebell Swings', 'Man Makers', 'Turkish Get-Ups', 'Snatch', 'Medicine Ball Slams', 'Battle Ropes', 'Sled Push', 'Rowing Machine'],
    relatedPlans: ['Beginner Full-Body Plan', 'Functional Grid & Metcon']
  }
];

export default function MuscleGroups() {
  const [search, setSearch] = useState('');
  const [exerciseSearch, setExerciseSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<typeof muscleGroupsData[0] | null>(null);
  const [selectedExerciseForModal, setSelectedExerciseForModal] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // Reset exercise search when modal opens/closes
  const handleSelectGroup = (group: typeof muscleGroupsData[0] | null) => {
    setSelectedGroup(group);
    setExerciseSearch('');
  };

  useEffect(() => {
    if (search) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [search]);

  const filteredGroups = muscleGroupsData.filter(group => 
    group.title.toLowerCase().includes(search.toLowerCase()) || 
    group.description.toLowerCase().includes(search.toLowerCase())
  );

  const popularGroups = muscleGroupsData.filter(group => group.popular);

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <SEO 
        title="Muscle Group Exercises"
        description="Target specific muscle groups with our comprehensive exercise guide. Learn how to effectively train your chest, back, legs, and more."
        urlPath="/muscle-groups" 
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": muscleGroupsData.map((group, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "name": group.title,
              "description": group.description,
              "image": group.image,
              "author": {
                "@type": "Organization",
                "name": "Iron Core"
              }
            }
          }))
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-6">
            Muscle Group <span className="text-red-600">Exercises</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Find targeted <strong>hypertrophy exercises</strong> and <strong>strength training routines</strong> for every major muscle group. Build your perfect physique with precision and <strong>progressive overload</strong>.
          </p>
        </header>

        {/* Search Bar */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-4 md:p-6 rounded-[2rem] mb-12 md:mb-16 shadow-2xl">
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search muscle groups (e.g., Chest, Back, Quads)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/20 transition-all placeholder:text-zinc-600"
            />
          </div>
        </div>

        {/* Popular Muscle Groups (Only show if no search filter is applied) */}
        {!search && (
          <div className="mb-20">
            <h2 className="text-2xl font-black uppercase italic mb-10 flex items-center gap-3">
              <Flame className="w-6 h-6 text-red-600" />
              Popular Muscle Groups
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularGroups.slice(0, 4).map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={`popular-${group.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectGroup(group)}
                    className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-3xl p-8 cursor-pointer hover:border-red-600/30 transition-all group relative overflow-hidden shadow-xl"
                  >
                    <img 
                      src={`${group.image}&fm=webp`} 
                      srcSet={`${group.image.replace('w=800', 'w=400')} 400w, ${group.image} 800w`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      alt={group.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="200"
                    />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:rotate-12 transition-all duration-500">
                        <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-black uppercase italic mb-3 tracking-tight">{group.title}</h3>
                      <p className="text-zinc-500 text-sm line-clamp-2 font-medium leading-relaxed">{group.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Muscle Groups Grid */}
        <div className="min-h-[400px]">
          <h2 className="text-2xl font-black uppercase italic mb-10">
            {search ? 'Search Results' : 'All Muscle Groups'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {isSearching ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <div key={`skeleton-${i}`} className="bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden animate-pulse">
                    <div className="h-48 bg-zinc-800/50"></div>
                    <div className="p-8 space-y-4">
                      <div className="h-8 bg-zinc-800/50 rounded-lg w-3/4"></div>
                      <div className="h-4 bg-zinc-800/50 rounded-lg w-full"></div>
                      <div className="h-4 bg-zinc-800/50 rounded-lg w-2/3"></div>
                      <div className="pt-6 border-t border-white/5 flex justify-between">
                        <div className="h-6 bg-zinc-800/50 rounded-lg w-20"></div>
                        <div className="h-10 w-10 bg-zinc-800/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : filteredGroups.length > 0 ? (
                filteredGroups.map((group, index) => {
                  const Icon = group.icon;
                  return (
                    <motion.div 
                      key={group.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => handleSelectGroup(group)}
                      className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden cursor-pointer group hover:border-red-600/30 hover:bg-zinc-900 transition-all duration-500 flex flex-col shadow-xl"
                    >
                      <div className="h-48 bg-zinc-800 relative overflow-hidden">
                        <img 
                          src={`${group.image}&fm=webp`} 
                          srcSet={`${group.image.replace('w=800', 'w=400')} 400w, ${group.image} 800w`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          alt={group.title} 
                          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 ease-out"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                          width="400"
                          height="192"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10"></div>
                        <div className="absolute top-4 right-4 z-20">
                          <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-lg shadow-lg border border-white/10">
                            {group.level}
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10">
                          <Icon className="w-24 h-24 text-white drop-shadow-2xl" />
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col relative">
                        <h3 className="text-2xl font-black uppercase italic mb-4 group-hover:text-red-500 transition-colors duration-300">{group.title}</h3>
                        <p className="text-zinc-500 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                          {group.description}
                        </p>
                        <div className="mb-8 flex-1">
                          <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-black mb-3">Top Exercises</p>
                          <div className="flex flex-wrap gap-2">
                            {group.exercises.slice(0, 3).map((ex, i) => (
                              <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-lg text-zinc-400 border border-white/5">
                                {ex}
                              </span>
                            ))}
                            {group.exercises.length > 3 && (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-lg text-zinc-600 border border-white/5">
                                +{group.exercises.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                          <span className="text-xs font-black uppercase tracking-widest text-red-600 group-hover:text-red-500 transition-colors">Explore Guide</span>
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-600 group-hover:rotate-45 transition-all duration-500">
                            <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-32"
                >
                  <div className="w-24 h-24 bg-zinc-900/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
                    <Search className="w-10 h-10 text-zinc-700" />
                  </div>
                  <h3 className="text-3xl font-black uppercase italic mb-4 tracking-tight">No Muscle Groups Found</h3>
                  <p className="text-zinc-500 max-w-md mx-auto font-medium">Try searching for common muscle groups like "Chest", "Back", or "Legs".</p>
                  <button 
                    onClick={() => setSearch('')}
                    className="mt-8 text-red-500 font-bold uppercase tracking-widest text-sm hover:text-red-400 transition-colors"
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {filteredGroups.length === 0 && (
            <div className="text-center py-32">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-2">No Muscle Groups Found</h3>
              <p className="text-gray-500">Try adjusting your search terms.</p>
            </div>
          )}

          {/* SEO Content Block */}
          <div className="mt-32 max-w-4xl mx-auto prose prose-invert max-w-none text-gray-400">
            <h2 className="text-2xl font-bold text-white mb-4">Mastering Muscle Group Exercises</h2>
            <p className="mb-4">
              Understanding how to target specific areas of your body is the foundation of any effective training program. By focusing on distinct <strong>muscle group exercises</strong>, you can correct imbalances, enhance muscle definition, and ensure comprehensive development. Whether your goal is to build a broader back, sculpt your legs, or increase your chest strength, isolating these groups allows for precise <strong>targeted workouts</strong>.
            </p>
            <h3 className="text-xl font-bold text-white mb-3">The Importance of Targeted Workouts</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Hypertrophy Focus:</strong> Isolating a muscle group ensures it receives the maximum stimulus required for growth, which is essential for bodybuilders and physique athletes.</li>
              <li><strong>Injury Prevention:</strong> Strengthening weak links in your kinetic chain by targeting specific, often neglected muscles (like the rear deltoids or hamstrings) can significantly reduce the risk of injury.</li>
              <li><strong>Mind-Muscle Connection:</strong> Concentrating on a single muscle group helps improve neuromuscular efficiency, allowing you to recruit more muscle fibers during each repetition.</li>
              <li><strong>Customized Programming:</strong> Knowing which exercises target which muscles allows you to build a customized split (e.g., Push/Pull/Legs or Upper/Lower) that fits your recovery capacity and goals.</li>
            </ul>
            <p>
              Explore our comprehensive library of exercises to find the best movements for your goals. Pair these exercises with our structured <Link to="/workouts" className="text-red-500 hover:underline">workout plans</Link> for optimal results.
            </p>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedGroup && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => handleSelectGroup(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              layoutId={selectedGroup.id}
              className="bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 border border-white/10 shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => handleSelectGroup(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors z-20"
                aria-label="Close muscle group details"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="p-6 md:p-10 bg-zinc-800/50 md:col-span-2 flex flex-col relative overflow-hidden">
                  <img 
                    src={`${selectedGroup.image}&fm=webp`} 
                    srcSet={`${selectedGroup.image.replace('w=800', 'w=400')} 400w, ${selectedGroup.image} 800w`}
                    sizes="(max-width: 768px) 100vw, 800px"
                    alt={selectedGroup.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 md:mb-6 mt-8 md:mt-0 self-start">
                      {selectedGroup.level}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 md:mb-6 pr-8 md:pr-0">{selectedGroup.title}</h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                      {selectedGroup.description}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-white/10">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Related Workout Plans</h4>
                      <ul className="space-y-3">
                        {selectedGroup.relatedPlans.map((plan, idx) => (
                          <li key={idx}>
                            <Link 
                              to="/workouts" 
                              className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-600 transition-colors group"
                            >
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              {plan}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link 
                          to="/workouts"
                          className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all active:scale-95 text-sm"
                        >
                          View All Workouts
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="p-6 md:p-10 md:col-span-3 flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
                    <h3 className="text-xl font-black uppercase italic flex items-center gap-3">
                      <Dumbbell className="w-6 h-6 text-red-600 shrink-0" />
                      Key Exercises
                    </h3>
                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input 
                        type="text" 
                        placeholder="Filter exercises..."
                        value={exerciseSearch}
                        onChange={(e) => setExerciseSearch(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:max-h-[60vh] md:overflow-y-auto md:pr-2 custom-scrollbar">
                    {selectedGroup.exercises
                      .filter(ex => ex.toLowerCase().includes(exerciseSearch.toLowerCase()))
                      .sort((a, b) => a.localeCompare(b))
                      .map((exercise, idx) => {
                      const details = getExerciseDetails(exercise);
                      return (
                        <div 
                          key={idx} 
                          className="bg-black/40 rounded-2xl border border-white/5 p-4 flex items-center gap-4 hover:bg-white/5 transition-colors group/item cursor-pointer"
                          onClick={() => setSelectedExerciseForModal(exercise)}
                        >
                          <div className="flex-1">
                            <p className="font-bold text-white text-sm md:text-base mb-1">{exercise}</p>
                            <div className="flex flex-wrap gap-2 items-center">
                              <p className="text-[10px] text-red-500 uppercase tracking-widest font-black italic">{details.primaryMuscle}</p>
                              <span className="text-gray-700 text-[10px]">•</span>
                              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{details.equipment}</p>
                            </div>
                            {details.secondaryMuscles.length > 0 && (
                              <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold mt-1">
                                Secondary: {details.secondaryMuscles.join(', ')}
                              </p>
                            )}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-gray-500 font-bold text-xs">
                            {idx + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ExerciseModal 
        isOpen={!!selectedExerciseForModal} 
        onClose={() => setSelectedExerciseForModal(null)} 
        exerciseName={selectedExerciseForModal || ''} 
      />
    </div>
  );
}
