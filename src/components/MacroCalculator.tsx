import React, { useState } from 'react';
import { Calculator, Info, RefreshCw, ChevronRight, Zap, Target, Activity } from 'lucide-react';

interface MacroResults {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export function MacroCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activity: '1.2',
    goal: 'maintenance'
  });
  const [results, setResults] = useState<MacroResults | null>(null);

  const calculateMacros = () => {
    const { age, gender, weight, height, activity, goal } = formData;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (!w || !h || !a) return;

    // Mifflin-St Jeor Equation
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;

    const tdee = bmr * act;
    let targetCalories = tdee;

    if (goal === 'fat-loss') targetCalories -= 500;
    if (goal === 'muscle-gain') targetCalories += 300;

    // Macros calculation
    // Protein: 2g per kg
    const protein = w * 2;
    // Fats: 25% of calories
    const fats = (targetCalories * 0.25) / 9;
    // Carbs: Remaining calories
    const carbs = (targetCalories - (protein * 4) - (fats * 9)) / 4;

    setResults({
      calories: Math.round(targetCalories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats)
    });
  };

  const reset = () => {
    setFormData({
      age: '',
      gender: 'male',
      weight: '',
      height: '',
      activity: '1.2',
      goal: 'maintenance'
    });
    setResults(null);
  };

  return (
    <section className="mb-16">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between group hover:border-red-600/30 transition-all shadow-2xl"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Calculator className="w-8 h-8 text-red-600" />
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-white mb-1">Macro & Calorie Calculator</h2>
            <p className="text-zinc-500 text-sm font-medium">Calculate your personalized daily targets for optimal results.</p>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronRight className="w-6 h-6 text-zinc-400" />
        </div>
      </button>

      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pt-6">
            <div className="bg-zinc-900/60 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-inner">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Form */}
                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Gender</label>
                        <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/5">
                          {['male', 'female'].map((g) => (
                            <button
                              key={g}
                              onClick={() => setFormData({ ...formData, gender: g })}
                              className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                                formData.gender === g ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-zinc-500 hover:text-white'
                              }`}
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Age</label>
                        <input 
                          type="number" 
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          placeholder="Years"
                          className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all placeholder:text-zinc-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Weight (kg)</label>
                        <input 
                          type="number" 
                          value={formData.weight}
                          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                          placeholder="e.g. 80"
                          className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all placeholder:text-zinc-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Height (cm)</label>
                        <input 
                          type="number" 
                          value={formData.height}
                          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                          placeholder="e.g. 180"
                          className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all placeholder:text-zinc-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Activity Level</label>
                      <select 
                        value={formData.activity}
                        onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="1.2">Sedentary (Office job, little exercise)</option>
                        <option value="1.375">Lightly Active (1-3 days/week)</option>
                        <option value="1.55">Moderately Active (3-5 days/week)</option>
                        <option value="1.725">Very Active (6-7 days/week)</option>
                        <option value="1.9">Extra Active (Physical job + training)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Your Goal</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'fat-loss', label: 'Fat Loss', icon: Zap },
                          { id: 'maintenance', label: 'Maintain', icon: Target },
                          { id: 'muscle-gain', label: 'Gain Muscle', icon: Activity }
                        ].map((g) => {
                          const Icon = g.icon;
                          return (
                            <button
                              key={g.id}
                              onClick={() => setFormData({ ...formData, goal: g.id })}
                              className={`flex flex-col items-center gap-3 p-4 rounded-2xl border transition-all ${
                                formData.goal === g.id 
                                  ? 'bg-red-600/10 border-red-600 text-red-500' 
                                  : 'bg-black/20 border-white/5 text-zinc-500 hover:border-white/10'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span className="text-[10px] font-black uppercase tracking-widest">{g.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button 
                        onClick={calculateMacros}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 shadow-lg shadow-red-600/20"
                      >
                        Calculate Targets
                      </button>
                      <button 
                        onClick={reset}
                        className="w-16 bg-white/5 hover:bg-white/10 text-white rounded-2xl flex items-center justify-center transition-colors"
                      >
                        <RefreshCw className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="relative">
                      {results ? (
                        <div
                          key="results"
                          className="h-full flex flex-col animate-fade-in"
                        >
                          <div className="bg-zinc-950/50 rounded-[2rem] p-8 border border-white/5 flex-1 flex flex-col justify-center text-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-4">Daily Target</span>
                            <div className="mb-12">
                              <h3 className="text-7xl font-black italic tracking-tighter text-white mb-2">{results.calories}</h3>
                              <p className="text-zinc-500 font-black uppercase tracking-widest text-sm">Total Calories</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                              <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <p className="text-2xl font-black italic text-white mb-1">{results.protein}g</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Protein</p>
                              </div>
                              <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <p className="text-2xl font-black italic text-white mb-1">{results.carbs}g</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Carbs</p>
                              </div>
                              <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                <p className="text-2xl font-black italic text-white mb-1">{results.fats}g</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Fats</p>
                              </div>
                            </div>

                            <div className="mt-12 p-6 bg-red-600/5 rounded-2xl border border-red-600/10 flex items-start gap-4 text-left">
                              <Info className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                These targets are based on the Mifflin-St Jeor equation. For optimal results, track your progress and adjust calories by 100-200 if needed.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          key="placeholder"
                          className="h-full flex flex-col items-center justify-center text-center p-12 bg-zinc-950/30 rounded-[2rem] border border-dashed border-white/10 animate-fade-in"
                        >
                          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                            <Calculator className="w-10 h-10 text-zinc-700" />
                          </div>
                          <h3 className="text-xl font-black uppercase italic text-zinc-500 mb-2">Ready to Calculate?</h3>
                          <p className="text-zinc-600 text-sm max-w-xs">Fill in your details to see your personalized macronutrient breakdown.</p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
