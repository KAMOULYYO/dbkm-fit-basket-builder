
import React from 'react';
import ProductCard from './ProductCard';
import { getProductsByCategory } from '@/lib/products';

type ProductSectionProps = {
  category: 'supplement' | 'clothing';
  title: string;
  description: string;
  id: string;
};

const ProductSection: React.FC<ProductSectionProps> = ({ category, title, description, id }) => {
  const products = getProductsByCategory(category);
  
  return (
    <section id={id} className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
