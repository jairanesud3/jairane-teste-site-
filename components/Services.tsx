import React from 'react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const handleDemoClick = () => {
    alert("⚠️ MODO DEMONSTRAÇÃO\n\nEste botão levaria para o WhatsApp para uma consulta.");
  };

  return (
    <section id="atuacao" className="py-20 md:py-32 bg-dark-950 relative">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeading 
            title="Áreas de Atuação" 
            subtitle="Atuação técnica e estratégica em todas as fases da persecução penal, com foco absoluto na melhor resolução para o cliente."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 100} direction="up" className="h-full">
              <div 
                className="group h-full bg-dark-900 border border-dark-800 p-8 hover:border-gold-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.1)]"
              >
                <div className="mb-6 inline-flex p-3 bg-dark-800 rounded-lg group-hover:bg-gold-500 group-hover:text-dark-950 text-gold-500 transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
          
          {/* Call to Action Card in Grid */}
          <FadeIn delay={SERVICES.length * 100} direction="up" className="h-full">
            <div className="h-full bg-gradient-to-br from-gold-600 to-gold-700 p-8 flex flex-col justify-center items-center text-center border border-gold-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <h3 className="text-xl font-serif text-dark-950 font-bold mb-4 relative z-10">
                Seu caso não está listado?
              </h3>
              <p className="text-dark-900 mb-6 font-medium relative z-10">
                Atuamos em diversas outras frentes do Direito Criminal. Entre em contato para uma análise preliminar.
              </p>
              <button 
                onClick={handleDemoClick}
                className="relative z-10 inline-block px-6 py-2 bg-dark-950 text-gold-500 font-bold text-sm uppercase tracking-wider hover:bg-black transition-colors shadow-lg cursor-pointer border-none"
              >
                Consultar Agora
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Services;