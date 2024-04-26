import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/HowItWorks";
import Calendar from "@/components/ContestCalender";
import FAQSection from "@/components/sections/FaqSection";
import Footer from "@/components/Footer";
import FeatureContestBanner from "@/components/FeatureContestBanner";

export default function Home() {
  return (
    <main className="flex bg-white overflow-x-hidden  w-screen text-brown font-sans min-h-screen flex-col ">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />

      <Calendar />
      <FAQSection />
      <div className="relative w-full">
        {/* <div className="w-full flex justify-center bg-black bg-opacity-0 -mb-[40vh] md:-mb-[35vh] z-20 px-[5%] md:px-0">
          <FeatureContestBanner />
        </div> */}

        <div className="w-full ">
          <Footer />
        </div>
      </div>
    </main>
  );
}
