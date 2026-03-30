import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-red-600 p-1.5 rounded-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              Iron<span className="text-red-600">Core</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Empowering your fitness journey with expert-led workout plans, personalized nutrition, and a supportive community.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Workouts', 'Diets', 'Supplements', 'Blog'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">About</h4>
          <div className="space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              A dedicated platform providing free, high-quality fitness resources for everyone. No paywalls, just gains.
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Created By</p>
              <p className="text-xl font-black uppercase italic tracking-tight text-white mb-2">
                Abhinav <span className="text-red-600">Jain</span>
              </p>
              <a 
                href="mailto:abhinavjain28121998@gmail.com" 
                className="text-gray-400 hover:text-red-600 transition-colors text-xs font-medium block"
              >
                abhinavjain28121998@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} IronCore Fitness. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
