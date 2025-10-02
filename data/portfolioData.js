export const portfolioData = {
  name: "Anazet Beda",
  title: "Développeur Web | Programmeur Analyste | Développeur Full Stack",
  about:
    `Étudiant en Programmeur analyste en Technologies de l'information au Collège LaSalle (Montréal).
    En formation, j'apprends à développer des applications web et des applications mobiles, ainsi qu'à gérer des bases de données relationnelles.
    Mon parcours me permet de comprendre comment concevoir des systèmes qui répondent à des besoins concrets et fiables.`,
  email: "a.anazet1@gmail.com",
  phone: "+1 (514) 245-9175",
  social: {
    github: "https://github.com/BEDA225",
    linkedin: "https://www.linkedin.com/in/anazet-eric-beda-8aaa47323",
    twitter: "#",
  },
  projects: [
    {
      id: 1,
      title: "Application Web | DeviNet",
      description:
        "DeviNet est une application web développée en PHP qui propose un jeu de devinette interactif avec gestion des utilisateurs. Les participants peuvent s'inscrire, se connecter, et jouer à un jeu où ils doivent deviner un nombre ou une valeur générée aléatoirement par le serveur. Le projet met l'accent sur la sécurité (hachage des mots de passe), l'expérience utilisateur (vérification AJAX du nom d'utilisateur), et une structure orientée objet pour la gestion de la base de données.",
      image: "/images/image_accueil_DevNet.jpg",
      tags: ["PHP", "MySQL", "JavaScript", "AJAX", "OOP", "Tailwind CSS"],
      sourceCode: "https://github.com/BEDA225/Projet_DeviNet",
      liveDemo: "https://votresite.com/projet1",
    },
    {
      id: 2,
      title: "Application Web(Projet personnel Pas fini) | RestoEtudiant",
      description: `Il s'agit d'une application web full stack destinée à un restaurant orienté spécifiquement vers une clientèle étudiante. Créer une plateforme de commande en ligne où :
        Les étudiants peuvent créer un compte, consulter les menus, passer commande, et suivre l'état de livraison.
        Les restaurateurs disposent d’une interface pour gérer les plats, les commandes reçues et la logistique de livraison.
        L'accent est mis sur la cuisine africaine, mais le système est conçu pour être facilement extensible à d'autres types de cuisines.`,
  
      image: "/images/image_RestoEtudiant.png",
      tags: ["PHP", "CSS", "JavaScript", "MySQL", "HTML"],
      sourceCode: "https://github.com/BEDA225/Projet_restoEtudiant",
      liveDemo: "https://votresite.com/projet2",
    },
    {
      id: 3,
      title: "Portfolio Pro ",
      description:
        "Un portfolio professionnel mettant en avant mes projets et compétences.",
      image: "/images/Projet3.jpg",
      tags: ["React", "Tailwind CSS", "JavaScript", "Next.js","Node.js"],
      sourceCode: "https://github.com/BEDA225/monPortfolio",
      liveDemo: "https://mon-portfolio-ziqa.vercel.app/",
    },
  ],
  skills: [
    { name: "HTML", level: 85 },
    { name: "PHP", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "Python", level: 70 },
    { name: "ASP.NET", level: 85 },
    { name: "Java", level: 60 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 65 },
    { name: "React", level: 60 },
    { name: "Next.js", level: 60 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Design Responsive", level: 68 },
  ],

  
};
