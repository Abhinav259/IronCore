import { useState, useEffect } from 'react';
import { Filter, Search, ChevronRight, Dumbbell, Zap, Trophy, Users, Flame, X, Download, ChevronDown, ChevronUp, Youtube, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { workoutPlans } from '../data';
import { WorkoutPlan } from '../types';
import { SEO } from '../components/SEO';
import { getExerciseDetails } from '../utils/exerciseUtils';
import { ExerciseModal } from '../components/ExerciseModal';

export default function WorkoutPlans() {
  const [filter, setFilter] = useState({ goal: 'all', level: 'all', preference: 'all' });
  const [search, setSearch] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(null);
  const [selectedExerciseForModal, setSelectedExerciseForModal] = useState<any | null>(null);
  const [customVideos, setCustomVideos] = useState<Record<string, string>>({});
  const [selectedMuscleFilter, setSelectedMuscleFilter] = useState('all');



  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (search || filter.goal !== 'all' || filter.level !== 'all' || filter.preference !== 'all') {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [search, filter]);

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

  const downloadPDF = async (plan: any) => {
    const { jsPDF } = await import('jspdf');
    const autoTable = (await import('jspdf-autotable')).default;
    
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
    const exercises = typeof plan.exercises === 'string' ? JSON.parse(plan.exercises) : plan.exercises;
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
        title="Muscle Gain Workout Plans"
        description="Achieve muscle growth with our tailored workout plans. Explore scientifically designed training programs for every goal."
        urlPath="/workouts" 
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Workouts", item: "/workouts" }
        ]}
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
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-6">
            Elite Gym <span className="text-red-600">Workout Plans</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
            Scientifically designed <strong>hypertrophy training</strong> programs and <strong>strength and conditioning</strong> routines. Master <strong>progressive overload</strong> with our expert-led <strong>gym workout plans</strong> tailored for every fitness level.
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
              to="/diets" 
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <Apple className="w-4 h-4 text-red-600" />
              View Diet Plans
            </Link>
          </div>
        </header>

        {/* Filters & Search */}
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-4 md:p-6 rounded-[2rem] mb-12 md:mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-red-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search by title or goal..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-red-600/50 focus:ring-1 focus:ring-red-600/20 transition-all placeholder:text-zinc-600"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative group">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                <select 
                  value={filter.goal}
                  onChange={(e) => setFilter({ ...filter, goal: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl pl-10 pr-4 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-red-600/50 transition-all appearance-none cursor-pointer hover:bg-black"
                >
                  {goals.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" />
              </div>
              <div className="relative group">
                <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                <select 
                  value={filter.level}
                  onChange={(e) => setFilter({ ...filter, level: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl pl-10 pr-4 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-red-600/50 transition-all appearance-none cursor-pointer hover:bg-black"
                >
                  {levels.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" />
              </div>
              <div className="relative group">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                <select 
                  value={filter.preference}
                  onChange={(e) => setFilter({ ...filter, preference: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded-2xl pl-10 pr-4 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-red-600/50 transition-all appearance-none cursor-pointer hover:bg-black"
                >
                  {preferences.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative min-h-[400px]">
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
            ) : filteredPlans.length > 0 ? (
              filteredPlans.map((plan, index) => (
                <div 
                  key={plan.id}
                  onClick={() => {
                    setSelectedPlan(plan);
                    setSelectedMuscleFilter('all');
                  }}
                  className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden cursor-pointer group hover:border-red-600/30 hover:bg-zinc-900 transition-all duration-500 shadow-xl hover:shadow-red-600/5 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-56 bg-zinc-800 relative overflow-hidden">
                    {plan.image && (
                      <img 
                        src={plan.image} 
                        srcSet={`${plan.image.replace('w=600', 'w=400')} 400w, ${plan.image} 600w`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={plan.title} 
                        referrerPolicy="no-referrer" 
                        loading="lazy" 
                        decoding="async" 
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                        width="400"
                        height="224"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent z-10"></div>
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                        {plan.level}
                      </span>
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                        {plan.preference}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-red-600/30 group-hover:scale-110 transition-transform duration-500 z-20">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black uppercase italic mb-3 group-hover:text-red-500 transition-colors duration-300 pt-2">{plan.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
                      {plan.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Target Goal</span>
                        <span className="text-xs font-black uppercase text-white tracking-wider">{plan.goal.replace('-', ' ')}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-600 group-hover:rotate-45 transition-all duration-500">
                        <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div 
                className="col-span-full text-center py-32 animate-fade-in"
              >
                <div className="w-24 h-24 bg-zinc-900/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
                  <Search className="w-10 h-10 text-zinc-700" />
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-4 tracking-tight">No Workouts Found</h3>
                <p className="text-zinc-500 max-w-md mx-auto font-medium">We couldn't find any plans matching your current filters. Try broadening your search or resetting the filters.</p>
                <button 
                  onClick={() => {
                    setFilter({ goal: 'all', level: 'all', preference: 'all' });
                    setSearch('');
                  }}
                  className="mt-8 text-red-500 font-bold uppercase tracking-widest text-sm hover:text-red-400 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

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
              To maximize your results, we highly recommend pairing your chosen routine with one of our expert-curated <Link to="/diets" className="text-red-500 hover:underline">diet plans</Link>. Nutrition plays a crucial role in recovery and performance, whether your goal is to build muscle or lose fat.
            </p>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
          <div 
            onClick={() => setSelectedPlan(null)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in"
          ></div>
          <div 
            className="bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 border border-white/10 shadow-2xl flex flex-col animate-slide-up"
          >
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors z-20"
              aria-label="Close plan details"
            >
              <X className="w-6 h-6" />
            </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-12 bg-zinc-800/50 relative overflow-hidden">
                  {selectedPlan.image && (
                    <div className="absolute inset-0 z-0 opacity-20">
                      <img 
                        src={selectedPlan.image} 
                        srcSet={`${selectedPlan.image.replace('w=600', 'w=400')} 400w, ${selectedPlan.image} 600w`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        alt={selectedPlan.title} 
                        referrerPolicy="no-referrer" 
                        loading="lazy" 
                        decoding="async" 
                        className="w-full h-full object-cover" 
                        width="600"
                        height="600"
                      />
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
                                  className={`flex flex-col p-4 ${isRest ? '' : 'cursor-pointer hover:bg-white/5'}`}
                                  onClick={() => !isRest && setSelectedExerciseForModal({ ...ex, details })}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex-1 pr-4 flex items-center gap-3">
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
                                  {!isRest && details && (
                                    <div className="mt-2 pt-2 border-t border-white/5 space-y-2">
                                      <div className="flex flex-wrap gap-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest bg-red-600/20 text-red-500 px-2 py-1 rounded-md">
                                          {details.primaryMuscle}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 text-gray-300 px-2 py-1 rounded-md">
                                          {details.equipment}
                                        </span>
                                      </div>
                                      <p className="text-xs text-gray-400 leading-relaxed">
                                        {details.tips}
                                      </p>
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
            </div>
          </div>
        )}

      {/* Exercise Detail Modal */}
      <ExerciseModal 
        isOpen={!!selectedExerciseForModal} 
        onClose={() => setSelectedExerciseForModal(null)} 
        exerciseName={selectedExerciseForModal?.name || ''} 
        primaryMuscle={selectedExerciseForModal?.details?.primaryMuscle}
        secondaryMuscles={selectedExerciseForModal?.details?.secondaryMuscles}
        equipment={selectedExerciseForModal?.details?.equipment}
        tips={selectedExerciseForModal?.details?.tips}
        image={selectedExerciseForModal?.details?.image}
        altText={selectedExerciseForModal?.details?.alt}
      />
    </div>
  );
}
