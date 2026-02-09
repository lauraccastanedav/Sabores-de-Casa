
import React, { useState } from 'react';
import { Recipe } from '../types';

interface DetailProps {
  recipe: Recipe;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const Detail: React.FC<DetailProps> = ({ recipe, onBack, isFavorite, onToggleFavorite }) => {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const toggleIngredient = (ing: string) => {
    setCheckedIngredients(prev => 
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
  };

  return (
    <div className="animate-in slide-in-from-bottom duration-500">
      {/* Hero Section */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-light dark:to-background-dark"></div>
        
        {/* Top Actions */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white active:scale-90 transition-transform"
          >
            <span className="material-icons-round">arrow_back_ios_new</span>
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white">
              <span className="material-icons-round">share</span>
            </button>
            <button 
              onClick={onToggleFavorite}
              className={`w-10 h-10 flex items-center justify-center backdrop-blur-md rounded-full text-white transition-colors ${isFavorite ? 'bg-primary' : 'bg-white/20'}`}
            >
              <span className="material-icons-round">{isFavorite ? 'favorite' : 'favorite_border'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative -mt-20 px-4 pb-12 z-20">
        {/* Title Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-xl mb-6 border border-slate-100 dark:border-slate-800">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Sabores de Casa</span>
            <h1 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white leading-tight">{recipe.title}</h1>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
            <StatsItem icon="schedule" value={recipe.time} label="Tiempo" />
            <StatsItem icon="group" value={recipe.servings || '4 pers'} label="Raciones" border />
            <StatsItem icon="restaurant" value={recipe.difficulty} label="Nivel" />
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center mr-3">
              <span className="material-icons-round text-sm">shopping_basket</span>
            </span>
            Ingredientes
          </h2>
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm space-y-3 border border-slate-100 dark:border-slate-800">
            {recipe.ingredients.map((ing, idx) => (
              <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={checkedIngredients.includes(ing)}
                  onChange={() => toggleIngredient(ing)}
                  className="form-checkbox h-5 w-5 text-primary border-slate-300 rounded-full focus:ring-primary transition-colors" 
                />
                <span className={`text-slate-700 dark:text-slate-300 transition-all ${checkedIngredients.includes(ing) ? 'line-through opacity-40' : ''}`}>
                  {ing}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Preparation Steps */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center mr-3">
              <span className="material-icons-round text-sm">auto_stories</span>
            </span>
            Preparación
          </h2>
          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="relative pl-10">
                <div className="absolute left-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Grandma's Tip */}
        {recipe.grandmaTip && (
          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-5 mb-8">
            <div className="flex items-center mb-2">
              <span className="material-icons-round text-primary mr-2">lightbulb</span>
              <span className="font-bold text-primary">Consejo de Abuela</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "{recipe.grandmaTip}"
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="sticky bottom-4">
          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 active:scale-95 transition-all">
            <span className="material-icons-round">play_circle</span>
            COMENZAR MODO COCINA
          </button>
        </div>
      </div>
    </div>
  );
};

const StatsItem = ({ icon, value, label, border = false }: { icon: string, value: string, label: string, border?: boolean }) => (
  <div className={`flex flex-col items-center flex-1 ${border ? 'border-x border-slate-100 dark:border-slate-800' : ''}`}>
    <span className="material-icons-round text-primary mb-1">{icon}</span>
    <span className="text-sm font-bold text-slate-900 dark:text-white">{value}</span>
    <span className="text-[10px] text-slate-500 uppercase font-semibold">{label}</span>
  </div>
);

export default Detail;
