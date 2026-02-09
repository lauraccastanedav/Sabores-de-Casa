
import React, { useState, useEffect } from 'react';
import { AppView, Recipe } from './types';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Detail from './pages/Detail';
import { RECIPES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('HOME');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavigate = (view: AppView, recipeId?: string) => {
    if (recipeId) {
      const recipe = RECIPES.find(r => r.id === recipeId);
      if (recipe) {
        setSelectedRecipe(recipe);
        setCurrentView('DETAIL');
      }
    } else {
      setCurrentView(view);
      setSelectedRecipe(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => handleNavigate('HOME')}
          className="text-xl font-bold text-primary flex items-center gap-2"
        >
          <span className="material-icons-round text-primary">restaurant_menu</span>
          Sabores de Casa
        </button>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors"
          >
            <span className="material-icons-round">{darkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
            <span className="material-icons-round">search</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-24">
        {currentView === 'HOME' && <Home onNavigate={handleNavigate} />}
        {currentView === 'RECIPES' && (
          <Recipes 
            onNavigate={handleNavigate} 
            favorites={favorites} 
            onToggleFavorite={toggleFavorite} 
          />
        )}
        {currentView === 'DETAIL' && selectedRecipe && (
          <Detail 
            recipe={selectedRecipe} 
            onBack={() => handleNavigate('RECIPES')} 
            isFavorite={favorites.includes(selectedRecipe.id)}
            onToggleFavorite={() => toggleFavorite(selectedRecipe.id)}
          />
        )}
        {(currentView === 'FAVORITES' || currentView === 'PROFILE') && (
           <div className="p-10 text-center">
              <span className="material-icons-round text-6xl text-slate-300 mb-4 italic">construction</span>
              <h2 className="text-xl font-bold">Próximamente</h2>
              <p className="text-slate-500">Esta sección estará disponible en nuestra gran apertura del 14 de febrero.</p>
              <button 
                onClick={() => handleNavigate('HOME')}
                className="mt-6 bg-primary text-white px-6 py-2 rounded-full font-bold"
              >
                Volver al Inicio
              </button>
           </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-stone-800 px-6 py-3 pb-8 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <NavItem 
            icon="home" 
            label="Inicio" 
            active={currentView === 'HOME'} 
            onClick={() => handleNavigate('HOME')} 
          />
          <NavItem 
            icon="menu_book" 
            label="Recetas" 
            active={currentView === 'RECIPES' || currentView === 'DETAIL'} 
            onClick={() => handleNavigate('RECIPES')} 
          />
          <NavItem 
            icon="star" 
            label="Favoritos" 
            active={currentView === 'FAVORITES'} 
            onClick={() => handleNavigate('FAVORITES')} 
          />
          <NavItem 
            icon="person" 
            label="Perfil" 
            active={currentView === 'PROFILE'} 
            onClick={() => handleNavigate('PROFILE')} 
          />
        </div>
      </nav>

      {/* iOS Home Indicator Spacer */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-300 dark:bg-stone-700 rounded-full z-[60] opacity-50 pointer-events-none"></div>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
  >
    <span className="material-icons-round">{icon}</span>
    <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
  </button>
);

export default App;
