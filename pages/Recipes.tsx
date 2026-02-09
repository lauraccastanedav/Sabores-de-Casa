
import React, { useState } from 'react';
import { AppView, Recipe } from '../types';
import { RECIPES, CATEGORIES } from '../constants';

interface RecipesProps {
  onNavigate: (view: AppView, id?: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const Recipes: React.FC<RecipesProps> = ({ onNavigate, favorites, onToggleFavorite }) => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredRecipes = activeCategory === 'Todas' 
    ? RECIPES 
    : RECIPES.filter(r => r.category === activeCategory);

  return (
    <div className="px-5 pt-6 animate-in slide-in-from-right duration-300">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recetario Tradicional</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Descubre los secretos de nuestra cocina.</p>
      </div>

      {/* Categories Scroller */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-8 -mx-5 px-5">
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium flex-shrink-0 transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredRecipes.map((recipe) => (
          <div 
            key={recipe.id}
            className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <div 
              onClick={() => onNavigate('DETAIL', recipe.id)}
              className="aspect-[4/5] relative overflow-hidden cursor-pointer"
            >
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(recipe.id);
                }}
                className={`absolute top-3 right-3 p-1.5 rounded-full backdrop-blur-md text-white transition-colors ${
                  favorites.includes(recipe.id) ? 'bg-primary' : 'bg-white/20'
                }`}
              >
                <span className="material-icons-round text-sm">
                  {favorites.includes(recipe.id) ? 'favorite' : 'favorite_border'}
                </span>
              </button>
            </div>
            <div 
              onClick={() => onNavigate('DETAIL', recipe.id)}
              className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none"
            >
              <h3 className="text-white font-semibold text-sm leading-tight">{recipe.title}</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-icons-round text-primary text-[10px]">schedule</span>
                <span className="text-[10px] text-slate-200 font-medium tracking-wide uppercase">{recipe.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
