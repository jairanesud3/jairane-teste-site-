import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-gray-300 font-sans selection:bg-gold-500 selection:text-dark-950">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentiators />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <BackToTop />
    </div>
  );
};

export default App;