import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsOpen(false);
    try {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (e) {
      console.error("Navigation error:", e);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-950/95 backdrop-blur-sm border-b border-dark-800 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button 
          type="button"
          onClick={() => handleScrollToSection('#inicio')}
          className="font-serif text-xl md:text-2xl tracking-wide text-white group cursor-pointer text-left focus:outline-none bg-transparent border-none p-0 z-50"
        >
          Jairane Sousa
          <span className="block text-xs md:text-sm text-gold-500 font-sans tracking-[0.2em] group-hover:text-gold-400 transition-colors">
            ADVOCACIA CRIMINAL
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleScrollToSection(item.href)}
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-widest cursor-pointer bg-transparent border-none p-0 select-none"
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="outline" 
            href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
            className="!px-6 !py-2 !text-xs gap-2"
          >
            <Phone size={14} />
            Plantão 24h
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          type="button"
          className="md:hidden text-gold-500 hover:text-white transition-colors bg-transparent border-none p-0 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark-950/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 ease-in-out flex flex-col justify-center px-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              className="text-2xl font-serif text-white hover:text-gold-500 border-b border-dark-800 pb-4 text-left bg-transparent transition-colors"
              onClick={() => handleScrollToSection(item.href)}
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="primary" 
            href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
            className="w-full mt-8 justify-center py-4 text-base"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;