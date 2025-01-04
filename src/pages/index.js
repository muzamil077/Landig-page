import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "@/Sections/HeroSection";
import AboutSection from "@/Sections/AboutSection";
import ProcessSection from "@/Sections/ProcessSection";
import TestimonialsSection from "@/Sections/Testimonials";
import PricingSection from "@/Sections/PricingSection";
import FeatureSection from "@/Sections/FeatureSection";
import CTASection from "@/Sections/StartNowSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <FeatureSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
