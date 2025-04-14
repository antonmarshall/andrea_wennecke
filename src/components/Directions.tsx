
import React from 'react';
import Map from './Map';

const Directions = () => {
  return (
    <section id="directions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-therapyBlue">Anfahrt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">So finden Sie zu mir</h3>
            <p className="mb-4">
              Meine Praxis befindet sich in der Beckergrube 11, 23552 Lübeck.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Mit dem Auto:</h4>
                <p>Parkmöglichkeiten finden Sie in den umliegenden Parkhäusern.</p>
              </div>
              <div>
                <h4 className="font-semibold">Mit öffentlichen Verkehrsmitteln:</h4>
                <p>Die Bushaltestelle "Beckergrube" befindet sich direkt vor der Praxis.</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
