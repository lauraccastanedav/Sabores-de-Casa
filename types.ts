
export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  difficulty: 'Fácil' | 'Media' | 'Difícil' | 'Muy Fácil';
  description: string;
  category: string;
  isPopular?: boolean;
  isRecommended?: boolean;
  isClassic?: boolean;
  servings?: string;
  ingredients: string[];
  steps: {
    title: string;
    description: string;
  }[];
  grandmaTip?: string;
}

export type AppView = 'HOME' | 'RECIPES' | 'FAVORITES' | 'PROFILE' | 'DETAIL';
