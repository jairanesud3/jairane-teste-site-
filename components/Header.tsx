import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Gavel } from 'lucide-react';
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
    <>
      {/* Top Gold Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 z-[101]"></div>
      
      <header 
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled ? 'bg-dark-950/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button 
            type="button"
            onClick={() => handleScrollToSection('#inicio')}
            className="flex items-center gap-3 group bg-transparent border-none p-0 cursor-pointer text-left focus:outline-none"
          >
            <div className={`p-2 rounded border border-gold-500/30 bg-gold-500/10 transition-colors group-hover:bg-gold-500/20 ${scrolled ? 'opacity-100' : 'opacity-80'}`}>
               <Gavel className="text-gold-500 w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div>
              <span className="block font-serif text-xl md:text-2xl text-white leading-none">Dra. Jairane Sousa</span>
              <span className="block text-[10px] md:text-xs text-gold-500 font-sans tracking-[0.25em] group-hover:text-gold-400 transition-colors mt-1">
                ADVOCACIA CRIMINAL
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleScrollToSection(item.href)}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest cursor-pointer bg-transparent border-none p-0 select-none group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              className={`!px-5 !py-2 !text-xs font-bold transition-all duration-300 ${scrolled ? 'bg-gold-500 text-dark-950 hover:bg-gold-400' : 'bg-white/10 backdrop-blur text-white hover:bg-gold-500 hover:text-dark-950 border border-white/20 hover:border-gold-500'}`}
            >
              <Phone size={14} className="mr-2" />
              (47) 9999-9999
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            type="button"
            className="md:hidden text-white hover:text-gold-500 transition-colors bg-transparent border-none p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-dark-950 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center px-8 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
          
          <div className="flex flex-col space-y-8">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-4 opacity-50">Menu Principal</span>
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={item.label}
                type="button"
                className="text-3xl font-serif text-white hover:text-gold-500 text-left bg-transparent border-none p-0 transition-all duration-300 transform hover:translate-x-4"
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={() => handleScrollToSection(item.href)}
              >
                {item.label}
              </button>
            ))}
            <div className="h-px w-full bg-white/10 my-4"></div>
            <Button 
              variant="primary" 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              className="w-full justify-center py-5 text-lg font-bold"
            >
              Falar com Advogada
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;