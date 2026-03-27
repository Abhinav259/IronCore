import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Play, Users, Trophy, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How do I choose the right workout plan?", a: "Our workout plans are categorized by goal (muscle gain, fat loss, etc.) and fitness level. You can use the filters on the Workouts page to find the best fit for you." },
    { q: "Are the diet plans suitable for vegetarians?", a: "Yes! We offer dedicated vegetarian and non-vegetarian diet plans tailored for different fitness goals." },
    { q: "Can I follow these plans at home?", a: "Absolutely. We have specific 'Home Workout' sections that require minimal to no equipment." },
    { q: "How often are the plans updated?", a: "We update our library monthly with new routines and nutritional guides to keep your progress on track." }
  ];

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Iron Core" 
        description="Explore the best gym workout plans for muscle gain, fat loss, and strength. Access expert routines, exercise guides, and fitness tips for beginners to advanced levels." 
        urlPath="/" 
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
            srcSet="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop 1920w"
            sizes="100vw"
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 px-4 py-1.5 rounded-full mb-8">
              <Zap className="w-4 h-4 text-red-600" />
              <span className="text-xs font-black uppercase tracking-widest text-red-500">New: 12-Week Shred Program</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
              Unleash Your <br />
              <span className="text-red-600">Inner Beast</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              The ultimate fitness platform for those who demand more. Personalized workouts, expert nutrition, and a community of warriors.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                to="/workouts" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20"
              >
                Start Training <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">10K+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Active Members</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">500+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Workout Plans</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">50+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Expert Coaches</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goal-Based Programs */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-6">
                Goal-Based <span className="text-red-600">Training</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Whether you want to build massive muscle or torch body fat, we have a scientifically-backed program tailored for your specific objective.
              </p>
            </div>
            <Link to="/workouts" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
              View All Programs <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Muscle Gain', desc: 'Hypertrophy focused splits for maximum size.', icon: Trophy, img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop' },
              { title: 'Fat Loss', desc: 'High intensity programs to shred body fat.', icon: Zap, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop' },
              { title: 'Strength', desc: 'Powerlifting protocols for raw strength.', icon: Users, img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop' }
            ].map((program, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] overflow-hidden rounded-3xl"
              >
                <img 
                  src={program.img} 
                  srcSet={`${program.img.replace('w=800', 'w=400')} 400w, ${program.img} 800w`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt={program.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-red-600/40">
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black uppercase italic mb-3">{program.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.desc}
                  </p>
                  <Link to="/workouts" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:text-red-500 transition-colors">
                    Explore Plan <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-16 text-center">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-red-600 transition-transform", activeFaq === i && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-gray-400 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop" 
            srcSet="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920&auto=format&fit=crop 1920w"
            sizes="100vw"
            alt="CTA BG" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8">
            Ready to <span className="text-red-600">Commit?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the elite circle of fitness enthusiasts. Your transformation starts with a single step.
          </p>
          <Link 
            to="/workouts" 
            className="inline-flex bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/40"
          >
            Start Training Today
          </Link>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
