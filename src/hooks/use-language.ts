import { create } from 'zustand'

type Language = 'en' | 'fr';

type Store = {
    language: Language
    changeLanguage: (lang: Language) => void
}

export const useStore = create<Store>((set) => ({
  language: "fr",
  changeLanguage: (newLang) => set({ language: newLang }),
}))