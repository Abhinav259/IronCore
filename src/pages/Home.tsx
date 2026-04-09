import { ArrowRight, CheckCircle2, Play, Users, Trophy, Zap, ChevronDown, Calendar, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials, blogPosts } from '../data';
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

  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="overflow-hidden">
      <SEO 
        urlPath="/" 
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://iron-core-neon.vercel.app/#organization",
              "name": "Iron Core",
              "url": "https://iron-core-neon.vercel.app",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iron-core-neon.vercel.app/logo.png"
              },
              "description": "The ultimate fitness platform for those who demand more. Personalized workouts, expert nutrition, and a community of warriors."
            },
            {
              "@type": "WebSite",
              "@id": "https://iron-core-neon.vercel.app/#website",
              "url": "https://iron-core-neon.vercel.app",
              "name": "Iron Core",
              "publisher": { "@id": "https://iron-core-neon.vercel.app/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://iron-core-neon.vercel.app/workouts?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=1400&auto=format&fit=crop&fm=webp" 
            srcSet="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=800&auto=format&fit=crop&fm=webp 800w, https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=60&w=1400&auto=format&fit=crop&fm=webp 1400w"
            sizes="100vw"
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            width="1400"
            height="933"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 px-4 py-1.5 rounded-full mb-8">
              <Zap className="w-4 h-4 text-red-600" />
              <span className="text-xs font-black uppercase tracking-widest text-red-500">New: 12-Week Shred Program</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase italic tracking-tighter leading-[0.9] mb-8 animate-fade-in-up delay-200">
              Elite Workout <br />
              <span className="text-red-600">&amp; Diet Plans</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg animate-fade-in-up delay-400">
              The ultimate fitness platform for <strong>hypertrophy training</strong>, <strong>fat loss</strong>, and <strong>strength and conditioning</strong>. Master <strong>progressive overload</strong> with expert-led <strong>gym workout plans</strong> and <strong>macronutrient-focused nutrition guides</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-600">
              <Link 
                to="/workouts" 
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20"
              >
                Start Training <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Iron Core Section */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-8">
            Master Your <span className="text-red-600">Physique</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Iron Core isn't just another workout app. We provide the scientific foundation for real results, focusing on the core principles of <strong>strength and conditioning</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { title: "Hypertrophy & Muscle Gain", desc: "Scientifically-backed hypertrophy routines designed to maximize muscle fiber recruitment and growth." },
              { title: "Fat Loss & Caloric Deficit", desc: "Expert diet plans that guide you through a sustainable caloric deficit while preserving lean muscle mass." },
              { title: "Progressive Overload Tracking", desc: "Learn how to consistently challenge your body with our progressive overload principles for long-term strength gains." },
              { title: "HIIT & Conditioning", desc: "High-Intensity Interval Training protocols to boost your cardiovascular health and accelerate fat oxidation." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
                <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goal-Based Programs */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                Goal-Based <span className="text-red-600">Training</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Whether you want to build massive muscle or torch body fat, we have a scientifically-backed program tailored for your specific objective.
              </p>
            </div>
            <Link to="/workouts" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
              View All Programs <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Muscle Gain', desc: 'Hypertrophy focused splits for maximum size.', icon: Trophy, img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=60&w=600&auto=format&fit=crop&fm=webp', link: '/workouts' },
              { title: 'Fat Loss', desc: 'High intensity programs to shred body fat.', icon: Zap, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=60&w=600&auto=format&fit=crop&fm=webp', link: '/workouts' },
              { title: 'Diet Plans', desc: 'Expert nutrition guides for every goal.', icon: Users, img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=60&w=600&auto=format&fit=crop&fm=webp', link: '/diets' }
            ].map((program, i) => (
              <div 
                key={i}
                className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/5 transition-transform duration-300 hover:-translate-y-2"
              >
                <img 
                  src={program.img} 
                  srcSet={`${program.img.replace('w=600', 'w=400')} 400w, ${program.img} 600w`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt={program.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="375"
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
                  <Link to={program.link} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:text-red-500 transition-colors">
                    Explore Plan <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
                Expert <span className="text-red-600">Insights</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Stay ahead of the game with the latest evidence-based fitness tips, nutrition hacks, and recovery strategies.
              </p>
            </div>
            <Link to="/blog" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
              Read All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, i) => (
              <article 
                key={post.id}
                className="group transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative h-72 rounded-3xl overflow-hidden mb-6">
                    <img 
                      src={`${post.image}&fm=webp`} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="450"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/70 mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-red-600" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black uppercase italic tracking-tight leading-tight text-white group-hover:text-red-500 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {post.content}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic tracking-tighter mb-16 text-center">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  aria-expanded={activeFaq === i}
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-red-600 transition-transform duration-300", activeFaq === i && "rotate-180")} />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    activeFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 prose prose-invert max-w-none text-gray-400">
          <h2 className="text-3xl font-bold text-white mb-6">Your Ultimate Guide to Fitness and Nutrition</h2>
          <p className="mb-4">
            Welcome to Iron Core Fitness, your premier destination for achieving your health and physique goals. Whether you are searching for the <strong>best workout plans for beginners</strong> or an advanced <strong>gym workout plan for muscle gain</strong>, our platform provides evidence-based routines designed to deliver results. We understand that fitness is not a one-size-fits-all journey, which is why we offer a diverse range of programs tailored to your specific needs.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Workout Plans</h3>
          <p className="mb-4">
            Our expertly crafted <strong>workout plans</strong> cover every aspect of physical training. From high-intensity <strong>weight loss workout plans</strong> designed to torch fat, to structured strength protocols that build raw power, we have you covered. If you prefer training outside the gym, our effective <strong>home workout plans</strong> utilize minimal equipment to maximize your gains from the comfort of your living room.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Expert Diet Plans</h3>
          <p className="mb-4">
            Training is only half the equation. To truly transform your body, you need proper nutrition. Explore our comprehensive <strong>diet plans</strong>, including specialized options like our <strong>7-day vegetarian diet plan for muscle gain</strong>. We provide clear guidance on macronutrient distribution, meal timing, and healthy recipes to ensure you are fueling your body optimally for both performance and recovery.
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">Targeted Muscle Group Exercises</h3>
          <p className="mb-6">
            Understanding biomechanics is key to preventing injury and maximizing hypertrophy. Dive into our detailed breakdown of <strong>muscle group exercises</strong> to learn how to effectively target your chest, back, legs, shoulders, and arms. Each exercise comes with clear instructions, proper form cues, and visual demonstrations to ensure you are getting the most out of every rep.
          </p>
          <p>
            Start your journey today by exploring our <Link to="/workouts" className="text-red-500 hover:underline">workout library</Link> or dialing in your nutrition with our <Link to="/diets" className="text-red-500 hover:underline">diet guides</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=60&w=1400&auto=format&fit=crop&fm=webp" 
            srcSet="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=60&w=600&auto=format&fit=crop&fm=webp 600w, https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=60&w=1400&auto=format&fit=crop&fm=webp 1400w"
            sizes="100vw"
            alt="CTA BG" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-display font-black uppercase italic tracking-tighter mb-12">
            Ready to <span className="text-red-600">Commit?</span>
          </h2>
          <div className="animate-fade-in-up delay-200">
            <Link 
              to="/workouts" 
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/40"
            >
              Start Training <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
