
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-gradient-to-b from-therapyBlue/5 to-transparent">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-2 text-therapyBlue">Andrea Wennecke</h1>
          <h2 className="text-2xl mb-6">Kreativtherapie in Lübeck</h2>
          <p className="text-lg mb-8">
            Kunst- und Gestaltungstherapie, Psychotherapie, 
            Ausdruckstherapie: Traumaverarbeitung für 
            Erwachsene und Jugendliche in einem geschützten Raum.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-therapyBlue text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 flex items-center"
            >
              Termin vereinbaren <ArrowRight className="ml-2" size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('therapy')}
              className="bg-therapyBlue text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 flex items-center"
            >
              Therapieangebote <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="/lovable-uploads/5769c220-6ad9-4b53-8eb7-7f7520c5394e.png" 
            alt="Sonnenblume" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
