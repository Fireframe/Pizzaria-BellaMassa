
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-50 border-t border-stone-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-3xl font-black text-red-600 tracking-tighter">BELLA<span className="text-amber-500">MASSA</span></span>
            <p className="text-stone-500 leading-relaxed">
              A autêntica pizza artesanal com massa de longa fermentação e ingredientes selecionados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-red-600 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-red-600 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black text-stone-900 mb-6">Contatos</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-stone-500">
                <svg className="w-6 h-6 text-red-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Av. das Pizzas, 123 - Centro<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-500">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3 text-stone-500">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>contato@bellamassa.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black text-stone-900 mb-6">Horários</h4>
            <ul className="space-y-4 text-stone-500">
              <li className="flex justify-between border-b border-stone-200 pb-2">
                <span>Segunda</span>
                <span className="font-bold text-stone-900">Fechado</span>
              </li>
              <li className="flex justify-between border-b border-stone-200 pb-2">
                <span>Terça a Quinta</span>
                <span className="font-bold text-stone-900">18:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-200 pb-2">
                <span>Sexta e Sábado</span>
                <span className="font-bold text-stone-900">18:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="font-bold text-stone-900">18:00 - 23:30</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black text-stone-900 mb-6">Newsletter</h4>
            <p className="text-stone-500 mb-4">Receba cupons e novidades em seu e-mail.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
              />
              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Fake Map Section */}
        <div className="w-full h-80 bg-stone-200 rounded-[3rem] overflow-hidden mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
            alt="Mapa fictício" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              </div>
              <div>
                <h5 className="font-black text-stone-900">Nos Encontre</h5>
                <p className="text-stone-500 text-sm">Clique para abrir no Google Maps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-stone-200">
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} Bella Massa Pizzaria. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold px-0 group-hover:px-2">
          Peça pelo WhatsApp
        </span>
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.166 2.234-.58c1.012.609 2.037.988 3.111.989l.001 0c3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.766-5.767-5.766zm3.375 8.203c-.147.414-.711.757-1.169.809-.344.04-.792.012-1.272-.143a5.59 5.59 0 0 1-2.478-1.554c-.958-.958-1.57-2.091-1.782-2.733-.214-.644-.033-1.042.173-1.313.107-.138.213-.245.32-.354l.231-.242c.118-.12.213-.183.298-.354.086-.174.043-.326-.022-.457-.065-.131-.581-1.402-.796-1.921-.208-.507-.419-.434-.608-.444-.15-.009-.324-.01-.498-.01-.174 0-.459.065-.698.326-.239.261-.912.891-.912 2.174 0 1.282.934 2.52 1.063 2.706.13.185 1.839 2.809 4.455 3.941.623.27 1.108.431 1.487.551.625.198 1.194.171 1.642.104.5-.074 1.542-.631 1.761-1.24.218-.609.218-1.13.153-1.24-.065-.11-.239-.174-.501-.304zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"/></svg>
      </a>
    </footer>
  );
};

export default Footer;
