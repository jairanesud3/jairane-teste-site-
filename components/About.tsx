import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dark-800/20 -skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn direction="left">
              <div className="mb-6">
                <span className="text-gold-500 font-bold tracking-widest text-sm uppercase">Sobre a Especialista</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-6">
                  Dra. Jairane Sousa
                </h2>
                <div className="h-1 w-20 bg-gold-500 mb-8"></div>
              </div>
            </FadeIn>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <FadeIn delay={200}>
                <p>
                  Com uma trajetória marcada pela <strong className="text-white font-medium">combatividade</strong> e excelência técnica, a Dra. Jairane Sousa consolidou-se como uma referência na advocacia criminal de alta complexidade.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p>
                  Entendemos que um processo criminal não coloca em risco apenas a liberdade, mas também a reputação, o patrimônio e a família de quem é acusado. Por isso, nossa atuação é pautada na <strong className="text-white font-medium">defesa intransigente</strong> dos direitos fundamentais.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <p>
                  Seja no calor de um flagrante ou na elaboração minuciosa de recursos aos Tribunais Superiores, cada estratégia é desenhada de forma personalizada, aliando conhecimento jurídico profundo à sensibilidade humana necessária para momentos de crise.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={500} direction="up">
              <div className="mt-10 pt-8 border-t border-dark-800">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="block text-4xl font-serif text-gold-500 mb-1">+500</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Atendimentos</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-serif text-gold-500 mb-1">24h</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Disponibilidade</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2 relative">
            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 border-2 border-gold-500 transform translate-x-4 translate-y-4 hidden md:block"></div>
                {/* Image: ALWAYS COLORED, animate-float added */}
                <div className="aspect-[3/4] bg-neutral-800 relative overflow-hidden shadow-2xl group border border-dark-800 animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dra. Jairane Sousa - Advogada Criminalista" 
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark-950 to-transparent h-1/3 opacity-80"></div>
                  
                  {/* Overlay decorativo no hover */}
                  <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;