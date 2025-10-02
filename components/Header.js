"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [language, setLanguage] = useState("fr");
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation selon la langue
  const navigation = {
    fr: [
      { name: "Accueil", href: "#home" },
      { name: "À propos", href: "#about" },
      { name: "Mes Projets", href: "#projects" },
      { name: "Compétences", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    en: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "My Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-lg" 
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="flex justify-between items-center p-6 container mx-auto">
        {/* Logo/Nom à gauche */}
        <div className="flex items-center">
          <Link 
            href="#home" 
            className="text-2xl font-bold text-cyan-400 hover:text-blue-500 transition-colors duration-300"
          >
            Anazet Beda
          </Link>
        </div>

        {/* Navigation centrale */}
        <ul className="hidden md:flex space-x-10">
          {navigation[language].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-cyan-400 hover:text-blue-500 text-xl transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sélecteur de langue à droite */}
        <div className="flex items-center space-x-4">
          {/* Bouton CV */}
          <a
            href="/cv/Eric-Beda-CV.pdf"
            target="_blank"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 backdrop-blur-sm transition-all duration-300"
          >
            {language === "fr" ? "Télécharger CV" : "Download CV"}
          </a>

          {/* Sélecteur de langue avec drapeaux */}
          <button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300"
          >
            {/* Drapeau */}
            <div className="w-6 h-4 rounded-sm overflow-hidden border border-white/20">
              {language === "fr" ? (
                // Drapeau français
                <div className="flex h-full">
                  <div className="w-1/3 bg-blue-600"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-red-600"></div>
                </div>
              ) : (
                // Drapeau anglais/britannique
                <div className="w-full h-full bg-blue-800 relative">
                  <div className="absolute inset-0 bg-white">
                    <div className="absolute inset-x-0 top-1/2 h-0.5 bg-red-600 transform -translate-y-1/2"></div>
                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-red-600 transform -translate-x-1/2"></div>
                  </div>
                </div>
              )}
            </div>
            <span className="text-sm font-medium">
              {language === "fr" ? "FR" : "EN"}
            </span>
          </button>

          {/* Menu mobile burger */}
          <button className="md:hidden p-2 rounded-lg text-cyan-400 hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}