import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BrightSmile Dental Care - NHS & Private Dentistry in Surrey & London",
  description:
    "Three modern dental clinics in Isleworth, Epsom, and Tadworth. Proudly NHS-friendly. Same-week appointments, fear-free care, and transparent pricing. New patients welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(plusJakarta.variable, manrope.variable, "font-sans", geist.variable)}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-on-surface bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
