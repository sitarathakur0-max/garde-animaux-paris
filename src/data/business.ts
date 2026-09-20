/**
 * Fichier de configuration centralisé des données de l'entreprise.
 * Garde Animaux Paris - Service indépendant de garde d'animaux à Paris.
 */

export interface BusinessService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  targets: string[];
  features: string[];
  iconName: 'Home' | 'Utensils' | 'HeartHandshake';
}

export interface BusinessProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface BusinessConfig {
  name: string;
  category: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    raw: string;
  };
  reviews: {
    rating: string;
    ratingValue: number;
    count: number;
    platform: string;
  };
  services: BusinessService[];
  process: BusinessProcessStep[];
  whyUsPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const businessData: BusinessConfig = {
  name: "Garde Animaux Paris",
  category: "Pet Sitting",
  tagline: "Prenez soin de vos compagnons, même en votre absence.",
  description: "Service indépendant de garde d'animaux assurant visites à domicile, repas et soins quotidiens pour chats et chiens à Paris.",
  address: {
    street: "11 Rue de la Roquette",
    postalCode: "75011",
    city: "Paris",
    country: "France",
    full: "11 Rue de la Roquette, 75011 Paris, France",
  },
  phone: {
    display: "+33 6 28 45 71 93",
    raw: "+33628457193",
  },
  reviews: {
    rating: "5.0/5",
    ratingValue: 5.0,
    count: 18,
    platform: "Google",
  },
  services: [
    {
      id: "visites-a-domicile",
      title: "Visites à domicile",
      shortDesc: "Visites régulières chez vous pour veiller sur vos chats et chiens dans leur environnement familier et sécurisant.",
      fullDesc: "Les visites à domicile permettent à votre animal de rester dans le confort rassurant de son foyer parisien. Sans le stress d'un déplacement ou d'un changement de lieu, vos chats et chiens conservent leurs habitudes, leurs odeurs et leurs repères pendant votre absence.",
      targets: ["Chats", "Chiens"],
      features: [
        "Présence douce et attentive chez vous",
        "Maintien des repères et du cadre de vie habituel",
        "Attention individuelle consacrée à votre animal",
        "Respect scrupuleux de l'espace de votre compagnon"
      ],
      iconName: "Home",
    },
    {
      id: "repas-et-alimentation",
      title: "Repas et alimentation",
      shortDesc: "Distribution attentive de la nourriture habituelle de votre compagnon et renouvellement quotidien d'eau fraîche.",
      fullDesc: "Le respect des habitudes alimentaires est essentiel au bien-être digestif et émotionnel de votre animal. À chaque visite, les portions et horaires habituels définis avec vous sont fidèlement respectés, avec des écuelles nettoyées et de l'eau renouvelée.",
      targets: ["Chats", "Chiens"],
      features: [
        "Respect des habitudes et portions indiquées",
        "Renouvellement rigoureux de l'eau fraîche",
        "Nettoyage et entretien soigné des gamelles",
        "Observation attentive de l'appétit de votre animal"
      ],
      iconName: "Utensils",
    },
    {
      id: "soins-quotidiens",
      title: "Soins quotidiens",
      shortDesc: "Attentions de tous les jours : moments de tendresse, jeux, brossage doux et entretien de l'espace de vie.",
      fullDesc: "Au-delà du simple nourrissage, vos animaux ont besoin d'interactions douces et stimulantes. Ce service comprend les caresses, moments de jeu selon les envies de votre compagnon, le nettoyage de la litière pour les chats, et une attention sincère à leur bien-être.",
      targets: ["Chats", "Chiens"],
      features: [
        "Moments d'affection, caresses et réconfort",
        "Jeux adaptés au tempérament de l'animal",
        "Entretien régulier de la litière et des zones de couchage",
        "Surveillance vigilante de la forme et du comportement"
      ],
      iconName: "HeartHandshake",
    },
  ],
  process: [
    {
      step: 1,
      title: "Présentez les besoins de votre animal",
      description: "Contactez-nous par téléphone ou via le formulaire pour nous décrire votre compagnon (chat ou chien), son caractère et vos dates d'absence.",
    },
    {
      step: 2,
      title: "Définissez les soins nécessaires",
      description: "Nous échangeons sur le rythme des visites, les repas, l'eau, les attentions particulières et les habitudes de votre animal.",
    },
    {
      step: 3,
      title: "Organisez les visites à domicile",
      description: "Nous convenons des modalités pratiques d'accès à votre domicile parisien en toute discrétion et sérénité.",
    },
    {
      step: 4,
      title: "Votre compagnon reçoit ses soins quotidiens",
      description: "Durant votre absence, votre animal profite de visites attentionnées, de repas soignés et d'une présence bienveillante chez vous.",
    },
  ],
  whyUsPoints: [
    {
      title: "Service indépendant",
      description: "Une prise en charge humaine, directe et personnelle, sans intermédiaire ni plateforme impersonnelle.",
      icon: "UserCheck",
    },
    {
      title: "Visites à domicile à Paris",
      description: "Votre compagnon reste dans son cadre habituel, évitant tout stress d'adaptation ou de cage.",
      icon: "Home",
    },
    {
      title: "Repas et eau fraîche",
      description: "Alimentation fidèle à vos consignes et hygiène irréprochable des écuelles.",
      icon: "Utensils",
    },
    {
      title: "Soins et présence quotidienne",
      description: "Câlins, surveillance, brossage et entretien pour son confort total.",
      icon: "HeartHandshake",
    },
    {
      title: "Dédié aux chats et aux chiens",
      description: "Compréhension des besoins spécifiques et du langage des félins comme des canidés.",
      icon: "PawPrint",
    },
  ],
};
