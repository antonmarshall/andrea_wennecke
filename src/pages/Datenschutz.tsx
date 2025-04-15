
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-therapyBlue">Datenschutzerklärung</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
            <p className="mb-4">Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb meines Onlineangebotes auf.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Verantwortliche Stelle</h2>
            <p>Andrea Wennecke</p>
            <p>Beckergrube 11</p>
            <p>23552 Lübeck</p>
            <p>E-Mail: info@kreativtherapie-wennecke.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Ihre Rechte</h2>
            <p className="mb-2">Sie haben das Recht:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Ihre personenbezogenen Daten berichtigen zu lassen</li>
              <li>Ihre personenbezogenen Daten löschen zu lassen</li>
              <li>Die Verarbeitung Ihrer personenbezogenen Daten einschränken zu lassen</li>
              <li>Der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen</li>
              <li>Ihre personenbezogenen Daten in einem übertragbaren Format zu erhalten</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
