import React from 'react';
import { User, Users } from 'lucide-react';

const Prices = () => {
  return (
    <section id="prices" className="py-20 bg-therapy-sand border border-gray-200 rounded-lg my-4">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-therapyBlue">Preise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg shadow-md transition-all duration-300 bg-orange-100/50 hover:bg-orange-200/50 hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-therapyBlue/10 rounded-full">
                <User size={32} className="text-therapyBlue" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Einzeltherapie</h3>
            <p className="text-3xl font-bold text-center text-therapyBlue mb-4">120€</p>
            <p className="text-gray-600 text-center">pro Stunde</p>
          </div>
          
          <div className="p-8 rounded-lg shadow-md transition-all duration-300 bg-orange-100/50 hover:bg-orange-200/50 hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-therapyBlue/10 rounded-full">
                <Users size={32} className="text-therapyBlue" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Gruppentherapie</h3>
            <p className="text-3xl font-bold text-center text-therapyBlue mb-4">200€</p>
            <p className="text-gray-600 text-center">pro Stunde</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
