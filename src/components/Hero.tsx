
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
              Transform Your <span className="text-dbkm">Fitness</span> Journey
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Premium supplements and performance apparel designed for athletes who demand the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#supplements" 
                className="btn-primary text-center"
              >
                Shop Supplements
              </a>
              <a 
                href="#clothing" 
                className="btn-secondary text-center"
              >
                Shop Apparel
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Fitness athlete with DBKM products" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-dbkm p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-lg">Trusted by professional athletes</p>
                <p className="text-sm">Science-backed formulas for peak performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
