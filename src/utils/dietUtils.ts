export interface DietImage {
  url: string;
  alt: string;
}

export const getMealImage = (description: string, type: string): DietImage => {
  const d = description.toLowerCase();
  const t = type.toLowerCase();

  // Breakfast
  if (d.includes('oatmeal') || d.includes('oats')) {
    return {
      url: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A bowl of healthy oatmeal with fresh berries and nuts'
    };
  }
  if (d.includes('egg') || d.includes('omelet') || d.includes('scramble')) {
    if (t.includes('vegan')) {
      return {
        url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&fm=webp',
        alt: 'Vegan tofu scramble with vegetables'
      };
    }
    return {
      url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Freshly cooked eggs with avocado and toast'
    };
  }
  if (d.includes('smoothie') || d.includes('shake')) {
    return {
      url: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A refreshing protein smoothie with fruits'
    };
  }
  if (d.includes('pancake')) {
    return {
      url: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Stack of healthy protein pancakes with syrup'
    };
  }
  if (d.includes('yogurt') || d.includes('parfait')) {
    return {
      url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Greek yogurt parfait with granola and fresh fruit'
    };
  }

  // Lunch & Dinner
  if (d.includes('chicken')) {
    return {
      url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Grilled chicken breast with roasted vegetables'
    };
  }
  if (d.includes('salmon') || d.includes('fish') || d.includes('cod') || d.includes('tilapia') || d.includes('shrimp')) {
    return {
      url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Perfectly baked salmon with a side of greens'
    };
  }
  if (d.includes('steak') || d.includes('beef') || d.includes('sirloin') || d.includes('ribeye') || d.includes('bison')) {
    return {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Juicy grilled steak with garlic butter'
    };
  }
  if (d.includes('tofu') || d.includes('tempeh') || d.includes('seitan')) {
    return {
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Crispy tofu stir-fry with colorful vegetables'
    };
  }
  if (d.includes('salad') || d.includes('bowl') || d.includes('quinoa')) {
    return {
      url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A vibrant and healthy salad bowl with fresh ingredients'
    };
  }
  if (d.includes('pasta') || d.includes('spaghetti') || d.includes('noodles')) {
    return {
      url: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Delicious whole grain pasta with fresh sauce'
    };
  }
  if (d.includes('soup') || d.includes('stew') || d.includes('chili') || d.includes('dal') || d.includes('curry')) {
    if (d.includes('chicken')) {
      return {
        url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&fm=webp',
        alt: 'Flavorful Indian chicken curry'
      };
    }
    if (d.includes('dal') || d.includes('lentil')) {
      return {
        url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&fm=webp',
        alt: 'Nutritious Indian dal tadka'
      };
    }
    return {
      url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A warm and comforting bowl of vegetable soup or curry'
    };
  }
  if (d.includes('burrito') || d.includes('taco') || d.includes('wrap') || d.includes('sandwich') || d.includes('burger') || d.includes('chapati') || d.includes('paratha') || d.includes('roti')) {
    if (d.includes('paratha') || d.includes('paneer')) {
      return {
        url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&fm=webp',
        alt: 'Delicious stuffed paratha with yogurt'
      };
    }
    return {
      url: 'https://images.unsplash.com/photo-1547584385-8cd4275b68e0?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A healthy and filling wrap or flatbread'
    };
  }

  // Snacks
  if (d.includes('nuts') || d.includes('almonds') || d.includes('walnuts') || d.includes('macadamia')) {
    return {
      url: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A handful of mixed healthy nuts'
    };
  }
  if (d.includes('fruit') || d.includes('apple') || d.includes('banana') || d.includes('pineapple') || d.includes('berries')) {
    return {
      url: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Fresh and colorful seasonal fruits'
    };
  }
  if (d.includes('hummus') || d.includes('carrot') || d.includes('cucumber')) {
    return {
      url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&auto=format&fit=crop&fm=webp',
      alt: 'Fresh vegetable sticks with creamy hummus'
    };
  }
  if (d.includes('cheese') || d.includes('cottage cheese')) {
    return {
      url: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A selection of healthy cheeses'
    };
  }

  // Default fallback based on diet type
  if (t.includes('vegetarian') || t.includes('vegan')) {
    return {
      url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A healthy plant-based meal'
    };
  }
  if (t.includes('keto')) {
    return {
      url: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=800&auto=format&fit=crop&fm=webp',
      alt: 'A high-fat, low-carb keto meal'
    };
  }

  return {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&fm=webp',
    alt: 'A balanced and nutritious meal'
  };
};

export const getFeaturedImage = (type: string, goal: string): DietImage => {
  const t = type.toLowerCase();
  const g = goal.toLowerCase();

  if (t.includes('vegetarian') || t.includes('vegan')) {
    return {
      url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&fm=webp',
      alt: `Healthy ${type} balanced meal for ${goal.replace('-', ' ')}`
    };
  }
  if (t.includes('keto')) {
    return {
      url: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=800&auto=format&fit=crop&fm=webp',
      alt: `High fat low carb keto meal for ${goal.replace('-', ' ')}`
    };
  }
  if (t.includes('paleo')) {
    return {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&fm=webp',
      alt: `Primal paleo meal for ${goal.replace('-', ' ')}`
    };
  }
  if (t.includes('mediterranean')) {
    return {
      url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&fm=webp',
      alt: `Fresh mediterranean meal for ${goal.replace('-', ' ')}`
    };
  }

  return {
    url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&fm=webp',
    alt: `Balanced meal prep for ${goal.replace('-', ' ')}`
  };
};
