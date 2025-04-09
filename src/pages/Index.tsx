
import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProductSection from '@/components/ProductSection';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <AboutSection />
          <ProductSection 
            id="supplements"
            category="supplement"
            title="Premium Supplements"
            description="Science-backed formulations to help you achieve peak performance, faster recovery, and better results."
          />
          <ProductSection 
            id="clothing"
            category="clothing"
            title="Performance Apparel"
            description="Engineered for comfort, durability, and performance. Elevate your workout with our premium fitness clothing."
          />
        </main>
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
