'use client';

import Link from 'next/link';

export default function TransfertAeroport() {
  const aeroports = [
    {
      nom: "Paris Charles de Gaulle (CDG)",
      description: "Aéroport international principal de Paris"
    },
    {
      nom: "Paris Orly (ORY)",
      description: "Aéroport secondaire de Paris"
    },
    {
      nom: "Lyon Saint-Exupéry (LYS)",
      description: "Principal aéroport de la région Rhône-Alpes"
    },
    {
      nom: "Nice Côte d'Azur (NCE)",
      description: "Aéroport principal de la Côte d'Azur"
    },
    {
      nom: "Marseille Provence (MRS)",
      description: "Principal aéroport de la région PACA"
    },
    {
      nom: "Bordeaux-Mérignac (BOD)",
      description: "Principal aéroport de la région Nouvelle-Aquitaine"
    }
  ];

  return (
    <main className="flex flex-col items-center py-8 mt-8">
      <h1 className="text-3xl font-bold text-white mb-8">Transfert Aéroport</h1>
      <p className="text-white mb-8 text-center max-w-2xl px-4">
        Découvrez nos services de transfert vers les principaux aéroports français.
        Nos chauffeurs professionnels vous assurent un trajet confortable et ponctuel.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {aeroports.map((aeroport, index) => (
          <Link 
            key={index}
            href="/contact-aeroport"
            className="bg-[#0A0A0A] rounded-xl shadow-lg p-6 flex flex-col border border-white transition-all duration-300 hover:scale-105 hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            style={{ textDecoration: 'none' }}
          >
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">{aeroport.nom}</h2>
            <p className="text-white">{aeroport.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
} 