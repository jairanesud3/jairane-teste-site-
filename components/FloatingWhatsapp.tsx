import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingWhatsapp: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // DEMO MODE ALERT
    alert("🚧 MODO DEMONSTRAÇÃO 🚧\n\nO link para o WhatsApp está desativado nesta visualização.\n\nNos projetos reais, este botão abre diretamente a conversa com o cliente.");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center group">
      {/* Efeito de Radar (Ping) - Mantido conforme solicitado */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-[ping_1.5s_ease-in-out_infinite]"></span>
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-[ping_1.5s_ease-in-out_infinite_delay-75ms]"></span>
      
      {/* Botão Principal - REMOVIDO animate-bounce, adicionado transform hover suave */}
      <button 
        type="button"
        onClick={handleClick}
        className="relative z-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.6)] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 flex items-center justify-center cursor-pointer border-none"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-8 h-8 fill-current" />
        
        {/* Notificação Vermelha */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-dark-950 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap font-sans">
          <p className="font-bold text-sm">Plantão Criminal 24h</p>
          <p className="text-xs text-gray-600">Falar com Advogada</p>
          
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsapp;