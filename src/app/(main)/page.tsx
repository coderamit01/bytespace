import CoursesSection from "@/src/components/home/CoursesSection";
import GrowthSection from "@/src/components/home/GrowthSection";
import LearningPathSection from "@/src/components/home/LearningPathSection";
import PartnersSection from "@/src/components/home/PartnersSection";

export default function Home() {
  return (
    <>
      <PartnersSection />
      <CoursesSection />
      <LearningPathSection />
      <GrowthSection />
    </>
  );
}
