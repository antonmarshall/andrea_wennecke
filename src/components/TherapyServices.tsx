
import React from 'react';
import { Palette, Brain, Music, Heart, User, Users } from 'lucide-react';

type TherapyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientClass: string;
};

const TherapyCard = ({ icon, title, description, gradientClass }: TherapyCardProps) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md h-full transition-transform duration-300 ${gradientClass}`}
    >
      <div className="text-gray-800 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

const TherapyServices = () => {
  const therapyCards = [
    {
      icon: <Palette size={32} />,
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      gradientClass: "bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100"
    },
    {
      icon: <Brain size={32} />,
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      gradientClass: "bg-gradient-to-br from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100"
    },
    {
      icon: <Music size={32} />,
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      gradientClass: "bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100"
    },
    {
      icon: <Heart size={32} />,
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      gradientClass: "bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100"
    },
    {
      icon: <User size={32} />,
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      gradientClass: "bg-gradient-to-br from-yellow-50 to-green-50 hover:from-yellow-100 hover:to-green-100"
    },
    {
      icon: <Users size={32} />,
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      gradientClass: "bg-gradient-to-br from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100"
    }
  ];

  return (
    <section id="therapy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-therapyBlue">Mein Therapieangebot</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapyCards.map((card, index) => (
            <TherapyCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyServices;
