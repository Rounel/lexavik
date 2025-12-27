

// interface Translation {
//     en: string; // Texte en anglais
//     fr: string; // Texte en français
// }

interface AdminLink {
    // label: Translation; // Correspond à une clé dans FOOT_DICT
    label: string; 
    link: string;  // Lien de la page
    sub: AdminLink[]; // Tableau de sous-liens (peut être vide)
}

export const admin_links: AdminLink[] = [
    {
        label: "Accueil",
        link: "/admin/home",
        sub: []
    },
    {
        label: "Actu",
        link: "/admin/actu",
        sub: []
    },
    {
        label: "FAQ",
        link: "/admin/faq",
        sub: []
    },
    {
        label: "Divers",
        link: "/admin/divers",
        sub: []
    },
    {
        label: "Join Us",
        link: "/admin/join-us",
        sub: []
    },
    {
        label: "Missions",
        link: "/admin/missions",
        sub: []
    },
    {
        label: "Partners",
        link: "/admin/partners",
        sub: []
    },
    {
        label: "Programs",
        link: "/admin/programs",
        sub: []
    },
    {
        label: "Stats",
        link: "/admin/stats",
        sub: []
    },
    {
        label: "Testimonies",
        link: "/admin/testimonies",
        sub: []
    },
    {
        label: "Vision",
        link: "/admin/vision",
        sub: []
    },
    {
        label: "Teams",
        link: "/admin/teams",
        sub: []
    },
]