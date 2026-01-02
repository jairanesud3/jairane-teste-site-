import React from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { SERVICES, CONTACT_INFO } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="atuacao" className="py-24 bg-dark-950 relative">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeading 
            title="Atuação Especializada" 
            subtitle="Expertise jurídica refinada para casos que exigem técnica apurada e estratégia vencedora."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up" className="h-full">
              <div 
                className="group h-full bg-dark-900 relative p-8 hover:bg-dark-800 transition-all duration-500 border-l-2 border-transparent hover:border-gold-500 overflow-hidden"
              >
                {/* Background Number */}
                <span className="absolute -right-4 -top-8 text-[120px] font-serif text-white opacity-[0.02] group-hover:opacity-[0.05] transition-opacity select-none leading-none">
                  {index + 1}
                </span>

                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-dark-950 border border-dark-700 rounded-sm text-gold-500 group-hover:text-white group-hover:bg-gold-500 transition-colors duration-500 shadow-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="text-dark-700 group-hover:text-gold-500 transition-colors duration-500" size={24} />
                </div>
                
                <h3 className="text-xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm border-t border-dark-800 pt-4 group-hover:border-dark-700 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
          
          {/* CTA Card Updated */}
          <FadeIn delay={SERVICES.length * 100} direction="up" className="h-full">
            <div className="h-full bg-gold-600 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group border-l-2 border-white/20">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gold-400 rounded-full blur-3xl opacity-50"></div>
              
              <h3 className="text-2xl font-serif text-dark-950 font-bold mb-4 relative z-10">
                Demanda Específica?
              </h3>
              <p className="text-dark-900 mb-8 font-medium relative z-10 leading-relaxed">
                Cada caso possui suas particularidades. Agende uma reunião para traçarmos a melhor estratégia.
              </p>
              <button 
                type="button"
                onClick={handleConsultClick}
                className="relative z-10 w-full py-4 bg-dark-950 text-white font-bold text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer border-none flex items-center justify-center gap-2"
              >
                Entrar em Contato
                <ArrowUpRight size={16} className="text-gold-500" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Services;