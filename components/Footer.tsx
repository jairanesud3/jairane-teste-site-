import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
    e.preventDefault();
    alert(`⚠️ MODO DEMONSTRAÇÃO\n\nEsta ação abriria o ${type} do escritório.`);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              <a 
                href="#" 
                onClick={(e) => handleDemoClick(e, 'Instagram')}
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={`mailto:contato@jairanesousa.adv.br`} 
                onClick={(e) => handleDemoClick(e, 'Email')}
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Navegação</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="text-sm hover:text-gold-500 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
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
                <a 
                  href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
                  onClick={(e) => handleDemoClick(e, 'WhatsApp')}
                  className="text-sm hover:text-gold-500 cursor-pointer"
                >
                  {CONTACT_INFO.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Emergência?</h3>
            <p className="text-sm mb-4">
              Atendimento imediato para prisões em flagrante e operações policiais.
            </p>
            <a 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
              onClick={(e) => handleDemoClick(e, 'WhatsApp')}
              className="inline-flex items-center justify-center w-full px-4 py-3 border border-gold-500 text-gold-500 text-sm font-bold uppercase hover:bg-gold-500 hover:text-dark-950 transition-colors cursor-pointer"
            >
              Falar no WhatsApp
            </a>
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