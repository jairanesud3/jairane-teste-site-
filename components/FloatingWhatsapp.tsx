import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingWhatsapp: React.FC = () => {
  const handleClick = () => {
    alert("⚠️ MODO DEMONSTRAÇÃO\n\nEm um ambiente real, isso abriria o WhatsApp diretamente no número: " + CONTACT_INFO.whatsapp);
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer border-none"
      aria-label="Falar no WhatsApp"
    >
      <Phone className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-4 bg-white text-dark-950 text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Plantão 24h
      </span>
    </button>
  );
};

export default FloatingWhatsapp;