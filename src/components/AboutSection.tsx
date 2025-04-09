
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dbkm-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de DBKM Fitness</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre mission est de fournir des compléments nutritionnels et des vêtements de performance de qualité 
            supérieure qui aident les athlètes de tous niveaux à atteindre leur plein potentiel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=1000&q=80" 
              alt="Laboratoire DBKM Fitness" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-5">Notre Engagement envers l'Excellence</h3>
            <p className="text-gray-700 mb-6">
              Fondé par des athlètes et des experts en nutrition, DBKM repose sur la conviction que des 
              ingrédients de qualité et une technologie vestimentaire de pointe conduisent à des résultats supérieurs.
            </p>
            
            <ul className="space-y-3">
              {[
                "Compléments formulés scientifiquement avec des ingrédients premium",
                "Vêtements testés pour un confort et une durabilité maximale",
                "Étiquetage transparent sans mélanges propriétaires",
                "Contrôle qualité rigoureux et tests par des tiers",
                "Conçus par des athlètes pour des athlètes"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-dbkm mt-1">
                    <Check size={18} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
