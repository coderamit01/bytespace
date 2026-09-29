import CoursesSection from "@/src/components/home/CoursesSection";
import CTASection from "@/src/components/home/CTASection";
import GrowthSection from "@/src/components/home/GrowthSection";
import HeroSection from "@/src/components/home/HeroSection";
import LearningPathSection from "@/src/components/home/LearningPathSection";
import PartnersSection from "@/src/components/home/PartnersSection";
import TestimonialSection from "@/src/components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <LearningPathSection />
      <GrowthSection />
      <CTASection />
      <TestimonialSection />
    </>
  );
}
