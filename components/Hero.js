"use client";

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

// Variantes d'animation pour le bouton
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: { scale: 0.95 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/bg_hero.jpg")', // Une seule image de fond
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-0"></div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Titre principal avec animation */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        > 
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Bonjour, je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {portfolioData.name}
            </span>
          </h1>
          <h2 className="text-xs md:text-2xl lg:text-3xl font-medium text-blue-200 mt-2">
            {portfolioData.title}
          </h2>
        </motion.div>

        {/* Sous-titre avec animation */}
        <motion.p
          className="text-xl md:text-2xl text-gray-100 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {portfolioData.tagline}
        </motion.p>

        {/* Description avec animation */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {portfolioData.description}
        </motion.p>

        {/* Boutons avec animation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Voir mes projets
          </motion.button>

          <motion.button
            className="border-2 border-gray-300 text-gray-300 hover:border-blue-400 hover:text-blue-400 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-blue-400/10"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Me contacter
          </motion.button>
        </motion.div>
      </div>

      {/* Indicateur de défilement avec cercle d'éclaboussures animé */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a 
          href="#about"
          className="relative block"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          {/* Cercle d'éclaboussures avec animation */}
          <motion.div
            className="absolute inset-0 -m-6"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Cercle principal avec gradient */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30 blur-sm"></div>
            
            {/* Éclaboussures colorées */}
            <motion.div
              className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-blue-400"
              animate={{ 
                x: [0, 8, -4, 0],
                y: [0, -6, 4, 0],
                scale: [0.5, 1, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-1 -right-3 w-3 h-3 rounded-full bg-cyan-400"
              animate={{ 
                x: [0, -6, 8, 0],
                y: [0, 4, -8, 0],
                scale: [0.8, 0.4, 1, 0.8]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-2 -right-1 w-5 h-5 rounded-full bg-purple-400"
              animate={{ 
                x: [0, 4, -8, 0],
                y: [0, 6, -4, 0],
                scale: [0.6, 1.2, 0.6, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-pink-400"
              animate={{ 
                x: [0, -4, 6, 0],
                y: [0, -8, 2, 0],
                scale: [0.7, 0.3, 1, 0.7]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>
      
          {/* Cercle de bordure qui pulse */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-blue-400/50"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
      
          {/* Indicateur de souris au centre */}
          <motion.div
            className="relative z-10 text-white hover:text-blue-400 transition-colors duration-300"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}