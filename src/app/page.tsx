import ServiceSection from "@/components/Home/ServiceSection";
import HeroSection from "@/components/Home/HeroSection";
import WhatWeDoSection from "@/components/Home/WhatWeDoSection";
import ContactSection from "@/components/Home/ContactSection";
import AtlasCarousel from "@/components/Home/AtlasCarouselSection";
import AchievementSection from "@/components/Home/Achievement";
import AboutUsSection from "@/components/Home/AboutUsSection";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroSection />
      </div>
      <div className="container">
        <WhatWeDoSection />
      </div>
      <ServiceSection />
      <ContactSection />
      <AtlasCarousel />
      <AchievementSection />
      <AboutUsSection />
    </>
  );
}
