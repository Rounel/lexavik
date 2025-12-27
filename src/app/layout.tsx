import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Lexavik",
  description: "Ton cabinet préféré",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerifText.variable} antialiased bg-secondary-950 relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
