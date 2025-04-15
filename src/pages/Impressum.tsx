
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-therapyBlue">Impressum</h1>
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p>Andrea Wennecke</p>
            <p>Kreativtherapeutin</p>
            <p>Beckergrube 11</p>
            <p>23552 Lübeck</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
            <p>Telefon: +49 451 47047/42</p>
            <p>E-Mail: info@kreativtherapie-wennecke.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>Berufsbezeichnung: Kreativtherapeutin</p>
            <p>Zuständige Kammer: [Kammer einfügen]</p>
            <p>Verliehen durch: [Institution einfügen]</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
