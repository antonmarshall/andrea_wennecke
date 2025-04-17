import React from 'react';
import { MapPin } from 'lucide-react';

const Directions = () => {
  return (
    <section id="directions" className="py-20 bg-therapy-sand/30 border border-gray-200 rounded-lg my-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-therapy-blue">Anfahrt</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="text-therapy-blue mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-therapy-blue">Praxisadresse</h3>
                  <p className="text-gray-600">
                    Beckergrube 11<br />
                    23552 Lübeck
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-therapy-blue">Öffentliche Verkehrsmittel</h3>
              <p className="text-gray-600 mb-4">
                Die Praxis ist gut mit öffentlichen Verkehrsmitteln zu erreichen:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Bus: Linien 1, 2, 6, 7, 9 (Haltestelle Kohlmarkt)</li>
                <li>• 5 Minuten Fußweg vom Lübecker Hauptbahnhof</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-therapy-blue">Parkmöglichkeiten</h3>
              <p className="text-gray-600 mb-4">
                In der Nähe befinden sich mehrere Parkhäuser:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Parkhaus Kohlmarkt (2 Minuten Fußweg)</li>
                <li>• Parkhaus MuK (5 Minuten Fußweg)</li>
                <li>• Parkhaus Altstadt (7 Minuten Fußweg)</li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.5952641547847!2d10.684799776947016!3d53.86821997259407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2097dd7942ff3%3A0x5b9e244bd2a6c6c0!2sBeckergrube%2011%2C%2023552%20L%C3%BCbeck!5e0!3m2!1sde!2sde!4v1710669547439!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Praxisstandort"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
