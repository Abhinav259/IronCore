import { Calendar, User as UserIcon, ArrowRight, Search, Zap, Clock, Flame, X } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data';
import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Blog() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    if (slug) {
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        setSelectedPost(post);
      }
    } else {
      setSelectedPost(null);
    }
  }, [slug]);

  const handleCloseModal = () => {
    setSelectedPost(null);
    navigate('/blog');
  };

  const handleOpenModal = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    navigate(`/blog/${post.slug}`);
  };

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.content.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      {selectedPost ? (
        <SEO 
          title={selectedPost.title}
          description={selectedPost.content.substring(0, 160).replace(/\n/g, ' ') + "..."}
          urlPath={`/blog/${selectedPost.slug}`}
          breadcrumbs={[
            { name: "Home", item: "/" },
            { name: "Blog", item: "/blog" },
            { name: selectedPost.title, item: `/blog/${selectedPost.slug}` }
          ]}
          schema={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": selectedPost.title,
            "url": `https://iron-core-neon.vercel.app/blog/${selectedPost.slug}`,
            "description": selectedPost.content.substring(0, 160).replace(/\n/g, ' ') + "...",
            "image": selectedPost.image,
            "datePublished": selectedPost.date,
            "author": {
              "@type": "Person",
              "name": selectedPost.author
            }
          }}
        />
      ) : (
        <SEO 
          title="Fitness Insights Blog"
          description="Stay informed with the latest tips on training, nutrition, and recovery from our team of experts."
          urlPath="/blog" 
          breadcrumbs={[
            { name: "Home", item: "/" },
            { name: "Blog", item: "/blog" }
          ]}
          schema={{
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Fitness Insights Blog",
            "description": "Stay informed with the latest tips on training, nutrition, and recovery from our team of experts.",
            "url": "https://iron-core-neon.vercel.app/blog",
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "url": `https://iron-core-neon.vercel.app/blog/${post.slug}`,
              "description": post.content.substring(0, 160).replace(/\n/g, ' ') + "...",
              "image": post.image,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-6">
            Fitness <span className="text-red-600">Tips</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
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
            <article 
              key={post.id}
              className="group cursor-pointer animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => handleOpenModal(post)}
            >
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6">
                <img src={post.image} 
                  srcSet={`${post.image.replace('w=600', 'w=400')} 400w, ${post.image} 600w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="320"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Expert Tip
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/70 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-red-600" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tight leading-tight text-white group-hover:text-red-500 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {post.title}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {post.content}
                </p>
                
                <div className="pt-2 flex items-center gap-2 text-red-600 font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
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
      <section className="mt-32 bg-zinc-950 rounded-[2rem] md:rounded-[4rem] p-8 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5">
          <Flame className="w-64 h-64 text-red-600" />
        </div>
        <div className="max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
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

      {/* SEO Content Block */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 prose prose-invert max-w-none text-gray-400">
          <h2 className="text-2xl font-bold text-white mb-4">Your Source for Fitness Tips and Workout Advice</h2>
          <p className="mb-4">
            Navigating the world of fitness can be overwhelming with the constant influx of new information. Our blog is dedicated to providing you with evidence-based <strong>fitness tips</strong>, practical <strong>workout advice</strong>, and actionable <strong>nutrition guides</strong> to help you cut through the noise and achieve your goals.
          </p>
          <h3 className="text-xl font-bold text-white mb-3">What You Will Find Here</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Training Strategies:</strong> Learn how to optimize your time in the gym with advanced techniques like drop sets, supersets, and proper periodization.</li>
            <li><strong>Nutritional Insights:</strong> Discover how to fuel your body for performance and recovery, including deep dives into macronutrients and supplement timing.</li>
            <li><strong>Recovery Protocols:</strong> Understand the importance of sleep, hydration, and active recovery in maximizing your gains and preventing injury.</li>
            <li><strong>Mindset & Motivation:</strong> Build the mental resilience needed to stay consistent and push past your limits.</li>
          </ul>
          <p>
            Stay updated with the latest trends and scientific findings in the fitness industry. For structured guidance, be sure to check out our comprehensive <Link to="/workouts" className="text-red-500 hover:underline">workout plans</Link> and <Link to="/diets" className="text-red-500 hover:underline">diet plans</Link>.
          </p>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseModal}
        >
          <div
            className="bg-zinc-950 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96 w-full">
              <img 
                src={`${selectedPost.image}&fm=webp`} 
                srcSet={`${selectedPost.image.replace('w=800', 'w=400')} 400w, ${selectedPost.image} 800w`}
                sizes="(max-width: 768px) 100vw, 800px"
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="800"
                height="384"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                aria-label="Close post"
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
                <span className="bg-red-600/10 text-red-600 px-3 py-1 rounded-full">
                  Expert Tip
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-8">
                {selectedPost.title}
              </h1>
              
              <div className="max-w-none">
                <div className="px-2 md:px-4">
                  <Markdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({node, ...props}) => null,
                      h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 border-b border-white/10 pb-4" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-bold text-gray-200 mt-8 mb-4" {...props} />,
                      p: ({node, ...props}) => <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 font-medium tracking-wide" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-300 text-lg md:text-xl leading-relaxed font-medium tracking-wide marker:text-red-600" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-8 space-y-3 text-gray-300 text-lg md:text-xl leading-relaxed font-medium tracking-wide marker:text-red-600" {...props} />,
                      li: ({node, ...props}) => <li className="pl-2" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                      blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-red-600 pl-6 py-2 italic text-gray-400 my-8 bg-white/5 rounded-r-lg" {...props} />,
                      a: ({node, ...props}) => {
                        const isInternal = props.href?.startsWith('/');
                        if (isInternal) {
                          return <Link to={props.href!} {...props} className="text-red-500 hover:text-red-400 underline decoration-red-500/30 hover:decoration-red-500 transition-colors font-bold" />;
                        }
                        return <a target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 underline decoration-red-500/30 hover:decoration-red-500 transition-colors font-bold" {...props} />;
                      }
                    }}
                  >
                    {selectedPost.content}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
