interface TeamDictProps {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const TEAM_DICT: TeamDictProps = {
  // Hero Section
  OurTeam: {
    en: "Our Team",
    fr: "Notre Équipe"
  },
  ExceptionalProfessionals: {
    en: "Exceptional Legal Professionals",
    fr: "Professionnels Juridiques Exceptionnels"
  },
  TeamDescription1: {
    en: "Discover the talent and dedication behind our success.",
    fr: "Découvrez le talent et le dévouement qui font notre succès."
  },
  TeamDescription2: {
    en: "Meet the experts committed to protecting your interests and achieving your goals.",
    fr: "Rencontrez les experts engagés à protéger vos intérêts et à atteindre vos objectifs."
  },

  // Search & Filters
  SearchLawyer: {
    en: "Search for a lawyer",
    fr: "Rechercher un avocat"
  },
  LawyerName: {
    en: "Lawyer Name",
    fr: "Nom de l'avocat"
  },
  SearchByName: {
    en: "Search by name...",
    fr: "Rechercher par nom..."
  },
  TypeOfLaw: {
    en: "Type of Law",
    fr: "Type de droit"
  },
  TypeOfLawPlaceholder: {
    en: "E.g.: Tax Law, Banking Law...",
    fr: "Ex: Droit fiscal, Droit bancaire..."
  },
  ResultsFound: {
    en: "result(s) found",
    fr: "résultat(s) trouvé(s)"
  },

  // Categories
  Collaborators: {
    en: "Collaborators",
    fr: "Collaborateurs"
  },
  Associates: {
    en: "Associates",
    fr: "Associés"
  },
  Associate: {
    en: "Lawyer - Associate",
    fr: "Avocat - Associé"
  },

  // No Results
  NoLawyerFound: {
    en: "No lawyer found matching these criteria. Try adjusting your search.",
    fr: "Aucun avocat trouvé avec ces critères. Essayez d'ajuster votre recherche."
  }
}
