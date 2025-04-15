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
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const menuItems = [{
    id: 'home',
    text: 'Home'
  }, {
    id: 'about',
    text: 'Über mich'
  }, {
    id: 'therapy',
    text: 'Therapieangebote'
  }, {
    id: 'prices',
    text: 'Preise'
  }, {
    id: 'contact',
    text: 'Kontakt'
  }, {
    id: 'directions',
    text: 'Anfahrt'
  }, {
    id: 'faq',
    text: 'FAQ'
  }];
  return <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-sky-800">
        <div className="flex items-center">
          <img src="/lovable-uploads/4603f752-ffdd-4c27-9ba8-d459a58d7fa5.png" alt="Kreativ/Therapie Logo" className="h-12" />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-orange-50">
              {item.text}
            </button>)}
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white p-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-1">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`p-3 text-left rounded-md transition-colors duration-300 ${activeSection === item.id ? 'bg-therapyBlue/10 text-therapyBlue' : 'text-gray-600 hover:text-therapyBlue hover:bg-therapyBlue/5'}`}>
                {item.text}
              </button>)}
          </div>
        </div>}
    </header>;
};
export default Header;