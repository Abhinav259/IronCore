import { useState, useEffect, FormEvent } from 'react';
import { User } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { Star, MessageSquare, Send, User as UserIcon } from 'lucide-react';
import { SEO } from '../components/SEO';

interface FeedbackProps {
  user: User | null;
}

interface Review {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  rating: number;
  comment: string;
  createdAt: any;
}

export default function Feedback({ user }: FeedbackProps) {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(fetchedReviews);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'feedback');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) {
      setMessage('You must be logged in to submit feedback.');
      return;
    }
    if (!comment.trim()) {
      setMessage('Please enter a comment.');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      await addDoc(collection(db, 'feedback'), {
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        userPhoto: user.photoURL || '',
        rating,
        comment: comment.trim(),
        createdAt: serverTimestamp()
      });
      setComment('');
      setRating(5);
      setMessage('Thank you for your feedback!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'feedback');
      setMessage('Failed to submit feedback. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-12 pb-32">
      <SEO 
        title="Feedback & Reviews"
        description="Read user reviews and share your feedback about Iron Core."
        urlPath="/feedback" 
      />
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Community</span>
            <br />
            <span className="text-red-600">Feedback</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Read what others are saying about Iron Core and share your own experience.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-white/10 p-8 rounded-3xl sticky top-24">
              <h2 className="text-xl font-black uppercase italic mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-red-600" />
                Leave a Review
              </h2>
              
              {!user ? (
                <div className="text-center p-6 bg-black/40 rounded-2xl border border-white/5">
                  <p className="text-gray-400 text-sm mb-4">Please sign in to leave a review.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-3">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`p-2 rounded-xl transition-all ${rating >= star ? 'text-yellow-400 bg-yellow-400/10' : 'text-gray-600 hover:text-yellow-400/50'}`}
                        >
                          <Star className="w-6 h-6 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block mb-3">Your Comment</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share your experience..."
                      rows={4}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-sm font-medium focus:outline-none focus:border-red-600 transition-colors resize-none"
                    />
                  </div>

                  {message && (
                    <p className={`text-sm font-bold ${message.includes('Thank you') ? 'text-green-500' : 'text-red-500'}`}>
                      {message}
                    </p>
                  )}

                  <button 
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-600/50 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-600/20"
                  >
                    {submitting ? 'Submitting...' : <><Send className="w-4 h-4" /> Submit Review</>}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-20 bg-zinc-900 border border-white/10 rounded-3xl">
                <MessageSquare className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-xl font-black uppercase italic text-zinc-500">No Reviews Yet</h3>
                <p className="text-zinc-600 mt-2">Be the first to share your experience!</p>
              </div>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="bg-zinc-900 border border-white/10 p-6 rounded-3xl animate-fade-in-up">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {review.userPhoto ? (
                        <img 
                          src={review.userPhoto} 
                          alt={review.userName} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center border-2 border-red-600/30">
                          <UserIcon className="w-6 h-6 text-red-500" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-white">{review.userName}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-zinc-700'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    {review.createdAt && (
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                        {review.createdAt.toDate ? review.createdAt.toDate().toLocaleDateString() : 'Just now'}
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
