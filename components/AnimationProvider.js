"use client";

import { useState, useEffect} from "react";

export default function AnimationProvider({ children }) {
  useEffect(() => {
    // Initialize AOS
    const AOS = require("aos");
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return <>{children}</>;
}

// Hook personnalisé pour gérer l'animation bidirectionnelle des compétences
export function useSkillsAnimation(skills) {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Détecter la direction de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Initialiser les compétences
  useEffect(() => {
    if (skills) {
      setAnimatedSkills(skills.map(skill => ({
        ...skill,
        animatedLevel: 0
      })));
    }
  }, [skills]);

  // Animation de chargement (vers le bas)
  const startLoadingAnimation = () => {
    // Réinitialiser à 0%
    setAnimatedSkills(prev => prev.map(skill => ({
      ...skill,
      animatedLevel: 0
    })));

    // Animer progressivement chaque compétence
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => 
          prev.map((s, i) => 
            i === index 
              ? { ...s, animatedLevel: skill.level }
              : s
          )
        );
      }, index * 150); // 150ms entre chaque animation
    });
  };

  // Animation de déchargement (vers le haut)
  const startUnloadingAnimation = () => {
    const reverseSkills = [...skills].reverse();
    
    reverseSkills.forEach((skill, reverseIndex) => {
      const originalIndex = skills.length - 1 - reverseIndex;
      
      setTimeout(() => {
        setAnimatedSkills(prev => 
          prev.map((s, i) => 
            i === originalIndex 
              ? { ...s, animatedLevel: 0 }
              : s
          )
        );
      }, reverseIndex * 100); // Plus rapide en déchargement
    });
  };

  // Observer pour déclencher l'animation selon la direction
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section visible - démarrer l'animation selon la direction
          if (scrollDirection === 'down') {
            startLoadingAnimation();
          } else {
            startUnloadingAnimation();
          }
        } else {
          // Section non visible
          if (scrollDirection === 'up') {
            // En remontant, vider complètement
            setAnimatedSkills(prev => prev.map(skill => ({
              ...skill,
              animatedLevel: 0
            })));
          }
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [scrollDirection, skills]);

  return { 
    animatedSkills, 
    scrollDirection,
    startLoadingAnimation,
    startUnloadingAnimation 
  };
}