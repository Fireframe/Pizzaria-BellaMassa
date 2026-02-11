
import React from 'react';
import { PROMOTIONS } from '../constants';

const Promotions: React.FC = () => {
  return (
    <section id="promotions" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">Aproveite Já</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">Ofertas Imperdíveis</h2>
          </div>
          <p className="text-stone-400 max-w-sm">Promoções exclusivas válidas por tempo limitado. Não deixe para amanhã a pizza que você pode comer hoje!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROMOTIONS.map((promo) => (
            <div key={promo.id} className="group relative bg-stone-800 rounded-[2.5rem] p-4 flex flex-col md:flex-row gap-8 hover:bg-stone-700 transition-all duration-500 border border-stone-700">
              <div className="w-full md:w-56 h-56 flex-shrink-0 overflow-hidden rounded-[2rem]">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center pr-4 pb-4 md:pb-0">
                <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
                  {promo.discount}
                </span>
                <h3 className="text-2xl font-black mb-2">{promo.title}</h3>
                <p className="text-stone-400 mb-6">{promo.description}</p>
                <div className="flex items-center text-sm font-bold text-amber-500 uppercase tracking-widest">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {promo.validUntil}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
