
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full -z-10 blur-3xl opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1974&auto=format&fit=crop"
              alt="Mestre pizzaiolo trabalhando"
              className="rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <span className="text-4xl font-black block">15+</span>
              <span className="text-sm uppercase font-bold tracking-widest">Anos de Tradição</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
              Paixão em cada fatia, tradição em cada mordida.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Fundada em 2008, a Bella Massa nasceu do desejo de trazer a verdadeira experiência da pizza artesanal italiana para o coração da nossa cidade.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Nossa massa fermenta naturalmente por 48 horas, o que garante uma digestão leve e uma crocância inigualável. Usamos apenas tomates pelados italianos e queijos selecionados de produtores locais.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-semibold text-stone-800">Forno a Lenha</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-semibold text-stone-800">Ingredientes Fresh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
