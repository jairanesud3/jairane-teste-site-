import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import FadeIn from './FadeIn';
import { FormStatus } from '../types';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      // Basic validation simulation
      if (formData.name && formData.phone) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  return (
    <section id="contato" className="py-20 bg-dark-950 relative border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <SectionHeading 
            title="Entre em Contato" 
            subtitle="Preencha o formulário abaixo para uma análise inicial do seu caso. Garantimos total sigilo."
          />
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn delay={200} className="bg-dark-900 p-8 md:p-10 border border-dark-800 shadow-2xl relative overflow-hidden">
            {/* Gold Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-950 border border-dark-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-950 border border-dark-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Relato Breve do Caso</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-dark-950 border border-dark-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-600"
                  placeholder="Descreva brevemente a situação..."
                ></textarea>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full flex justify-center items-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Enviando...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      Mensagem Enviada
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </div>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-gold-900/20 border border-gold-500/30 rounded flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <CheckCircle className="text-gold-500" size={20} />
                  <span className="text-gold-400 font-medium text-sm">Recebemos seu contato com sucesso. Retornaremos em breve.</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <AlertCircle className="text-red-500" size={20} />
                  <span className="text-red-400 font-medium text-sm">Erro ao enviar. Por favor, tente pelo WhatsApp.</span>
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;