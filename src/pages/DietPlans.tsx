import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, Apple, Flame, Zap, X, Coffee, Utensils, Moon, Cookie, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dietPlans, mealAlternatives } from '../data';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { SEO } from '../components/SEO';
import { getMealImage, getFeaturedImage } from '../utils/dietUtils';

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
        title="Muscle Gain & Vegetarian Diet Plans" 
        description="Explore muscle gain diet plans, 7-day vegetarian diet plans for muscle gain, and weight loss nutrition guides." 
        urlPath="/diets" 
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": dietPlans.map((plan, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "CreativeWork",
              "name": plan.title,
              "description": `Diet plan for ${plan.goal.replace('-', ' ')} with ${plan.calorieGuidance} calorie guidance.`,
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
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-6">
            Muscle Gain & <span className="text-red-600">Diet Plans</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Fuel your performance with expert-curated meal plans. Whether you're plant-based or an omnivore, we have the right fuel for your fire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/workouts" 
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors"
            >
              <Zap className="w-4 h-4 text-red-600" />
              View Workout Plans
            </Link>
          </div>
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
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={getFeaturedImage(plan.type, plan.goal).url} 
                    alt={getFeaturedImage(plan.type, plan.goal).alt}
                    className="w-full h-full object-cover opacity-60"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
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
        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="space-y-6 mb-16">
            {[
              { q: "What is the best diet plan for muscle gain?", a: "A muscle gain diet plan should include a caloric surplus (eating more calories than you burn) and sufficient protein (around 1.6-2.2g per kg of body weight) to support muscle protein synthesis." },
              { q: "Can I build muscle on a vegetarian diet plan?", a: "Absolutely. A 7-day vegetarian diet plan for muscle gain can be highly effective if it includes diverse protein sources like lentils, chickpeas, tofu, paneer, Greek yogurt, and whey protein." },
              { q: "How do I choose a weight loss diet plan?", a: "The best weight loss diet plan is one that puts you in a sustainable caloric deficit while providing enough protein and fiber to keep you full and preserve muscle mass." },
              { q: "Should I track my calories?", a: "While not strictly necessary for everyone, tracking calories and macronutrients is the most reliable way to ensure you are hitting your goals for either weight loss or muscle gain." }
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none text-gray-400">
            <h2 className="text-2xl font-bold text-white mb-4">The Importance of a Structured Diet Plan</h2>
            <p className="mb-4">
              Achieving your fitness goals requires more than just training; it demands proper nutrition. Whether you are following a <strong>muscle gain diet plan</strong> or seeking a sustainable <strong>weight loss diet plan</strong>, consistency and macronutrient balance are key. A well-structured diet provides the necessary fuel for intense workouts and the building blocks for recovery and muscle growth.
            </p>
            <h3 className="text-xl font-bold text-white mb-3">Benefits of Our Nutrition Guides</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Optimized Muscle Growth:</strong> Our <strong>muscle gain diet plans</strong> are designed with the optimal protein-to-carb ratio to support hypertrophy and strength gains.</li>
              <li><strong>Plant-Based Power:</strong> We offer comprehensive options like our <strong>7-day vegetarian diet plan for muscle gain</strong>, ensuring you get complete proteins from plant sources.</li>
              <li><strong>Sustainable Fat Loss:</strong> Our weight loss plans focus on nutrient-dense foods that keep you satiated while maintaining a caloric deficit.</li>
              <li><strong>Customizable Meals:</strong> Easily swap meals based on your preferences or dietary restrictions without compromising your goals.</li>
            </ul>
            <p>
              For the best results, combine these nutrition strategies with our expertly designed <Link to="/workouts" className="text-red-500 hover:underline">workout plans</Link>. Proper fueling combined with progressive resistance training is the ultimate formula for transforming your physique.
            </p>
          </div>
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
              className="bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 border border-white/10 shadow-2xl"
            >
              <button 
                onClick={handleClosePlan}
                className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-64 w-full relative">
                <img 
                  src={getFeaturedImage(selectedPlan.type, selectedPlan.goal).url} 
                  alt={getFeaturedImage(selectedPlan.type, selectedPlan.goal).alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
              </div>

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
                    {Object.entries(customMeals).map(([meal, desc]: any, i: number) => {
                      const mealImage = getMealImage(desc, selectedPlan.type);
                      return (
                      <div key={i} className="flex gap-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 relative">
                          <img 
                            src={mealImage.url} 
                            alt={mealImage.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            {meal === 'breakfast' && <Coffee className="w-5 h-5 text-white/80 drop-shadow-md" />}
                            {meal === 'lunch' && <Utensils className="w-5 h-5 text-white/80 drop-shadow-md" />}
                            {meal === 'dinner' && <Moon className="w-5 h-5 text-white/80 drop-shadow-md" />}
                            {meal === 'snacks' && <Cookie className="w-5 h-5 text-white/80 drop-shadow-md" />}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-[10px] uppercase tracking-widest text-red-600 font-black">{meal}</p>
                            {mealAlternatives[selectedPlan.type as keyof typeof mealAlternatives]?.[meal as 'breakfast' | 'lunch' | 'dinner' | 'snacks'] && (
                              <div className="relative group/select">
                                <select 
                                  onChange={(e) => handleSwapMeal(meal, e.target.value)}
                                  value={desc}
                                  className="appearance-none bg-black/50 border border-white/10 rounded-lg pl-3 pr-8 py-1.5 text-[10px] uppercase tracking-widest text-gray-400 focus:outline-none focus:border-red-600 cursor-pointer hover:bg-black/80 transition-colors"
                                >
                                  <option value={desc}>Current: {desc.substring(0, 20)}...</option>
                                  {mealAlternatives[selectedPlan.type as keyof typeof mealAlternatives][meal as 'breakfast' | 'lunch' | 'dinner' | 'snacks']
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
                    )})}
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
