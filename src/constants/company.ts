export const COMPANY_INFO = {
  name: "LEXAVIK",
  tagline: {
    en: "Your Trusted Legal Partner",
    fr: "Votre Partenaire Juridique de Confiance"
  },
  description: {
    en: "Created in April 2015, LEXAVIK is a law firm organized around a multidisciplinary team of lawyers and experts. With a focus on business law, we operate in Paris and Abidjan, securing your projects and defending you in litigation before national and international courts.",
    fr: "Créé en avril 2015, le Cabinet d'Avocats LEXAVIK est une structure organisée autour d'une équipe pluridisciplinaire d'avocats et d'experts. De vocation droit des affaires, il intervient à Paris et à Abidjan. Il sécurise vos projets et vous défend en cas de contentieux, devant les juridictions nationales et internationales."
  },
  vision: {
    title: {
      en: "Vision",
      fr: "Vision"
    },
    content: [
      {
        en: "Rich in field experience, LEXAVIK masters European business law, OHADA law, and various community regulations (CEMAC, UEMOA, CIMA, OAPI). This synergy of skills allows LEXAVIK and its international partners to offer national and international clients complete legal service and solutions adapted to their concerns.",
        fr: "Riche d'une expérience acquise sur le terrain, le Cabinet d'Avocats LEXAVIK maîtrise outre, le droit européen des affaires, le droit OHADA, et en ce, le droit des sociétés, le droit des contrats, les voies d'exécution ainsi que les différentes réglementations communautaires (CEMAC, UEMOA, CIMA, OAPI). Cette synergie de compétences permet au Cabinet LEXAVIK et ses partenaires internationaux d'offrir à sa clientèle nationale et internationale, un service juridique complet et des solutions adaptées à leurs préoccupations."
      },
      {
        en: "Thanks to its dynamism and expertise in various areas of law as well as in specific sectors such as tax law, telecommunications and digital, banking and finance, environment, mining, energy and infrastructure, LEXAVIK provides you with a comprehensive and complete response.",
        fr: "Grâce à son dynamisme et à son savoir-faire dans les différents domaines du droit ainsi que dans les secteurs spécifiques du droit fiscal, des télécommunications et du numérique, du droit bancaire et financier, de l'environnement, des mines, de l'énergie et des infrastructures, le Cabinet LEXAVIK vous apporte une réponse globale et complète."
      }
    ],
    quotes: [
      {
        en: "Justice is the first virtue of social institutions.",
        fr: "La justice est la première vertu des institutions sociales."
      },
      {
        en: "Trust and rigor are the foundations of our daily work.",
        fr: "La confiance et la rigueur sont les fondations de notre travail quotidien."
      }
    ]
  },
  contact: {
    email: "akwaba@lexavik.com",
    phone: "+33 (0) 1.53.16.05.40",
    address: {
      en: "8, Rue de Chantilly – 75009 PARIS",
      fr: "8, Rue de Chantilly – 75009 PARIS"
    }
  },
  social: {
    facebook: "https://facebook.com/lexavik",
    twitter: "https://twitter.com/lexavik",
    linkedin: "https://linkedin.com/company/lexavik",
    instagram: "https://instagram.com/lexavik"
  },
  stats: [
    {
      value: "450+",
      label: {
        en: "Cases Completed",
        fr: "Affaires Résolues"
      }
    },
    {
      value: "98%",
      label: {
        en: "Success Rate",
        fr: "Taux de Réussite"
      }
    },
    {
      value: "10+",
      label: {
        en: "Years of Experience",
        fr: "Années d'Expérience"
      }
    },
    {
      value: "3",
      label: {
        en: "Expert Lawyers",
        fr: "Avocats Experts"
      }
    }
  ]
} as const;

export const PRACTICE_AREAS = [
  {
    id: "ohada",
    title: {
      en: "OHADA & Community Law",
      fr: "Droit OHADA et Communautaire"
    },
    description: {
      en: "Expert advice in OHADA business law covering corporate law, securities, recovery procedures, and arbitration across 17 member states.",
      fr: "Conseil expert en droit des affaires OHADA couvrant le droit des sociétés, les sûretés, les procédures de recouvrement et l'arbitrage dans 17 États membres."
    },
    icon: "Scale",
    svg: "/justice-scale.svg",
    image: "/dc.jpg"
  },
  {
    id: "cont",
    title: {
      en: "Litigation & Arbitration",
      fr: "Contentieux & Arbitrage"
    },
    description: {
      en: "Comprehensive litigation support before national and international courts, with expertise in arbitration proceedings.",
      fr: "Accompagnement contentieux complet devant les juridictions nationales et internationales, avec expertise en procédures d'arbitrage."
    },
    icon: "Scale",
    svg: "/justice-scale.svg",
    image: "/ddf.jpg"
  },
  {
    id: "bank",
    title: {
      en: "Banking & Finance Law",
      fr: "Droit Bancaire et Financier"
    },
    description: {
      en: "Advice on financing operations, syndicated loans, asset financing, financial restructuring, and UEMOA regulations.",
      fr: "Conseil sur les opérations de financement, crédits syndiqués, financement d'actifs, restructurations financières et réglementations UEMOA."
    },
    icon: "Building2",
    svg: "/bank.svg",
    image: "/bf.jpg"
  },
  {
    id: "soc",
    title: {
      en: "Corporate & Company Law",
      fr: "Corporate & Droit des Sociétés"
    },
    description: {
      en: "Company formation, M&A, restructuring, shareholder agreements, legal audits, and corporate governance.",
      fr: "Constitution de sociétés, fusions-acquisitions, restructurations, pactes d'actionnaires, audits juridiques et gouvernance d'entreprise."
    },
    icon: "Building2",
    svg: "/agreement.svg",
    image: "/dds.jpg"
  },
  {
    id: "fisc",
    title: {
      en: "Tax Law & Tax Litigation",
      fr: "Droit Fiscal et Contentieux Fiscal"
    },
    description: {
      en: "National, community and international taxation, tax optimization, legal and tax monitoring, and tax litigation.",
      fr: "Fiscalité nationale, communautaire et internationale, optimisation fiscale, veille juridique et fiscale, contentieux fiscal."
    },
    icon: "Shield",
    svg: "/secured.svg",
    image: "/dda.jpg"
  },
  {
    id: "conc",
    title: {
      en: "Competition Law",
      fr: "Droit de la Concurrence"
    },
    description: {
      en: "Advice on anti-competitive practices, merger control, compliance, and state aid at national and community levels.",
      fr: "Conseil sur les pratiques anticoncurrentielles, contrôle des concentrations, compliance et aides d'État aux niveaux national et communautaire."
    },
    icon: "Scale",
    svg: "/policies.svg",
    image: "/ddc.jpg"
  },
  {
    id: "pi",
    title: {
      en: "Public Business Law",
      fr: "Droit Public des Affaires"
    },
    description: {
      en: "Public procurement, PPP contracts, concessions, administrative law, and regulated sectors advice.",
      fr: "Marchés publics, contrats de partenariat public-privé, concessions, droit administratif et conseil en secteurs régulés."
    },
    icon: "Building2",
    svg: "/real-estate.svg",
    image: "/smart-law-legal-advice-icons-lawyer-working-tools (1).jpg"
  },
  {
    id: "infra",
    title: {
      en: "Major Projects & Infrastructure",
      fr: "Grands Projets & Infrastructures"
    },
    description: {
      en: "Project finance, mining, oil & gas, energy, infrastructure development, and major project structuring.",
      fr: "Financement de projets, mines, pétrole et gaz, énergie, développement d'infrastructures et structuration de grands projets."
    },
    icon: "Building2",
    svg: "/agreement.svg",
    image: "/bf.jpg"
  },
  {
    id: "env",
    title: {
      en: "Environment & Renewable Energy",
      fr: "Environnement & Énergies Renouvelables"
    },
    description: {
      en: "Environmental law, renewable energy projects (solar, wind, hydro), regulatory compliance, and sustainability.",
      fr: "Droit de l'environnement, projets d'énergies renouvelables (solaire, éolien, hydraulique), conformité réglementaire et développement durable."
    },
    icon: "Shield",
    svg: "/secured.svg",
    image: "/dc.jpg"
  },
  {
    id: "immo",
    title: {
      en: "Real Estate Law",
      fr: "Droit Immobilier"
    },
    description: {
      en: "Property acquisitions, real estate development, commercial leases, construction law, and real estate financing.",
      fr: "Acquisitions immobilières, promotion immobilière, baux commerciaux, droit de la construction et financement immobilier."
    },
    icon: "Building2",
    svg: "/real-estate.svg",
    image: "/smart-law-legal-advice-icons-lawyer-working-tools (1).jpg"
  },
  {
    id: "labor-law",
    title: {
      en: "Labor & Employment Law",
      fr: "Droit Social & du Travail"
    },
    description: {
      en: "Employment contracts, collective relations, restructuring, labor litigation, social security, and labor inspections.",
      fr: "Contrats de travail, relations collectives, restructurations, contentieux du travail, sécurité sociale et inspections du travail."
    },
    icon: "Users",
    svg: "/family-law.svg",
    image: "/ddf.jpg"
  },
  {
    id: "int-pro",
    title: {
      en: "Intellectual Property",
      fr: "Propriété Intellectuelle"
    },
    description: {
      en: "Trademarks, patents, copyrights, domain names, technology licensing, and IP litigation.",
      fr: "Marques, brevets, droits d'auteur, noms de domaine, licences technologiques et contentieux de la propriété intellectuelle."
    },
    icon: "Shield",
    svg: "/secured.svg",
    image: "/dda.jpg"
  },
  {
    id: "ext",
    title: {
      en: "Immigration & Nationality Law",
      fr: "Droit des Étrangers et de la Nationalité"
    },
    description: {
      en: "Visa assistance, residence permits, regularization, representation before administrative and judicial authorities.",
      fr: "Aide à l'obtention de visas et titres de séjour, régularisation, représentation devant les autorités administratives et judiciaires."
    },
    icon: "Plane",
    svg: "/immigration-law.svg",
    image: "/di.jpg"
  },
  {
    id: "criminal-law",
    title: {
      en: "Criminal Law",
      fr: "Droit Pénal"
    },
    description: {
      en: "Criminal defense, business criminal law, victim representation, preliminary investigations, and criminal proceedings.",
      fr: "Défense pénale, droit pénal des affaires, représentation des victimes, enquêtes préliminaires et procédures pénales."
    },
    icon: "Scale",
    svg: "/justice-scale.svg",
    image: "/dc.jpg"
  },
  {
    id: "civ",
    title: {
      en: "Civil Law",
      fr: "Droit Civil"
    },
    description: {
      en: "Family law, divorce, inheritance, adoption, civil liability, contracts, debt recovery, and consumer law.",
      fr: "Droit de la famille, divorce, successions, adoption, responsabilité civile, contrats, recouvrement de créances et droit de la consommation."
    },
    icon: "Users",
    svg: "/family-law.svg",
    image: "/ddf.jpg"
  },
  {
    id: "project-finance",
    title: {
      en: "Project Finance",
      fr: "Financement de Projets"
    },
    description: {
      en: "Structuring complex project financing across Africa, combining commercial debt and development financing in various sectors.",
      fr: "Structuration de financements de projets complexes en Afrique, combinant dette commerciale et financement du développement dans divers secteurs."
    },
    icon: "Building2",
    svg: "/bank.svg",
    image: "/bf.jpg"
  }
] as const;

export const EXPERTISE_POLES = [
  {
    id: 'corporate-fiscalite',
    icon: 'Briefcase',
    color: "bg-secondary",
    svg: "/justice-scale.svg",
    img: "/bg-cont.jpg",
    text_color: "text-white",
    title: {
      fr: 'Corporate & Fiscalité',
      en: 'Corporate & Taxation'
    },
    description: {
      fr: 'Accompagnement stratégique des entreprises, de la structuration juridique à l’optimisation fiscale et sociale.',
      en: 'Strategic business support, from legal structuring to tax and social optimization.'
    },
    domains: [
      { 
        id: 'soc', 
        fr: 'Corporate & Droit des Sociétés', 
        en: 'Corporate & Company Law' 
      },
      { 
        id: 'fisc', 
        fr: 'Droit Fiscal et Contentieux Fiscal', 
        en: 'Tax Law & Tax Litigation' 
      },
      { 
        id: 'soc-tra', 
        fr: 'Droit Social & du Travail', 
        en: 'Social & Labour Law' 
      },
      { 
        id: 'conc', 
        fr: 'Droit de la Concurrence', 
        en: 'Competition Law' 
      },
      { 
        id: 'pi', 
        fr: 'Propriété Intellectuelle', 
        en: 'Intellectual Property' 
      },
      { 
        id: 'ohada', 
        fr: 'Droit OHADA et Communautaire', 
        en: 'OHADA & Community Law' 
      }
    ]
  },
  {
    id: 'banque-projets',
    icon: 'Landmark',
    color: "bg-secondary-500",
    svg: "/justice-scale.svg",
    img: "/bg-bank.jpg",
    text_color: "text-white",
    title: {
      fr: 'Banque, Projets & Infrastructures',
      en: 'Banking, Projects & Infrastructure'
    },
    description: {
      fr: 'Expertise dédiée aux financements complexes, aux partenariats public-privé et au développement industriel.',
      en: 'Expertise dedicated to complex financing, public-private partnerships, and industrial development.'
    },
    domains: [
      { 
        id: 'bank', 
        fr: 'Droit Bancaire et Financier', 
        en: 'Banking & Financial Law' 
      },
      { 
        id: 'fin-proj', 
        fr: 'Financement de Projets', 
        en: 'Project Finance' 
      },
      { 
        id: 'infra', 
        fr: 'Grands Projets & Infrastructures', 
        en: 'Major Projects & Infrastructure' 
      },
      { 
        id: 'pub', 
        fr: 'Droit Public des Affaires', 
        en: 'Public Business Law' 
      },
      { 
        id: 'env', 
        fr: 'Environnement & Énergies Renouvelables', 
        en: 'Environment & Renewable Energy' 
      }
    ]
  },
  {
    id: 'contentieux-arbitrage',
    icon: 'Gavel',
    color: "bg-secondary",
    svg: "/justice-scale.svg",
    img: "/bg-immo.jpg",
    text_color: "text-white",
    title: {
      fr: 'Contentieux & Arbitrage',
      en: 'Litigation & Arbitration'
    },
    description: {
      fr: 'Défense de vos intérêts et résolution des litiges devant les juridictions nationales et internationales.',
      en: 'Defense of your interests and dispute resolution before national and international courts.'
    },
    domains: [
      { 
        id: 'cont', 
        fr: 'Contentieux & Arbitrage', 
        en: 'Litigation & Arbitration' 
      },
    ]
  },
  {
    id: 'civil-immobilier',
    icon: 'Home',
    color: "bg-secondary-500",
    svg: "/justice-scale.svg",
    img: "/bg-civ.jpg",
    text_color: "text-white",
    title: {
      fr: 'Droit Civil & Immobilier',
      en: 'Civil & Real Estate Law'
    },
    description: {
      fr: 'Conseil et assistance pour la gestion de votre patrimoine immobilier, vos actifs et vos droits civils.',
      en: 'Advice and assistance for managing your real estate assets, personal assets, and civil rights.'
    },
    domains: [
      { 
        id: 'immo', 
        fr: 'Droit Immobilier', 
        en: 'Real Estate Law' 
      },
      { 
        id: 'civ', 
        fr: 'Droit Civil', 
        en: 'Civil Law' 
      },
      { 
        id: 'ext', 
        fr: 'Droit des Étrangers et de la Nationalité', 
        en: 'Immigration & Nationality Law' 
      }
    ]
  }
] as const;

export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Simplice KASSI",
    role: {
      en: "Lawyer - Doctor of Law",
      fr: "Avocat - Docteur en droit"
    },
    education: {
      en: "Doctor of Law",
      fr: "Docteur en droit"
    },
    specialization: {
      en: "Corporate Law, Tax Law, Banking & Finance, OHADA Law, Real Estate, Immigration, Family Law, Labor Law, Criminal Law, Digital Law, Energy & Mining, Environment",
      fr: "Droit des sociétés, Droit fiscal et contentieux fiscal, Droit bancaire et financier, Droit OHADA, Droit de l'immobilier, Droit des étrangers et de la nationalité, Droit des personnes et de la famille, Droit du travail, Droit pénal, Droit du numérique, Energies & Mines, Environnement"
    },
    image: "/team (5).jpeg",
    bio: {
      en: "Expert in business law with extensive experience in corporate law, tax litigation, banking & finance, OHADA law, and international projects.",
      fr: "Expert en droit des affaires avec une vaste expérience en droit des sociétés, contentieux fiscal, droit bancaire et financier, droit OHADA et projets internationaux."
    },
    email: "simplice.kassi@lexavik.com",
    phone: "+33 (0) 7.52.71.42.43",
    phone_civ: "+225 07 52 71 42 43",
    status: "associate"
  },
  {
    id: "3",
    name: "Nanga SILUE",
    role: {
      en: "Lawyer - Agrégé des facultés de droit",
      fr: "Avocat - Agrégé des facultés de droit"
    },
    education: {
      en: "Agrégé des facultés de droit",
      fr: "Agrégé des facultés de droit"
    },
    specialization: {
      en: "Business Law, Academic Law, Legal Research",
      fr: "Droit des affaires, Droit académique, Recherche juridique"
    },
    image: "/team (3).jpeg",
    bio: {
      en: "Distinguished academic and practicing lawyer with expertise in business law and legal research.",
      fr: "Universitaire et praticien distingué avec une expertise en droit des affaires et recherche juridique."
    },
    email: "nanga.silue@lexavik.com",
    phone: "+33 (0) 6.43.36.95.88",
    status: "associate"
  },
  {
    id: "2",
    name: "Anthony OBENG-KOFI",
    role: {
      en: "Lawyer - Doctor of Law",
      fr: "Avocat - Docteur en droit"
    },
    education: {
      en: "Doctor of Law",
      fr: "Docteur en droit"
    },
    specialization: {
      en: "Business Law, OHADA Law, Project Finance, International Law",
      fr: "Droit des affaires, Droit OHADA, Financement de projets, Droit international"
    },
    image: "/team (4).jpeg",
    bio: {
      en: "Specialized in business law and project finance with particular expertise in OHADA law and international transactions.",
      fr: "Spécialisé en droit des affaires et financement de projets avec une expertise particulière en droit OHADA et transactions internationales."
    },
    email: "anthony.obeng@lexavik.com",
    phone: "+33 (0) 6.24.05.03.22",
    phone_civ: "+225 06 24 05 03 22",
    status: "associate"
  },
  {
    id: "4",
    name: "Priscillia LAGBO",
    role: {
      fr: "Juriste",
      en: "Legal Counsel"
    },
    status: "partner",
    image: "/Photo - Priscillia.jpeg", // À remplacer par le chemin de la photo si disponible
    bio: {
      en: "Legal professional with expertise in corporate law and legal research.",
      fr: "Professionnelle du droit avec une expertise en droit des sociétés et en recherche juridique."
    },
    education: {
      en: "Master's Degree in Business Law",
      fr: "Master en Droit des Affaires"
    },
    specialization: {
      en: "Corporate Law, Legal Research",
      fr: "Droit des sociétés, Recherche juridique"
    },
    email: "priscillia.lagbo@lexavik.com",
    phone: "+33 (0) 1.53.16.05.40"
  },
  {
    id: "5",
    name: "Marius Behegbin TANOH",
    role: {
      en: "Tax and Social Security Law Specialist",
      fr: "Spécialiste en Fiscalité et Droits des Prélèvements Sociaux"
    },
    status: "partner",
    image: "/Photo de TBM.png", // À remplacer par la photo si disponible
    bio: {
      en: "Tax and Social Security Law Specialist with experience in legal consulting firms and law firms, including GOGOUA TAX and LEGAL. Currently collaborating with LEXAVIK [FR] and OBENG-KOFI Fian [CI].",
      fr: "Spécialiste en Fiscalité et Droits des Prélèvements Sociaux avec une expérience en cabinets de conseil et d'avocats, dont le Cabinet GOGOUA TAX and LEGAL. Actuellement collaborateur d'avocats près le cabinet LEXAVIK [FR] et le Cabinet OBENG-KOFI Fian [CI]."
    },
    education: {
      en: "Master's Degree in Tax and Social Security Law (2020-2021)\nLicense in Private Law (2015-2016)\nBaccalaureate A2 (2013)",
      fr: "Master en Fiscalité et Droits des Prélèvements Sociaux (2020-2021)\nLicence en Droit Privé (2015-2016)\nBaccalauréat série A2 (2013)"
    },
    specialization: {
      en: "Tax Law, Social Security Law, Judicial Career, Private Law",
      fr: "Droit fiscal, Droits des prélèvements sociaux, Carrière judiciaire, Droit privé"
    },
    email: "marius.tanoh@lexavik.com", // À confirmer
    phone: "+33 (0) 1.53.16.05.40", // À confirmer
    phone_civ: "+225 00 00 00 00" // À compléter
  },
  {
    id: "6",
    name: "Dr Konan Saint Serge KOUAMÉ",
    role: {
      en: "Legal Counsel - Doctor of Law",
      fr: "Juriste collaborateur - Docteur en droit privé"
    },
    status: "partner",
    image: "/Photo - Saint Serge.png", // À remplacer par la photo si disponible
    bio: {
      en: "Legal Counsel at LEXAVIK Law Firm. Doctor of Private Law, author of a Thesis on the liability of parent companies for their subsidiaries under OHADA law. Member of the Laboratory of Studies on Law and Development in Côte d'Ivoire (LEDD-CI). Specializes in business law and is a Lecturer-Researcher at Félix Houphouët-Boigny University (Abidjan).",
      fr: "Juriste collaborateur au sein de LEXAVIK Cabinet d'Avocats. Docteur en droit privé, auteur d'une Thèse sur la responsabilité des sociétés mères du fait de leurs filiales en droit OHADA. Membre du Laboratoire d'Études sur le Droit et le Développement en Côte d'Ivoire (LEDD-CI). Spécialisé en droit des affaires, il est Enseignant-chercheur à l'Université Felix Houphouët-Boigny (Abidjan)."
    },
    education: {
      en: "Doctorate in Private Law",
      fr: "Doctorat en Droit privé"
    },
    specialization: {
      en: "Business Law, Tax Law, Corporate Law, Labor Law, Personal Status Law, OHADA Law",
      fr: "Droit des affaires, Droit fiscal, Droit des sociétés, Droit du travail, Droit des personnes, Droit OHADA"
    },
    email: "saintserge.kouame@lexavik.com", // À confirmer
    phone: "+33 (0) 1.53.16.05.40", // À confirmer
    phone_civ: "+225 00 00 00 00" // À compléter
  }
] as const;

export const NEWS_ARTICLES = [
  {
    id: "biomag-sale",
    slug: "lexavik-advises-tazi-family-biomag-sale",
    category: {
      en: "DEALS",
      fr: "TRANSACTIONS"
    },
    date: "2025-02-14",
    title: {
      en: "Lexavik Advises the Tazi family on Sale of Biomag to Comaner SA",
      fr: "Lexavik Conseille la famille Tazi sur la Vente de Biomag à Comaner SA"
    },
    excerpt: {
      en: "Lexavik is pleased to announce its role as legal advisor to the Tazi family in its sale of Biomag, a recognized expert in the production and marketing of flavors and blends for the food industry, to Comaner S.A., a specialist in ingredients and food additives in Morocco.",
      fr: "Lexavik est heureux d'annoncer son rôle de conseiller juridique de la famille Tazi dans la vente de Biomag, expert reconnu dans la production et la commercialisation d'arômes et mélanges pour l'industrie alimentaire, à Comaner S.A., spécialiste des ingrédients et additifs alimentaires au Maroc."
    },
    image: "/successful-negotiation (4).jpg"
  },
  {
    id: "adiwale-investment",
    slug: "lexavik-advises-adiwale-partners-west-africa-investment",
    category: {
      en: "DEALS",
      fr: "TRANSACTIONS"
    },
    date: "2025-02-10",
    title: {
      en: "Lexavik Advises Adiwale Partners on West Africa Agribusiness Investment",
      fr: "Lexavik Conseille Adiwale Partners sur un Investissement Agro-alimentaire en Afrique de l'Ouest"
    },
    excerpt: {
      en: "Lexavik recently advised Adiwale Partners (Adiwale), a major private equity fund focused on supporting SMEs in West Africa, on its strategic investment in Jus Délice, a leading producer of organic pineapple juice based in Togo.",
      fr: "Lexavik a récemment conseillé Adiwale Partners (Adiwale), un fonds de capital-investissement majeur axé sur le soutien aux PME en Afrique de l'Ouest, sur son investissement stratégique dans Jus Délice, un producteur leader de jus d'ananas biologique basé au Togo."
    },
    image: "/smart-law-legal-advice-icons-lawyer-working-tools (1).jpg"
  },
  {
    id: "groupe-rg-acquisition",
    slug: "lexavik-advises-groupe-rg-morocco-acquisition",
    category: {
      en: "DEALS",
      fr: "TRANSACTIONS"
    },
    date: "2025-02-06",
    title: {
      en: "Lexavik Advises Groupe RG on Key Acquisition in Morocco",
      fr: "Lexavik Conseille Groupe RG sur une Acquisition Clé au Maroc"
    },
    excerpt: {
      en: "Lexavik advised Groupe RG, a European leader in Personal Protective Equipment (PPE) distribution, on its acquisition of a majority stake in Groupe Novindus, a Moroccan distribution platform specializing in industrial supplies and maintenance services.",
      fr: "Lexavik a conseillé Groupe RG, leader européen de la distribution d'Équipements de Protection Individuelle (EPI), sur son acquisition d'une participation majoritaire dans Groupe Novindus, une plateforme de distribution marocaine spécialisée dans les fournitures industrielles et les services de maintenance."
    },
    image: "/smart-law-legal-advice-icons-savvy-lawyer-working-tools-lawyers-office (3).jpg"
  }
] as const;

export const LEGAL_PROCESS = [
  {
    step: 1,
    title: {
      en: "Initial Consultation",
      fr: "Consultation Initiale"
    },
    description: {
      en: "We begin with a thorough consultation to understand your legal needs and objectives.",
      fr: "Nous commençons par une consultation approfondie pour comprendre vos besoins juridiques et objectifs."
    }
  },
  {
    step: 2,
    title: {
      en: "Case Analysis",
      fr: "Analyse du Dossier"
    },
    description: {
      en: "Our team conducts comprehensive research and analysis of your case to develop the best strategy.",
      fr: "Notre équipe effectue une recherche et une analyse complètes de votre dossier pour développer la meilleure stratégie."
    }
  },
  {
    step: 3,
    title: {
      en: "Strategy Development",
      fr: "Développement de Stratégie"
    },
    description: {
      en: "We create a tailored legal strategy designed to achieve your desired outcomes efficiently.",
      fr: "Nous créons une stratégie juridique sur mesure conçue pour atteindre vos résultats souhaités efficacement."
    }
  },
  {
    step: 4,
    title: {
      en: "Execution & Support",
      fr: "Exécution & Accompagnement"
    },
    description: {
      en: "We implement the strategy while keeping you informed every step of the way until resolution.",
      fr: "Nous mettons en œuvre la stratégie tout en vous tenant informé à chaque étape jusqu'à la résolution."
    }
  }
] as const;

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Ahmed Bennani",
    role: {
      en: "CEO, Tech Solutions Morocco",
      fr: "PDG, Tech Solutions Maroc"
    },
    content: {
      en: "LEXAVIK provided exceptional legal support during our company's expansion. Their expertise in corporate law and attention to detail made the entire process seamless.",
      fr: "LEXAVIK a fourni un soutien juridique exceptionnel lors de l'expansion de notre entreprise. Leur expertise en droit des sociétés et leur attention aux détails ont rendu l'ensemble du processus fluide."
    },
    rating: 5,
    image: "/testimonials/client-1.jpg"
  },
  {
    id: "2",
    name: "Fatima El Amrani",
    role: {
      en: "Entrepreneur",
      fr: "Entrepreneuse"
    },
    content: {
      en: "Professional, responsive, and results-driven. The LEXAVIK team helped me navigate complex legal challenges with confidence and clarity.",
      fr: "Professionnel, réactif et axé sur les résultats. L'équipe de LEXAVIK m'a aidé à naviguer dans des défis juridiques complexes avec confiance et clarté."
    },
    rating: 5,
    image: "/testimonials/client-2.jpg"
  }
] as const;

export const AWARDS = [
  {
    year: "2024",
    title: {
      en: "Best Law Firm - Morocco",
      fr: "Meilleur Cabinet d'Avocats - Maroc"
    },
    organization: {
      en: "Legal Excellence Awards",
      fr: "Prix d'Excellence Juridique"
    }
  },
  {
    year: "2023",
    title: {
      en: "Corporate Law Firm of the Year",
      fr: "Cabinet de Droit des Sociétés de l'Année"
    },
    organization: {
      en: "African Legal Awards",
      fr: "Prix Juridiques Africains"
    }
  },
  {
    year: "2022",
    title: {
      en: "Excellence in Client Service",
      fr: "Excellence en Service Client"
    },
    organization: {
      en: "International Bar Association",
      fr: "Association Internationale du Barreau"
    }
  }
] as const;
