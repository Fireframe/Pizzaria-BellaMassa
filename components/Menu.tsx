
import React, { useState } from 'react';
import { PIZZAS } from '../constants';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'tradicional' | 'especial' | 'doce'>('todos');

  const filteredPizzas = filter === 'todos' 
    ? PIZZAS 
    : PIZZAS.filter(p => p.category === filter);

  const categories = [
    { id: 'todos', name: 'Todas' },
    { id: 'tradicional', name: 'Tradicionais' },
    { id: 'especial', name: 'Especiais' },
    { id: 'doce', name: 'Doces' },
  ];

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm">O Melhor Cardápio</span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 mt-2">Nossas Pizzas</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id 
                ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                : 'bg-white text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Pizza Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPizzas.map((pizza) => (
            <div 
              key={pizza.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-stone-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-red-600 shadow-sm">
                  R$ {pizza.price.toFixed(2)}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-stone-900">{pizza.name}</h3>
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded ${
                    pizza.category === 'tradicional' ? 'bg-stone-100 text-stone-600' :
                    pizza.category === 'especial' ? 'bg-amber-100 text-amber-700' : 'bg-pink-100 text-pink-700'
                  }`}>
                    {pizza.category}
                  </span>
                </div>
                <p className="text-stone-500 mb-6 line-clamp-2">
                  {pizza.description}
                </p>
                <button className="w-full bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition-colors flex items-center justify-center gap-2 group-hover:bg-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  Adicionar ao Pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
