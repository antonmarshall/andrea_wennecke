import React from 'react';
import { Palette, Brain, Music, Heart, User, Users } from 'lucide-react';
type TherapyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const TherapyCard = ({
  icon,
  title,
  description
}: TherapyCardProps) => {
  return <div className="p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-lg bg-orange-50">
      <div className="text-therapyBlue mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>;
};
const TherapyServices = () => {
  const therapyCards = [{
    icon: <Palette size={32} />,
    title: "Kunsttherapie",
    description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden."
  }, {
    icon: <Brain size={32} />,
    title: "Körperorientierte Psychotherapie",
    description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden."
  }, {
    icon: <Music size={32} />,
    title: "Ausdruckstherapie",
    description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen."
  }, {
    icon: <Heart size={32} />,
    title: "Traumatherapie",
    description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden."
  }, {
    icon: <User size={32} />,
    title: "Einzeltherapie",
    description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele."
  }, {
    icon: <Users size={32} />,
    title: "Gruppentherapie",
    description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten."
  }];
  return <section id="therapy" className="py-20 bg-transparent">
      <div className="container mx-auto px-8 bg-transparent">
        <h2 className="text-3xl font-bold text-center mb-6 text-therapyBlue">Mein Therapieangebot</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapyCards.map((card, index) => <TherapyCard key={index} {...card} />)}
        </div>
      </div>
    </section>;
};
export default TherapyServices;