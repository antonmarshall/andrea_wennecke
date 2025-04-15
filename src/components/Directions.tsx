import React from 'react';
import { MapPin, Car, Bus } from 'lucide-react';
import Map from './Map';
const Directions = () => {
  return <section id="directions" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-therapyBlue">Anfahrt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="px-[30px]">
            <h3 className="text-xl font-semibold mb-4">So finden Sie zu mir</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin size={24} className="text-therapyBlue mt-1" />
                <span>
                  Beckergrube 11<br />
                  23552 Lübeck
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Car size={24} className="text-therapyBlue mt-1" />
                <span>Parkmöglichkeiten finden Sie in den umliegenden Parkhäusern.</span>
              </div>
              <div className="flex items-start space-x-3">
                <Bus size={24} className="text-therapyBlue mt-1" />
                <span>Die Bushaltestelle "Beckergrube" befindet sich direkt vor der Praxis.</span>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </section>;
};
export default Directions;