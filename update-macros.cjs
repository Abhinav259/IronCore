const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const getMacros = (goal, type) => {
  if (goal.includes('muscle') || goal.includes('strength')) {
    if (type === 'keto') return { protein: '30%', carbs: '5%', fats: '65%' };
    return { protein: '30%', carbs: '50%', fats: '20%' };
  } else if (goal.includes('loss')) {
    if (type === 'keto') return { protein: '25%', carbs: '5%', fats: '70%' };
    return { protein: '40%', carbs: '30%', fats: '30%' };
  } else if (goal.includes('endurance')) {
    if (type === 'keto') return { protein: '20%', carbs: '5%', fats: '75%' };
    return { protein: '20%', carbs: '55%', fats: '25%' };
  } else {
    if (type === 'keto') return { protein: '25%', carbs: '5%', fats: '70%' };
    return { protein: '30%', carbs: '40%', fats: '30%' };
  }
};

const regex = /"goal":\s*"([^"]+)",\s*"type":\s*"([^"]+)",\s*"calorieGuidance":\s*"([^"]+)",/g;

content = content.replace(regex, (match, goal, type, calorieGuidance) => {
  const macros = getMacros(goal, type);
  return `"goal": "${goal}",
    "type": "${type}",
    "calorieGuidance": "${calorieGuidance}",
    "macros": {
      "protein": "${macros.protein}",
      "carbs": "${macros.carbs}",
      "fats": "${macros.fats}"
    },`;
});

fs.writeFileSync('src/data.ts', content);
console.log('Done');
