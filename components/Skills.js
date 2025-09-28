"use client";

import { portfolioData } from "../data/portfolioData";
import { useSkillsAnimation } from "./AnimationProvider";

export default function Skills() {
  const { animatedSkills, isVisible } = useSkillsAnimation(portfolioData.skills);

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
                className="bg-black/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700"
              >
                <div className="flex justify-between mb-4">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-blue-300">
                    {Math.round(currentLevel)}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-300 h-3 rounded-full transition-all duration-1500 ease-out"
                    style={{ width: `${currentLevel}%` }}
                  >
                    {/* Effet de brillance */}
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}