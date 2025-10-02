"use client";

import { portfolioData } from "../data/portfolioData";
import { useSkillsAnimation } from "./AnimationProvider";

export default function Skills() {
  const { animatedSkills, scrollDirection } = useSkillsAnimation(portfolioData.skills);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Mes compétences
        </h2>
        <div className="space-y-6">
          {portfolioData.skills.map((skill, index) => {
            // Trouve la compétence animée correspondante
            const animatedSkill = animatedSkills.find(s => s.name === skill.name);
            const currentLevel = animatedSkill ? animatedSkill.animatedLevel : 0;
            
            return (
              <div
                key={skill.name}
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700 transition-all duration-500"
                style={{
                  opacity: currentLevel > 0 ? 1 : 0.4,
                  transform: `translateY(${currentLevel > 0 ? 0 : 15}px) scale(${currentLevel > 0 ? 1 : 0.98})`
                }}
              >
                <div className="flex justify-between mb-4">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-blue-300 font-bold transition-all duration-300 text-lg">
                    {Math.round(currentLevel)}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-300 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${currentLevel}%`,
                      boxShadow: currentLevel > 0 ? '0 0 15px rgba(59, 130, 246, 0.6)' : 'none'
                    }}
                  >
                    {/* Effet de brillance animé */}
                    {currentLevel > 0 && (
                      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    )}
                  </div>
                </div>
                
                {/* Indicateur de statut */}
                <div className="mt-2 flex justify-between items-center text-xs">
                  <span className="text-gray-500">
                    {currentLevel === skill.level ? '✓ Maîtrisé' : 
                     currentLevel > 0 ? ' En progression...' : '⏳ En attente'}
                  </span>
                  <span className="text-gray-400">
                    {currentLevel}/{skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicateur de direction (optionnel) */}
        <div className="fixed bottom-4 right-4 bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs opacity-70 transition-all duration-300">
          {scrollDirection === 'down' ? '📈 Chargement des skills' : '📉 Déchargement des skills'}
        </div>
      </div>
    </section>
  );
}