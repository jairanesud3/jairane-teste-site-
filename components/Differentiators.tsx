import React from 'react';
import FadeIn from './FadeIn';
import { DIFFERENTIATORS } from '../constants';

const Differentiators: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-dark-900 border-y border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-dark-800">
          {DIFFERENTIATORS.map((item, index) => (
            <FadeIn key={index} delay={index * 200} direction="up">
              <div className="flex flex-col items-center text-center px-4 py-6 md:py-0 group">
                <div className="mb-6 text-gold-500 transform group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={48} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;