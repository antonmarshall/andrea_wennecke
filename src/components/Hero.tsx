
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <section id="home" className="relative min-h-[600px] flex items-center bg-gradient-to-b from-orange-50/20 to-transparent bg-[#FDF1E6]">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-transparent">
        <div className="max-w-2xl mx-[30px]">
          <h1 className="text-5xl font-bold mb-2 text-therapyBlue mx-0">Andrea Wennecke</h1>
          <h2 className="text-2xl mb-6 mx-0">Kreativtherapie in Lübeck</h2>
          <p className="text-lg mb-8 mx-0">
            Kunst- und Gestaltungstherapie, Psychotherapie, 
            Ausdruckstherapie: Traumaverarbeitung für 
            Erwachsene und Jugendliche in einem geschützten Raum.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('contact')} className="text-white py-3 rounded-full transition duration-300 flex items-center px-[24px] mx-0 bg-sky-900 hover:bg-sky-800">
              Termin vereinbaren <ArrowRight className="ml-2" size={18} />
            </button>
            <button onClick={() => scrollToSection('therapy')} className="text-white px-6 py-3 rounded-full transition duration-300 flex items-center mx-0 bg-sky-900 hover:bg-sky-800">
              Therapieangebote <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
        <div className="hidden md:block max-w-lg mx-auto">
          <img alt="Kreativtherapie Artwork" className="rounded-lg shadow-xl max-w-full h-auto object-scale-down" src="/images/hero-artwork.png" />
        </div>
      </div>
    </section>;
};

export default Hero;
