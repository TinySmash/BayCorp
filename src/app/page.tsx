import About from "@/components/home/about/About";
import Faq from "@/components/home/faq/faq";
import Hero from "@/components/home/hero/Hero";
import Pricing from "@/components/home/pricing/Pricing";
import SlideShowSection from "@/components/home/slideSection/Section";
import Trending from "@/components/home/trending/Trending";

export default function Home() {
  return (
    <main className="overflow-hidden scrollbar-hidden">
      <Hero />
      <SlideShowSection />
      <About />
      <Trending />
      <Pricing />
      <Faq />
    </main>
  );
}
