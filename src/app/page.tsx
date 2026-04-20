import Hero from "@/components/sections/hero";
import MyInfo from "@/components/sections/my-info";
import PortfolioCarousel from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="mb-28">
      <Hero />
      <MyInfo />
      <Skills />
      <PortfolioCarousel />
    </div>
  );
}
