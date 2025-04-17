import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isLegalPage = location.pathname === '/impressum' || location.pathname === '/datenschutz';

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'therapy', 'prices', 'contact', 'directions', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More precise detection with a smaller threshold
          return rect.top <= 100 && rect.bottom >= 0;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    // Wenn wir auf einer Legal-Seite sind, navigiere zuerst zur Hauptseite
    if (isLegalPage) {
      navigate('/');
      // Warte kurz, bis die Navigation abgeschlossen ist, bevor wir scrollen
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Wenn wir bereits auf der Hauptseite sind, einfach scrollen
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-therapy-bg shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif text-therapy-blue">Andrea Wennecke</h1>
            <p className="ml-2 text-sm font-light text-therapy-gold italic">Kreativtherapie in Lübeck</p>
          </div>
          <nav>
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300
                      ${activeSection === item.id 
                        ? 'bg-therapy-blue text-white' 
                        : 'text-therapy-blue hover:bg-therapy-blue/10'}`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
