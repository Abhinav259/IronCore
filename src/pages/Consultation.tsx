import { useState, FormEvent } from 'react';
import { User } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType, signInWithGoogle } from '../firebase';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, CheckCircle2, User as UserIcon, Star, ShieldCheck, Zap } from 'lucide-react';

export default function Consultation({ user }: { user: User | null }) {
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user || !message.trim()) return;
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'consultations'), {
        userId: user.uid,
        userEmail: user.email,
        message: message.trim(),
        status: 'pending',
        createdAt: new Date().toISOString()
      });
      setSubmitted(true);
      setMessage('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'consultations');
    } finally {
      setSubmitting(false);
    }
  };

  const trainers = [
    { name: 'Coach Mike', specialty: 'Bodybuilding & Strength', rating: 4.9, img: 'https://picsum.photos/seed/mike/100/100' },
    { name: 'Dr. Elena', specialty: 'Nutrition & Wellness', rating: 5.0, img: 'https://picsum.photos/seed/elena/100/100' },
    { name: 'Sarah Fit', specialty: 'HIIT & Weight Loss', rating: 4.8, img: 'https://picsum.photos/seed/sarahfit/100/100' }
  ];

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-6">
            Expert <span className="text-red-600">Consultation</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Get personalized advice from our world-class trainers and nutritionists. Your journey to greatness starts with a conversation.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info & Trainers */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter">Why Consult <span className="text-red-600">Us?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Personalized Approach', desc: 'No cookie-cutter plans. We analyze your unique biology and goals.', icon: UserIcon },
                  { title: 'Science-Backed', desc: 'Our advice is rooted in the latest exercise science and nutrition research.', icon: ShieldCheck },
                  { title: '24/7 Support', desc: 'Get your questions answered by real experts, not bots.', icon: MessageSquare },
                  { title: 'Fast Results', desc: 'Optimize your training to see progress faster than ever before.', icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl">
                    <div className="w-10 h-10 bg-red-600/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h4 className="text-lg font-black uppercase italic mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Meet Our <span className="text-red-600">Experts</span></h3>
              <div className="space-y-4">
                {trainers.map((trainer, i) => (
                  <div key={i} className="bg-zinc-900 border border-white/5 p-6 rounded-3xl flex items-center justify-between group hover:border-red-600/30 transition-colors">
                    <div className="flex items-center gap-6">
                      <img src={trainer.img} alt={trainer.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-red-600" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="text-lg font-black uppercase italic">{trainer.name}</h4>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{trainer.specialty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-red-600">
                      <Star className="w-4 h-4 fill-red-600" />
                      <span className="font-black italic">{trainer.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="bg-zinc-900 border border-white/10 p-10 rounded-3xl shadow-2xl shadow-red-600/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                  <MessageSquare className="w-32 h-32 text-red-600" />
                </div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-3xl font-black uppercase italic mb-8">Send a <span className="text-red-600">Message</span></h3>
                      
                      {!user ? (
                        <div className="text-center py-10">
                          <p className="text-gray-400 mb-8">Please sign in to send a consultation request.</p>
                          <button 
                            onClick={signInWithGoogle}
                            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
                          >
                            Sign In with Google
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Your Message</label>
                            <textarea 
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Tell us about your goals, current routine, and any questions you have..."
                              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-red-600 transition-colors min-h-[200px] resize-none"
                              required
                            ></textarea>
                          </div>
                          <button 
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
                          >
                            {submitting ? 'Sending...' : <><Send className="w-5 h-5" /> Submit Request</>}
                          </button>
                          <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest font-bold">
                            We typically respond within 24-48 hours.
                          </p>
                        </form>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-3xl font-black uppercase italic mb-4">Request <span className="text-green-500">Sent!</span></h3>
                      <p className="text-gray-400 mb-10 leading-relaxed">
                        Thank you for reaching out. One of our experts will review your message and contact you at <span className="text-white font-bold">{user?.email}</span> shortly.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-red-600 font-black uppercase tracking-widest text-sm hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
