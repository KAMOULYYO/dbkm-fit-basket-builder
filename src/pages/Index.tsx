
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
            title="Compléments Nutritionnels Premium"
            description="Formulations scientifiquement prouvées pour vous aider à atteindre des performances optimales, une récupération plus rapide et de meilleurs résultats."
          />
          <ProductSection 
            id="clothing"
            category="clothing"
            title="Vêtements de Performance"
            description="Conçus pour le confort, la durabilité et la performance. Améliorez votre entraînement avec nos vêtements de fitness haut de gamme."
          />
        </main>
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
