
import React from 'react';
import { AppView } from '../types';
import { RECIPES } from '../constants';

interface HomeProps {
  onNavigate: (view: AppView, id?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const topRecipes = RECIPES.filter(r => r.isPopular || r.isRecommended || r.isClassic).slice(0, 3);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-72 w-full overflow-hidden mb-8">
        <img 
          alt="Cocina Tradicional" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEBvUFDHAKn3j5Zif9q1dl2GbFUtrM4V3rW2LV5-7U25pdiulTasm7BTrAcqHoeN1raubYpMl2VnQU8zrop1_puDJJcptQ5dC7sSiyrsAONGwQNhQj1rFP9rI2Jo6rTJ4z-rpZxfAQzgGsD078yueT2wIonJfvyg46IJuPBAiDkCK4CMNEHP2GpFaQHvikdvFrnsFgZQBqk1uTqXi36ti78abEZ8aFaZe6-X380V1u_yA8um3n2Rb0fJMscWC4H6a0SbWTM2F3Hfc" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white leading-tight">
            Bienvenido a nuestra cocina digital
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs">
            Preservando el legado de los sabores tradicionales que nos hacen sentir en casa.
          </p>
        </div>
      </section>

      {/* Opening Banner */}
      <div className="mx-4 mb-8">
        <div className="bg-primary rounded-xl p-6 text-white shadow-lg shadow-primary/20 flex items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <span className="text-xs font-semibold tracking-widest uppercase opacity-80 block mb-1">Inauguración Especial</span>
            <h2 className="text-2xl font-bold">Próxima apertura</h2>
            <p className="text-lg opacity-90">14 de febrero</p>
          </div>
          <span className="material-icons-round text-7xl opacity-20 absolute -right-2 top-2 rotate-12">calendar_today</span>
        </div>
      </div>

      {/* Features Grid */}
      <section className="px-4 mb-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-stone-800/50 p-4 rounded-xl border border-primary/5 shadow-sm">
            <span className="material-icons-round text-primary mb-2">auto_stories</span>
            <h3 className="font-bold text-sm">Recetario Digital</h3>
            <p className="text-xs text-slate-500 mt-1">Todas las recetas de la abuela en un solo lugar.</p>
          </div>
          <div className="bg-white dark:bg-stone-800/50 p-4 rounded-xl border border-primary/5 shadow-sm">
            <span className="material-icons-round text-primary mb-2">history_edu</span>
            <h3 className="font-bold text-sm">Historia Viva</h3>
            <p className="text-xs text-slate-500 mt-1">Conoce el origen de cada ingrediente local.</p>
          </div>
        </div>
      </section>

      {/* Top 3 Recipes Section */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Top 3 del Mes</h2>
          <button 
            onClick={() => onNavigate('RECIPES')}
            className="text-primary text-sm font-semibold flex items-center"
          >
            Ver todas <span className="material-icons-round text-sm">chevron_right</span>
          </button>
        </div>
        
        <div className="space-y-6">
          {topRecipes.map((recipe) => (
            <div 
              key={recipe.id}
              onClick={() => onNavigate('DETAIL', recipe.id)}
              className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-stone-800/40 border border-primary/5 shadow-sm active:scale-95 transition-transform duration-200 cursor-pointer"
            >
              <div className="relative h-48">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  {recipe.isPopular ? 'Más Popular' : recipe.isRecommended ? 'Recomendado' : 'Clásico'}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{recipe.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="flex items-center gap-1"><span className="material-icons-round text-sm">timer</span> {recipe.time}</span>
                  <span className="flex items-center gap-1"><span className="material-icons-round text-sm">equalizer</span> {recipe.difficulty}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-12 mx-4 p-8 bg-olive/10 dark:bg-olive/20 rounded-2xl text-center border border-olive/10">
        <span className="material-icons-round text-olive text-4xl mb-3">local_florist</span>
        <h3 className="text-xl font-bold mb-2">¿Quieres más secretos?</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Suscríbete para recibir recetas exclusivas y noticias de nuestra gran apertura.</p>
        <div className="flex flex-col gap-3">
          <input 
            type="email" 
            placeholder="Tu correo electrónico"
            className="bg-white dark:bg-stone-900 border-olive/20 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary"
          />
          <button className="bg-primary text-white font-bold py-3 rounded-lg shadow-lg shadow-primary/20 active:bg-orange-600">
            Suscribirme
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
