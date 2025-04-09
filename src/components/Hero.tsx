
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="py-20 bg-gradient-to-r from-dbkm-black to-black text-white"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Transformez Votre Parcours <span className="text-dbkm">Fitness</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Compléments nutritionnels et vêtements de performance conçus pour les athlètes qui exigent le meilleur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#supplements" 
                className="btn-primary text-center"
              >
                Voir les Compléments
              </a>
              <a 
                href="#clothing" 
                className="btn-secondary text-center"
              >
                Voir les Vêtements
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Athlète fitness avec produits DBKM" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-dbkm p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-lg">Approuvé par des athlètes professionnels</p>
                <p className="text-sm">Formules scientifiquement prouvées pour des performances optimales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
