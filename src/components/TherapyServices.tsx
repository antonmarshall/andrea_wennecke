
import React from 'react';
import { Palette, Brain, Music, Heart, User, Users } from 'lucide-react';

type TherapyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  buttonColor: string;
};

const TherapyCard = ({ icon, title, description, colorClass }: TherapyCardProps) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md ${colorClass} h-full flex flex-col cursor-pointer transition-colors duration-300`}
    >
      <div className="text-gray-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TherapyServices = () => {
  const therapyCards = [
    {
      icon: <Palette size={32} />,
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      colorClass: "therapy-card-blue",
      buttonColor: "therapyLightBlue"
    },
    {
      icon: <Brain size={32} />,
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      colorClass: "therapy-card-turquoise",
      buttonColor: "therapyTurquoise"
    },
    {
      icon: <Music size={32} />,
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      colorClass: "therapy-card-purple",
      buttonColor: "therapyPurple"
    },
    {
      icon: <Heart size={32} />,
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      colorClass: "therapy-card-red",
      buttonColor: "therapyRed"
    },
    {
      icon: <User size={32} />,
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      colorClass: "therapy-card-pink",
      buttonColor: "therapyPink"
    },
    {
      icon: <Users size={32} />,
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      colorClass: "therapy-card-green",
      buttonColor: "therapyGreen"
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
