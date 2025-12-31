import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import FadeIn from './FadeIn';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeading title="Perguntas Frequentes" subtitle="Esclareça suas dúvidas sobre o processo de defesa criminal." />
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div 
                className={`border border-dark-800 bg-dark-950 transition-all duration-300 ${
                  openIndex === index ? 'border-gold-500/50 shadow-lg shadow-gold-900/10' : 'hover:border-dark-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`text-lg font-serif font-medium ${openIndex === index ? 'text-gold-500' : 'text-gray-300'}`}>
                    {faq.question}
                  </span>
                  <span className={`text-gold-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-dark-800/50 pt-4">
                    {faq.answer}
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

export default FAQ;