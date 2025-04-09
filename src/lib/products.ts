
import { Product } from '@/context/CartContext';

export const products: Product[] = [
  // Supplements
  {
    id: 1,
    name: "DBKM Protéine en Poudre",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1563822249366-3e67f3399389?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "Protéine whey premium pour une récupération maximale et la croissance musculaire. 25g de protéine par portion."
  },
  {
    id: 2,
    name: "Formule Pré-Entraînement",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "Boostez votre énergie et votre concentration avec notre formule pré-entraînement avancée. Sans sucre et riche en BCAA."
  },
  {
    id: 3,
    name: "Complexe BCAA",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "Acides aminés essentiels pour prévenir la dégradation musculaire et accélérer la récupération entre les entraînements."
  },
  {
    id: 4,
    name: "Oméga-3 Huile de Poisson",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "Capsules d'huile de poisson de haute qualité riches en EPA et DHA pour la santé cardiaque et articulaire."
  },
  
  // Clothing
  {
    id: 5,
    name: "T-Shirt Performance",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "T-shirt respirant et évacuant l'humidité pour un confort maximal pendant les entraînements."
  },
  {
    id: 6,
    name: "Short d'Entraînement",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "Short d'entraînement léger et flexible avec un ajustement parfait pour tout type d'entraînement."
  },
  {
    id: 7,
    name: "Leggings de Compression",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "Technologie de compression avancée pour une meilleure circulation et un soutien musculaire."
  },
  {
    id: 8,
    name: "Sweat à Capuche Premium",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "Sweat à capuche confortable et élégant pour le confort avant et après l'entraînement."
  }
];

export const getProductsByCategory = (category: 'supplement' | 'clothing') => {
  return products.filter(product => product.category === category);
};
