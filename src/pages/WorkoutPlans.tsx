import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, ChevronRight, Dumbbell, Zap, Trophy, Users, Clock, Flame, X, Download, ChevronDown, ChevronUp, Play, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { workoutPlans } from '../data';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SEO } from '../components/SEO';

const getExerciseDetails = (name: string) => {
  const n = name.toLowerCase();
  
  // Chest & Push
  if (n.includes('bench press') || n.includes('chest') || n.includes('push-up') || n.includes('push up') || n.includes('dip') || n.includes('fly')) return { muscle: 'Chest, Triceps, Anterior Deltoids', equipment: 'Barbell/Dumbbells, Bench, Bodyweight', tips: 'Keep feet flat, maintain a slight arch in your lower back, and control the descent.' };
  
  // Legs & Squats
  if (n.includes('squat') || n.includes('leg press') || n.includes('lunge') || n.includes('step-up') || n.includes('step up')) return { muscle: 'Quadriceps, Glutes, Hamstrings', equipment: 'Barbell, Squat Rack / Machine / Dumbbells', tips: 'Keep your chest up, brace your core, and push your knees out as you descend.' };
  
  // Posterior Chain & Deadlifts
  if (n.includes('deadlift') || n.includes('rdl') || n.includes('hip thrust') || n.includes('glute bridge') || n.includes('back extension') || n.includes('hip hinge')) return { muscle: 'Hamstrings, Glutes, Lower Back', equipment: 'Barbell, Plates, Bodyweight', tips: 'Keep the bar close to your body, maintain a neutral spine, and hinge at the hips.' };
  
  // Back & Pull
  if (n.includes('row') || n.includes('pull') || n.includes('lat') || n.includes('shrug') || n.includes('face pull')) return { muscle: 'Latissimus Dorsi, Rhomboids, Biceps, Traps', equipment: 'Barbell/Dumbbells/Cable', tips: 'Pull with your elbows, squeeze your shoulder blades together at the top.' };
  
  // Shoulders & Press
  if (n.includes('press') || n.includes('shoulder') || n.includes('ohp') || n.includes('lateral raise') || n.includes('arnold')) return { muscle: 'Deltoids, Triceps', equipment: 'Barbell/Dumbbells', tips: 'Brace your core to avoid over-arching your lower back. Press straight up.' };
  
  // Arms (Biceps & Triceps)
  if (n.includes('curl')) return { muscle: 'Biceps', equipment: 'Dumbbells/Barbell/Cable', tips: 'Keep your elbows pinned to your sides and avoid using momentum.' };
  if (n.includes('extension') || n.includes('pressdown') || n.includes('skull crusher')) return { muscle: 'Triceps', equipment: 'Machine/Cable/Dumbbells', tips: 'Focus on the stretch and squeeze at the end of the movement.' };
  
  // Core, Abs & Recovery
  if (n.includes('plank') || n.includes('crunch') || n.includes('twist') || n.includes('raise') || n.includes('dead bug') || n.includes('wood chop') || n.includes('hollow') || n.includes('sit') || n.includes('bend') || n.includes('breathing') || n.includes('kegel') || n.includes('pelvic') || n.includes('mcgill') || n.includes('bird dog')) return { muscle: 'Core, Abs, Obliques, Pelvic Floor', equipment: 'Bodyweight / Mat / Cable', tips: 'Focus on contracting the core muscles rather than just going through the motion. Breathe steadily.' };
  
  // Cardio, Conditioning & Mobility
  if (n.includes('burpee') || n.includes('climber') || n.includes('swing') || n.includes('jump') || n.includes('sled') || n.includes('sprint') || n.includes('run') || n.includes('clean') || n.includes('emom') || n.includes('tabata') || n.includes('amrap') || n.includes('wod') || n.includes('chipper') || n.includes('snatch') || n.includes('thruster')) return { muscle: 'Full Body, Core, Cardiovascular', equipment: 'Bodyweight / Kettlebell / Sled', tips: 'Maintain a brisk pace but don\'t sacrifice form. Keep your core tight.' };
  if (n.includes('walk') || n.includes('cycle') || n.includes('cardio') || n.includes('bike') || n.includes('rower') || n.includes('intervals') || n.includes('tempo') || n.includes('session') || n.includes('march') || n.includes('jog')) return { muscle: 'Cardiovascular System', equipment: 'Treadmill / Bike / Rower / Bodyweight', tips: 'Maintain a steady breathing rhythm and stay within your target heart rate zone.' };
  if (n.includes('mobility') || n.includes('stretch') || n.includes('angel') || n.includes('y-t-w') || n.includes('halo') || n.includes('get-up')) return { muscle: 'Full Body Mobility, Posture', equipment: 'Bodyweight / Mat / Band', tips: 'Move through a full range of motion without forcing any painful positions.' };
  if (n.includes('carry') || n.includes('yoke') || n.includes('sandbag') || n.includes('stone') || n.includes('log') || n.includes('axle')) return { muscle: 'Core, Forearms, Traps, Full Body (Strongman)', equipment: 'Odd Objects / Heavy Weights', tips: 'Keep your chest up, brace your core heavily, and move with controlled steps.' };
  
  // Combat & Power
  if (n.includes('bag') || n.includes('sprawl') || n.includes('shadowboxing') || n.includes('slam') || n.includes('throw') || n.includes('rope')) return { muscle: 'Full Body, Explosive Power, Conditioning', equipment: 'Heavy Bag / Med Ball / Battle Ropes', tips: 'Focus on explosive power generation from the hips and core.' };

  // Aquatic
  if (n.includes('water') || n.includes('aqua') || n.includes('pool') || n.includes('swim') || n.includes('tread')) return { muscle: 'Full Body (Low Impact)', equipment: 'Pool / Aqua Dumbbells', tips: 'Use the water\'s resistance to control the movement. Keep movements smooth.' };

  // Gymnastics & Rings
  if (n.includes('ring') || n.includes('muscle-up') || n.includes('skin the cat') || n.includes('lever') || n.includes('hang')) return { muscle: 'Upper Body, Core, Stabilizers', equipment: 'Gymnastics Rings / Pull-up Bar', tips: 'Maintain strict body tension (hollow body) and control the eccentric phase.' };
  
  return {
    muscle: 'Targeted Muscle Groups',
    equipment: 'Standard Gym Equipment',
    tips: 'Maintain proper form, control the eccentric portion of the movement, and breathe properly.'
  };
};

export default function WorkoutPlans() {
  const [filter, setFilter] = useState({ goal: 'all', level: 'all', preference: 'all' });
  const [search, setSearch] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [customVideos, setCustomVideos] = useState<Record<string, string>>({});
  const [selectedMuscleFilter, setSelectedMuscleFilter] = useState('all');

  // Predefined 100% correct YouTube video IDs for common exercises
  const exerciseVideoIds: Record<string, string> = {
    'bench press': 'rT7DgCr-3pg',
    'barbell bench press': 'rT7DgCr-3pg',
    'squat': 'bEv6CCg2BC8',
    'barbell squat': 'bEv6CCg2BC8',
    'deadlift': 'op9kVnSso6Q',
    'barbell deadlift': 'op9kVnSso6Q',
    'pull-up': 'eGo4IYlbE5g',
    'pull up': 'eGo4IYlbE5g',
    'pull-ups': 'eGo4IYlbE5g',
    'push-up': 'IODxDxX7oi4',
    'push up': 'IODxDxX7oi4',
    'push-ups': 'IODxDxX7oi4',
    'overhead press': 'QAQ64hK4Xxs',
    'barbell overhead press': 'QAQ64hK4Xxs',
    'barbell row': 'G8l_8chR5BE',
    'bent over row': 'G8l_8chR5BE',
    'dumbbell curl': 'ykJmrZ5v0Oo',
    'bicep curl': 'ykJmrZ5v0Oo',
    'tricep extension': 'nRiJVZDpdL0',
    'tricep pushdown': '2-LAMcpzODU',
    'lunge': 'QOVaHwm-Q6U',
    'lunges': 'QOVaHwm-Q6U',
    'leg press': 'IZxyjW7MPJQ',
    'calf raise': '-M4-G8p8fmc',
    'plank': 'pSHjTRCQxIw',
    'crunch': 'Xyd_fa5zoEU',
    'crunches': 'Xyd_fa5zoEU',
    'lat pulldown': 'CAwf7n6Luuc',
    'leg extension': 'YyvSfVjQeL0',
    'leg curl': 'ELOCsoDSmrg',
    'seated row': 'GZbfZ033f74',
    'romanian deadlift': 'JCXUYuzwNrM',
    'split squat': '2C-uNgKwPLE',
    'db overhead press': 'QAQ64hK4Xxs',
    'glute bridge': '8bbE64NuDTU',
    'incline db press': 'SrqOu55lrYU',
    'cable row': 'GZbfZ033f74',
    'walking lunge': 'L8fvypPrzzs',
    'side plank': 'NXr4Fw8q60o',
    'triceps pressdowns': '2-LAMcpzODU',
    'seated ohp': 'qEwKCR5JCog',
    'lateral raise': '3VcKaXpzqRo',
    'rope pressdown': 'vB5OHsJ3EME',
    'pull-up or lat pulldown': 'eGo4IYlbE5g',
    'back squat': 'bEv6CCg2BC8',
    'rdl': 'JCXUYuzwNrM',
    'incline db bench': 'SrqOu55lrYU',
    'machine chest press': 'xUm0BiZCWlQ',
    'arnold press': '6Z15_WdXmVw',
    'cable fly': 'Iwe6AmxVf7o',
    'overhead triceps extension': 'nRiJVZDpdL0',
    'shrugs': 'cJRVVxmytaM',
    'hammer curl': 'zC3nLlEvin4',
    'seated calf raise': 'JbyjNymZOt0',
    'bulgarian split squat': '2C-uNgKwPLE',
    'front raise': '-t7fuZ0KhDA',
    'skull crusher': 'd_KZxkY_0cM',
    'dips': '2z8JmcrW-As',
    'chest fly': 'eozdVDA78K0',
    'cable crossover': 'taI4XduLpTk',
    'incline bench press': 'SrqOu55lrYU',
    'decline bench press': 'LfyQBUKR8SE',
    'close grip bench press': 'nEF0bv2FW94',
    'upright row': 'amCU-ziHITM',
    'machine shoulder press': 'WvLMauqrnK8',
    'hack squat': '0tn5K9NlCfo',
    'russian twist': 'wkD8rjkodUI',
    'leg raise': 'l4kQd9eWclE',
    'hanging leg raise': 'Pr1ieGZ5atk',
    'mountain climber': 'nmwgirgXLYM',
    'burpee': 'TU8QYVW0gDU',
    'kettlebell swing': 'YSxHifyI6s8',
    'box jump': '52r_Ul5k03g',
    'battle ropes': 'xZ-vLd1R8gU',
    'farmer walk': 'FkxrbbqOQvQ',
    'sled push': '4-1C2zZ2c2A',
    'tire flip': '2z8JmcrW-As',
  };

  const getYoutubeThumbnail = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
    }
    return null;
  };

  const filteredPlans = workoutPlans.filter(plan => {
    const matchesGoal = filter.goal === 'all' || plan.goal === filter.goal;
    const matchesLevel = filter.level === 'all' || plan.level === filter.level;
    const matchesPref = filter.preference === 'all' || plan.preference === filter.preference;
    const matchesSearch = plan.title.toLowerCase().includes(search.toLowerCase()) || 
                          plan.description.toLowerCase().includes(search.toLowerCase());
    return matchesGoal && matchesLevel && matchesPref && matchesSearch;
  });

  const goals = [
    { id: 'all', label: 'All Goals' },
    { id: 'muscle-gain', label: 'Muscle Gain' },
    { id: 'fat-loss', label: 'Fat Loss' },
    { id: 'strength', label: 'Strength' },
    { id: 'endurance', label: 'Endurance' }
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ];

  const preferences = [
    { id: 'all', label: 'All Types' },
    { id: 'gym', label: 'Gym' },
    { id: 'home', label: 'Home' }
  ];

  const downloadPDF = (plan: any) => {
    const doc = new jsPDF();
    
    // Add Title
    doc.setFontSize(22);
    doc.text(plan.title, 14, 22);
    
    // Add Description
    doc.setFontSize(11);
    doc.setTextColor(100);
    const splitDesc = doc.splitTextToSize(plan.description, 180);
    doc.text(splitDesc, 14, 32);
    
    // Add Meta Info
    doc.setFontSize(10);
    doc.setTextColor(50);
    const metaY = 35 + (splitDesc.length * 5);
    doc.text(`Goal: ${plan.goal.replace('-', ' ').toUpperCase()}`, 14, metaY);
    doc.text(`Level: ${plan.level.toUpperCase()}`, 80, metaY);
    doc.text(`Type: ${plan.preference.toUpperCase()}`, 140, metaY);

    // Add Table
    const exercises = JSON.parse(plan.exercises);
    const hasDays = exercises.some((ex: any) => ex.day);
    
    let head, tableData;
    if (hasDays) {
      head = [['Day', 'Exercise', 'Sets', 'Reps']];
      tableData = exercises.map((ex: any) => [ex.day || '-', ex.name, ex.sets, ex.reps]);
    } else {
      head = [['Exercise', 'Sets', 'Reps']];
      tableData = exercises.map((ex: any) => [ex.name, ex.sets, ex.reps]);
    }
    
    autoTable(doc, {
      startY: metaY + 10,
      head: head,
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [220, 38, 38] }, // Red color matching the theme
    });
    
    doc.save(`${plan.title.toLowerCase().replace(/\s+/g, '-')}-workout-plan.pdf`);
  };

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <SEO 
        title="Workout Plans" 
        description="Browse our extensive library of scientifically designed workout plans for muscle gain, fat loss, and strength. Find the perfect routine for your fitness level." 
        urlPath="/workouts" 
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-6">
            Workout <span className="text-red-600">Library</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Scientifically designed training programs for every goal. Filter by your objective and level to find your perfect match.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/muscle-groups" 
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <Dumbbell className="w-4 h-4 text-red-600" />
              Browse by Muscle Group
            </Link>
          </div>
        </header>

        {/* Filters & Search */}
        <div className="bg-zinc-900/50 border border-white/10 p-6 md:p-8 rounded-3xl mb-12 md:mb-16 space-y-6 md:space-y-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search workouts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full lg:w-auto">
              <select 
                value={filter.goal}
                onChange={(e) => setFilter({ ...filter, goal: e.target.value })}
                className="w-full sm:w-auto sm:flex-1 bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none min-w-[160px]"
              >
                {goals.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}
              </select>
              <select 
                value={filter.level}
                onChange={(e) => setFilter({ ...filter, level: e.target.value })}
                className="w-full sm:w-auto sm:flex-1 bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none min-w-[160px]"
              >
                {levels.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
              </select>
              <select 
                value={filter.preference}
                onChange={(e) => setFilter({ ...filter, preference: e.target.value })}
                className="w-full sm:w-auto sm:flex-1 bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none min-w-[160px]"
              >
                {preferences.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <motion.div 
              key={plan.id}
              layoutId={plan.id}
              onClick={() => {
                setSelectedPlan(plan);
                setSelectedMuscleFilter('all');
              }}
              className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden cursor-pointer group hover:border-red-600/50 transition-all duration-300"
            >
              <div className="h-48 bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {plan.level}
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {plan.preference}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Dumbbell className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-3 group-hover:text-red-600 transition-colors">{plan.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Goal</span>
                      <span className="text-xs font-black uppercase text-white">{plan.goal.replace('-', ' ')}</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-32">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-2">No Workouts Found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlan(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              layoutId={selectedPlan.id}
              className="bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 border border-white/10 shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-12 bg-zinc-800/50">
                  <div className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 md:mb-6 mt-8 md:mt-0">
                    {selectedPlan.goal.replace('-', ' ')}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 md:mb-6 pr-8 md:pr-0">{selectedPlan.title}</h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                    {selectedPlan.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Level</span>
                      <p className="text-lg font-black uppercase italic">{selectedPlan.level}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Type</span>
                      <p className="text-lg font-black uppercase italic">{selectedPlan.preference}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-12 flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                    <h3 className="text-xl font-black uppercase italic flex items-center gap-3">
                      <Zap className="w-6 h-6 text-red-600 shrink-0" />
                      Workout Routine
                    </h3>
                    {selectedPlan && (
                      <select
                        value={selectedMuscleFilter}
                        onChange={(e) => setSelectedMuscleFilter(e.target.value)}
                        className="bg-black border border-white/10 rounded-xl px-4 py-3 md:py-2 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none w-full sm:w-auto"
                      >
                        <option value="all">All Muscles</option>
                        {Array.from(
                          JSON.parse(selectedPlan.exercises).reduce((acc: Set<string>, ex: any) => {
                            if (ex.name.toLowerCase() !== 'rest') {
                              getExerciseDetails(ex.name).muscle.split(', ').forEach(m => acc.add(m));
                            }
                            return acc;
                          }, new Set<string>())
                        ).sort().map(m => (
                          <option key={m as string} value={m as string}>{m as string}</option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="space-y-6 md:space-y-8 md:max-h-[50vh] md:overflow-y-auto md:pr-2 custom-scrollbar">
                    {(() => {
                      const exercises = JSON.parse(selectedPlan.exercises);
                      
                      const filteredExercises = exercises.filter((ex: any) => {
                        if (selectedMuscleFilter === 'all') return true;
                        if (ex.name.toLowerCase() === 'rest') return false;
                        const details = getExerciseDetails(ex.name);
                        return details.muscle.includes(selectedMuscleFilter);
                      });

                      const groupedExercises = filteredExercises.reduce((acc: any, ex: any) => {
                        const day = ex.day || 'General Routine';
                        if (!acc[day]) acc[day] = [];
                        acc[day].push(ex);
                        return acc;
                      }, {});

                      if (Object.keys(groupedExercises).length === 0) {
                        return (
                          <div className="text-center py-10">
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">No exercises found for this muscle group.</p>
                          </div>
                        );
                      }

                      return Object.entries(groupedExercises).map(([day, dayExercises]: [string, any]) => (
                        <div key={day} className="space-y-4">
                          <h4 className="text-lg font-black uppercase italic text-white border-b border-white/10 pb-2">{day}</h4>
                          {dayExercises.map((ex: any, i: number) => {
                            const details = getExerciseDetails(ex.name);
                            const uniqueKey = `${day}-${i}`;
                            const isRest = ex.name.toLowerCase() === 'rest';
                            return (
                              <div key={uniqueKey} className="bg-black/40 rounded-2xl border border-white/5 overflow-hidden transition-colors">
                                <div 
                                  className={`flex items-center justify-between p-4 ${isRest ? '' : 'cursor-pointer hover:bg-white/5'}`}
                                  onClick={() => !isRest && setExpandedExercise(expandedExercise === uniqueKey ? null : uniqueKey)}
                                >
                                  <div className="flex-1 pr-4">
                                    <p className="font-bold text-white flex flex-wrap items-center gap-2 text-sm md:text-base">
                                      {ex.name}
                                      {!isRest && (expandedExercise === uniqueKey ? <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />)}
                                    </p>
                                    {!isRest && <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">{ex.sets} Sets</p>}
                                  </div>
                                  {!isRest && (
                                    <div className="text-right shrink-0">
                                      <span className="text-red-600 font-black italic text-sm md:text-base">{ex.reps}</span>
                                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Reps</p>
                                    </div>
                                  )}
                                </div>
                                
                                {!isRest && (
                                  <AnimatePresence>
                                    {expandedExercise === uniqueKey && (
                                      <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-4 pb-4"
                                      >
                                        <div className="pt-4 border-t border-white/10 grid grid-cols-1 gap-4 text-sm">
                                          <div>
                                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-1">Target Muscle</span>
                                            <p className="text-gray-300">{details.muscle}</p>
                                          </div>
                                          <div>
                                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-1">Equipment</span>
                                            <p className="text-gray-300">{details.equipment}</p>
                                          </div>
                                          <div>
                                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-1">Form Tips</span>
                                            <p className="text-gray-300">{details.tips}</p>
                                          </div>
                                          <div className="pt-2 border-t border-white/5">
                                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-2 flex items-center gap-1">
                                              <Youtube className="w-3 h-3 text-red-600" />
                                              Video Tutorial
                                            </span>
                                            <div className="flex items-center gap-2 mb-3">
                                              <input
                                                type="text"
                                                placeholder="Paste custom YouTube URL here..."
                                                value={customVideos[uniqueKey] || ''}
                                                onChange={(e) => setCustomVideos(prev => ({ ...prev, [uniqueKey]: e.target.value }))}
                                                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600 transition-colors"
                                              />
                                              {(() => {
                                                const videoUrl = customVideos[uniqueKey] || 
                                                               (exerciseVideoIds[ex.name.toLowerCase()] ? `https://www.youtube.com/watch?v=${exerciseVideoIds[ex.name.toLowerCase()]}` : 
                                                               `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' exercise tutorial')}`);
                                                return (
                                                  <a
                                                    href={videoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center hover:bg-red-600 transition-colors group shrink-0"
                                                    title={customVideos[uniqueKey] || exerciseVideoIds[ex.name.toLowerCase()] ? "Watch Tutorial" : "Search on YouTube"}
                                                  >
                                                    {customVideos[uniqueKey] || exerciseVideoIds[ex.name.toLowerCase()] ? (
                                                      <Play className="w-4 h-4 text-red-600 group-hover:text-white ml-0.5" />
                                                    ) : (
                                                      <Search className="w-4 h-4 text-red-600 group-hover:text-white" />
                                                    )}
                                                  </a>
                                                );
                                              })()}
                                            </div>
                                            {(() => {
                                              const videoUrl = customVideos[uniqueKey] || (exerciseVideoIds[ex.name.toLowerCase()] ? `https://www.youtube.com/watch?v=${exerciseVideoIds[ex.name.toLowerCase()]}` : null);
                                              const thumbnailUrl = videoUrl ? getYoutubeThumbnail(videoUrl) : null;
                                              
                                              if (thumbnailUrl) {
                                                return (
                                                  <div className="rounded-lg overflow-hidden border border-white/10 relative group bg-black aspect-video">
                                                    <img 
                                                      src={thumbnailUrl} 
                                                      alt={`${ex.name} Tutorial`} 
                                                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    />
                                                    <a
                                                      href={videoUrl!}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="absolute inset-0 flex items-center justify-center"
                                                    >
                                                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                                                        <Play className="w-5 h-5 text-white ml-1" />
                                                      </div>
                                                    </a>
                                                  </div>
                                                );
                                              }
                                              return null;
                                            })()}
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ));
                    })()}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 md:py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-red-600/20 text-sm md:text-base">
                      Start
                    </button>
                    <button 
                      onClick={() => downloadPDF(selectedPlan)}
                      className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-black uppercase tracking-widest py-4 md:py-5 rounded-2xl transition-all active:scale-95 border border-white/10 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      <Download className="w-5 h-5" />
                      PDF
                    </button>
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
