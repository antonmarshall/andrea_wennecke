
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-therapyBlue font-bold text-xl">Kreativ/Therapie</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-therapyBlue">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-therapyBlue">Über mich</button>
          <button onClick={() => scrollToSection('therapy')} className="text-gray-600 hover:text-therapyBlue">Therapieangebote</button>
          <button onClick={() => scrollToSection('prices')} className="text-gray-600 hover:text-therapyBlue">Preise</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-therapyBlue">Leistungen</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-therapyBlue">Kontakt</button>
          <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-therapyBlue">Fragen/FAQ</button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-therapyBlue text-left py-2 border-b border-gray-100">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-therapyBlue text-left py-2 border-b border-gray-100">Über mich</button>
            <button onClick={() => scrollToSection('therapy')} className="text-gray-600 hover:text-therapyBlue text-left py-2 border-b border-gray-100">Therapieangebote</button>
            <button onClick={() => scrollToSection('prices')} className="text-gray-600 hover:text-therapyBlue text-left py-2 border-b border-gray-100">Preise</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-therapyBlue text-left py-2 border-b border-gray-100">Leistungen</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-therapyBlue text-left py-2 border-b border-gray-100">Kontakt</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-therapyBlue text-left py-2 border-b border-gray-100">Fragen/FAQ</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
