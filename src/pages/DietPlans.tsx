import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, Apple, Flame, Zap, X, Coffee, Utensils, Moon, Cookie, RefreshCw } from 'lucide-react';
import { dietPlans, mealAlternatives } from '../data';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { SEO } from '../components/SEO';

export default function DietPlans() {
  const [filter, setFilter] = useState({ goal: 'all', type: 'all' });
  const [search, setSearch] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [customMeals, setCustomMeals] = useState<Record<string, string>>({});

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
    setCustomMeals(JSON.parse(plan.meals));
  };

  const handleClosePlan = () => {
    setSelectedPlan(null);
    setCustomMeals({});
  };

  const handleSwapMeal = (mealType: string, newMeal: string) => {
    setCustomMeals(prev => ({ ...prev, [mealType]: newMeal }));
  };

  const handleDownloadPDF = () => {
    if (!selectedPlan) return;

    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.setTextColor(220, 38, 38);
    doc.text(selectedPlan.title.toUpperCase(), 14, 22);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Goal: ${selectedPlan.goal.replace('-', ' ').toUpperCase()}`, 14, 32);
    doc.text(`Type: ${selectedPlan.type.toUpperCase()}`, 14, 38);
    doc.text(`Calorie Guidance: ${selectedPlan.calorieGuidance}`, 14, 44);
    
    const tableData = Object.entries(customMeals).map(([meal, desc]) => [
      meal.toUpperCase(),
      desc
    ]);

    (doc as any).autoTable({
      startY: 54,
      head: [['MEAL', 'DESCRIPTION']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [220, 38, 38], textColor: 255, fontStyle: 'bold' },
      styles: { fontSize: 10, cellPadding: 5 },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: 'bold' },
        1: { cellWidth: 'auto' }
      }
    });

    doc.save(`${selectedPlan.title.toLowerCase().replace(/\s+/g, '-')}-diet-plan.pdf`);
  };

  const filteredPlans = dietPlans.filter(plan => {
    const matchesGoal = filter.goal === 'all' || plan.goal === filter.goal;
    const matchesType = filter.type === 'all' || plan.type === filter.type;
    const matchesSearch = plan.title.toLowerCase().includes(search.toLowerCase());
    return matchesGoal && matchesType && matchesSearch;
  });

  const goals = [
    { id: 'all', label: 'All Goals' },
    { id: 'weight-loss', label: 'Weight Loss' },
    { id: 'muscle-building', label: 'Muscle Building' },
    { id: 'strength', label: 'Strength' },
    { id: 'endurance', label: 'Endurance' },
    { id: 'general-fitness', label: 'General Fitness' }
  ];

  const types = [
    { id: 'all', label: 'All Types' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'non-vegetarian', label: 'Non-Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'keto', label: 'Keto' },
    { id: 'paleo', label: 'Paleo' },
    { id: 'mediterranean', label: 'Mediterranean' },
    { id: 'intermittent-fasting', label: 'Intermittent Fasting' }
  ];

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <SEO 
        title="Diet Plans" 
        description="Fuel your performance with expert-curated meal plans. Whether you're plant-based or an omnivore, we have the right fuel for your fire." 
        urlPath="/diets" 
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-6">
            Nutrition <span className="text-red-600">Guides</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Fuel your performance with expert-curated meal plans. Whether you're plant-based or an omnivore, we have the right fuel for your fire.
          </p>
        </header>

        {/* Filters & Search */}
        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl mb-16 space-y-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search diet plans..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <select 
                value={filter.goal}
                onChange={(e) => setFilter({ ...filter, goal: e.target.value })}
                className="bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none min-w-[160px]"
              >
                {goals.map(g => <option key={g.id} value={g.id}>{g.label}</option>)}
              </select>
              <select 
                value={filter.type}
                onChange={(e) => setFilter({ ...filter, type: e.target.value })}
                className="bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none min-w-[160px]"
              >
                {types.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Diet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <motion.div 
              key={plan.id}
              layoutId={plan.id}
              onClick={() => handleSelectPlan(plan)}
              className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden cursor-pointer group hover:border-red-600/50 transition-all duration-300"
            >
              <div className="h-48 bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <span className={cn(
                    "text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg",
                    plan.type === 'vegetarian' ? "bg-green-600" : 
                    plan.type === 'vegan' ? "bg-emerald-600" :
                    plan.type === 'keto' ? "bg-purple-600" :
                    plan.type === 'paleo' ? "bg-orange-600" :
                    plan.type === 'mediterranean' ? "bg-blue-600" :
                    plan.type === 'intermittent-fasting' ? "bg-zinc-600" :
                    "bg-red-600"
                  )}>
                    {plan.type}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Apple className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-3 group-hover:text-red-600 transition-colors">{plan.title}</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Goal</span>
                    <span className="text-xs font-black uppercase text-white">{plan.goal.replace('-', ' ')}</span>
                  </div>
                  <div className="flex flex-col border-l border-white/10 pl-4">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Calories</span>
                    <span className="text-xs font-black uppercase text-white">{plan.calorieGuidance}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">View Meal Plan</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePlan}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            ></motion.div>
            <motion.div 
              layoutId={selectedPlan.id}
              className="bg-zinc-900 w-full max-w-4xl rounded-3xl overflow-hidden relative z-10 border border-white/10 shadow-2xl"
            >
              <button 
                onClick={handleClosePlan}
                className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 bg-zinc-800/50">
                  <div className={cn(
                    "text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 inline-block",
                    selectedPlan.type === 'vegetarian' ? "bg-green-600" : 
                    selectedPlan.type === 'vegan' ? "bg-emerald-600" :
                    selectedPlan.type === 'keto' ? "bg-purple-600" :
                    selectedPlan.type === 'paleo' ? "bg-orange-600" :
                    selectedPlan.type === 'mediterranean' ? "bg-blue-600" :
                    selectedPlan.type === 'intermittent-fasting' ? "bg-zinc-600" :
                    "bg-red-600"
                  )}>
                    {selectedPlan.type}
                  </div>
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-6">{selectedPlan.title}</h2>
                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
                        <Flame className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Calorie Guidance</p>
                        <p className="text-lg font-black uppercase italic">{selectedPlan.calorieGuidance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Primary Goal</p>
                        <p className="text-lg font-black uppercase italic">{selectedPlan.goal.replace('-', ' ')}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    * Nutritional values are approximate. Consult with a nutritionist for personalized medical advice.
                  </p>
                </div>

                <div className="p-12">
                  <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-red-600" />
                    Daily Meal Plan
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(customMeals).map(([meal, desc]: any, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          {meal === 'breakfast' && <Coffee className="w-5 h-5 text-gray-400" />}
                          {meal === 'lunch' && <Utensils className="w-5 h-5 text-gray-400" />}
                          {meal === 'dinner' && <Moon className="w-5 h-5 text-gray-400" />}
                          {meal === 'snacks' && <Cookie className="w-5 h-5 text-gray-400" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-[10px] uppercase tracking-widest text-red-600 font-black">{meal}</p>
                            {mealAlternatives[meal as keyof typeof mealAlternatives] && (
                              <div className="relative group/select">
                                <select 
                                  onChange={(e) => handleSwapMeal(meal, e.target.value)}
                                  value={desc}
                                  className="appearance-none bg-black/50 border border-white/10 rounded-lg pl-3 pr-8 py-1.5 text-[10px] uppercase tracking-widest text-gray-400 focus:outline-none focus:border-red-600 cursor-pointer hover:bg-black/80 transition-colors"
                                >
                                  <option value={desc}>Current: {desc.substring(0, 20)}...</option>
                                  {mealAlternatives[meal as keyof typeof mealAlternatives]
                                    .filter(alt => alt !== desc)
                                    .map((alt, idx) => (
                                      <option key={idx} value={alt}>{alt}</option>
                                    ))}
                                </select>
                                <RefreshCw className="w-3 h-3 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none group-hover/select:text-red-600 transition-colors" />
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-300 font-medium leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={handleDownloadPDF}
                    className="w-full mt-10 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-red-600/20"
                  >
                    Download PDF Guide
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
