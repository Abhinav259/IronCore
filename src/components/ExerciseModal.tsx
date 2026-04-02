import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Youtube, Loader2, Target, Shield, Info, ExternalLink, Copy, Check } from 'lucide-react';
import { GoogleGenAI, Type, ThinkingLevel } from '@google/genai';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  exerciseName: string;
}

interface ExerciseDetails {
  targetMuscleGroup: string;
  recommendedEquipment: string;
  formTips: string[];
  youtubeQuery: string;
  difficulty: string;
}

export function ExerciseModal({ isOpen, onClose, exerciseName }: ExerciseModalProps) {
  const [details, setDetails] = useState<ExerciseDetails | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && exerciseName) {
      fetchDetails();
    } else if (!isOpen) {
      // Reset state when closing
      setDetails(null);
      setCopied(false);
    }
  }, [isOpen, exerciseName]);

  const fetchDetails = async () => {
    setLoadingDetails(true);
    try {
      // @ts-ignore
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not set");
      }
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `Provide details for the exercise: "${exerciseName}".
      Return ONLY a JSON object with the following structure:
      {
        "targetMuscleGroup": "Primary muscle group targeted",
        "recommendedEquipment": "Equipment needed (e.g., Dumbbells, Barbell, Bodyweight)",
        "formTips": ["Tip 1", "Tip 2", "Tip 3"],
        "youtubeQuery": "A good youtube search query to find a tutorial for this exercise",
        "difficulty": "Beginner, Intermediate, or Advanced"
      }`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              targetMuscleGroup: { type: Type.STRING },
              recommendedEquipment: { type: Type.STRING },
              formTips: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              youtubeQuery: { type: Type.STRING },
              difficulty: { type: Type.STRING }
            },
            required: ["targetMuscleGroup", "recommendedEquipment", "formTips", "youtubeQuery", "difficulty"]
          },
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW }
        }
      });

      if (response.text) {
        const sanitizedText = response.text.replace(/```json\n?|\n?```/g, '').trim();
        const data = JSON.parse(sanitizedText);
        setDetails(data);
      }
    } catch (error) {
      console.error("Failed to fetch exercise details:", error);
    } finally {
      setLoadingDetails(false);
    }
  };

  const handleCopyQuery = () => {
    if (details?.youtubeQuery) {
      navigator.clipboard.writeText(details.youtubeQuery);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-zinc-900 border border-white/10 rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] flex flex-col max-h-[90vh] relative z-10"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-zinc-900/50 backdrop-blur-xl">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-1">Exercise Guide</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-white">{exerciseName}</h2>
              </div>
              <button 
                onClick={onClose} 
                className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-red-600 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300 group"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
              {loadingDetails ? (
                <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 border-4 border-red-600/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
                    <Loader2 className="absolute inset-0 m-auto w-8 h-8 text-red-600 animate-pulse" />
                  </div>
                  <p className="font-black uppercase tracking-widest text-sm italic">Analyzing Form & Technique...</p>
                </div>
              ) : details ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-10"
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-zinc-950/50 p-5 rounded-2xl border border-white/5 group hover:border-red-600/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-4 h-4 text-red-600" />
                        <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Target</h3>
                      </div>
                      <p className="text-white font-black uppercase italic text-sm">{details.targetMuscleGroup}</p>
                    </div>
                    <div className="bg-zinc-950/50 p-5 rounded-2xl border border-white/5 group hover:border-red-600/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-4 h-4 text-red-600" />
                        <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Equipment</h3>
                      </div>
                      <p className="text-white font-black uppercase italic text-sm">{details.recommendedEquipment}</p>
                    </div>
                    <div className="bg-zinc-950/50 p-5 rounded-2xl border border-white/5 group hover:border-red-600/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Info className="w-4 h-4 text-red-600" />
                        <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Level</h3>
                      </div>
                      <p className="text-white font-black uppercase italic text-sm">{details.difficulty}</p>
                    </div>
                  </div>

                  {/* Form Tips */}
                  <div>
                    <h3 className="text-xl font-black uppercase italic text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></span>
                      Pro Technique Tips
                    </h3>
                    <div className="grid gap-4">
                      {details.formTips.map((tip, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-5 bg-zinc-950/30 rounded-2xl border border-white/5 hover:bg-zinc-950/50 transition-colors"
                        >
                          <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center text-xs font-black italic border border-red-600/20">
                            {idx + 1}
                          </span>
                          <p className="text-zinc-400 text-sm leading-relaxed font-medium">{tip}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(details.youtubeQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 shadow-lg shadow-red-600/20 group"
                    >
                      <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Watch Tutorials
                      <ExternalLink className="w-4 h-4 opacity-50" />
                    </a>
                    <button 
                      onClick={handleCopyQuery}
                      className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95 border border-white/5"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-zinc-400" />}
                      {copied ? 'Copied!' : 'Copy Search'}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <X className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-black uppercase italic mb-2">Analysis Failed</h3>
                  <p className="text-zinc-500 mb-8">We couldn't retrieve details for this exercise at the moment.</p>
                  <button 
                    onClick={fetchDetails}
                    className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
