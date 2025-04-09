
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-dbkm-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About DBKM Fitness</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're on a mission to provide premium quality supplements and performance apparel 
            that help athletes of all levels reach their full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="DBKM Fitness Lab" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-5">Our Commitment to Excellence</h3>
            <p className="text-gray-700 mb-6">
              Founded by athletes and nutrition experts, DBKM is built on the belief that quality 
              ingredients and cutting-edge apparel technology lead to superior results.
            </p>
            
            <ul className="space-y-3">
              {[
                "Scientifically formulated supplements with premium ingredients",
                "Performance-tested apparel for maximum comfort and durability",
                "Transparent labeling with no proprietary blends",
                "Rigorous quality control and third-party testing",
                "Designed by athletes for athletes"
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
