'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Service VTC Premium',
      description: 'Voyagez avec style et confort',
      link: '/contact'
    },
    {
      image: '/slide2.jpg',
      title: 'Transfert Aéroport',
      description: 'Arrivez à l\'heure, partez sereinement',
      link: '/transfert-aeroport'
    },
    {
      image: '/slide3.jpg',
      title: 'Mise à disposition',
      description: 'Location de véhicule avec chauffeur pour vos événements professionnels et personnels',
      link: '/contact'
    }
  ];

  return (
    <main>
      {/* Carrousel */}
      <div className="w-full h-[80vh] relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[80vh]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-center">
                  {slide.description}
                </p>
                <Link
                  href={slide.link}
                  className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Section Services */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-2">Nos Services</h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Des solutions de transport professionnelles adaptées à tous vos besoins
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border border-white">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Transfert Aéroport
              </h3>
              <p className="text-white mb-6">
                Service de transfert professionnel vers tous les aéroports avec chauffeur qualifié
              </p>
              <Link
                href="/transfert-aeroport"
                className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Réserver →
              </Link>
            </div>
            <div className="bg-[#0A0A0A] p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border border-white">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Mise à disposition
              </h3>
              <p className="text-white mb-6">
                Location de véhicule avec chauffeur pour vos événements professionnels et personnels
              </p>
              <Link
                href="/services"
                className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                En savoir plus →
              </Link>
            </div>
            <div className="bg-[#0A0A0A] p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border border-white">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Longue distance
              </h3>
              <p className="text-white mb-6">
                Trajets longue distance dans toute la France avec confort et sécurité
              </p>
              <Link
                href="/services"
                className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Réserver →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour toute demande particulière ou pour obtenir un devis personnalisé
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors inline-block"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  );
}
