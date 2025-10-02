import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          À propos de moi
        </h2>
        
        {/* Layout avec texte pleine largeur */}
        <div className="w-full">
          {/* Texte à gauche - occupe 3 colonnes sur 4 */}
          <div className="space-y-8">
            {/* Texte principal */}
            <div className="bg-black/30 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-700">
              <p className="text-gray-200  text-lg leading-relaxed">
                {portfolioData.about}
              </p>
            </div>
            {/* Informations supplémentaires - Boutons et liens SANS encadrement */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-6 items-center justify-center m ">
                {/* Bouton CV avec animations */}
                <a
                  href="/cv/Eric-Beda-CV.pdf"
                  target="_blank"
                  className="flex items-center font-bold gap-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:animate-pulse "
                >
                  <svg className="w-8 h-8 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Voir mon CV
                </a>
                
                {/* Lien GitHub avec animations */}
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition-all duration-300 border border-gray-500 hover:border-gray-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:animate-pulse"
                >
                  <svg
                    className="w-8 h-8 transition-transform duration-300 hover:animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                
                {/* Lien LinkedIn avec animations */}
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/40 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-300 border border-gray-500 hover:border-blue-400 hover:scale-110 hover:-rotate-6 hover:shadow-lg"
                >
                  <svg
                    className="w-8 h-8 transition-transform duration-300 hover:animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}