import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, Dumbbell, Activity, Target, Zap, Shield, Flame, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const muscleGroupsData = [
  {
    id: 'chest',
    title: 'Chest',
    description: 'Build a powerful, thick chest with pressing and fly movements.',
    level: 'Beginner / Intermediate',
    popular: true,
    icon: Dumbbell,
    exercises: ['Bench Press', 'Incline Dumbbell Press', 'Push-ups', 'Cable Crossovers', 'Dips'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'back',
    title: 'Back',
    description: 'Develop a wide, thick back for a V-taper physique.',
    level: 'Intermediate',
    popular: true,
    icon: Activity,
    exercises: ['Pull-ups', 'Barbell Rows', 'Lat Pulldowns', 'T-Bar Rows', 'Seated Cable Rows'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'shoulders',
    title: 'Shoulders',
    description: 'Sculpt 3D delts for broader shoulders and better posture.',
    level: 'Intermediate',
    popular: true,
    icon: Target,
    exercises: ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Reverse Pec Deck', 'Arnold Press'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Dumbbell-Only Plan']
  },
  {
    id: 'biceps',
    title: 'Biceps',
    description: 'Grow your arm peaks with targeted curling variations.',
    level: 'Beginner',
    popular: true,
    icon: Zap,
    exercises: ['Barbell Curls', 'Dumbbell Hammer Curls', 'Preacher Curls', 'Incline Dumbbell Curls', 'Cable Curls'],
    relatedPlans: ['Bodybuilder Bro Split', 'Dumbbell-Only Plan']
  },
  {
    id: 'triceps',
    title: 'Triceps',
    description: 'Add mass to the back of your arms for thicker sleeves.',
    level: 'Beginner',
    popular: true,
    icon: Shield,
    exercises: ['Triceps Pushdowns', 'Skull Crushers', 'Overhead Extensions', 'Close-Grip Bench Press', 'Dips'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'forearms',
    title: 'Forearms',
    description: 'Improve grip strength and lower arm vascularity.',
    level: 'Intermediate',
    popular: false,
    icon: Dumbbell,
    exercises: ['Wrist Curls', 'Reverse Curls', 'Farmers Walk', 'Dead Hangs', 'Plate Pinches'],
    relatedPlans: ['Strongman & Odd-Object Training', 'Bodybuilder Bro Split']
  },
  {
    id: 'abs-core',
    title: 'Abs / Core',
    description: 'Strengthen your midsection for stability and a shredded six-pack.',
    level: 'Beginner / Advanced',
    popular: true,
    icon: Flame,
    exercises: ['Crunches', 'Planks', 'Hanging Leg Raises', 'Russian Twists', 'Cable Crunches'],
    relatedPlans: ['Fat-Loss & Conditioning', 'Calisthenics Plan']
  },
  {
    id: 'quads',
    title: 'Quads',
    description: 'Build massive front thighs with deep knee flexion exercises.',
    level: 'Intermediate / Advanced',
    popular: true,
    icon: Zap,
    exercises: ['Back Squats', 'Front Squats', 'Leg Press', 'Bulgarian Split Squats', 'Leg Extensions'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Strength / Powerlifting Plan']
  },
  {
    id: 'hamstrings',
    title: 'Hamstrings',
    description: 'Develop the back of your legs for power and knee health.',
    level: 'Intermediate',
    popular: false,
    icon: Activity,
    exercises: ['Romanian Deadlifts', 'Lying Leg Curls', 'Seated Leg Curls', 'Good Mornings', 'Glute-Ham Raises'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Strength / Powerlifting Plan']
  },
  {
    id: 'glutes',
    title: 'Glutes',
    description: 'Target your body\'s largest muscle for explosive power and shape.',
    level: 'Beginner / Intermediate',
    popular: true,
    icon: Target,
    exercises: ['Hip Thrusts', 'Glute Bridges', 'Walking Lunges', 'Cable Kickbacks', 'Kettlebell Swings'],
    relatedPlans: ['Fat-Loss & Conditioning', 'Postpartum Core Rebuilding']
  },
  {
    id: 'calves',
    title: 'Calves',
    description: 'Grow stubborn lower leg muscles with high-rep isolation.',
    level: 'Beginner',
    popular: false,
    icon: Shield,
    exercises: ['Standing Calf Raises', 'Seated Calf Raises', 'Donkey Calf Raises', 'Jump Rope', 'Toe Presses on Leg Press'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'upper-back',
    title: 'Upper Back',
    description: 'Enhance posture and shoulder health with targeted pulling.',
    level: 'Intermediate',
    popular: false,
    icon: Activity,
    exercises: ['Face Pulls', 'Rear Delt Flyes', 'Chest-Supported Rows', 'Band Pull-Aparts', 'Y-T-W Raises'],
    relatedPlans: ['Desk-Worker Posture Correction', 'Pre-hab & Joint Armor']
  },
  {
    id: 'lower-back',
    title: 'Lower Back',
    description: 'Build a bulletproof posterior chain and prevent injuries.',
    level: 'Intermediate',
    popular: false,
    icon: Shield,
    exercises: ['Back Extensions', 'Deadlifts', 'Good Mornings', 'Bird Dogs', 'Superman Holds'],
    relatedPlans: ['Strength / Powerlifting Plan', 'Desk-Worker Posture Correction']
  },
  {
    id: 'lats',
    title: 'Lats',
    description: 'Create the illusion of a smaller waist with wide lats.',
    level: 'Intermediate',
    popular: false,
    icon: Target,
    exercises: ['Wide-Grip Pull-ups', 'Straight-Arm Pulldowns', 'Lat Pulldowns', 'Dumbbell Pullovers', 'Single-Arm Cable Rows'],
    relatedPlans: ['Push/Pull/Legs Hypertrophy', 'Bodybuilder Bro Split']
  },
  {
    id: 'traps',
    title: 'Traps',
    description: 'Build a thick neck and upper back for a powerful look.',
    level: 'Intermediate',
    popular: false,
    icon: Dumbbell,
    exercises: ['Barbell Shrugs', 'Dumbbell Shrugs', 'Farmer\'s Walks', 'Upright Rows', 'Rack Pulls'],
    relatedPlans: ['Strongman & Odd-Object Training', 'Bodybuilder Bro Split']
  },
  {
    id: 'full-body',
    title: 'Full Body',
    description: 'Maximize calorie burn and overall strength with compound movements.',
    level: 'Advanced',
    popular: true,
    icon: Zap,
    exercises: ['Burpees', 'Clean and Press', 'Thrusters', 'Kettlebell Swings', 'Man Makers'],
    relatedPlans: ['Beginner Full-Body Plan', 'Functional Grid & Metcon']
  }
];

export default function MuscleGroups() {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<typeof muscleGroupsData[0] | null>(null);

  const filteredGroups = muscleGroupsData.filter(group => 
    group.title.toLowerCase().includes(search.toLowerCase()) || 
    group.description.toLowerCase().includes(search.toLowerCase())
  );

  const popularGroups = muscleGroupsData.filter(group => group.popular);

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-6">
            By Muscle <span className="text-red-600">Group</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Find targeted exercises and routines for every major muscle group. Build your perfect physique with precision.
          </p>
        </header>

        {/* Search Bar */}
        <div className="bg-zinc-900/50 border border-white/10 p-6 md:p-8 rounded-3xl mb-12 md:mb-16">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search muscle groups (e.g., Chest, Back, Quads)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>
        </div>

        {/* Popular Muscle Groups (Only show if no search filter is applied) */}
        {!search && (
          <div className="mb-16">
            <h2 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-3">
              <Flame className="w-6 h-6 text-red-600" />
              Popular Muscle Groups
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularGroups.slice(0, 4).map((group) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={`popular-${group.id}`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedGroup(group)}
                    className="bg-zinc-900 border border-white/5 rounded-2xl p-6 cursor-pointer hover:border-red-600/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                      <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-black uppercase italic mb-2">{group.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{group.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Muscle Groups Grid */}
        <div>
          <h2 className="text-2xl font-black uppercase italic mb-8">
            {search ? 'Search Results' : 'All Muscle Groups'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div 
                  key={group.id}
                  layoutId={group.id}
                  onClick={() => setSelectedGroup(group)}
                  className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden cursor-pointer group hover:border-red-600/50 transition-all duration-300 flex flex-col"
                >
                  <div className="h-40 bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        {group.level}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-24 h-24 text-white" />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black uppercase italic mb-3 group-hover:text-red-600 transition-colors">{group.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {group.description}
                    </p>
                    <div className="mb-6 flex-1">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Exercises</p>
                      <div className="flex flex-wrap gap-2">
                        {group.exercises.slice(0, 3).map((ex, i) => (
                          <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded-md text-gray-300">
                            {ex}
                          </span>
                        ))}
                        {group.exercises.length > 3 && (
                          <span className="text-xs bg-white/5 px-2 py-1 rounded-md text-gray-500">
                            +{group.exercises.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-red-600">View Details</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              onClick={() => setSelectedGroup(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              layoutId={selectedGroup.id}
              className="bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 border border-white/10 shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedGroup(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="p-6 md:p-10 bg-zinc-800/50 md:col-span-2 flex flex-col">
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

                <div className="p-6 md:p-10 md:col-span-3 flex flex-col">
                  <h3 className="text-xl font-black uppercase italic flex items-center gap-3 mb-6 md:mb-8">
                    <Dumbbell className="w-6 h-6 text-red-600 shrink-0" />
                    Key Exercises
                  </h3>
                  
                  <div className="space-y-4 md:max-h-[60vh] md:overflow-y-auto md:pr-2 custom-scrollbar">
                    {selectedGroup.exercises.map((exercise, idx) => (
                      <div key={idx} className="bg-black/40 rounded-2xl border border-white/5 p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-gray-500 font-bold text-xs">
                            {idx + 1}
                          </div>
                          <p className="font-bold text-white text-sm md:text-base">{exercise}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
