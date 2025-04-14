
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
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/40994d3c-e346-44f7-98b1-ba5445e68690.png")' }}></div>
      <div className="absolute inset-0 bg-therapyBlue/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-2">Andrea Wennecke</h1>
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
              className="bg-white text-therapyBlue px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 flex items-center"
            >
              Therapieangebote <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
