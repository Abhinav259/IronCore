export type Goal = 'muscle-gain' | 'fat-loss' | 'strength' | 'endurance' | 'muscle-building' | 'weight-loss' | 'general-fitness';
export type Level = 'beginner' | 'intermediate' | 'advanced';
export type Preference = 'gym' | 'home';
export type Gender = 'male' | 'female' | 'both';

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  day: string;
}

export interface WorkoutPlan {
  id: string;
  title: string;
  goal: Goal;
  level: Level;
  gender: Gender;
  preference: Preference;
  description: string;
  image: string;
  exercises: Exercise[];
}

export interface DietPlan {
  id: string;
  title: string;
  goal: Goal;
  type: string;
  calorieGuidance: string;
  macros: {
    protein: string;
    carbs: string;
    fats: string;
  };
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snacks: string;
  };
}

export interface MealAlternatives {
  [key: string]: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
}
