import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
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
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors group"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Workouts', 'Diets', 'Supplements', 'Consultation', 'Blog'].map((item) => (
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
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-5 h-5 text-red-600 shrink-0" />
              <span>123 Fitness Ave, Muscle City, MC 45678</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone className="w-5 h-5 text-red-600 shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail className="w-5 h-5 text-red-600 shrink-0" />
              <span>support@ironcore.fit</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Subscribe to get the latest fitness tips and exclusive offers.
          </p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors"
            />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all active:scale-95 uppercase tracking-widest text-xs">
              Subscribe
            </button>
          </form>
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
