import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User as UserIcon, ArrowRight, Search, Zap, Clock, Flame, X } from 'lucide-react';
import { blogPosts } from '../data';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export default function Blog() {
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase()) || 
    post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <SEO 
        title="Fitness Insights Blog" 
        description="Stay informed with the latest tips on training, nutrition, and recovery from our team of experts." 
        urlPath="/blog" 
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-6">
            Fitness <span className="text-red-600">Insights</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay informed with the latest tips on training, nutrition, and recovery from our team of experts.
          </p>
        </header>

        {/* Search & Featured */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500">Trending:</span>
            <div className="flex items-center gap-4">
              {['Fat Loss', 'Muscle Gain', 'Recovery'].map(tag => (
                <button key={tag} className="text-xs font-bold uppercase tracking-widest text-red-600 hover:text-white transition-colors">
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  srcSet={`${post.image.replace('w=800', 'w=400')} 400w, ${post.image} 800w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Expert Tip
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-red-600" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-3 h-3 text-red-600" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black uppercase italic tracking-tight leading-tight group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {post.content}
                </p>
                
                <div className="pt-4 flex items-center gap-2 text-red-600 font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-2xl font-black uppercase italic mb-2">No Articles Found</h3>
            <p className="text-gray-500">Try searching for something else.</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="mt-32 bg-zinc-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5">
          <Flame className="w-64 h-64 text-red-600" />
        </div>
        <div className="max-w-2xl relative z-10">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
            Get the <span className="text-red-600">Edge</span> <br />
            In Your Inbox
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Subscribe to our weekly newsletter for exclusive workout routines, nutrition hacks, and early access to new programs.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-black border border-white/10 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-red-600 transition-colors"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20">
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            No spam. Just gains. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-zinc-950 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96 w-full">
                <img 
                  src={selectedPost.image} 
                  srcSet={`${selectedPost.image.replace('w=800', 'w=400')} 400w, ${selectedPost.image} 800w`}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-6 text-xs font-black uppercase tracking-widest text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-600" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-red-600" />
                    {selectedPost.author}
                  </div>
                  <span className="bg-red-600/10 text-red-600 px-3 py-1 rounded-full">
                    Expert Tip
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-8">
                  {selectedPost.title}
                </h2>
                
                <div className="prose prose-invert prose-red max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
