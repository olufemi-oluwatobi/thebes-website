import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/HowItWorks";
import Calendar from "@/components/ContestCalender";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <Calendar />
    </main>
  );
}
