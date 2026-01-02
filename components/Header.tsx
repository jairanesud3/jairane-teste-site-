import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        scrolled ? 'bg-dark-950/95 backdrop-blur-sm border-b border-dark-800 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-end md:justify-center items-center">
        
        {/* Desktop Menu - Centralizado */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleScrollToSection(item.href)}
              className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none p-0"
            >
              {item.label}
            </button>
          ))}
          <Button 
            href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
            className="!px-5 !py-2 !text-xs font-bold"
            variant={scrolled ? 'primary' : 'outline'}
          >
            <Phone size={14} className="mr-2" />
            Plantão 24h
          </Button>
        </nav>

        {/* Mobile Toggle - Mantido na direita */}
        <button 
          type="button"
          className="md:hidden text-white hover:text-gold-500 transition-colors bg-transparent border-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-dark-950 z-40 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              className="text-xl font-serif text-white hover:text-gold-500 text-left bg-transparent border-none p-2 border-b border-dark-800"
              onClick={() => handleScrollToSection(item.href)}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4">
            <Button 
              variant="primary" 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              className="w-full justify-center"
            >
              Falar com Advogada
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;