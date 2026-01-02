import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // CORREÇÃO: left-6 para ficar na esquerda e não sobrepor o WhatsApp
      className={`fixed bottom-6 left-6 z-40 bg-dark-800/90 backdrop-blur-md border border-gold-500/30 text-gold-500 p-3 shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-full hover:bg-gold-500 hover:text-dark-950 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;