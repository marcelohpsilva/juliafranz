"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlobeIcon } from "lucide-react";

export default function EstheticianWebsite() {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const content: Record<'en' | 'pt', {
    heroTitle: string;
    heroSubtitle: string;
    bookNow: string;
    services: string;
  }> = {
    en: {
      heroTitle: "Enhance Your Natural Beauty",
      heroSubtitle: "Explore our services and book your appointment today.",
      bookNow: "Book Now",
      services: "Services"
    },
    pt: {
      heroTitle: "Realce sua Beleza Natural",
      heroSubtitle: "Explore nossos serviços e agende seu atendimento hoje mesmo.",
      bookNow: "Agendar Agora",
      services: "Serviços"
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-[Lato]">
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-[Dantina] text-neutral-800">Julia Franz</h1>
        <nav className="flex items-center gap-4">
          <a href="#services" className="text-sm font-medium hover:text-neutral-800">
            {content[language].services}
          </a>
          <a href="#booking" className="text-sm font-medium hover:text-neutral-800">
            {content[language].bookNow}
          </a>
          <Button variant="ghost" onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
            <GlobeIcon className="w-4 h-4 mr-2" />
            {language === "en" ? "Português" : "English"}
          </Button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center py-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4 max-w-2xl">
          {content[language].heroTitle}
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          {content[language].heroSubtitle}
        </p>
        <a href="#booking">
          <Button className="px-6 py-3 text-white bg-neutral-800 hover:bg-black rounded-2xl shadow-md">
            {content[language].bookNow}
          </Button>
        </a>
      </main>

      <section id="services" className="px-6 py-16 bg-gray-50">
        <h3 className="text-2xl font-semibold text-center mb-10">
          {language === "en" ? "Our Services" : "Nossos Serviços"}
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { src: "/images/facial.png", alt: "Facial Treatments" },
            { src: "/images/massage.png", alt: "Massage Therapy" },
            { src: "/images/waxing.png", alt: "Waxing Services" },
            { src: "/images/manicure.jpg", alt: "Manicure Services" },
            { src: "/images/pedicure.jpg", alt: "Pedicure Services" },
            { src: "/images/eyebrows.png", alt: "Eyebrow Shaping" },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-md">
              <img src={item.src} alt={item.alt} className="w-full h-60 object-cover" />
              <CardContent className="p-4 text-center text-sm font-medium">
                {language === "en" ? item.alt :
                  item.alt === "Facial Treatments" ? "Tratamentos Faciais" :
                  item.alt === "Massage Therapy" ? "Massagens" :
                  item.alt === "Waxing Services" ? "Depilação" :
                  item.alt === "Manicure Services" ? "Manicure" :
                  item.alt === "Pedicure Services" ? "Pedicure" :
                  item.alt === "Eyebrow Shaping" ? "Design de Sobrancelhas" : item.alt}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="booking" className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          {language === "en" ? "Book Your Appointment" : "Agende Seu Atendimento"}
        </h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          {language === "en"
            ? "Booking system coming soon. Please contact via social media or phone number."
            : "Sistema de agendamento em breve. Por favor, entre em contato pelas redes sociais ou telefone."}
        </p>
        <Button className="px-6 py-3 text-white bg-neutral-800 hover:bg-black rounded-2xl shadow-md">
          {language === "en" ? "Contact Us" : "Entre em Contato"}
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          📞 (604) 123-4567 &nbsp;&nbsp; | &nbsp;&nbsp;
          <a href="https://instagram.com/juliafranzbeauty" target="_blank" rel="noopener noreferrer" className="text-neutral-800 hover:underline">
            Instagram
          </a>
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Julia Franz - All rights reserved.
      </footer>
    </div>
  );
}
