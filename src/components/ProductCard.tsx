
import React from 'react';
import { Plus } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => addToCart(product)}
            className="bg-dbkm hover:bg-dbkm-dark text-white px-4 py-2 rounded-full flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Plus size={18} className="mr-1" /> Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-dbkm-black">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="text-dbkm hover:text-dbkm-dark font-medium text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
