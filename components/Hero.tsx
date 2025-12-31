import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './Button';
import FadeIn from './FadeIn';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-dark-950/30"></div>
      
      {/* Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <FadeIn delay={100} direction="down">
            <div className="mb-6 inline-block px-4 py-1 border border-gold-500/30 rounded-full bg-black/40 backdrop-blur-sm">
              <span className="text-gold-500 text-xs md:text-sm font-bold tracking-widest uppercase">
                Advocacia Criminal de Elite
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8 drop-shadow-lg">
              Defesa Criminal <br />
              <span className="text-gold-500 italic relative inline-block">
                Especializada
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span> e Combativa
            </h1>
          </FadeIn>
          
          <FadeIn delay={500}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Protegendo sua liberdade, sua reputação e seus direitos com estratégia jurídica de excelência nos momentos mais críticos da sua vida.
            </p>
          </FadeIn>
          
          <FadeIn delay={700} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                className="w-full sm:w-auto min-w-[200px] shadow-lg shadow-gold-500/20 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Falar com Especialista
                  <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Shine effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-[shine_1s_ease-in-out]"></div>
              </Button>
              
              <Button 
                variant="outline" 
                href="#atuacao"
                className="w-full sm:w-auto min-w-[200px]"
              >
                Conhecer Áreas
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block opacity-60">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;