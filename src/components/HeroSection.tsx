"use client"

import { Button } from "./ui/button";
import { useStore } from "@/hooks/use-language";
import { HOME_DICT, COMMON_DICT } from "@/hooks/dictionnary";

export default function HeroSection() {
    const { language } = useStore();

    return (
      <div className="font-(family-name:--font-dm-sans) w-screen min-h-screen max-h-screen bg-[url('../../public//neoherobg.jpg')] bg-cover flex flex-col justify-end relative">
        <div className="bg-black/50 bg-opacity-55 size-full absolute top-0 left-0"></div>

        {/* <video
            className="size-full" autoPlay loop
        >
            <source src="/hero-video.mp4" type="video/mp4"/>

        </video> */}


        <div className="relative w-full max-w-360 px-6 py-60 lg:px-14 mx-auto flex items-center">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl max-w-2xl font-medium text-white lg:text-6xl font-[family-name:var(--font-dm-serif-text)]">
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-700 via-primary-500 to-primary-700">LEXAVIK</span> -  */}
            {HOME_DICT.HeroTitle[language]}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white font-[family-name:var(--font-dm-sans)]">
              {HOME_DICT.HeroDescription[language]}
            </p>
            <Button className="rounded-md px-8 py-6 bg-primary text-white hover:bg-primary-800">
              {COMMON_DICT.ScheduleAppointment[language]}
            </Button>
          </div>
        </div>

      </div>
    );
  }
  