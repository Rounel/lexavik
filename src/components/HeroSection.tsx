"use client"

import { Button } from "./ui/button";

export default function HeroSection() {
    return (
      <div className="font-(family-name:--font-dm-sans) w-screen min-h-screen max-h-screen bg-[url('../../public//hero-bg-1.jpg')] bg-cover flex flex-col justify-end relative">
        <div className="bg-black/20 bg-opacity-55 size-full absolute top-0 left-0"></div>

        {/* <video
            className="size-full" autoPlay loop
        >
            <source src="/hero-video.mp4" type="video/mp4"/>

        </video> */}

        
        <div className="relative w-full max-w-360 px-6 py-60 lg:px-14 mx-auto flex items-center">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-medium text-secondary-700 lg:text-6xl font-[family-name:var(--font-dm-serif-text)]">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-700 via-primary-500 to-primary-700">LEXAVIK</span> -  */}
            Une expertise au service de vos projets juridiques
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white font-[family-name:var(--font-dm-sans)]">
              Cabinet d&apos;avocats créé en avril 2015, spécialisé en droit des affaires. Nous maîtrisons le droit OHADA, le droit européen des affaires et les réglementations communautaires (CEMAC, UEMOA, CIMA, OAPI). De Paris à Abidjan, nous sécurisons vos projets et vous défendons devant les juridictions nationales et internationales.
            </p>
            <Button className="rounded-md px-8 py-6 bg-primary text-white hover:bg-primary-800">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      
      </div>
    );
  }
  