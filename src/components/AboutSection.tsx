
import React from 'react';
import { User, Heart, Shield } from 'lucide-react';

const AboutCard = ({
  icon,
  title,
  description,
  className
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 items-start transition-all duration-300 hover:shadow-lg mx-[30px] px-[16px] py-0 my-[10px] bg-orange-100/50 hover:bg-orange-200/50 border border-orange-200/50 ${className}`}>
      <div className="text-therapyBlue">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm my-[8px]">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return <section id="about" className="py-12 bg-orange-50">
      <div className="container mx-auto px-4 bg-[#b8b8b0]/0">
        <h2 className="text-3xl font-bold text-center mb-8 text-therapyBlue">Über Mich</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 py-[4px] my-[7px] px-0 mx-[20px]">
            <AboutCard icon={<User size={32} />} title="Erfahrene Therapeutin" description="Als langjährig tätige Kreativtherapeutin biete ich einen geschützten Raum für Menschen, die durch kunsttherapeutische und körperorientierte Methoden ihr Wohlbefinden steigern möchten." className="my-[5px]" />
            
            <AboutCard icon={<Shield size={32} />} title="Ganzheitlicher Ansatz" description="Mein therapeutischer Ansatz vereint Kunsttherapie, körperorientierte Psychotherapie und Traumatherapie, um vielfältige Wege des Ausdrucks und der Heilung anzubieten." className="my-[5px]" />
            
            <AboutCard icon={<Heart size={32} />} title="Persönliche Begleitung" description="Ich begleite Sie einfühlsam und individuell auf Ihrem persönlichen Weg zu mehr innerer Balance und Klarheit - unabhängig von Alter und Lebenssituation." className="my-[5px]" />
          </div>
          
          <div className="flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}images/sunflower.png`} alt="Portrait" className="rounded-lg shadow-lg max-h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
