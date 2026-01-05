"use client"

import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { navbar_links } from "@/constants/navbar"
import { useStore } from "@/hooks/use-language"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"


export const Navbar = () => {
    const {language} = useStore()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        !pathname.includes('admin') && (
            <div className={`fixed top-0 w-full z-20 px-6 p-2 flex flex-row justify-between items-center font-[family-name:var(--font-dm-sans) transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white shadow-md h-20'
                    : 'bg-transparent'
                }
            `}>
                <div className="max-w-360 w-full mx-auto flex flex-row justify-between items-center">
                    {
                        !isScrolled 
                        ? (
                            <Link href="/">
                                <Image src={"/logotextblanc.png"} alt="Logo LEXAVIK" width={500} height={500} className="w-36 h-auto" />
                            </Link>
                        )
                        : (
                            <Link href="/">
                                <Image src={"/logonotext.png"} alt="Logo LEXAVIK" width={500} height={500} className="w-26 h-auto" />
                            </Link>
                        )
                    }

                    <NavigationMenu className="hidden xl:block">
                        <NavigationMenuList className={`flex flex-row gap-8 font-[family-name:var(--font-dm-sans)] ${
                            isScrolled 
                                ? ''
                                : 'text-white'
                            }`}>
                            {
                                navbar_links.map(link => link.sub.length == 0 ? (
                                    <NavigationMenuItem key={link.label[language]} className="">
                                        <NavigationMenuLink href={link.link} className=" hover:text-primary-600 py-2 text-md">
                                            {link.label[language]}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ) : (
                                    <NavigationMenuItem key={link.label[language]} className="bg-transparent hover:bg-transparent active:bg-transparent">
                                        <NavigationMenuTrigger className=" hover:text-white py-2 text-md bg-transparent font-normal hover:bg-transparent active:bg-transparent">{link.label[language]}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
                                                {
                                                    link.sub.map(sub => (
                                                        <NavigationMenuLink key={sub.label[language]} className="text-white hover:text-primary-600 py-2 text-md border-b-[1px] border-neutral-500 last:border-b-0 pl-4" href={sub.link}>
                                                            {sub.label[language]}
                                                        </NavigationMenuLink>
                                                    ))
                                                }
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button className="hidden xl:block">
                        <Link href="/contact">Prendre rendez-vous</Link>
                    </Button>

                    <div className="flex flex-row gap-4 sm:gap-10 relative xl:hidden">
                        <Button className="hidden lg:block">
                            <Link href="/contact">Prendre rendez-vous</Link>
                        </Button>
        
                        <Sheet>
                            <SheetTrigger className="p-1 border-[1px] rounded-full text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all transition-300"><Menu width={35} height={35} className="" /></SheetTrigger>
                            <SheetContent side={"left"} className="w-[400px] sm:w-[540px] overflow-y-auto xl:bg-tertiary xl:px-0">
                                <SheetHeader>
                                    <SheetTitle className="xl:px-8">
                                        <Image src={"/rifen-logo.png"} alt="Logo du RIFEN" width={150} height={60} />
                                    </SheetTitle>
                                    <SheetDescription>
                                        <div className="flex flex-col text-left mt-8 sm:hidden">
                                            {
                                                navbar_links.map(link => link.sub.length == 0 ? (
                                                    <Link className="text-tertiary hover:text-secondary py-2 text-lg border-b-[1px] last:border-b-0" key={link.label[language]} href={link.link}>
                                                        {link.label[language]}
                                                    </Link>
                                                ) : (
                                                    <Accordion type="single" collapsible key={link.label[language]} className="">
                                                        <AccordionItem value="item-1">
                                                        <AccordionTrigger className="text-tertiary hover:text-secondary py-2 text-lg border-b-[1px] hover:no-underline border-0">{link.label[language]}</AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col text-left">
                                                                {
                                                                    link.sub.map(sub => (
                                                                        <Link className="text-tertiary hover:text-secondary py-2 text-lg border-b-[1px] last:border-b-0 last:pb-0 pl-4" key={sub.label[language]} href={sub.link}>
                                                                            {sub.label[language]}
                                                                        </Link>
                                                                    ))
                                                                }
                                                            </div>
                                                        </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                ))
                                            }
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
        
                    </div>
                </div>
            </div>
        )
    )
}