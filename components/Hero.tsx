
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-wood z-0"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl text-white font-black mb-6 drop-shadow-2xl">
          A Verdadeira <span className="text-amber-400">Pizza</span> Artesanal
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Ingredientes frescos, massa de longa fermentação e o autêntico sabor do forno a lenha direto para sua mesa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Ver Nosso Menu
          </a>
          <a
            href="#promotions"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-stone-900 transition-all"
          >
            Promoções de Hoje
          </a>
        </div>
      </div>
      
      {/* Decorative arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
