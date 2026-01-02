import React from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { SERVICES, CONTACT_INFO } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("🚧 MODO DEMONSTRAÇÃO 🚧\n\nFuncionalidade desativada.\nIsso abriria o WhatsApp para consulta.");
  };

  return (
    <section id="atuacao" className="py-24 bg-dark-950">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeading 
            title="Atuação Especializada" 
            subtitle="Defesa técnica refinada para casos que exigem conhecimento profundo e estratégia."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up" className="h-full">
              <div className="group h-full bg-dark-900 p-8 hover:bg-dark-800 transition-colors border border-dark-800 hover:border-gold-500/50 rounded-sm">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-dark-950 rounded-sm text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-950 transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
          
          {/* CTA Card */}
          <FadeIn delay={SERVICES.length * 100} direction="up" className="h-full">
            <div className="h-full bg-gold-600 p-8 flex flex-col justify-center items-center text-center rounded-sm">
              <h3 className="text-2xl font-serif text-dark-950 font-bold mb-4">
                Demanda Específica?
              </h3>
              <p className="text-dark-900 mb-8 font-medium">
                Cada caso é único. Agende uma consulta para analisarmos sua situação.
              </p>
              <button 
                type="button"
                onClick={handleConsultClick}
                className="px-6 py-3 bg-dark-950 text-white font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors shadow-lg cursor-pointer border-none flex items-center gap-2"
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