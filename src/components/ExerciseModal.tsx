import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Youtube, Image as ImageIcon, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

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
}

export function ExerciseModal({ isOpen, onClose, exerciseName }: ExerciseModalProps) {
  const [details, setDetails] = useState<ExerciseDetails | null>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [generatingImage, setGeneratingImage] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && exerciseName) {
      fetchDetails();
      setImageUrl(null);
      setImageError(null);
    }
  }, [isOpen, exerciseName]);

  const fetchDetails = async () => {
    setLoadingDetails(true);
    try {
      // @ts-ignore
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.API_KEY : undefined);
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `Provide details for the exercise: "${exerciseName}".
      Return ONLY a JSON object with the following structure:
      {
        "targetMuscleGroup": "Primary muscle group targeted",
        "recommendedEquipment": "Equipment needed (e.g., Dumbbells, Barbell, Bodyweight)",
        "formTips": ["Tip 1", "Tip 2", "Tip 3"],
        "youtubeQuery": "A good youtube search query to find a tutorial for this exercise"
      }`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });

      if (response.text) {
        const data = JSON.parse(response.text);
        setDetails(data);
      }
    } catch (error) {
      console.error("Failed to fetch exercise details:", error);
    } finally {
      setLoadingDetails(false);
    }
  };

  const generateImage = async () => {
    setGeneratingImage(true);
    setImageError(null);
    
    try {
      // Check for API key
      // @ts-ignore
      if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
      }

      // @ts-ignore
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.API_KEY : undefined);
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [
            { text: `A highly realistic, professional fitness photography shot demonstrating the exercise: ${exerciseName}. Focus on proper form, clear lighting, gym environment.` }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: imageSize
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          setImageUrl(`data:${mimeType};base64,${base64EncodeString}`);
          foundImage = true;
          break;
        }
      }
      
      if (!foundImage) {
        throw new Error("No image generated");
      }

    } catch (error: any) {
      console.error("Image generation failed:", error);
      if (error.message?.includes("Requested entity was not found")) {
        // @ts-ignore
        if (window.aistudio) {
          // @ts-ignore
          await window.aistudio.openSelectKey();
          setImageError("Please select an API key and try again.");
        }
      } else {
        setImageError("Failed to generate image. Please try again.");
      }
    } finally {
      setGeneratingImage(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-zinc-900/50">
            <h2 className="text-2xl font-bold text-white">{exerciseName}</h2>
            <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto custom-scrollbar">
            {loadingDetails ? (
              <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-red-500" />
                <p>Loading exercise details...</p>
              </div>
            ) : details ? (
              <div className="space-y-8">
                {/* Image Section */}
                <div className="space-y-4">
                  <div className="aspect-video bg-zinc-800 rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
                    {imageUrl ? (
                      <img src={imageUrl} alt={exerciseName} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    ) : (
                      <div className="text-center p-6">
                        <ImageIcon className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
                        <p className="text-zinc-400 text-sm mb-4">No image available for this exercise.</p>
                        <div className="flex items-center justify-center gap-3">
                          <select 
                            value={imageSize}
                            onChange={(e) => setImageSize(e.target.value as any)}
                            className="bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                            disabled={generatingImage}
                          >
                            <option value="1K">1K Resolution</option>
                            <option value="2K">2K Resolution</option>
                            <option value="4K">4K Resolution</option>
                          </select>
                          <button 
                            onClick={generateImage}
                            disabled={generatingImage}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
                          >
                            {generatingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
                            {generatingImage ? 'Generating...' : 'Generate Image'}
                          </button>
                        </div>
                        {imageError && <p className="text-red-400 text-xs mt-3">{imageError}</p>}
                      </div>
                    )}
                  </div>
                  
                  {imageUrl && (
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-zinc-500">Image generated by AI. If inaccurate, you can regenerate.</p>
                      <div className="flex items-center gap-2">
                        <select 
                          value={imageSize}
                          onChange={(e) => setImageSize(e.target.value as any)}
                          className="bg-zinc-950 border border-white/10 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-red-500"
                          disabled={generatingImage}
                        >
                          <option value="1K">1K</option>
                          <option value="2K">2K</option>
                          <option value="4K">4K</option>
                        </select>
                        <button 
                          onClick={generateImage}
                          disabled={generatingImage}
                          className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 disabled:opacity-50"
                        >
                          {generatingImage ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Regenerate'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-white/5">
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">Target Muscle Group</h3>
                    <p className="text-white text-lg">{details.targetMuscleGroup}</p>
                  </div>
                  <div className="bg-zinc-950/50 p-4 rounded-xl border border-white/5">
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">Recommended Equipment</h3>
                    <p className="text-white text-lg">{details.recommendedEquipment}</p>
                  </div>
                </div>

                {/* Form Tips */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block"></span>
                    Form Tips
                  </h3>
                  <ul className="space-y-3">
                    {details.formTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-300">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center text-xs font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* YouTube Link */}
                <div className="pt-4 border-t border-white/10">
                  <a 
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(details.youtubeQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000] py-3 rounded-xl font-medium transition-colors border border-[#FF0000]/20"
                  >
                    <Youtube className="w-5 h-5" />
                    Watch Tutorials on YouTube
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-red-400">
                Failed to load exercise details.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
