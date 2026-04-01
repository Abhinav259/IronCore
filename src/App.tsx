import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState, lazy, Suspense } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./pages/Home'));
const WorkoutPlans = lazy(() => import('./pages/WorkoutPlans'));
const DietPlans = lazy(() => import('./pages/DietPlans'));
const Supplements = lazy(() => import('./pages/Supplements'));
const Profile = lazy(() => import('./pages/Profile'));
const Blog = lazy(() => import('./pages/Blog'));
const MuscleGroups = lazy(() => import('./pages/MuscleGroups'));

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Create user doc if it doesn't exist
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            createdAt: new Date().toISOString()
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
          <Navbar user={user} />
          <main className="pt-20">
            <AnimatePresence mode="wait">
              <Suspense fallback={
                <div className="min-h-screen bg-black flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/workouts" element={<WorkoutPlans />} />
                  <Route path="/muscle-groups" element={<MuscleGroups />} />
                  <Route path="/diets" element={<DietPlans />} />
                  <Route path="/supplements" element={<Supplements />} />
                  <Route path="/profile" element={<Profile user={user} />} />
                  <Route path="/blog" element={<Blog />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
