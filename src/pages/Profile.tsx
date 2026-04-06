import { useState, useEffect, FormEvent } from 'react';
import { User } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { User as UserIcon, Settings, Trophy, Zap, Apple, Dumbbell, Save, LogOut } from 'lucide-react';
import { logout } from '../firebase';
import { SEO } from '../components/SEO';

export default function Profile({ user }: { user: User | null }) {
  const [profile, setProfile] = useState<any>({
    goal: '',
    fitnessLevel: '',
    dietPreference: '',
    age: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfile({
              goal: data.goal || '',
              fitnessLevel: data.fitnessLevel || '',
              dietPreference: data.dietPreference || '',
              age: data.age || ''
            });
          }
        } catch (error) {
          console.error("Error fetching profile", error);
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    setMessage('');
    try {
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, {
        ...profile,
        updatedAt: new Date().toISOString()
      });
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 bg-red-600/10 rounded-3xl flex items-center justify-center mb-8">
          <UserIcon className="w-12 h-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Access Denied</h1>
        <p className="text-gray-400 mb-10 max-w-sm">You must be signed in to view and manage your personalized fitness profile.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <SEO 
        title="Your Fitness Profile"
        description="Manage your personalized fitness profile, track your progress, and update your goals."
        urlPath="/profile" 
      />
      <div className="max-w-5xl mx-auto px-6">
        <header className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-8">
            <img 
              src={user.photoURL || `https://picsum.photos/seed/${user.uid}/200/200`} 
              srcSet={`${user.photoURL || `https://picsum.photos/seed/${user.uid}/100/100`} 100w, ${user.photoURL || `https://picsum.photos/seed/${user.uid}/200/200`} 200w`}
              sizes="128px"
              alt={user.displayName || 'User'} 
              className="w-32 h-32 rounded-3xl object-cover border-4 border-red-600 shadow-2xl shadow-red-600/20"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="128"
              height="128"
            />
            <div>
              <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-2">{user.displayName}</h1>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{user.email}</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="bg-white/5 hover:bg-red-600/20 text-gray-400 hover:text-red-500 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 border border-white/10"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Stats Summary */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-3xl">
              <h2 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-red-600" />
                Your Stats
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Goal</span>
                  <span className="text-xs font-black uppercase text-red-600">{profile?.goal?.replace('-', ' ') || 'Not Set'}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Level</span>
                  <span className="text-xs font-black uppercase text-red-600">{profile?.fitnessLevel || 'Not Set'}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Diet</span>
                  <span className="text-xs font-black uppercase text-red-600">{profile?.dietPreference || 'Not Set'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Form */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 border border-white/10 p-10 rounded-3xl">
              <h2 className="text-2xl font-black uppercase italic mb-10 flex items-center gap-3">
                <Settings className="w-8 h-8 text-red-600" />
                Personalize Your Plan
              </h2>
              
              <form onSubmit={handleUpdate} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                      <Zap className="w-4 h-4 text-red-600" /> Fitness Goal
                    </label>
                    <select 
                      value={profile?.goal || ''}
                      onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none"
                    >
                      <option value="">Select Goal</option>
                      <option value="muscle-gain">Muscle Gain</option>
                      <option value="fat-loss">Fat Loss</option>
                      <option value="weight-management">Weight Management</option>
                      <option value="strength">Strength</option>
                      <option value="endurance">Endurance</option>
                      <option value="flexibility">Flexibility</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                      <Dumbbell className="w-4 h-4 text-red-600" /> Fitness Level
                    </label>
                    <select 
                      value={profile?.fitnessLevel || ''}
                      onChange={(e) => setProfile({ ...profile, fitnessLevel: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none"
                    >
                      <option value="">Select Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                      <Apple className="w-4 h-4 text-red-600" /> Diet Preference
                    </label>
                    <select 
                      value={profile?.dietPreference || ''}
                      onChange={(e) => setProfile({ ...profile, dietPreference: e.target.value })}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors appearance-none"
                    >
                      <option value="">Select Diet</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="non-vegetarian">Non-Vegetarian</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                      <UserIcon className="w-4 h-4 text-red-600" /> Age
                    </label>
                    <input 
                      type="number"
                      value={profile?.age || ''}
                      onChange={(e) => setProfile({ ...profile, age: e.target.value ? parseInt(e.target.value) : '' })}
                      placeholder="Enter your age"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <p className={cn(
                    "text-sm font-bold transition-opacity duration-300",
                    message ? "opacity-100 text-green-500" : "opacity-0"
                  )}>
                    {message}
                  </p>
                  <button 
                    type="submit"
                    disabled={saving}
                    className="bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
                  >
                    {saving ? 'Saving...' : <><Save className="w-5 h-5" /> Save Changes</>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
