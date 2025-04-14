import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Brain, Music, Heart, User, Users } from 'lucide-react';

type TherapyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  buttonColor: string;
  details: string;
};

const TherapyCard = ({ icon, title, description, colorClass, buttonColor, details }: TherapyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={`bg-white p-6 rounded-lg shadow-md ${colorClass} h-full flex flex-col cursor-pointer hover:bg-opacity-5 hover:bg-${buttonColor} transition-colors duration-300`}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="text-gray-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 mt-4 border-t pt-4">{details}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className={`text-${buttonColor} hover:underline flex items-center text-sm font-medium mt-4`}
      >
        {isExpanded ? 'Weniger anzeigen' : 'Mehr erfahren'}
      </button>
    </motion.div>
  );
};

const TherapyServices = () => {
  const therapyCards = [
    {
      icon: <Palette size={32} />,
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      details: "In der Kunsttherapie nutzen wir verschiedene künstlerische Medien wie Farben, Ton und andere Materialien, um Ihre inneren Bilder und Gefühle auszudrücken. Dieser kreative Prozess kann helfen, unbewusste Themen sichtbar zu machen und neue Perspektiven zu entwickeln.",
      colorClass: "therapy-card-blue",
      buttonColor: "therapyLightBlue"
    },
    {
      icon: <Brain size={32} />,
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      details: "Diese Therapieform verbindet klassische Gesprächstherapie mit körperbasierten Interventionen. Wir arbeiten mit Atmung, Bewegung und Körperwahrnehmung, um emotionale Blockaden zu lösen und mehr Lebendigkeit zu spüren.",
      colorClass: "therapy-card-turquoise",
      buttonColor: "therapyTurquoise"
    },
    {
      icon: <Music size={32} />,
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      details: "In der Ausdruckstherapie nutzen wir verschiedene kreative Ausdrucksformen wie Schreibarbeit, Musik, Kunst und andere kreative Aktivitäten, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      colorClass: "therapy-card-purple",
      buttonColor: "therapyPurple"
    },
    {
      icon: <Heart size={32} />,
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      details: "In der Traumatherapie nutzen wir kreative und körperbasierte Methoden, um traumatische Erfahrungen zu bearbeiten und zu verstehen. Dies kann helfen, die Traumathematik zu verstehen und die Traumathematik zu verändern.",
      colorClass: "therapy-card-red",
      buttonColor: "therapyRed"
    },
    {
      icon: <User size={32} />,
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      details: "In der Einzeltherapie arbeiten wir individuell mit Ihnen und unterstützen Sie bei der Erarbeitung von persönlichen Veränderungswünschen und Entwicklungsziele.",
      colorClass: "therapy-card-pink",
      buttonColor: "therapyPink"
    },
    {
      icon: <Users size={32} />,
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      details: "In der Gruppentherapie arbeiten wir in kleinen Gruppen und nutzen gemeinsam kreative Lösungswege, um Probleme zu lösen und neue Perspektiven zu entwickeln.",
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
