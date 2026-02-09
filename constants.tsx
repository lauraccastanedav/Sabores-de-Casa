
import { Recipe } from './types';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Guiso de la Sierra',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl99MPfNnxdSb0RddapOlte9LuWd9GAH33UG7SJSgyiU3ntTG7XFP_Vj0VguUghnfixfhjdbrNhRx8Hkd2KWWHQXn4_keuDsjpEJuHUbryTUE-VS5vZXuRrsqcLo_BI-dQKrFxXol_tHPMijIhJ-s76XsStKhgyNNWflMstURaRdCWDTLfHuXd0Hxlu77yyXEQ_VyWynS6rMmoFcEam8LgpIY2vwOMpNMwrYaIWYJE61F2pTQO34XCr4da3vJXy-qhG8xIFbTxrX4',
    time: '45 min',
    difficulty: 'Fácil',
    description: 'Una receta que ha pasado de generación en generación, usando hierbas frescas de nuestro huerto.',
    category: 'Principales',
    isPopular: true,
    servings: '4 pers',
    ingredients: [
      '500g de carne de ternera troceada',
      '2 patatas medianas',
      '1 cebolla grande',
      'Hierbas serranas frescas',
      'Aceite de oliva virgen'
    ],
    steps: [
      { title: 'Sofrito', description: 'Comenzamos dorando la cebolla y la carne a fuego fuerte.' },
      { title: 'Cocción', description: 'Añadimos las patatas y el agua, dejando cocinar lentamente.' }
    ]
  },
  {
    id: '2',
    title: 'Pan Artesanal de Leña',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-3Ophmn_AgIgLTU2IJ6H1py_E2GveWBvRJXFgw0zODhNQ7AOdYppywr1P2jETPmz8OH2Bt-Q8CyB0JqjOsqIDw0ZnSzyq1XU7imSOspS2ga4-PLZOBuJiCGm4ql3KhqLbm6f67QqzBx2vC4VkFdM6G6i3bnZLN6lSk6Uqoy0GwNP29gF0XrG355nr425z4MI0a9freGjliDJb56XgKiiWCI_yridd-NXBrqf8U9CPQ4lWAl7icmclMKyrL3ndu-muN20hIs2gJoI',
    time: '2h 30 min',
    difficulty: 'Media',
    description: 'El secreto está en la fermentación lenta y el toque ahumado del horno tradicional.',
    category: 'Panadería',
    isRecommended: true,
    servings: '1 hogaza',
    ingredients: ['500g harina de fuerza', '350ml agua tibia', '10g sal', '5g levadura'],
    steps: [
      { title: 'Amasado', description: 'Combinar ingredientes hasta obtener masa elástica.' },
      { title: 'Levado', description: 'Dejar reposar 2 horas.' }
    ]
  },
  {
    id: '3',
    title: 'Arroz con Leche Cremoso',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9kYW0CB8XWhVegq09dliaQTmsQULsTLSegKBn9aTJ8QZ4d0SpBH6NkzdcycBxXe2nquSSUXYV1yW-6Mgug5LDDVYMczs1hpz4Y1V57Ulvp0hPO9V45mqb47AFoKvYTsEmrxdJTPEKpwxRMuwaPnXurzdKcpzv3VX7SYpRtLhg3r7NRGq0wny3QmFaG9t3W7GX2kbDAf9uQCaGntjAyYNlJWmlua6S2_NDqHKIoSzZT5Udjum1kbQnLnctJ53Lhi6MBRj7RrfVv4o',
    time: '35 min',
    difficulty: 'Muy Fácil',
    description: 'Dulce, suave y con ese toque inconfundible de canela que te transporta a tu infancia.',
    category: 'Postres',
    isClassic: true,
    servings: '6 pers',
    ingredients: ['1L leche entera', '100g arroz redondo', '80g azúcar', 'Canela en rama'],
    steps: [
      { title: 'Cocción lenta', description: 'Cocer el arroz con la leche y canela sin parar de remover.' },
      { title: 'Azúcar', description: 'Añadir el azúcar al final para mantener la cremosidad.' }
    ]
  },
  {
    id: '4',
    title: 'Empanadas de la Abuela',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6-_Xoss19-2amhTkorWMQiY527X8AJJzcKZW0waDIrNiT4kHty9if6ITCcujL4d2B5Qk7m2y6d-1CQXU2ayWQ9nxTwYx1tWO4gvPTMwXJUAcRDRTh26gkou1yRZbgWP5K_q6AneShzugfXHNBFuucNelYZTdMBY3-5mFL1cm33spWNbPlwmPNkurGAyRHErmMPaOXTcncgmHPhwuiLztwuwxYtYm9yCM7F-exfr0N82jFkAe176pTGCWijPUV80dRytOBRMW5kGQ',
    time: '45 min',
    difficulty: 'Fácil',
    description: 'Empanadas caseras con masa criolla y relleno de carne cortada a cuchillo.',
    category: 'Entradas',
    servings: '12 unidades',
    ingredients: ['Masa para empanadas', '500g carne picada', 'Cebolla blanca', 'Huevo duro'],
    steps: [
      { title: 'Relleno', description: 'Preparar el pino o sofrito de carne.' },
      { title: 'Cierre', description: 'Rellenar y cerrar con el repulgue tradicional.' }
    ]
  },
  {
    id: '5',
    title: 'Lentejas Tradicionales',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIPPfXiYvXeLh7MQVS8X2GX6dbBKcGD7uqq2FhXuwnPur8mQUUGF432k6nQZBdZqfqjZuSxDnqtDrARbbcXOwMYcF-FvZ-W1FUwSl-Zp1Muyeu2ZPcebI2CQqG9-gdMwHL31yE6V9kacihKiqUCkozeZQOJoWf-GarYLrOtvvScq1URSo6Brcz4LTYGpn4G7UoLnG82lywlpp7iqpE2xdT0K2rur-WPLrN8p4L-OGrdTdVsRzyrgnoqXitkkromtkEcJ201XwsnZ0',
    time: '45 min',
    difficulty: 'Fácil',
    description: 'Un plato de cuchara reconfortante con todo el sabor de antaño.',
    category: 'Principales',
    servings: '4 pers',
    ingredients: [
      '300g de Lentejas pardinas',
      '1 Chorizo asturiano troceado',
      '1 Cebolla blanca picada',
      '2 Zanahorias en rodajas',
      '1 Hoja de laurel',
      'Pimentón dulce y sal al gusto'
    ],
    steps: [
      { title: 'Sofrito Inicial', description: 'En una olla grande, añade un chorrito de aceite de oliva y sofríe la cebolla, el ajo y las zanahorias hasta que estén tiernas.' },
      { title: 'Añadir Embutido', description: 'Incorpora el chorizo troceado y el pimentón dulce. Remueve rápidamente para evitar que el pimentón se queme.' },
      { title: 'Cocer Lentejas', description: 'Añade las lentejas (previamente lavadas) y la hoja de laurel. Cubre con agua fría (unos 3-4 dedos por encima).' },
      { title: 'Fuego Lento', description: 'Lleva a ebullición y luego baja el fuego. Deja cocinar tapado durante unos 30-40 minutos o hasta que estén tiernas.' },
      { title: 'Toque Final', description: 'Ajusta de sal. Deja reposar 5 minutos antes de servir para que el caldo tome más cuerpo y sabor.' }
    ],
    grandmaTip: 'Si prefieres un caldo más espeso, puedes triturar un par de cucharadas de lentejas con un poco de caldo y volverlo a añadir a la olla al final.'
  }
];

export const CATEGORIES = ['Todas', 'Entradas', 'Principales', 'Postres', 'Panadería'];
