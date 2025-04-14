
import React from 'react';
import { User, Heart, Shield } from 'lucide-react';

const AboutCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 items-start">
      <div className="text-therapyBlue">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14 text-therapyBlue">Über Mich</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <AboutCard 
              icon={<User size={32} />}
              title="Erfahrene Therapeutin"
              description="Als langjährig tätige Kreativtherapeutin biete ich einen geschützten Raum für Menschen, die durch kunsttherapeutische und körperorientierte Methoden ihr Wohlbefinden steigern möchten."
            />
            
            <AboutCard 
              icon={<Shield size={32} />}
              title="Ganzheitlicher Ansatz"
              description="Mein therapeutischer Ansatz vereint Kunsttherapie, körperorientierte Psychotherapie und Traumatherapie, um vielfältige Wege des Ausdrucks und der Heilung anzubieten."
            />
            
            <AboutCard 
              icon={<Heart size={32} />}
              title="Persönliche Begleitung"
              description="Ich begleite Sie einfühlsam und individuell auf Ihrem persönlichen Weg zu mehr innerer Balance und Klarheit - unabhängig von Alter und Lebenssituation."
            />

            <div className="pt-4">
              <p className="text-therapyBlue italic text-center">
                "Kreativität öffnet Wege, wo Worte allein nicht hinreichen"
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
              alt="Naturlandschaft mit Fluss und Bergen" 
              className="rounded-lg shadow-lg max-h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
