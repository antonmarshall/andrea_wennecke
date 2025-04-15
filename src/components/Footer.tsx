import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-therapyBlue text-white">
      <div className="container mx-auto px-[13px] my-0 py-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kreativ/Therapie</h3>
            <p className="text-sm mb-4">
              Professionelle Hilfe durch Therapieangebote für Kinder, Jugendliche und Erwachsene.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Seiten</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-gray-300 transition duration-300">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition duration-300">Über mich</button></li>
              <li><button onClick={() => scrollToSection('therapy')} className="hover:text-gray-300 transition duration-300">Therapieangebote</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition duration-300">Kontakt</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informationen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Kontakt</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Anreise</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Datenschutz</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Impressum</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>
                  Beckergrube 11<br />
                  23552 Lübeck
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+49 451 47047/42</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@kreativtherapie-wennecke.de</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm">
          <div className="flex justify-center space-x-6">
            <a href="/impressum" className="hover:text-gray-300 transition duration-300">Impressum</a>
            <a href="/datenschutz" className="hover:text-gray-300 transition duration-300">Datenschutz</a>
          </div>
          <p className="text-center mt-4">© 2025 Kreativ/Therapie. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;