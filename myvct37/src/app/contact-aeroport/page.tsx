'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

export default function ContactAeroport() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aeroport: '',
    date: '',
    heure: '',
    passagers: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        'service_dlyt2ws', // Service ID
        'template_e5yggup', // Template ID
        {
          to_email: 'yanisse.monvtc37@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          aeroport: formData.aeroport,
          date: formData.date,
          heure: formData.heure,
          passagers: formData.passagers,
          message: formData.message,
        },
        'papgmzAJAEHYQ2tnG' // Public Key
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        aeroport: '',
        date: '',
        heure: '',
        passagers: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="flex flex-col items-center py-8 mt-8">
      <h1 className="text-3xl font-bold text-white mb-8">Réservation Transfert Aéroport</h1>
      <div className="w-full max-w-2xl px-4">
        {status.success && (
          <div className="mb-4 p-4 bg-green-500 text-white rounded-lg">
            Votre demande de réservation a été envoyée avec succès !
          </div>
        )}
        {status.error && (
          <div className="mb-4 p-4 bg-red-500 text-white rounded-lg">
            Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white mb-2">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="aeroport" className="block text-white mb-2">Aéroport</label>
            <select
              id="aeroport"
              name="aeroport"
              value={formData.aeroport}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Sélectionnez un aéroport</option>
              <option value="Paris Charles de Gaulle (CDG)">Paris Charles de Gaulle (CDG)</option>
              <option value="Paris Orly (ORY)">Paris Orly (ORY)</option>
              <option value="Lyon Saint-Exupéry (LYS)">Lyon Saint-Exupéry (LYS)</option>
              <option value="Nice Côte d'Azur (NCE)">Nice Côte d'Azur (NCE)</option>
              <option value="Marseille Provence (MRS)">Marseille Provence (MRS)</option>
              <option value="Bordeaux-Mérignac (BOD)">Bordeaux-Mérignac (BOD)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-white mb-2">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="heure" className="block text-white mb-2">Heure</label>
              <input
                type="time"
                id="heure"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="passagers" className="block text-white mb-2">Nombre de passagers</label>
            <input
              type="number"
              id="passagers"
              name="passagers"
              min="1"
              max="8"
              value={formData.passagers}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">Message (vol, terminal, etc.)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300 disabled:bg-gray-400"
          >
            {status.loading ? 'Envoi en cours...' : 'Réserver mon transfert'}
          </button>
        </form>
      </div>
    </main>
  );
} 