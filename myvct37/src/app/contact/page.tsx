'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
        'template_acx7m0m', // Template ID
        {
          to_email: 'yanisse.monvtc37@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'papgmzAJAEHYQ2tnG' // Public Key
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
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
      <h1 className="text-3xl font-bold text-white mb-8">Contactez-nous</h1>
      <div className="w-full max-w-2xl px-4">
        {status.success && (
          <div className="mb-4 p-4 bg-green-500 text-white rounded-lg">
            Votre message a été envoyé avec succès !
          </div>
        )}
        {status.error && (
          <div className="mb-4 p-4 bg-red-500 text-white rounded-lg">
            Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.
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
            <label htmlFor="service" className="block text-white mb-2">Service souhaité</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Sélectionnez un service</option>
              <option value="mise-a-disposition">Mise à disposition</option>
              <option value="longue-distance">Longue distance</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300 disabled:bg-gray-400"
          >
            {status.loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </main>
  );
} 