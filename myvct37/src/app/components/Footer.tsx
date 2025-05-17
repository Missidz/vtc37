import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">VTC37</h3>
            <p className="text-gray-400">
              Service de transport professionnel de qualité pour tous vos déplacements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/transfert-aeroport" className="text-gray-400 hover:text-yellow-400">
                  Transfert Aéroport
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400">
                  Mise à disposition
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400">
                  Longue distance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: yanisse.monvtc37@gmail.com</li>
              <li>Téléphone: [Votre numéro]</li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VTC37. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 