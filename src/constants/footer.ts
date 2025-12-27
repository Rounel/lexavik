import { FOOT_DICT } from "@/hooks/dictionnary/footer";

interface Translation {
    en: string; // Texte en anglais
    fr: string; // Texte en français
}

interface FooterLink {
    label: Translation; // Correspond à une clé dans FOOT_DICT
    link: string;  // Lien de la page
    sub: FooterLink[]; // Tableau de sous-liens (peut être vide)
}

export const footer_links: FooterLink[] = [
    {
        label: FOOT_DICT.Home,
        link: "/",
        sub: []
    },
    {
        label: FOOT_DICT.Vision,
        link: "vision",
        sub: []
    },
    {
        label: FOOT_DICT.Team,
        link: "team",
        sub: []
    },
    {
        label: FOOT_DICT.Expertise,
        link: "expertise",
        sub: []
    },
    {
        label: FOOT_DICT.Locations,
        link: "locations",
        sub: []
    },
    {
        label: FOOT_DICT.News,
        link: "news",
        sub: []
    },
    // {
    //     label: FOOT_DICT.Partners,
    //     link: "#",
    //     sub: []
    // },
    {
        label: FOOT_DICT.Contact,
        link: "contact",
        sub: []
    },
    {
        label: FOOT_DICT.TermsConditions,
        link: "#",
        sub: []
    },
    {
        label: FOOT_DICT.PrivacyPolicy,
        link: "#",
        sub: []
    },
]