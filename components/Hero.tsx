import React from 'react';
import { ChevronRight, Shield, ChevronDown } from 'lucide-react';
import Button from './Button';
import FadeIn from './FadeIn';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* VÍDEO DE FUNDO */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          // Poster é a imagem que aparece enquanto o vídeo carrega
          poster="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        >
          {/* 
            INSTRUÇÃO PARA VÍDEO LOCAL:
            1. Coloque seu arquivo 'video.mp4' dentro da pasta 'public' do projeto.
            2. Descomente a linha abaixo e comente/apague a linha do vídeo online.
          */}
          {/* <source src="/video.mp4" type="video/mp4" /> */}

          {/* Vídeo Online de Exemplo (Ambiente Corporativo/Dark) */}
          <source src="https://videos.pexels.com/video-files/5665448/5665448-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>

        {/* Overlay Escuro para garantir contraste do texto sobre o vídeo */}
        <div className="absolute inset-0 bg-dark-950/85 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <FadeIn delay={100} direction="down">
            <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 bg-gold-500 text-dark-950 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.4)] transform hover:scale-105 transition-transform duration-300">
              <Shield size={16} className="fill-current" />
              <span className="text-sm md:text-base font-bold tracking-widest uppercase">
                Advocacia Criminal de Elite
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Defesa <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">Combativa</span> <br />
              & Estratégica
            </h1>
          </FadeIn>
          
          <FadeIn delay={500}>
            <div className="flex flex-col items-center">
              {/* Linha decorativa */}
              <div className="h-1 w-24 bg-gold-500 mb-8 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
              
              <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Atuação especializada em <strong className="text-gold-400">Tribunais Superiores</strong> e casos de alta complexidade. Sua liberdade é nossa prioridade absoluta.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={700} direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                className="w-full sm:w-auto min-w-[240px] py-4 text-base shadow-xl shadow-gold-500/20 group border-2 border-gold-500 bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold tracking-wider"
              >
                <span className="relative z-10 flex items-center justify-center">
                  PLANTÃO CRIMINAL
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                href="#atuacao"
                className="w-full sm:w-auto min-w-[240px] py-4 text-base border-2 hover:bg-white/5 backdrop-blur-sm"
              >
                NOSSAS ESPECIALIDADES
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce opacity-80 z-20">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 mb-2">Role</span>
        <ChevronDown className="text-gold-500 w-8 h-8" strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;