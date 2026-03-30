import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, ChevronRight, Dumbbell, Zap, Trophy, Users, Clock, Flame, X, Download, ChevronDown, ChevronUp, Play, Youtube, Pause, RotateCcw, Timer, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { workoutPlans } from '../data';
import { WorkoutPlan } from '../types';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SEO } from '../components/SEO';
import { getExerciseDetails, exerciseVideoIds } from '../utils/exerciseUtils';
import { ExerciseModal } from '../components/ExerciseModal';

const WorkoutTimer = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);
  
  const [restTime, setRestTime] = useState(0);
  const [isRestTimerRunning, setIsRestTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isStopwatchRunning) {
      interval = setInterval(() => {
        setStopwatchTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStopwatchRunning]);

  useEffect(() => {
    let interval: any;
    if (isRestTimerRunning && restTime > 0) {
      interval = setInterval(() => {
        setRestTime(prev => prev - 1);
      }, 1000);
    } else if (restTime === 0 && isRestTimerRunning) {
      setIsRestTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRestTimerRunning, restTime]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const startRestTimer = (seconds: number) => {
    setRestTime(seconds);
    setIsRestTimerRunning(true);
  };

  return (
    <div className="bg-black/40 rounded-2xl border border-white/5 p-4 mb-6 flex flex-col sm:flex-row gap-6">
      {/* Stopwatch */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-1.5">
            <Clock className="w-3 h-3" /> Workout Duration
          </span>
          <span className="text-2xl font-black italic text-white font-mono">{formatTime(stopwatchTime)}</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsStopwatchRunning(!isStopwatchRunning)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${isStopwatchRunning ? 'bg-red-600/20 text-red-500 hover:bg-red-600/30' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            {isStopwatchRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isStopwatchRunning ? 'Pause' : 'Start'}
          </button>
          <button 
            onClick={() => { setIsStopwatchRunning(false); setStopwatchTime(0); }}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors"
            title="Reset Stopwatch"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Rest Timer */}
      <div className="flex-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-1.5">
            <Timer className="w-3 h-3" /> Rest Timer
          </span>
          <span className={`text-2xl font-black italic font-mono ${restTime > 0 && restTime <= 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
            {formatTime(restTime)}
          </span>
        </div>
        
        {!isRestTimerRunning && restTime === 0 ? (
          <div className="flex gap-2">
            {[30, 60, 90, 120].map(t => (
              <button
                key={t}
                onClick={() => startRestTimer(t)}
                className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold text-gray-300 transition-colors"
              >
                {t}s
              </button>
            ))}
          </div>
        ) : (
          <div className="flex gap-2">
            <button 
              onClick={() => setIsRestTimerRunning(!isRestTimerRunning)}
              className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${isRestTimerRunning ? 'bg-red-600/20 text-red-500 hover:bg-red-600/30' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              {isRestTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isRestTimerRunning ? 'Pause' : 'Resume'}
            </button>
            <button 
              onClick={() => { setIsRestTimerRunning(false); setRestTime(0); }}
              className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors"
              title="Cancel Rest"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function WorkoutPlans() {
  const [filter, setFilter] = useState({ goal: 'all', level: 'all', preference: 'all' });
  const [search, setSearch] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(null);
  const [selectedExerciseForModal, setSelectedExerciseForModal] = useState<any | null>(null);
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
        title="Best Workout Plans for Beginners & Weight Loss" 
        description="Find the best workout plans for beginners, weight loss workout plans, and gym workout plans for muscle gain. Filter by goal and level." 
        urlPath="/workouts" 
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": workoutPlans.map((plan, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "name": plan.title,
              "description": plan.description,
              "image": plan.image,
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
          <h1 className="text-6xl font-display font-black uppercase italic tracking-tighter mb-6">
            Best Workout <span className="text-red-600">Plans</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Scientifically designed training programs for every goal. Filter by your objective and level to find your perfect match.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/muscle-groups" 
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <Dumbbell className="w-4 h-4 text-red-600" />
              Browse by Muscle Group
            </Link>
            <Link 
              to="/diet" 
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <Apple className="w-4 h-4 text-red-600" />
              View Diet Plans
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
                {plan.image ? (
                  <img src={plan.image} alt={plan.title} referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                    <Dumbbell className="w-32 h-32 text-white" />
                  </div>
                )}
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

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-black uppercase italic tracking-tighter mb-12 text-center">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="space-y-6 mb-16">
            {[
              { q: "What is the best workout plan for beginners?", a: "The best workout plan for beginners focuses on full-body routines 3 days a week, emphasizing compound movements like squats and push-ups to build a solid foundation." },
              { q: "How do I choose a weight loss workout plan?", a: "A good weight loss workout plan combines strength training to preserve muscle and high-intensity interval training (HIIT) or cardio to maximize calorie burn." },
              { q: "Can I build muscle with a home workout plan?", a: "Yes! You can build muscle at home using bodyweight exercises, resistance bands, or dumbbells by progressively increasing the difficulty (progressive overload)." },
              { q: "How often should I change my workout routine?", a: "It's recommended to stick to a workout plan for 8-12 weeks to see progress. Change it when you hit a plateau or your goals change." }
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none text-gray-400">
            <h2 className="text-2xl font-bold text-white mb-4">Why Follow a Structured Workout Plan?</h2>
            <p className="mb-4">
              Whether you are looking for a <strong>weight loss workout plan</strong> or a <strong>gym workout plan for muscle gain</strong>, following a structured routine is the key to long-term success. Randomly selecting exercises each time you visit the gym often leads to plateaus and muscular imbalances. A well-designed <strong>workout plan for beginners</strong> or advanced lifters ensures progressive overload, which is the gradual increase of stress placed upon the body during exercise training.
            </p>
            <h3 className="text-xl font-bold text-white mb-3">Benefits of Our Fitness Plans</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Targeted Muscle Gain:</strong> Our hypertrophy and strength plans are optimized to build lean muscle mass effectively.</li>
              <li><strong>Efficient Fat Loss:</strong> Combine resistance training with conditioning in our <strong>weight loss workout plans</strong> to burn calories while preserving muscle.</li>
              <li><strong>Flexibility:</strong> Choose between gym-based routines or a convenient <strong>home workout plan</strong> that requires minimal equipment.</li>
              <li><strong>Expert Guidance:</strong> Each plan includes detailed exercise instructions, sets, reps, and rest periods to remove the guesswork from your training.</li>
            </ul>
            <p>
              To maximize your results, we highly recommend pairing your chosen routine with one of our expert-curated <Link to="/diet" className="text-red-500 hover:underline">diet plans</Link>. Nutrition plays a crucial role in recovery and performance, whether your goal is to build muscle or lose fat.
            </p>
          </div>
        </div>
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
                <div className="p-6 md:p-12 bg-zinc-800/50 relative overflow-hidden">
                  {selectedPlan.image && (
                    <div className="absolute inset-0 z-0 opacity-20">
                      <img src={selectedPlan.image} alt={selectedPlan.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 md:mb-6 mt-8 md:mt-0">
                      {selectedPlan.goal.replace('-', ' ')}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-black uppercase italic tracking-tighter mb-4 md:mb-6 pr-8 md:pr-0">{selectedPlan.title}</h2>
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
                </div>

                <div className="p-6 md:p-12 flex flex-col">
                  <WorkoutTimer />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                    <h3 className="text-xl font-black uppercase italic flex items-center gap-3">
                      <Zap className="w-6 h-6 text-red-600 shrink-0" />
                      Workout Routine
                    </h3>
                  </div>
                  <div className="space-y-6 md:space-y-8 md:max-h-[50vh] md:overflow-y-auto md:pr-2 custom-scrollbar">
                    {(() => {
                      const exercises = selectedPlan.exercises;
                      
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
                                  onClick={() => !isRest && setSelectedExerciseForModal({ ...ex, details })}
                                >
                                  <div className="flex-1 pr-4 flex items-center gap-3">
                                    {!isRest && (
                                      <img src={details.image} alt={`${ex.name} - ${details.muscle} exercise form and posture`} className="w-10 h-10 object-cover rounded-lg border border-white/10 shrink-0" referrerPolicy="no-referrer" />
                                    )}
                                    <div>
                                      <p className="font-bold text-white flex flex-wrap items-center gap-2 text-sm md:text-base">
                                        {ex.name}
                                        {!isRest && <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />}
                                      </p>
                                      {!isRest && <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">{ex.sets} Sets</p>}
                                    </div>
                                  </div>
                                  {!isRest && (
                                    <div className="text-right shrink-0">
                                      <span className="text-red-600 font-black italic text-sm md:text-base">{ex.reps}</span>
                                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Reps</p>
                                    </div>
                                  )}
                                </div>
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

      {/* Exercise Detail Modal */}
      <ExerciseModal 
        isOpen={!!selectedExerciseForModal} 
        onClose={() => setSelectedExerciseForModal(null)} 
        exerciseName={selectedExerciseForModal?.name || ''} 
      />
    </div>
  );
}
