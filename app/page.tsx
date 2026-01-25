import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Introduction from "@/components/Introduction";
import WhyMultiCuisine from "@/components/WhyMultiCuisine";
import Authenticity from "@/components/Authenticity";
import Occasion from "@/components/Occasion";
import FinalCTA from "@/components/FinalCTA";

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
