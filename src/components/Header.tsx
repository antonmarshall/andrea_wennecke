import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'therapy', 'prices', 'contact', 'directions', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted the detection area to make it more reliable
          return rect.top <= 150 && rect.bottom >= 0;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call handleScroll once on mount to set the initial active section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const menuItems = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'Über mich' },
    { id: 'therapy', text: 'Therapieangebote' },
    { id: 'prices', text: 'Preise' },
    { id: 'contact', text: 'Kontakt' },
    { id: 'directions', text: 'Anfahrt' },
    { id: 'faq', text: 'FAQ' }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center rounded-xl bg-sky-900">
        <div className="flex items-center bg-transparent">
          <h1 className="text-white text-xl font-medium">Andrea Wennecke</h1>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-2xl transition-all duration-300 text-orange-50
                ${activeSection === item.id 
                  ? 'bg-therapyLightBlue/40 text-white font-medium' 
                  : 'hover:bg-therapyLightBlue/20'}`}
            >
              {item.text}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-lg transition-colors focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 text-left rounded-2xl transition-colors duration-300
                  ${activeSection === item.id 
                    ? 'bg-therapyBlue text-white font-medium' 
                    : 'text-therapyBlue hover:bg-therapyBlue/10'}`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
