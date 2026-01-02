import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  // Função atualizada para Modo Demonstração
  const openLink = (url: string, type: string) => {
    alert(`🚧 MODO DEMONSTRAÇÃO 🚧\n\nFuncionalidade desativada.\nIsso abriria: ${type}`);
  };

  const handleScrollToSection = (id: string) => {
    try {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch(e) {
      console.error(e);
    }
  };

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-serif text-2xl text-white mb-4">
              Jairane Sousa
              <span className="block text-xs text-gold-500 font-sans tracking-[0.2em] mt-1">
                ADVOCACIA CRIMINAL
              </span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Defesa técnica, ética e combativa. Nosso compromisso é com a sua liberdade e a preservação dos seus direitos fundamentais.
            </p>
            <div className="flex space-x-4">
              <button 
                type="button"
                onClick={() => openLink('https://instagram.com', 'Instagram')}
                className="text-gray-400 hover:text-gold-500 transition-colors bg-transparent border-none cursor-pointer p-0"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
              <button 
                type="button"
                onClick={() => openLink(`mailto:contato@jairanesousa.adv.br`, 'Email')}
                className="text-gray-400 hover:text-gold-500 transition-colors bg-transparent border-none cursor-pointer p-0"
                aria-label="Email"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Navegação</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button 
                    type="button"
                    onClick={() => handleScrollToSection(item.href)}
                    className="text-sm hover:text-gold-500 transition-colors cursor-pointer bg-transparent border-none p-0 text-gray-400 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                <span className="text-sm">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                <button 
                  type="button"
                  onClick={() => openLink(`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`, 'WhatsApp')}
                  className="text-sm hover:text-gold-500 cursor-pointer bg-transparent border-none p-0 text-gray-400 text-left"
                >
                  {CONTACT_INFO.whatsapp}
                </button>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Emergência?</h3>
            <p className="text-sm mb-4">
              Atendimento imediato para prisões em flagrante e operações policiais.
            </p>
            <button 
              type="button"
              onClick={() => openLink(`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`, 'WhatsApp')}
              className="inline-flex items-center justify-center w-full px-4 py-3 border border-gold-500 text-gold-500 text-sm font-bold uppercase hover:bg-gold-500 hover:text-dark-950 transition-colors cursor-pointer bg-transparent"
            >
              Falar no WhatsApp
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Dra. Jairane Sousa Advocacia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">OAB/SC XXX.XXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;