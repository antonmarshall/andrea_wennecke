import React from 'react';
import { User, Shield, Heart } from 'lucide-react';

type AboutCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const AboutCard = ({ icon, title, description, className }: AboutCardProps) => {
  return (
    <div className={`p-6 rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-therapy-blue/20 rounded-lg text-therapy-blue">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-therapy-blue">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-therapy-sand border border-gray-200 rounded-lg my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-therapy-blue">Über Mich</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="relative z-10 w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={`${import.meta.env.BASE_URL}images/sunflower.png`} 
                  alt="Portrait" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
