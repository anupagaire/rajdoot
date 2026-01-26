import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Introduction from "@/components/Introduction";
import WhyMultiCuisine from "@/components/WhyMultiCuisine";
import Authenticity from "@/components/Authenticity";
import Occasion from "@/components/Occasion";
import FinalCTA from "@/components/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Authentic Indian, Western & Nepalese Cuisine | Rajdoot",
  description:
    "Experience authentic Indian, Western and Nepalese cuisine with rich flavors, traditional recipes, and a warm dining experience. Book your table today.",
  keywords: [
    "Indian, western and nepalese cuisine",
    "indian cuisine",
    "nepalese cuisine",
    "western cuisine",
    "multi-cuisine experience",
  ],
  openGraph: {
    title: "Authentic Indian, Western & Nepalese Cuisine | Rajdoot",
    description:
      "Enjoy authentic Indian, Western and Nepalese cuisine prepared with traditional recipes and rich flavors.",
    type: "website",
  },
};



export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedSection />
      <WhyMultiCuisine />
      <Authenticity />
      <Testimonials />
      <Occasion />
      <FinalCTA />
    </>
  );
}
