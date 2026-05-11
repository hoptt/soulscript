import Hero from "@/components/sections/hero";
import Journey from "@/components/sections/journey";
import MyInfo from "@/components/sections/my-info";
import PortfolioCarousel from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="mb-28">
      <Hero />
      <Journey />
      <MyInfo />
      <Skills />
      <PortfolioCarousel />
    </div>
  );
}
