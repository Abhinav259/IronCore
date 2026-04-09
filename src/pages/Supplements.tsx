import { Pill, ShieldCheck, Zap, Info, CheckCircle2, AlertTriangle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supplements } from '../data';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export default function Supplements() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSupps = supplements.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || s.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(supplements.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <SEO 
        title="Fitness Supplements Guide"
        description="Optimize your results with the right supplementation. We break down the science, benefits, and usage for maximum gains."
        urlPath="/supplements" 
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Supplements", item: "/supplements" }
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": supplements.map((supp, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": supp.name,
              "description": supp.benefits,
              "category": supp.category,
              "brand": {
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
            Fitness <span className="text-red-600">Supplements</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Optimize your results with the right supplementation. We break down the science, benefits, and usage for maximum gains.
          </p>
        </header>

        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search supplements..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                  activeCategory === cat ? "bg-red-600 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Supplement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredSupps.map((supp, i) => (
            <div 
              key={i}
              className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all group animate-fade-in hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={supp.image} 
                  srcSet={`${supp.image?.replace('w=600', 'w=400')} 400w, ${supp.image} 600w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={supp.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="192"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-20">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/20">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {supp.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-black uppercase italic mb-4 group-hover:text-red-500 transition-colors">{supp.name}</h2>
                <div className="space-y-6 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600" />
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Benefits</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{supp.benefits}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-red-600" />
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Usage</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{supp.usage}</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                    supp.type === 'vegetarian' ? "bg-green-600/20 text-green-500" : 
                    supp.type === 'non-vegetarian' ? "bg-red-600/20 text-red-500" : 
                    "bg-white/10 text-gray-400"
                  )}>
                    {supp.type === 'both' ? 'All Diets' : supp.type}
                  </span>
                  <button className="text-red-600 font-bold uppercase tracking-widest text-[10px] hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read More <Info className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Importance of Supplementation */}
        <div className="mt-32 max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-black uppercase italic tracking-tighter mb-12 text-center">
            The Importance of <span className="text-red-600">Supplementation</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl hover:border-red-600/30 transition-colors">
              <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-4">Filling Nutritional Gaps</h3>
              <p className="text-gray-400 leading-relaxed">
                Even with a perfect diet, it can be difficult to get all the necessary vitamins and minerals your body needs, especially when training hard. Supplements like multivitamins, Vitamin D, and Magnesium help fill these gaps to ensure your body functions optimally.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl hover:border-red-600/30 transition-colors">
              <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-4">Enhancing Performance</h3>
              <p className="text-gray-400 leading-relaxed">
                Certain supplements are scientifically proven to enhance athletic performance. Creatine increases ATP production for explosive power, while pre-workouts and BCAAs can improve focus, endurance, and reduce perceived exertion during intense training sessions.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl hover:border-red-600/30 transition-colors">
              <div className="w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-4">Accelerating Recovery</h3>
              <p className="text-gray-400 leading-relaxed">
                Recovery is where growth happens. Protein powders provide fast-absorbing amino acids to repair muscle tissue, while Omega-3s and antioxidants help reduce exercise-induced inflammation, allowing you to bounce back faster for your next workout.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer */}
        <div className="bg-red-600/10 border border-red-600/20 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-red-600/20">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase italic mb-4">Safety Disclaimer</h2>
            <p className="text-gray-400 leading-relaxed">
              Supplements are intended to complement a healthy diet and exercise routine, not replace them. Always consult with a healthcare professional or qualified nutritionist before starting any new supplement regimen, especially if you have underlying health conditions or are taking medication. Results may vary based on individual metabolism and consistency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                Third-Party Tested
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                GMP Certified
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                No Banned Substances
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content Block */}
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none text-gray-400">
          <h2 className="text-2xl font-bold text-white mb-4">Maximizing Results with Fitness Supplements</h2>
          <p className="mb-4">
            While a solid training program and a balanced diet are the pillars of fitness, the right <strong>fitness supplements</strong> can provide the extra edge needed to break through plateaus. Whether you are looking to accelerate recovery, increase strength, or boost your daily protein intake, understanding <strong>workout nutrition</strong> is vital.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">Core Supplements for Every Athlete</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Whey Protein:</strong> Essential for muscle repair and growth. Consuming protein post-workout ensures your muscles have the necessary amino acids to recover quickly.</li>
            <li><strong>Creatine Monohydrate:</strong> One of the most researched supplements available. It helps increase ATP production, leading to improved strength and power output during high-intensity training.</li>
            <li><strong>Vitamins & Minerals:</strong> Micronutrients like <strong>Vitamin D3</strong>, <strong>Magnesium</strong>, and <strong>Zinc</strong> are crucial for immune function, bone health, and hormone regulation. A high-quality multivitamin can act as an insurance policy against dietary deficiencies.</li>
            <li><strong>Omega-3 Fish Oil:</strong> Vital for cardiovascular health, joint lubrication, and reducing exercise-induced inflammation.</li>
            <li><strong>Pre-Workout:</strong> Designed to enhance focus, energy, and blood flow, allowing you to train harder and longer.</li>
            <li><strong>BCAAs & EAAs:</strong> Branched-Chain Amino Acids help reduce muscle breakdown during prolonged workouts and support recovery.</li>
          </ul>
          <p>
            Remember, supplements are just one piece of the puzzle. To achieve your ultimate physique, ensure your <Link to="/diets" className="text-red-500 hover:underline">diet plan</Link> is dialed in and you are consistently following a structured <Link to="/workouts" className="text-red-500 hover:underline">workout routine</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
