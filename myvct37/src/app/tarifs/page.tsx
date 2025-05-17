import Link from 'next/link';

export default function Tarifs() {
  return (
    <main className="flex flex-col items-center py-8 mt-8">
      <h1 className="text-3xl font-bold text-white mb-8">Nos Tarifs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {/* Bulle 1 cliquable */}
        <Link href="/transfert-aeroport" className="bg-[#0A0A0A] rounded-xl shadow-lg p-6 flex flex-col items-center border border-white transition-all duration-300 hover:scale-105 hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400" style={{ textDecoration: 'none' }}>
          <h2 className="text-xl font-semibold text-white mb-2">Transfert Aéroport</h2>
          <span className="text font-bold text-yellow-400 text-center">Trajet direct vers l'aéroport de votre choix.</span>
        </Link>
        {/* Bulle 2 cliquable */}
        <Link href="/contact" className="bg-[#0A0A0A] rounded-xl shadow-lg p-6 flex flex-col items-center border border-white transition-all duration-300 hover:scale-105 hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400" style={{ textDecoration: 'none' }}>
          <h2 className="text-xl font-semibold text-white mb-2">Mise à disposition</h2>
          <span className="text font-bold text-yellow-400 text-center">Chauffeur privé à l'heure pour tous vos déplacements.</span>
        </Link>
        {/* Bulle 3 cliquable */}
        <Link href="/contact" className="bg-[#0A0A0A] rounded-xl shadow-lg p-6 flex flex-col items-center border border-white transition-all duration-300 hover:scale-105 hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400" style={{ textDecoration: 'none' }}>
          <h2 className="text-xl font-semibold text-white mb-2">Longue distance</h2>
          <span className="text font-bold text-yellow-400 text-center">Voyages longue distance, confort et sérénité.</span>
        </Link>
      </div>
    </main>
  );
} 