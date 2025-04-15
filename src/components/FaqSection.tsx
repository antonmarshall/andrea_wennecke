import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
type FaqItemProps = {
  question: string;
  answer: string;
};
const FaqItem = ({
  question,
  answer
}: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-200 py-4">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <div className="text-therapyBlue">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      {isOpen && <div className="mt-4 text-gray-600">
          <p>{answer}</p>
        </div>}
    </div>;
};
const FaqSection = () => {
  return <section id="faq" className="py-20 bg-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14 text-therapyBlue">Häufig gestellte Fragen</h2>
        
        <div className="max-w-3xl mx-auto">
          <FaqItem question="Wie läuft eine Therapiesitzung ab?" answer="Eine typische Therapiesitzung dauert etwa 50-60 Minuten. Nach einem kurzen Gespräch über Ihr aktuelles Befinden und mögliche Themen für die Sitzung, nutzen wir kreative Methoden wie Malen, Gestalten oder körperorientierte Übungen. Zum Abschluss reflektieren wir gemeinsam über den Prozess und die entstandenen Erkenntnisse." />
          
          <FaqItem question="Für wen eignet sich Kreativtherapie?" answer="Kreativtherapie eignet sich grundsätzlich für Menschen jeden Alters und mit verschiedensten Anliegen – von Stressbewältigung über Traumaverarbeitung bis hin zu persönlicher Entwicklung. Künstlerische Vorkenntnisse sind nicht erforderlich, da der therapeutische Prozess und nicht das künstlerische Ergebnis im Vordergrund steht." />
          
          <FaqItem question="Werden die Kosten von der Krankenkasse übernommen?" answer="Die Kostenübernahme hängt von Ihrer Versicherungssituation ab. Einige private Krankenkassen übernehmen die Kosten teilweise oder vollständig. Gesetzliche Krankenkassen übernehmen die Kosten in der Regel nicht direkt, können aber über bestimmte Zusatzleistungen oder im Rahmen einer ärztlich verordneten Heilmitteltherapie abgedeckt sein. Ich berate Sie gerne zu möglichen Erstattungswegen." />
          
          <FaqItem question="Wie viele Sitzungen sind notwendig?" answer="Die Anzahl der notwendigen Sitzungen ist sehr individuell und hängt von Ihrem persönlichen Anliegen und Ihren Zielen ab. Manche Menschen profitieren bereits von 5-10 Sitzungen, während andere eine längerfristige Begleitung wünschen. Nach einem Erstgespräch können wir gemeinsam einen Therapieplan entwickeln und diesen regelmäßig an Ihre Bedürfnisse anpassen." />
          
          <FaqItem question="Brauche ich künstlerische Erfahrung für die Kunsttherapie?" answer="Nein, künstlerische Vorkenntnisse oder Talente sind nicht notwendig. In der Kunsttherapie geht es nicht um ästhetische Bewertungen oder handwerkliches Können, sondern um den therapeutischen Prozess und die persönliche Ausdrucksmöglichkeit. Alle Materialien und Techniken werden so eingesetzt, dass sie für jeden zugänglich sind." />
        </div>
      </div>
    </section>;
};
export default FaqSection;