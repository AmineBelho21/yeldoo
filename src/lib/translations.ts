export type Locale = "fr" | "en" | "ar";

export interface HeroVenue {
  type: string;
  location: string;
  category: string;
  discount: string;
}

export interface CoreRoomType {
  type: string;
}

export interface CoreTabTranslation {
  label: string;
  tagline: string;
  description: string;
  features: string[];
  learnMore: string;
  mockupTitle: string;
  mockupSubtitle: string;
  roomTypes: string[];
  statLabels: string[];
}

export interface StatItem {
  category: string;
  label: string;
  description: string;
}

export interface PartnerItem {
  category: string;
  location: string;
  tagline: string;
  metricLabels: string[];
}

export interface FooterColumn {
  heading: string;
  links: string[];
}

export interface Translations {
  dir: "ltr" | "rtl";
  lang: string;
  langLabel: string;

  nav: {
    platform: string;
    partners: string;
    pricing: string;
    about: string;
    login: string;
    cta: string;
  };

  hero: {
    badge: string;
    headlinePre: string;
    headlineGold: string;
    headlinePost: string;
    subCopy: string;
    cta1: string;
    cta2: string;
    socialProof: string;
    ui: {
      liveYieldPrice: string;
      slotsLeft: string;
      fillingFast: string;
      claimed: string;
      bookNow: string;
      offPeakSavings: string;
      vsPeak: string;
      leftAtPrice: string;
    };
    venues: HeroVenue[];
  };

  core: {
    sectionLabel: string;
    heading: string;
    partnerVenuesLabel: string;
    avgYieldLabel: string;
    tabs: {
      hotels: CoreTabTranslation;
      restaurants: CoreTabTranslation;
      experiences: CoreTabTranslation;
    };
  };

  stats: {
    heading: string;
    sub: string;
    items: StatItem[];
  };

  partners: {
    sectionLabel: string;
    heading: string;
    moreCaseStudies: string;
    readStory: string;
    items: PartnerItem[];
  };

  footer: {
    cta: {
      heading: string;
      sub: string;
      btn1: string;
      btn2: string;
    };
    columns: FooterColumn[];
    legal: string;
    closing: string;
  };
}

const fr: Translations = {
  dir: "ltr",
  lang: "fr",
  langLabel: "FR",

  nav: {
    platform: "Plateforme",
    partners: "Partenaires",
    pricing: "Tarifs",
    about: "À propos",
    login: "Connexion",
    cta: "Commencer",
  },

  hero: {
    badge: "Offres en direct · Premier marché yield d'Algérie",
    headlinePre: "Le marché intelligent pour les offres",
    headlineGold: "en temps réel",
    headlinePost: "sur le lifestyle.",
    subCopy:
      "Yeldoo connecte les Algériens à des offres exclusives de dernière minute sur les hôtels, restaurants et expériences — permettant aux meilleures enseignes de maximiser chaque siège, chambre et créneau vacant.",
    cta1: "Nos offres",
    cta2: "Référencer votre établissement",
    socialProof: "Approuvé par 10 000+ utilisateurs actifs",
    ui: {
      liveYieldPrice: "Prix yield en direct",
      slotsLeft: "places restantes",
      fillingFast: "Se remplit vite",
      claimed: "réservé",
      bookNow: "Réserver cette offre maintenant",
      offPeakSavings: "Économie hors-pic",
      vsPeak: "vs tarif plein",
      leftAtPrice: "restant à ce prix",
    },
    venues: [
      {
        type: "Hôtel de Luxe 5★",
        location: "Alger, Algérie",
        category: "Suite Deluxe",
        discount: "42% DE RÉDUCTION",
      },
      {
        type: "Gastronomie • Alger",
        location: "Médina d'Alger",
        category: "Table pour 2",
        discount: "42% DE RÉDUCTION",
      },
      {
        type: "Aventure de Luxe",
        location: "Tamanrasset, Algérie",
        category: "Circuit Privé 2 jours",
        discount: "40% DE RÉDUCTION",
      },
    ],
  },

  core: {
    sectionLabel: "Comment Yeldoo Fonctionne",
    heading: "Une seule plateforme. Chaque catégorie lifestyle.",
    partnerVenuesLabel: "Établissements partenaires",
    avgYieldLabel: "Uplift yield moyen",
    tabs: {
      hotels: {
        label: "Hôtels",
        tagline: "Yield Hôtelier Intelligent",
        description:
          "Convertissez les chambres vides en revenus en connectant les voyageurs de dernière minute à la bonne chambre au bon prix dynamique — automatiquement.",
        features: [
          "Tableau de bord d'occupation en temps réel",
          "Tarification yield propulsée par IA",
          "Analytiques de revenus partenaires",
        ],
        learnMore: "En savoir plus sur les Hôtels",
        mockupTitle: "Atlas Luxury Hotel",
        mockupSubtitle: "Alger · 5 étoiles · Yield actif en direct",
        roomTypes: ["Chambre Deluxe", "Suite Exécutive", "Junior Suite"],
        statLabels: ["Occupation", "Rev / Chambre"],
      },
      restaurants: {
        label: "Restaurants",
        tagline: "Moteur de Yield Restauration",
        description:
          "Transformez les créneaux calmes en expériences gastronomiques complètes grâce à une tarification dynamique par couvert et une gestion fluide des réservations.",
        features: [
          "Tarification yield hors-pic",
          "Protection anti-no-show",
          "Suivi des réservations en temps réel",
        ],
        learnMore: "En savoir plus sur les Restaurants",
        mockupTitle: "La Médina Restaurant",
        mockupSubtitle: "Casbah, Alger · Gastronomie · Actif",
        roomTypes: ["Menu Déjeuner (2 services)", "Salle Privée", "Table du Chef"],
        statLabels: ["Rotation des tables", "Couverts hors-pic"],
      },
      experiences: {
        label: "Expériences",
        tagline: "Créneaux d'Expériences",
        description:
          "Remplissez chaque créneau de circuit, d'atelier et d'aventure grâce à l'optimisation intelligente des tarifs groupes et un moteur de gestion de capacité dynamique.",
        features: [
          "Optimisation automatique des tarifs groupes",
          "Gestion dynamique de capacité",
          "Moteur de découverte d'expériences",
        ],
        learnMore: "En savoir plus sur les Expériences",
        mockupTitle: "Tassili Desert Tours",
        mockupSubtitle: "Illizi, Algérie · Aventure Luxe · Actif",
        roomTypes: ["Trek Sahara 2 jours", "Visite Art Rupestre du Tassili", "Nuit en Camp de Luxe"],
        statLabels: ["Utilisation des créneaux", "Taille moy. du groupe"],
      },
    },
  },

  stats: {
    heading: "Des résultats que vous pouvez porter à la banque",
    sub: "Le moteur yield de Yeldoo génère un impact mesurable pour les établissements et de vraies économies pour les utilisateurs.",
    items: [
      {
        category: "Gestion du Yield",
        label: "Augmentation des revenus hors-pic",
        description:
          "Les établissements partenaires atteignent régulièrement une hausse de 30 à 40% de leurs revenus durant les créneaux habituellement creux.",
      },
      {
        category: "Inventaire",
        label: "Aucun créneau gaspillé",
        description:
          "La tarification yield intelligente en temps réel garantit la monétisation de chaque chambre, siège et expérience disponible.",
      },
      {
        category: "Communauté",
        label: "Utilisateurs actifs",
        description:
          "Une communauté grandissante d'Algériens en quête d'offres premium qui découvrent des établissements de prestige via Yeldoo.",
      },
    ],
  },

  partners: {
    sectionLabel: "Succès de nos partenaires",
    heading: "Nous aidons nos partenaires à gagner encore et encore et encore…",
    moreCaseStudies: "Voir plus d'études de cas",
    readStory: "Lire leur histoire complète",
    items: [
      {
        category: "Hôtel de Luxe",
        location: "Alger, Algérie",
        tagline: "Hôtel El Djazaïr a triplé ses revenus hors-pic grâce aux chambres yield",
        metricLabels: ["Hausse d'occupation", "Nuitées gaspillées"],
      },
      {
        category: "Gastronomie",
        location: "Oran, Algérie",
        tagline: "Les couverts du déjeuner ont doublé en 60 jours sur Yeldoo",
        metricLabels: ["Couverts semaine", "Réduction no-shows"],
      },
      {
        category: "Bien-être & Spa",
        location: "Constantine, Algérie",
        tagline: "Yeldoo a rempli chaque créneau calme du mardi en une semaine",
        metricLabels: ["Utilisation créneaux", "Revenu par créneau"],
      },
      {
        category: "Expérience de Luxe",
        location: "Tamanrasset, Algérie",
        tagline: "Chaque créneau de circuit part maintenant complet — même hors saison",
        metricLabels: ["Utilisation des créneaux", "Hausse des revenus saisonniers"],
      },
      {
        category: "Hôtel Boutique",
        location: "Tlemcen, Algérie",
        tagline: "Taux d'occupation en boutique à 91% contre 54% l'année précédente",
        metricLabels: ["Taux d'occupation", "Amélioration ADR"],
      },
    ],
  },

  footer: {
    cta: {
      heading: "De meilleures marges ?",
      sub: "Dites-nous comment maximiser les revenus de votre établissement et aider vos clients à vous découvrir.",
      btn1: "Référencer votre établissement",
      btn2: "Découvrir les offres",
    },
    columns: [
      { heading: "Accueil", links: ["Accueil", "Visite produit", "Connexion"] },
      { heading: "Produit", links: ["Le système", "Moteur yield", "Capital", "Intégrations"] },
      { heading: "Modules", links: ["Gestion du yield", "Restaurants", "Hôtels", "Expériences"] },
      { heading: "À propos", links: ["À propos de Yeldoo", "Programme partenaires", "Carrières"] },
      { heading: "Nous contacter", links: ["Réserver une démo", "Nous contacter"] },
      { heading: "Ressources", links: ["Études de cas", "Blog", "Calculatrice ROI"] },
      { heading: "Suivez-nous", links: ["Instagram", "LinkedIn", "X / Twitter"] },
      { heading: "Solutions", links: ["Marques indépendantes", "Réseaux franchise", "Grands groupes"] },
    ],
    legal: "© 2026 Yeldoo. Tous droits réservés.",
    closing: "Aucune place vide.\nAucune expérience manquée.",
  },
};

const en: Translations = {
  dir: "ltr",
  lang: "en",
  langLabel: "EN",

  nav: {
    platform: "Platform",
    partners: "Partners",
    pricing: "Pricing",
    about: "About",
    login: "Log in",
    cta: "Get Started",
  },

  hero: {
    badge: "Live deals · Algeria's first yield marketplace",
    headlinePre: "The smart marketplace for",
    headlineGold: "real-time",
    headlinePost: "lifestyle deals.",
    subCopy:
      "Yeldoo connects discerning Algerians to exclusive off-peak deals on hotels, restaurants, and experiences — helping premier venues maximize every empty seat, room, and slot.",
    cta1: "Our Deals",
    cta2: "List your venue",
    socialProof: "Trusted by 10,000+ active users",
    ui: {
      liveYieldPrice: "Live Yield Price",
      slotsLeft: "slots left",
      fillingFast: "Filling fast",
      claimed: "claimed",
      bookNow: "Book this deal now",
      offPeakSavings: "Off-peak savings",
      vsPeak: "vs peak rate",
      leftAtPrice: "left at this price",
    },
    venues: [
      {
        type: "5★ Luxury Hotel",
        location: "Algiers, Algeria",
        category: "Deluxe Suite",
        discount: "42% OFF",
      },
      {
        type: "Fine Dining • Algiers",
        location: "Old Medina, Algiers",
        category: "Table for 2",
        discount: "42% OFF",
      },
      {
        type: "Luxury Adventure",
        location: "Tamanrasset, Algeria",
        category: "Private 2-day Tour",
        discount: "40% OFF",
      },
    ],
  },

  core: {
    sectionLabel: "How Yeldoo Works",
    heading: "One platform. Every lifestyle category.",
    partnerVenuesLabel: "Partner venues",
    avgYieldLabel: "Avg yield uplift",
    tabs: {
      hotels: {
        label: "Hotels",
        tagline: "Smart Room Yield",
        description:
          "Convert empty rooms into revenue by connecting last-minute travelers to the right room at the right dynamic price — automatically.",
        features: [
          "Real-time occupancy dashboard",
          "AI-powered yield pricing",
          "Partner revenue analytics",
        ],
        learnMore: "Learn more about Hotels",
        mockupTitle: "Atlas Luxury Hotel",
        mockupSubtitle: "Algiers · 5-star · Live yield active",
        roomTypes: ["Deluxe Room", "Executive Suite", "Junior Suite"],
        statLabels: ["Occupancy", "Rev / Room"],
      },
      restaurants: {
        label: "Restaurants",
        tagline: "Table Yield Engine",
        description:
          "Transform quiet service windows into fully-booked dining experiences with dynamic per-cover pricing and effortless reservation management.",
        features: [
          "Off-peak table yield pricing",
          "No-show protection system",
          "Real-time reservation tracking",
        ],
        learnMore: "Learn more about Restaurants",
        mockupTitle: "La Médina Restaurant",
        mockupSubtitle: "Casbah, Algiers · Fine Dining · Active",
        roomTypes: ["Lunch Menu (2-course)", "Private Dining Room", "Chef's Table"],
        statLabels: ["Table turnover", "Off-peak covers"],
      },
      experiences: {
        label: "Experiences",
        tagline: "Experience Slots",
        description:
          "Fill every tour, workshop, and adventure slot with smart group-rate optimization and a dynamic capacity management engine.",
        features: [
          "Automated group rate optimization",
          "Dynamic capacity management",
          "Experience discovery engine",
        ],
        learnMore: "Learn more about Experiences",
        mockupTitle: "Tassili Desert Tours",
        mockupSubtitle: "Illizi, Algeria · Luxury Adventure · Active",
        roomTypes: ["2-day Sahara Trek", "Tassili Rock Art Tour", "Luxury Camp Night"],
        statLabels: ["Slot utilization", "Avg group size"],
      },
    },
  },

  stats: {
    heading: "Results you can take to the bank",
    sub: "Yeldoo's yield engine delivers measurable impact for venues and real savings for users.",
    items: [
      {
        category: "Yield Management",
        label: "Increase in off-peak revenue",
        description:
          "Partner venues consistently achieve 30–40% uplift in revenue during previously dead time slots.",
      },
      {
        category: "Inventory",
        label: "Wasted inventory slots",
        description:
          "Smart real-time yield pricing ensures every room, seat, and experience slot is monetized.",
      },
      {
        category: "Community",
        label: "Active local users",
        description:
          "A growing community of Algerian deal-seekers discovering premium venues through Yeldoo.",
      },
    ],
  },

  partners: {
    sectionLabel: "Partner Success Stories",
    heading: "We help our partners win again and again and again…",
    moreCaseStudies: "Read more case studies",
    readStory: "Read their full story",
    items: [
      {
        category: "Luxury Hotel",
        location: "Algiers, Algeria",
        tagline: "Tripled off-peak revenue with smart yield rooms",
        metricLabels: ["Occupancy increase", "Wasted room nights"],
      },
      {
        category: "Fine Dining",
        location: "Oran, Algeria",
        tagline: "Lunch covers doubled in 60 days on Yeldoo",
        metricLabels: ["Weekday covers", "Reduction in no-shows"],
      },
      {
        category: "Wellness & Spa",
        location: "Constantine, Algeria",
        tagline: "Yeldoo filled every quiet Tuesday slot in a week",
        metricLabels: ["Mid-week utilization", "Revenue per slot"],
      },
      {
        category: "Luxury Experience",
        location: "Tamanrasset, Algeria",
        tagline: "Every tour slot now departs full — even off-season",
        metricLabels: ["Slot utilization", "Seasonal revenue lift"],
      },
      {
        category: "Boutique Hotel",
        location: "Tlemcen, Algeria",
        tagline: "Boutique occupancy hit 91% vs 54% year-prior",
        metricLabels: ["Occupancy rate", "ADR improvement"],
      },
    ],
  },

  footer: {
    cta: {
      heading: "Want better margins?",
      sub: "Ask us how we can protect your profits, maximize your venue's revenue, and help you grow.",
      btn1: "List your venue",
      btn2: "Discover deals",
    },
    columns: [
      { heading: "Home", links: ["Home", "Product Tour", "Login"] },
      { heading: "Product", links: ["The System", "Yield Engine", "Capital", "Integrations"] },
      { heading: "Modules", links: ["Yield Management", "Restaurants", "Hotels", "Experiences"] },
      { heading: "About", links: ["About Yeldoo", "Partner Program", "Careers"] },
      { heading: "Get in touch", links: ["Book a demo", "Contact us"] },
      { heading: "Resources", links: ["Success stories", "Blog", "ROI Calculator"] },
      { heading: "Follow us", links: ["Instagram", "LinkedIn", "X / Twitter"] },
      { heading: "Solutions", links: ["Independent brands", "Franchise networks", "Enterprise groups"] },
    ],
    legal: "© 2026 Yeldoo. All Rights Reserved.",
    closing: "No seat empty.\nNo experience missed.",
  },
};

const ar: Translations = {
  dir: "rtl",
  lang: "ar",
  langLabel: "عر",

  nav: {
    platform: "المنصة",
    partners: "الشركاء",
    pricing: "الأسعار",
    about: "من نحن",
    login: "تسجيل الدخول",
    cta: "ابدأ الآن",
  },

  hero: {
    badge: "عروض مباشرة · أول سوق yield في الجزائر",
    headlinePre: "السوق الذكي",
    headlineGold: "الفوري",
    headlinePost: "للعروض الترفيهية.",
    subCopy:
      "يلدو يربط الجزائريين بعروض حصرية في الوقت الفعلي على الفنادق والمطاعم والتجارب، مساعداً المؤسسات الرائدة على تحقيق أقصى إيرادات من كل مقعد وغرفة وفترة شاغرة.",
    cta1: "استكشف العروض",
    cta2: "أضف مؤسستك",
    socialProof: "يثق بنا أكثر من 10,000 مستخدم نشط",
    ui: {
      liveYieldPrice: "السعر الحي",
      slotsLeft: "متبقٍّ",
      fillingFast: "يمتلئ بسرعة",
      claimed: "محجوز",
      bookNow: "احجز هذا العرض الآن",
      offPeakSavings: "توفير خارج الذروة",
      vsPeak: "مقارنة بسعر الذروة",
      leftAtPrice: "متبقية بهذا السعر",
    },
    venues: [
      {
        type: "فندق فاخر 5★",
        location: "الجزائر العاصمة",
        category: "جناح ديلوكس",
        discount: "42% خصم",
      },
      {
        type: "مطعم راقٍ • الجزائر",
        location: "المدينة القديمة، الجزائر",
        category: "طاولة لشخصين",
        discount: "42% خصم",
      },
      {
        type: "مغامرة فاخرة",
        location: "تمنراست، الجزائر",
        category: "جولة خاصة يومان",
        discount: "40% خصم",
      },
    ],
  },

  core: {
    sectionLabel: "كيف يعمل يلدو",
    heading: "منصة واحدة. كل الفئات.",
    partnerVenuesLabel: "مؤسسة شريكة",
    avgYieldLabel: "متوسط ارتفاع العائد",
    tabs: {
      hotels: {
        label: "الفنادق",
        tagline: "إدارة عائد الفنادق الذكي",
        description:
          "حوّل الغرف الشاغرة إلى إيرادات بربط المسافرين في اللحظة الأخيرة بالغرفة المناسبة بالسعر الديناميكي الأمثل — تلقائياً.",
        features: [
          "لوحة تحكم شغل الغرف في الوقت الفعلي",
          "تسعير yield بالذكاء الاصطناعي",
          "تحليلات إيرادات الشركاء",
        ],
        learnMore: "اعرف أكثر عن خدمة الفنادق",
        mockupTitle: "فندق أطلس الفاخر",
        mockupSubtitle: "الجزائر · 5 نجوم · Yield نشط مباشرة",
        roomTypes: ["غرفة ديلوكس", "جناح تنفيذي", "جناح جونيور"],
        statLabels: ["الإشغال", "الإيراد / غرفة"],
      },
      restaurants: {
        label: "المطاعم",
        tagline: "محرك عائد الطاولات",
        description:
          "حوّل الفترات الهادئة إلى تجارب طعام مكتملة الحجز بتسعير ديناميكي لكل غطاء وإدارة احجوزات سلسة.",
        features: [
          "تسعير yield للطاولات خارج الذروة",
          "نظام حماية من عدم الحضور",
          "تتبع الحجوزات في الوقت الفعلي",
        ],
        learnMore: "اعرف أكثر عن خدمة المطاعم",
        mockupTitle: "مطعم المدينة",
        mockupSubtitle: "القصبة، الجزائر · مطبخ راقٍ · نشط",
        roomTypes: ["قائمة الغداء (طبقان)", "غرفة الطعام الخاصة", "طاولة الشيف"],
        statLabels: ["دوران الطاولات", "أغطية خارج الذروة"],
      },
      experiences: {
        label: "التجارب",
        tagline: "فترات التجارب الحية",
        description:
          "املأ كل فترة جولة وورشة ومغامرة بتحسين ذكي لأسعار المجموعات ومحرك إدارة طاقة ديناميكي.",
        features: [
          "تحسين تلقائي لأسعار المجموعات",
          "إدارة ديناميكية للطاقة الاستيعابية",
          "محرك اكتشاف التجارب",
        ],
        learnMore: "اعرف أكثر عن خدمة التجارب",
        mockupTitle: "جولات صحراء تاسيلي",
        mockupSubtitle: "إليزي، الجزائر · مغامرة فاخرة · نشط",
        roomTypes: ["رحلة الصحراء يومان", "جولة صخور تاسيلي", "ليلة في مخيم فاخر"],
        statLabels: ["استخدام الفترات", "متوسط حجم المجموعة"],
      },
    },
  },

  stats: {
    heading: "نتائج ترسّخ ربحيتك",
    sub: "محرك yield يلدو يحقق تأثيراً قابلاً للقياس للمؤسسات ووفورات حقيقية للمستخدمين.",
    items: [
      {
        category: "إدارة العائد",
        label: "زيادة في الإيرادات خارج الذروة",
        description:
          "تحقق المؤسسات الشريكة باستمرار ارتفاعاً بنسبة 30 إلى 40% في إيراداتها خلال الأوقات التي كانت هادئة.",
      },
      {
        category: "المخزون",
        label: "لا هدر في المخزون",
        description:
          "يضمن نظام التسعير الديناميكي تحقيق الدخل من كل غرفة ومقعد وتجربة متاحة دون استثناء.",
      },
      {
        category: "المجتمع",
        label: "مستخدم نشط",
        description:
          "مجتمع متنامٍ من الجزائريين الباحثين عن أميز الصفقات يكتشفون أرقى الأماكن عبر يلدو.",
      },
    ],
  },

  partners: {
    sectionLabel: "قصص نجاح شركائنا",
    heading: "نساعد شركاءنا على الفوز مراراً وتكراراً وتكراراً…",
    moreCaseStudies: "المزيد من دراسات الحالة",
    readStory: "اقرأ قصتهم الكاملة",
    items: [
      {
        category: "فندق فاخر",
        location: "الجزائر العاصمة",
        tagline: "فندق الجزائر ثلّث إيراداته خارج الذروة بفضل غرف yield الذكية",
        metricLabels: ["ارتفاع الإشغال", "ليالٍ مُهدرة"],
      },
      {
        category: "مطعم راقٍ",
        location: "وهران، الجزائر",
        tagline: "تضاعفت أغطية الغداء خلال 60 يوماً على يلدو",
        metricLabels: ["أغطية الأسبوع", "تقليل عدم الحضور"],
      },
      {
        category: "صحة وسبا",
        location: "قسنطينة، الجزائر",
        tagline: "يلدو ملأ كل فترة هادئة يوم الثلاثاء في أسبوع واحد",
        metricLabels: ["استخدام الفترات", "إيراد لكل فترة"],
      },
      {
        category: "تجربة فاخرة",
        location: "تمنراست، الجزائر",
        tagline: "كل فترة جولة تنطلق الآن ممتلئة — حتى خارج الموسم",
        metricLabels: ["استخدام الفترات", "ارتفاع الإيراد الموسمي"],
      },
      {
        category: "فندق بوتيك",
        location: "تلمسان، الجزائر",
        tagline: "نسبة إشغال الفندق البوتيك 91% مقابل 54% العام السابق",
        metricLabels: ["نسبة الإشغال", "تحسن ADR"],
      },
    ],
  },

  footer: {
    cta: {
      heading: "هامش ربح أفضل؟",
      sub: "أخبرنا كيف يمكننا مساعدتك في تعظيم إيرادات مؤسستك ومساعدة عملائك على اكتشافك.",
      btn1: "سجّل مؤسستك",
      btn2: "اكتشف العروض",
    },
    columns: [
      { heading: "الرئيسية", links: ["الرئيسية", "جولة المنتج", "تسجيل الدخول"] },
      { heading: "المنتج", links: ["النظام", "محرك Yield", "التمويل", "التكاملات"] },
      { heading: "الوحدات", links: ["إدارة Yield", "المطاعم", "الفنادق", "التجارب"] },
      { heading: "عن يلدو", links: ["عن يلدو", "برنامج الشركاء", "وظائف"] },
      { heading: "تواصل معنا", links: ["احجز عرضاً توضيحياً", "اتصل بنا"] },
      { heading: "الموارد", links: ["قصص النجاح", "المدونة", "حاسبة العائد"] },
      { heading: "تابعنا", links: ["إنستغرام", "لينكدإن", "X / تويتر"] },
      { heading: "الحلول", links: ["العلامات المستقلة", "شبكات الامتياز", "المجموعات الكبيرة"] },
    ],
    legal: "© 2026 يلدو. جميع الحقوق محفوظة.",
    closing: "لا مقعد فارغ.\nلا تجربة تُهدر.",
  },
};

export const translations: Record<Locale, Translations> = { fr, en, ar };
