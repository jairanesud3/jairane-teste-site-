import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingWhatsapp: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Efeito de Radar (Ping) - Animação constante */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-[ping_2s_ease-in-out_infinite]"></span>
      
      {/* Botão Principal */}
      <button 
        type="button"
        onClick={handleClick}
        className="relative z-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 hover:-rotate-12 flex items-center justify-center group cursor-pointer border-none"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-7 h-7 fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-dark-950 text-xs font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          Plantão 24h
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsapp;