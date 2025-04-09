
import { Product } from '@/context/CartContext';

export const products: Product[] = [
  // Supplements
  {
    id: 1,
    name: "DBKM Protein Powder",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1593095945844-9537d27711fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "Premium whey protein for maximum recovery and muscle growth. 25g protein per serving."
  },
  {
    id: 2,
    name: "Pre-Workout Formula",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "Boost your energy and focus with our advanced pre-workout formula. Sugar-free and packed with BCAAs."
  },
  {
    id: 3,
    name: "BCAA Complex",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c1b5d28b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "Essential amino acids to prevent muscle breakdown and accelerate recovery between workouts."
  },
  {
    id: 4,
    name: "Omega-3 Fish Oil",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1584473457493-58e638f79f3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "supplement",
    description: "High-quality fish oil capsules packed with EPA and DHA for heart and joint health."
  },
  
  // Clothing
  {
    id: 5,
    name: "Performance T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1583744946564-b52d01e7f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "Breathable and moisture-wicking performance t-shirt for maximum comfort during workouts."
  },
  {
    id: 6,
    name: "Training Shorts",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1595950653291-6d0c837a3371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "Lightweight and flexible training shorts with perfect fit for any workout."
  },
  {
    id: 7,
    name: "Compression Leggings",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1547154457-00d10e559d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "Advanced compression technology for improved circulation and muscle support."
  },
  {
    id: 8,
    name: "Premium Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1593183230458-a9e475c4dfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    category: "clothing",
    description: "Comfortable and stylish premium hoodie for pre and post-workout comfort."
  }
];

export const getProductsByCategory = (category: 'supplement' | 'clothing') => {
  return products.filter(product => product.category === category);
};
