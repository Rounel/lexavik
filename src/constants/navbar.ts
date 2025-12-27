import { NAV_DICT } from "@/hooks/dictionnary/navbar";

export interface NavLink {
  label: {
    en: string;
    fr: string;
  };
  link: string;
  sub: Omit<NavLink, 'sub'>[];
}

export type NavProps = NavLink[];

export const navbar_links: NavProps = [
    {
        label: NAV_DICT.Home,
        link: "/",
        sub: []
    },
    {
        label: NAV_DICT.Practices,
        link: "/practices",
        sub: []
    },
    {
        label: NAV_DICT.About,
        link: "/about",
        sub: [
            {
                label: NAV_DICT.WhoWeAre,
                link: "/about"
            },
            {
                label: NAV_DICT.OurHistory,
                link: "/about#history"
            },
            {
                label: NAV_DICT.OurValues,
                link: "/about#values"
            },
            {
                label: NAV_DICT.ProBono,
                link: "/about#probono"
            }
        ]
    },
    {
        label: NAV_DICT.Team,
        link: "/team",
        sub: []
    },
    {
        label: NAV_DICT.Insights,
        link: "/news",
        sub: []
    },
    {
        label: NAV_DICT.Offices,
        link: "/locations",
        sub: []
    },
    {
        label: NAV_DICT.Contact,
        link: "/contact",
        sub: []
    },
]