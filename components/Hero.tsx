import React from 'react';
import { ChevronRight, Shield } from 'lucide-react';
import Button from './Button';
import FadeIn from './FadeIn';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <FadeIn delay={100} direction="down">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-sm">
              <Shield size={14} className="text-gold-500" />
              <span className="text-gold-500 text-xs md:text-sm font-bold tracking-widest uppercase">
                Advocacia Criminal Especializada
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
              Defesa Técnica, <br/>
              <span className="text-gold-500">Combativa</span> & Estratégica
            </h1>
          </FadeIn>
          
          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Atuação focada na preservação da liberdade e na garantia dos direitos fundamentais, com excelência técnica em todas as fases do processo penal.
            </p>
          </FadeIn>
          
          <FadeIn delay={700} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                className="w-full sm:w-auto"
              >
                Falar com Especialista
                <ChevronRight size={18} className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                href="#atuacao"
                className="w-full sm:w-auto"
              >
                Nossas Áreas
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-500 to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;