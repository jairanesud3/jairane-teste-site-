import React from 'react';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-dark-950 relative">
      {/* Background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dark-900/50 via-dark-950 to-dark-950"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <FadeIn>
          <SectionHeading 
            title="O Que Dizem Nossos Clientes" 
            subtitle="Resultados reais baseados em confiança, técnica e dedicação absoluta."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS.map((item, index) => (
            <FadeIn key={index} delay={index * 150} direction="up" className="h-full">
              <div className="bg-dark-900 p-8 border border-dark-800 rounded-sm relative h-full flex flex-col hover:border-gold-500/30 transition-colors duration-300 shadow-lg">
                
                {/* Ícone de Citação */}
                <div className="absolute -top-4 -left-2 bg-dark-950 p-2 rounded-full border border-dark-800 text-gold-500">
                  <Quote size={24} fill="currentColor" className="opacity-50" />
                </div>

                {/* Estrelas */}
                <div className="flex gap-1 mb-6 text-gold-500">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-300 italic font-light leading-relaxed mb-6 flex-grow">
                  "{item.text}"
                </p>

                {/* Autor */}
                <div className="pt-6 border-t border-dark-800 flex items-center justify-between">
                  <div>
                    <span className="block font-serif text-lg text-white font-medium">
                      {item.name}
                    </span>
                    <span className="text-xs text-gold-500 uppercase tracking-widest opacity-80">
                      Cliente Verificado
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;