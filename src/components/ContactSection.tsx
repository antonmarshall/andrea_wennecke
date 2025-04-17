import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = ({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return <div className="flex items-start mb-6 mx-[30px] px-px">
      <div className="text-therapyBlue mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>;
};

const ContactSection = () => {
  return <section id="contact" className="py-20 bg-therapy-sand border border-gray-200 rounded-lg my-4">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-14 text-therapyBlue">Kontakt</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="px-[30px] mx-[30px]">
            <h3 className="text-xl font-semibold mb-6">Kontaktieren Sie mich</h3>
            <p className="text-gray-600 mb-8">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Ich freue mich
              auf Ihre Nachricht und antworte so schnell wie möglich.
            </p>
            
            <div className="space-y-4">
              <ContactInfo icon={<Phone size={24} />} title="Telefon">
                <p>Tel: +49 451 47047/42</p>
                <p>Mo-Fr: 9:00 - 17:00 Uhr</p>
              </ContactInfo>
              
              <ContactInfo icon={<Mail size={24} />} title="E-Mail">
                <p>info@kreativtherapie-wennecke.de</p>
                <p className="text-sm italic">Antwortzeit innerhalb von 24 Stunden</p>
              </ContactInfo>
              
              <ContactInfo icon={<MapPin size={24} />} title="Praxisadresse">
                <p>Beckergrube 11</p>
                <p>23552 Lübeck</p>
                <a href="#" className="text-therapyBlue hover:underline text-sm">Anfahrtsbeschreibung</a>
              </ContactInfo>
              
              <ContactInfo icon={<Clock size={24} />} title="Öffnungszeiten">
                <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                <p>Samstag: Nach Vereinbarung</p>
              </ContactInfo>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input id="name" type="text" placeholder="Ihr Name" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-therapyBlue focus:border-therapyBlue bg-orange-50" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input id="email" type="email" placeholder="Ihre E-Mail" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-therapyBlue focus:border-therapyBlue bg-orange-50" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                <input id="subject" type="text" placeholder="Betreff Ihrer Nachricht" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-therapyBlue focus:border-therapyBlue bg-orange-50" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                <textarea id="message" rows={5} placeholder="Ihre Nachricht" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-therapyBlue focus:border-therapyBlue bg-orange-50"></textarea>
              </div>
              
              <button type="submit" className="w-full text-white py-3 px-4 rounded-md transition duration-300 bg-sky-900 hover:bg-sky-800">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
