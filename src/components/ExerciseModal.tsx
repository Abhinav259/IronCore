import React, { useState, useEffect } from 'react';
import { X, Youtube, Target, Shield, Info, ExternalLink, Copy, Check } from 'lucide-react';
import { getExerciseDetails } from '../utils/exerciseUtils';

interface ExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  exerciseName: string;
  primaryMuscle?: string;
  secondaryMuscles?: string[];
  equipment?: string;
  tips?: string;
  image?: string;
  altText?: string;
}

export function ExerciseModal({ 
  isOpen, 
  onClose, 
  exerciseName,
  primaryMuscle,
  secondaryMuscles,
  equipment,
  tips,
  image,
  altText
}: ExerciseModalProps) {
  const [copied, setCopied] = useState(false);

  // Fallback to local data if props are not provided
  const localData = exerciseName ? getExerciseDetails(exerciseName) : null;
  
  const displayPrimaryMuscle = primaryMuscle || localData?.primaryMuscle || 'Target Muscle';
  const displaySecondaryMuscles = secondaryMuscles || localData?.secondaryMuscles || [];
  const displayEquipment = equipment || localData?.equipment || 'Gym Equipment';
  const displayTips = tips || localData?.tips || 'Maintain proper form. Control the movement. Breathe properly.';
  const displayImage = image || localData?.image;
  const displayAltText = altText || localData?.alt || exerciseName;
  
  const formTipsArray = displayTips.split('. ').filter(t => t.length > 0).map(t => t.trim().endsWith('.') ? t.trim() : t.trim() + '.');
  const youtubeQuery = `${exerciseName} exercise form tutorial`;

  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
    }
  }, [isOpen]);

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(youtubeQuery);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in"
      ></div>
      
      <div
        className="bg-zinc-900 border border-white/10 rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] flex flex-col max-h-[90vh] relative z-10 animate-fade-in-up"
      >
        {/* Header with Image */}
        <div className="relative h-48 md:h-64 w-full bg-zinc-800">
          {displayImage ? (
            <>
              <img 
                src={displayImage} 
                alt={displayAltText} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900"></div>
          )}
          
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-black/50 hover:bg-red-600 flex items-center justify-center text-white transition-all duration-300 group z-20"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="absolute bottom-0 left-0 w-full p-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-2 block drop-shadow-md">Exercise Guide</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white drop-shadow-lg">{exerciseName}</h2>
          </div>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
          <div className="space-y-10 animate-fade-in-up">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-950/50 p-5 rounded-2xl border border-white/5 group hover:border-red-600/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-4 h-4 text-red-600" />
                  <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Primary Muscle</h3>
                </div>
                <p className="text-white font-black uppercase italic text-sm">{displayPrimaryMuscle}</p>
              </div>
              <div className="bg-zinc-950/50 p-5 rounded-2xl border border-white/5 group hover:border-red-600/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-4 h-4 text-red-600" />
                  <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Equipment</h3>
                </div>
                <p className="text-white font-black uppercase italic text-sm">{displayEquipment}</p>
              </div>
            </div>

            {displaySecondaryMuscles.length > 0 && (
              <div>
                <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Secondary Muscles</h3>
                <div className="flex flex-wrap gap-2">
                  {displaySecondaryMuscles.map((muscle, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Form Tips */}
            <div>
              <h3 className="text-xl font-black uppercase italic text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"></span>
                Pro Technique Tips
              </h3>
              <div className="grid gap-4">
                {formTipsArray.map((tip, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-4 p-5 bg-zinc-950/30 rounded-2xl border border-white/5 hover:bg-zinc-950/50 transition-colors animate-fade-in-left"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center text-xs font-black italic border border-red-600/20">
                      {idx + 1}
                    </span>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(youtubeQuery)}`}
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
          </div>
        </div>
      </div>
    </div>
  );
}
